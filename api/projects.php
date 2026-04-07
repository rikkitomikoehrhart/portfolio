<?php

require_once 'config.php';

try {
    $stmt = $pdo->query("
        SELECT
            p.id,
            p.slug,
            p.title,
            p.type,
            p.short_description,
            p.featured,

            -- Thumbnail image
            (
                SELECT url
                FROM project_images
                WHERE project_id = p.id AND is_thumbnail = TRUE
                LIMIT 1
            ) AS thumbnail_url,

            -- Tech stack as an array
            (
                SELECT GROUP_CONCAT(t.name ORDER BY t.name SEPARATOR ', ')
                FROM project_tech pt
                JOIN tech_stack t ON t.id = pt.tech_id
                WHERE pt.project_id = p.id
            ) AS tech_stack,

            -- Tags as an array
            (
                SELECT GROUP_CONCAT(tg.name ORDER BY tg.name SEPARATOR ', ')
                FROM project_tags ptg
                JOIN tags tg ON tg.id = ptg.tag_id
                WHERE ptg.project_id = p.id
            ) AS tags

        FROM projects p
        ORDER BY p.featured DESC, p.created_at DESC
    ");

    $projects = $stmt->fetchAll();

    foreach ($projects as &$project) {
        $project['tech_stack'] = $project['tech_stack']
            ? explode(', ', $project['tech_stack'])
            : [];
        $project['tags'] = $project['tags']
            ? explode(', ', $project['tags'])
            : [];
    }

    echo json_encode($projects);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch projects']);
}