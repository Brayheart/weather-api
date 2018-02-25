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
    <div>
        {props.city && props.country && <div>Location: {props.city}, {props.country} </div>}
        {props.temperature && <div> Temperature: {props.temperature} </div>}
        {props.humidity && <div> Humidity: {props.humidity} </div>}
        {props.description && <div> Weather Conditions: {props.description} </div>}
        {props.error && <div> {props.error} </div>}
    </div>
);


export default Weather;