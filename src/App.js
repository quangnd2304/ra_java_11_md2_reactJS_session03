import logo from './logo.svg';
import './App.css';
import LifeCycleComp from './components/LifeCycleComp';
import { Component } from 'react';
import ControlledComp from './components/ControlledComp';
import UncontrolledComp from './components/UncontrolledComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rikkei: "Rikkei Academy"
    }
  }
  handleChangeProps = () => {
    this.setState({
      rikkei: "Học viện đào tạo công nghệ thông tin Rikkei"
    })
  }
  render() {
    let element = "";
    // Render có điều kiện
    if (true) {
      element = <UncontrolledComp />
    }
    return (
      <div className="App">
        <button onClick={this.handleChangeProps}>Change Props</button>
        <LifeCycleComp rikkei={this.state.rikkei} />
        <ControlledComp />
        {element}
      </div>
    );
  }
}

export default App;
