var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {details, location} = this.props
    return (
      <div>
      <h3>It is {details.temp} in {location}</h3>
      <h3> High: {details.high} Low: {details.low}</h3>
      </div>
    )
  }
});

module.exports = WeatherMessage;
