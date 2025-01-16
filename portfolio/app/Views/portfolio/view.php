<!--
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 01.16.2025

FILE: portfolio/app/Views/portfolio/view.php
DESCRIPTION: This is the Portfolio Project page view that 
             shows the list of my portfolio projects for 
             my portfolio website that is housed at 
             rikkitomikoehrhart.com and is also on Github
-->

<div class="portfolio">

    <div class="titleSection">
        <h2><?= esc($project['name']) ?></h2>
    </div>
    
    <div class="main">
        <!-- TOP ON MOBILE LEFT ON DESKTOP -->
        <div class="top">
            <img src="/projects/<?= esc($project['id']) ?>/screenshot1.png">
        </div>

        <!-- BOTTOM ON MOBILE RIGHT ON DESKTOP -->
        <div class="bottom">
            
            <!-- DESCRIPTION -->
            <div class="description">
                <h3>Project Description:</h3>
                <p><?= esc($project['long_description']) ?></p>
            </div>


            <!-- FEATURES -->
            <div class="langToolsFeats">
                <div class="set">
                    <?php if (!empty($project['languages'])): ?>    
                        <?php foreach ($project['languages'] as $language): ?>
                            <p class="language <?= esc($language) ?>">
                                <?= esc($language) ?>
                            </p>
                        <?php endforeach ?>
                    <?php endif ?>
                    <?php if (!empty($project['tools'])): ?>    
                        <?php foreach ($project['tools'] as $tool): ?>
                            <p class="tool <?= esc($tool) ?>">
                                <?= esc($tool) ?>
                            </p>
                        <?php endforeach ?>
                    <?php endif ?>
                    <?php if (!empty($project['features'])): ?>    
                        <?php foreach ($project['features'] as $feature): ?>
                            <p class="feature <?= esc($feature) ?>">
                                <?= esc($feature) ?>
                            </p>
                        <?php endforeach ?>
                    <?php endif ?>
                </div>
            </div>

        </div>
    </div>

    <div class="etc">

        <!-- LINKS BOX -->
        <div class="linksBox">
            <div class="liveLink">
                <?php if (!empty($project['links'][0]) && $project['links'][0] !== 'none'): ?> 
                    <p>LIVE LINK: </p>
                    <a href="<?= esc($project['links'][0]) ?>" target="_blank">
                        <?= esc($project['links'][0]) ?>
                    </a>
                <?php endif; ?>
            </div>
            <div class="gitLink">
                <?php if (!empty($project['links'][1]) && $project['links'][1] !== 'none'): ?> 
                    <p>GITHUB LINK: </p>
                    <a href="<?= esc($project['links'][1]) ?>" target="_blank">
                        <?= esc($project['links'][1]) ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>

        <!-- REFLECTIONS -->
        <div class="reflections">
            <?php if (!empty($project['reflections'])): ?>
                <h3>Reflections:</h3>
                <ul>
                    <?php foreach ($project['reflections'] as $reflection): ?>
                        <li>
                            <?= esc($reflection) ?>
                        </li>
                    <?php endforeach ?>
                </ul>
            <?php endif ?>
        </div>



 
    </div>
    

</div>
