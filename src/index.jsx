import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <p>Hello, React</p>
    );
} 

ReactDOM.render(<App></App>, document.getElementById('app'));