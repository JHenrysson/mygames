import React from "react";

//creating a react component - you do it either as class or as a function

/*writing it as class
class App extends React.Component{
    render(){
        return <div>
            Hello world!
        </div>
    }
}
*/
// function components
function App(){
    return <div>Hello World!</div>
}
export default App; // the export statement so other files can see that component
