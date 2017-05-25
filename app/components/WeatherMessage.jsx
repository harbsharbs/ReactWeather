var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {details, location} = this.props
    return (
      <h3>It is {details.temp} in {location}</h3>
    )
  }
});

module.exports = WeatherMessage;
