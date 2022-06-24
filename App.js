import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

 
class App extends Component {
  constructor(props){ //props를 초기화//
    super(props); //constructor 내부에서 props를 작성//
    this.state = { //state의 값을 초기화// 
      subject:{title:'WEB', sub:'World wide web!'}, //subject의 값을 state화//
      contents:[ //여러개의 state를 다룰때는 배열사용//
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title= {this.state.subject.title} //state 값을 준다//
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC> 
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    );   
  };
}

export default App;
