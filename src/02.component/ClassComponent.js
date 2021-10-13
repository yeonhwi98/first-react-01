import { Component } from "react";

export class ClassComponent extends Component {
  render() {
    // console.log(this.props.nickName);
    // const props = this.props;
    // const nickName = this.props.nickName;
    // const age = this.props.age;

    const { nickName, age } = this.props;

    return (
      <>
        <div>클래스 함수 컴포넌트!</div>
        <h3>
          안녕 내 이름은 {nickName}이야 나이는 {age}이지
        </h3>
      </>
    );
  }
}

// export default ClassComponent;
