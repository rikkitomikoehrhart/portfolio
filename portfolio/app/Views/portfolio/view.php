<!--
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 12.19.2024

FILE: portfolio/app/Views/portfolio/view.php
DESCRIPTION: This is the Portfolio Project page view that 
             shows the list of my portfolio projects for 
             my portfolio website that is housed at 
             rikkitomikoehrhart.com and is also on Github
-->

<h2><?= esc($portfolio['name']) ?></h2>
<p><?= esc($portfolio['long_description']) ?></p>