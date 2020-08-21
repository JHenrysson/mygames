import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Snake from "./snake";
import Minesweeper from "./minesweeper";
import Memory from "./memory";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
// capital letter -there looks has a big letter
function App(){
    return (
        <Router>
        <Navigation></Navigation>
        <Switch>
            <Route exact path= "/" component={Home}></Route>
            <Route path="/memory" component={Memory}></Route>
            <Route path = "/snake" component={Snake}></Route>
            <Route path = "/minesweeper" component={Minesweeper}></Route>
        </Switch>
        </Router>
);
}

// the export statement so other files can see that component

export default App;


