<?php

$channelId = 'UCLRh-4xvr6BsKbFsOHHNbtg';
$key = 'AIzaSyAjlZiNAFoCAAWyhvpuINQi5BtcELi9qZ4';

$results = file_get_contents('https://www.googleapis.com/youtube/v3/search?key=' . $key . '&channelId=' . $channelId . '&part=snippet,id&order=date&maxResults=20');

echo $results;

?>