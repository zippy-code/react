import React, {Component} from "react"; // React 라이브러리에서 React 를 가져오고, Component 클래스도 가져온다
import "./App.css"

export default class App extends Component { // App 클래스에서 React 에서 제공하는 Component 클래스를 사용하도록 확장.
  btnSytle = {
    color: "#fff",
    border:  "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  state = {
    todoData : [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      }
    ]
  }

  // 동적으로 변화해야 하는 부분은 함수로 만든다.
  getStyle = () => {
    return (
      {
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        TextDecoration: "none"
      }
    )
  } 
 
  handleClick = (id) => {
      let newTodoData = this.state.todoData.filter(data => data.id != id);
      this.setState({todoData : newTodoData});
  }

  render() { // component 클래스 안에 있는 render 함수. 함수형 프로그래밍에서는 render() 함수 사용하지 않아도 된다.
    return (// jsx 문법은 class="" 가 아니라 classname="" 이다.
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => {
            return ( // key 속성이 있어야 warning이 발생하지 않는다.
              <div style={this.getStyle()} key={data.id}> 
                <input type="checkbox" defaultChecked={false} />
                {data.title}
                <button style={this.btnSytle} onClick = {() => this.handleClick(data.id)}>x</button>
              </div>  
            )
            })}
        </div>
      </div>
    )
  }
}