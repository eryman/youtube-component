# YouTube Component

## Running the Youtube Component

This application is designed to add YouTube videos to a webpage by accessing the YouTube API.

## Directions:

* Copy/Paste the following files/folders into your page's home directory: css, js, vendor, getyoutubedata.php

* In the head of the HTML, insert the following: 

> <link href="css/video.css" rel="stylesheet">

* In the body of the HTML, insert the following line wherever you'd like your videos to show up:

> <div id="videolist"></div>

* At the bottom of the body of the HTML, insert the following lines:


> <script src="js/jQuery.js"></script>

> <script src="js/ythelper.js"></script>

* Lastly, all you need to do is edit a few lines in getyoutubedata.php with your own YouTube ID and Google API Key

### getyoutubedata.php:

* line 3 => ID of Youtube Channel (in settings -> Advanced Settings)

* line 4 => API Key from Google API Console




