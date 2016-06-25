class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      currentVideo: {
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: ''
        }
      },
      search: searchYouTube
    }

  }

  componentDidMount(){

    console.log("component mount key " + window.YOUTUBE_API_KEY);
    var options = {
      max: 5,
      key: window.YOUTUBE_API_KEY,
      query:'react'
    }

    this.state.search(options, function(videos){
      this.setState({
        currentVideo: videos[0],
        videos: videos
      });
    }.bind(this))

    // console.log("starting to execute componentDidMount");
    // this.state.search({max:5, key:window.YOUTUBE_API_KEY, query:'react'}, function(data){
    //     this.setState({
    //       currentVideo:data[0],
    //       videos: data
    //     })
    //   }
    // );
  }


  onListItemClick(arg){
    this.setState({
      currentVideo: arg
    });
   // this.render();
    console.log(arg);
  }

  render(){
    return(

       <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} listClick={this.onListItemClick.bind(this)}/>
        </div>
      </div>
    );
  }


}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
