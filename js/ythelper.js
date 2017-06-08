var idArray = [];
var player;

var ajaxRequest = function(resource, callback){
    $.ajax({
        type: 'POST',
        headers: {
            "cache-control": "no-cache"
        },
        url: resource,
        async: false,
        cache: false,
        success: function(jsonString){
          callback(jsonString);
        }
    });
}

loadVids = function(){

    $('#videolist').empty();
    self = this;
    for (var i = 0; i < 5; i++){
        $('#videolist').append('<div id="player' + i +'"></div>');
    }
    // 2. This code loads the IFrame Player API code asynchronously.
    this.tag = document.createElement('script');

    this.tag.src = "https://www.youtube.com/iframe_api";
    this.firstScriptTag = document.getElementsByTagName('script')[0];
    this.firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    this.onYouTubeIframeAPIReady = function() {
        getChannelInfo();            
    }
}
getChannelInfo = function(){
    ajaxRequest('getyoutubedata.php', getPlaylist);
}

getPlaylist = function(response){
    console.log(JSON.parse(response));
    response = JSON.parse(response);
    response.items.forEach(function(item){
        idArray.push(item.id.videoId);
    })
    console.log(idArray);
    for (var i=0; i<5; i++){
        player = new YT.Player('player' + i, {
            videoId: idArray[i]
        });
    }
    $('iframe').css('height', (parseInt($('iframe').css('width')) * 9 / 16) + 'px' );
    $(window).resize(function(){
        $('iframe').css('height', (parseInt($('iframe').css('width')) * 9 / 16) + 'px' );
    });
}

loadVids();

