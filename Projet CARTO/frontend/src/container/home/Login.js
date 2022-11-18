import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        alert("Login au compte : ", this.state.username);
        event.preventDefault();
    }


    render() {
        return (
            <div className="login-container">
                <form onSubmit={this.handleSubmit} className="form-login">
                    <input type="text" value={this.state.username} onChange={this.handleUsername.bind(this)} placeholder="Enter your username" />
                    <input type="text" value={this.state.password} onChange={this.handlePassword.bind(this)} placeholder="Enter your password" />
                    <input type="submit" value="Login" className="btn btn-primary buttonLogin" />
                </form>
            </div >
        );
    }
}