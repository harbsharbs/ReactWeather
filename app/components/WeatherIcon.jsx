var React = require ('react');
var openWeatherMap = require ('openWeatherMap');

var WeatherIcon = React.createClass({

  render: function () {
    var {details, location} = this.props
      switch (details.icon) {
          case '01d':
            return (
              <h3>Clear Sky</h3>
            );
          case '01n':
            return (
              <h3>Clear Sky (Night)</h3>
            );
          case '02d':
            return (
              <h3>Few Clouds</h3>
            );
            case '02n':
              return (
                <h3>Few Clouds (Night)</h3>
              );
            case '03d':
              return (
                <h3>Scattered Clouds</h3>
              );
              case '03n':
                return (
                  <h3>Scattered Clouds (Night)</h3>
                );
              case '04d':
                return (
                  <h3>Broken Clouds</h3>
                );
                case '04n':
                  return (
                    <h3>Broken Clouds (Night)</h3>
                  );
                case '09d':
                  return (
                    <h3>Rain Showers</h3>
                  );
                  case '09n':
                    return (
                      <h3>Rain Showers (Night)</h3>
                    );
                  case '10d':
                    return (
                      <h3>Rain</h3>
                    );
                    case '10n':
                      return (
                        <h3>Rain (Night)</h3>
                      );
                      case '11d':
                        return (
                          <h3>Thunderstorm</h3>
                        );
                        case '11n':
                          return (
                            <h3>Thunderstorm (Night)</h3>
                          );
                          case '13d':
                            return (
                              <h3>Snow</h3>
                            );
                            case '13n':
                              return (
                                <h3>Snow (Night)</h3>
                              );
                              case '50d':
                                return (
                                  <h3>Mist</h3>
                                );
                                case '50n':
                                  return (
                                    <h3>Mist (Night)</h3>
                                  );
          // Add more icons here
        }

  },


});

module.exports = WeatherIcon
