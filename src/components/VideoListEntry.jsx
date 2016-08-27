var VideoListEntry = (props) => {

    var clicked = function(arg){
      props.itemClick(arg);
   // this.render();
      console.log("Clicked function arg: " + arg);
    };

    return (

      <div className="video-list-entry" src={props.video}>
        <div className="media-left media-middle">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={clicked.bind(this, props.video)} src={props.video.snippet.title}>{props.video.snippet.title}</div>
          <div className="video-list-entry-detail" src={props.video.snippet.description}>{props.video.snippet.description}</div>
        </div>
      </div>
    );
}


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;