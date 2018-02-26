import React from 'react';

// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 { this.props.city && this.props.country && <div>Location: { this.props.city }, { this.props.country } </div> }
//                 { this.props.temperature && <div> Temperature: { this.props.temperature } </div> }
//                 { this.props.humidity && <div> Humidity: { this.props.humidity } </div> }
//                 { this.props.description && <div> Weather Conditions: { this.props.description } </div> }
//                 { this.props.error && <div> { this.props.error } </div> }
//             </div>
//         );
//     }
// }

const Weather = (props) => (
    <div className="weather__info">
        {
            props.city && props.country && <div className="weather__key"> Location: 
                <span className="weather__value"> {props.city}, {props.country} </span>
            </div>
        }
        {
            props.temperature && <div className="weather__key"> Temperature:
                <span className="weather__value"> {props.temperature} </span>
            </div>
        }
        {
            props.humidity && <div className="weather__key"> Humidity: 
                <span className="weather__value"> {props.humidity} </span>
            </div>
        }
        {
            props.description && <div className="weather__key"> Weather Conditions:
                <span className="weather__value"> {props.description} </span>
            </div>
        }
        {
            props.error && <div> {props.error} </div>
        }
    </div>
);


export default Weather;