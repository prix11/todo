import React, { Component } from 'react'
import './styles.css';
import { Button } from '@material-ui/core';


export default class Comp2 extends Component {
constructor(props){
    super(props);
    this.state = {class: "off", label: "Press"};
    this.press = this.press.bind(this);
    console.log("constructor");
}

    componentDidMount() {
    console.log("componentDidMount");
}
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true; 
}
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){

    }

    press(){
        var className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    render(){
        console.log("render())");
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
    }
}
