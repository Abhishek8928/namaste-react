import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating the parent element with child elements
const parent = React.createElement('div', { className: 'parent' },"hello wor"
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);