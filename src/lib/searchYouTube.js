var searchYouTube = (options, callback) => {
  // TODO
//options -> query, max, key
//only embeddable videos
//callback is invoked on the array that we receive from the GET

 $.ajax({
      // This is the url you should use to communicate with the youTube API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      data: { maxResults: options["max"],
            q: options["query"],
            key: options["key"],
            part: "snippet",
            type: "video",
            videoEmbeddable: "true"
        },
      success: function (data) {
        console.log(data);

        callback(data.items);

        console.log("Successfully completed GET request");

      },
      error : function(){
        console.log("failed to load data from Youtube");
      }
});
};
window.searchYouTube = searchYouTube;

