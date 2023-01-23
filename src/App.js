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
    ],

    value: "",
  };

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

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSumit = (event) => {
    // form 안에 input 을 전송할 때 페이지가 리로드 되는 것을 막음
    event.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기 ...은 전개 연산자.
    // 전개 연산자는 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용한다.
    this.setState({todoData: [...this.state.todoData, newTodo]});
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
            <form style={{display: 'flex'}} onSubmit={this.handleSumit}>
              <input 
              type={'text'} 
              name={"value"} 
              style={{flex: '10', padding: '5px'}}
              placeholder={"해야 할 일을 입력하세요."} 
              value={this.state.value}
              onChange={this.handleChange}>
              </input>

              <input 
              type={'submit'} 
              value={"입력"} 
              className={'btn'} 
              style={{flex: '1'}}>
              </input>
            </form>
        </div>
      </div>
    )
  }
}