import * as React from 'react';
// import { Fn1 } from './functionComponent/fn1';
/**
 * React có 2 loại component
 * 1. function component
 *  - Thường dùng để view dữ liệu
 * 2. class component
 *  - Thường để xử lý logic giữ liệu
 * 
 * 3. Để truyền dữ liệu từ cha sang con -> prop
 * 4. State là kho lưu trữ tồn tại trong mỗi component
 */

class App extends React.Component {
  state = {
    name: 'Lien minh huyen thoai',
  }

  changeState = () => {
    this.setState({ name: 'Ten moi' });
  }

  render() {
    const { name } = this.state;
    return (
      <>
        state: { name}

        <button onClick={this.changeState}>Change state</button>
        {/* <Fn1 title={name} changeStateApp={this.changeState} /> */}
      </>
    )
  }
}

export default App;