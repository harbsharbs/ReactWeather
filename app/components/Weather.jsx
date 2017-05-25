var React = require ('react');
var WeatherForm = require ('WeatherForm');
var WeatherMessage = require ('WeatherMessage');
var openWeatherMap = require ('openWeatherMap');
var WeatherIcon = require ('WeatherIcon');


var Weather = React.createClass({
  getInitialState: function (){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true})

    openWeatherMap.getWeatherDetails(location).then(function(details){
       that.setState({
        location: location,
        details: details,
        isLoading: false,
      })
    },

     function (errorMessage) {
      that.setState({
        isLoading: false,
        details: '',
        location: '',
      });
      alert(errorMessage);
    });
  },

  render: function(){
    var{isLoading, details, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <img src = "https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" width={82} height={86}/>
      } else if (details && location){
        return <WeatherMessage location={location} details={details}/>;
      }
;}
function renderIcon() {
  if (isLoading) {
    return ''
  } else if (details && location){
    return <WeatherIcon location={location} details={details}/>;
  }
;}
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderIcon()}
      </div>

    );
  }
});

module.exports = Weather;
