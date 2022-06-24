import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

 
class App extends Component {
  constructor(props){ //props를 초기화//
    super(props); //constructor 내부에서 props를 작성//
    this.state = { //state의 값을 초기화//
      mode: 'read',
      selected_content_id :2,  
      subject:{title:'WEB', sub:'World wide web!'}, //subject의 값을 state화
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[ //여러개의 state를 다룰때는 배열사용//
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      var i = 0;
      while(i <this.state.contents.length){ 
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) { 
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject 
          title= {this.state.subject.title} //state 값을 준다//
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)} 
          >
        </Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id : Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC> 
        <Content title={_title} desc={_desc}></Content>
      </div>
    );   
  };
}

export default App;
