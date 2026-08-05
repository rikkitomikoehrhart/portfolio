<?php

require_once 'config.php';

$slug = isset($_GET['slug']) ? trim($_GET['slug']) : null;

if (!$slug) {
    http_response_code(400);
    echo json_encode(['error' => 'No slug provided']);
    exit;
}

try {
    // Main Project
    $stmt = $pdo->prepare("
        SELECT
            p.id,
            p.slug,
            p.title,
            p.type,
            p.short_description,
            p.long_description,
            p.reflections,
            p.featured,
            p.created_at
        FROM projects p
        WHERE p.slug = ?
        LIMIT 1
    ");

    $stmt->execute([$slug]);
    $project = $stmt->fetch();

    if (!$project) {
        http_response_code(400);
        echo json_encode(['error' => 'Project not found']);
        exit;
    }
    ;

    $project['reflections'] = json_decode($project['reflections'], true) ?? [];

    // Images
    $stmt = $pdo->prepare("
        SELECT url, alt_text, sort_order, is_thumbnail
        FROM project_images
        WHERE project_id = ?
        ORDER BY sort_order ASC
    ");

    $stmt->execute([$project['id']]);
    $project['images'] = $stmt->fetchAll();

    // Links
    $stmt = $pdo->prepare("
        SELECT link_type, url, label
        FROM project_links
        WHERE project_id = ?
    ");

    $stmt->execute([$project['id']]);
    $project['links'] = $stmt->fetchAll();

    // Tech stack
    $stmt = $pdo->prepare("
        SELECT t.name, t.icon_url
        FROM project_tech pt
        JOIN tech_stack t ON t.id = pt.tech_id
        WHERE pt.project_id = ?
        ORDER BY t.name ASC
    ");

    $stmt->execute([$project['id']]);
    $project['tech_stack'] = $stmt->fetchAll();

    // Tags
    $stmt = $pdo->prepare("
        SELECT tg.name, tg.slug
        FROM project_tags ptg
        JOIN tags tg ON tg.id = ptg.tag_id
        WHERE ptg.project_id = ?
        ORDER BY tg.name ASC
    ");

    $stmt->execute([$project['id']]);
    $project['tags'] = $stmt->fetchAll();

    echo json_encode($project, JSON_UNESCAPED_SLASHES);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch project']);
}