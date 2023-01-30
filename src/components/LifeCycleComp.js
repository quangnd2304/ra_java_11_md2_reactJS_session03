import React, { Component } from 'react';

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }
    componentDidMount() {
        console.log("Component did mount");
    }
    componentWillMount() {
        console.log("Component will mount");
    }
    // Khi thay đổi props
    componentWillReceiveProps(nextProps) {
        console.log("Component Will ReceiveProps --> ", nextProps);
    }
    componentWillUpdate() {
        console.log("Component Will Update");
    }
    componentDidUpdate() {
        console.log("Component did Update");
    }
    shouldComponentUpdate() {
        console.log("Should Component Update");
        return false;
    }
    render() {
        console.log("Component render");
        return (
            <div>

            </div>
        );
    }

}

export default LifeCycleComp;