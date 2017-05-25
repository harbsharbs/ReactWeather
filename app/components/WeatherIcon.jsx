var React = require ('react');
var openWeatherMap = require ('openWeatherMap');

var WeatherIcon = React.createClass({

  render: function () {
    var {details, location} = this.props
      switch (details.icon) {
          case '01d':
            return (
              <h3>Test</h3>
            );
          case '01n':
            return (
              <h3>DATA IS LIVE</h3>
            );
          case '02d':
            return (
              <h3>Should be here</h3>
            );
            case '02n':
              return (
                <h3>DATA IS LIVE</h3>
              );
            case '03d':
              return (
                <h3>Should be here</h3>
              );
              case '03n':
                return (
                  <h3>DATA IS LIVE</h3>
                );
              case '04d':
                return (
                  <h3>Should be here</h3>
                );
                case '04n':
                  return (
                    <h3>DATA IS LIVE</h3>
                  );
                case '09d':
                  return (
                    <h3>Should be here</h3>
                  );
                  case '09n':
                    return (
                      <h3>DATA IS LIVE</h3>
                    );
                  case '10d':
                    return (
                      <h3>Should be here</h3>
                    );
                    case '10n':
                      return (
                        <h3>Should be here</h3>
                      );
                      case '11d':
                        return (
                          <h3>Should be here</h3>
                        );
                        case '11n':
                          return (
                            <h3>Should be here</h3>
                          );
                          case '13d':
                            return (
                              <h3>Should be here</h3>
                            );
                            case '13n':
                              return (
                                <h3>Should be here</h3>
                              );
                              case '50d':
                                return (
                                  <h3>Should be here</h3>
                                );
                                case '50n':
                                  return (
                                    <h3>Should be here</h3>
                                  );
          // Add more icons here
        }

  },


});

module.exports = WeatherIcon
