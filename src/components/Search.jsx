var Search = (props) => {

  var timer = (e) => {

    console.log("hit the timer function");
    //_.debounce(function(e){

      console.log("debounce" + e.target.value);
      props.textSearch(e.target.value);
      //props.textSearch($(e.target).val());


    //}, 500);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={timer.bind(this)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  )
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
