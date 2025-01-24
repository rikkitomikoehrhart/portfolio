<!--
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 01.20.2025

FILE: portfolio/app/Views/portfolio/view.php
DESCRIPTION: This is the Portfolio Project page view that 
             shows the list of my portfolio projects for 
             my portfolio website that is housed at 
             rikkitomikoehrhart.com and is also on Github
-->

<div class="portfolio">

    <div class="titleSection">
        <h2 class="projTitle"><?= esc($project['name']) ?></h2>
    </div>
    
    <div class="view">
        <!-- TOP ON MOBILE LEFT ON DESKTOP -->
        <div class="topView">
            <div class="imgGallery">
                <div class="galleryControls">
                    <button id="leftBtn"> < </button>
                    <?php if (!empty($project['images'])) : ?>
                        <img class="focusImg" id="focusImg" src="/projects/<?= esc($project['id']) ?>/<?= esc($project['images'][0]) ?>">
                    <?php endif; ?>
                    <button id="rightBtn"> > </button>
                </div>
                
                <div class="galleryThumbnails">
                    <?php if (!empty($project['images'])) : ?>
                        <?php foreach ($project['images'] as $image): ?>
                            <img class="thumbnailImg" src="/projects/<?= esc($project['id']) ?>/<?= esc($image) ?>">
                        <?php endforeach; ?>
                    <?php endif ?>
                </div>
            </div>
            
        </div>

        <!-- BOTTOM ON MOBILE RIGHT ON DESKTOP -->
        <div class="bottomView">
            
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



<!-- LINK TO JAVASCRIPT -->
<script src="/assets/js/gallery.js"></script>