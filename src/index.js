// TODO: Render the `App` component to the DOM


// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<VideoList videos={window.exampleVideoData}/>, document.getElementById("app"));
ReactDOM.render(<VideoPlayer video={window.exampleVideoData[0]}/>, document.getElementById("app"));