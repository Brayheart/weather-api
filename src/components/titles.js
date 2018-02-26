import React from 'react';

// class Titles extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Weather Finder</h1>
//                 <p>Find out temp, conditions and more!</p>
//             </div>
//         );
//     }
// }

const Titles = () => (
    <div>
        <h1 className="title-contain__title">Weather Finder</h1>
        <h3 className="title-contain__subtitle">Find out temp, conditions and more!</h3>
    </div>
)

export default Titles;