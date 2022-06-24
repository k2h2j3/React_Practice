import React, { Component } from 'react';

class TOC extends Component {
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>); //자동으로 elements 생성, 각 element는 key값을 가져야하므로 li 뒤에 key를 붙임//
            i = i + 1;
        }
      return (
          <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

export default TOC;