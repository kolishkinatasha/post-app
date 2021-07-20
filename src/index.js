import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 24
//         }
//         // this.nextYear = this.nextYear.bind(this);
//         this.nextYear = () => {
//             this.setState(state => ({
//                 years: ++state.years
//             }))
//         }
//     }

//     // nextYear() {
//     //     console.log(1)
//     //     this.setState(state => ({
//     //         years: ++state.years
//     //     }))
//     // }
//     render() {
//         const {name, surname, link} = this.props;
//         const {years} = this.state;
//         return (
//             <React.Fragment>
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name}, surname - {surname}, {years}</h1>
//                 <a href={link}>My profile</a>
//             </React.Fragment> 
//         )
//     }
// }

// const  All = () => {
//     return (
//         <>
//         <WhoAmI name = '1' surname='Smith' link='facebook.com'/>
//         <WhoAmI name = '2' surname='Smith' link='facebook.com'/>
//         <WhoAmI name = '3' surname='Smith' link='facebook.com'/>
//         </>
//     )
// }

ReactDOM.render(<App/>, document.getElementById('root'));
