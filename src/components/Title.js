import React from 'react';
import ReactDOM from 'react-dom';

//arrow function
const Title = props => <h1>{props.title}</h1>

//ES5
/*function Title(props) {
    return (
        <h1>{props.title}</h1>
    )
}*/
export default Title;