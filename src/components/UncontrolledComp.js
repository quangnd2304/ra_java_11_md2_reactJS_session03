import React, { Component } from 'react';

class UncontrolledComp extends Component {
    constructor(props) {
        super(props);
        // Khoi tao cac ref tham chieu toi dom
        this.userNameRef = React.createRef();
        this.passRef = React.createRef();
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin = (event) => {
        event.preventDefault();
        // Lay du lieu form duoc luu tru trong DOM
        console.log("User Name-->", this.userNameRef.current.value);
        console.log("Password-->", this.passRef.current.value);
    }
    render() {
        return (
            <div>
                <h2>UnControlled Form</h2>
                <form>
                    UserName: <input type={'text'} name="userName" id='userName' ref={this.userNameRef} /><br></br>
                    Password: <input type={'password'} name="pass" id='pass' ref={this.passRef} /><br></br>
                    <button onClick={this.handleLogin}>Login</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledComp;