/*
*
*
<div class="parent">
<div class="child">
<h1>Namaste React </h1>
<h2> Namaste React 2 </h1>
</div>
</div>

*/




const parent = React.createElement('div', { className: 'parent' }, React.createElement('div', { className: 'child' }, [
    React.createElement('h1', {}, 'Namaste React 1'),
    React.createElement('h2', {}, 'Namaste React 2')
]));



const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(parent);