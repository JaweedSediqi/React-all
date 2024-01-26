import React from "react";
import { Component } from "react";
 export class Hi extends Component {
     state={
         num:0,
     }
    render(){
        return (
            <>
            <button onClick={this.king} className="btn btn-info mx-5">Add</button>
            <span className="mx-5 bg-info  ">{this.state.num}</span>
            <button onClick={this.kking} className="btn btn-info mx-1">Dec</button>
            <button onClick={this.klking} className="btn btn-info mx-5">Dec</button>
            </>  )
    }
    king=()=>{
        this.setState({
            num:this.state.num+=1
        })
    }
    kking=()=>{
        this.setState({
            num:this.state.num-=1,
        })
    }
    klking=()=>{
        let x=this.state.num;
        this.setState({
            num:(this.state.x===0)?(x='Ahamd'):(x='Ali')
        })
    }
}