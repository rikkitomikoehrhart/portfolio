<!--
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 12.19.2024

FILE: portfolio/app/Views/portfolio/index.php
DESCRIPTION: This is the Portfolio page view that shows the 
             list of my portfolio projects for my portfolio 
             website that is housed at rikkitomikoehrhart.com 
             and is also on Github
-->
<div class="main">

    <!-- TITLE SECTION -->
    <div class="titleSection">
        <h2>Portfolio</h2>
    </div>


    <!-- PORTFOLIO GALLERY -->
    <div class="portfolioGallery">
        <?php if (!empty($projects)): ?>
            <?php foreach ($projects as $project): ?>

                <!-- PROJECT CARD -->
                <div class="projectCard">

                    <!-- PROJECT TITLE -->
                    <div class="cardTitle">
                        <h3><?= esc($project['name'])?></h3>
                    </div>

                    <!-- PROJECT IMAGE -->
                    <div class="cardImg">
                        <img src="/projects/<?= esc($project['id'])?>/screenshot1.png">
                    </div>

                    <!-- PROJECT SHORT DESCRIPTION -->
                    <div class="cardDescription">
                        <p>
                            <?= esc($project['short_description'])?>
                        </p>
                    </div>

                    <!-- PROJECT LANGUAGES, TOOLS and FEATURES -->
                    <div class="cardLangToolsFeat">
                        <p>
                            <? esc($project['languages'])?>
                        </p>
                        <p>
                            <? esc($project['tools'])?>
                        </p>
                        <p>
                            <? esc($project['features'])?>
                        </p>
                    </div>

            <?php endforeach ?>
        <?php else: ?>
            <h3>No Projects</h3>
            <p>Unable to find any Projects for you.</p>
        <?php endif ?>

    </div>




</div>
