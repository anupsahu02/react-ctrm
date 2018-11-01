import React, { Component } from "react";
// import { authService } from "../services/auth";
import { authService } from "../../_services";
var base64 = require("base-64");

class Login extends Component {
    state = {};

    constructor(props) {
        super(props);

        authService.logout();

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);

        var data = {
            email: this.state.email,
            password: this.state.password
        };


        authService.login(data)
            .then((response) => {
                this.props.history.push("/derivative");
            })
            .catch((error) => {
                console.log("Error - " + error);
            });
    };

    render() {
        return ( <
            div className = "app-content content" >
            <
            div className = "content-wrapper" >
            <
            div className = "content-header row" / >
            <
            div className = "content-body" >
            <
            section className = "flexbox-container login-box" >
            <
            div className = "col-12 d-flex align-items-center justify-content-center" >
            <
            div className = "col-md-4 col-10 box-shadow-2 p-0" >
            <
            div className = "card border-grey border-lighten-3 m-0" >
            <
            div className = "card-header border-0" >
            <
            div className = "card-title text-center" >
            <
            div className = "p-1" >
            <
            img src = "../../../../public/app-assets/images/logo/logo.png"
            alt = "branding logo" /
            >
            <
            /div> < /
            div > <
            h6 className = "card-subtitle line-on-side text-muted text-center font-small-3 pt-2" >
            <
            span > Login < /span> < /
            h6 > <
            /div> <
            div className = "card-content" >
            <
            div className = "card-body" >
            <
            form className = "form-horizontal form-simple"
            onSubmit = { this.handleSubmit }
            noValidate >
            <
            fieldset className = "form-group position-relative has-icon-left mb-0" >
            <
            input type = "text"
            className = "form-control form-control-lg input-lg"
            id = "email"
            placeholder = "Your Username"
            value = { this.state.email }
            onChange = { this.handleChange }
            required /
            >
            <
            div className = "form-control-position" >
            <
            i className = "ft-user" / >
            <
            /div> < /
            fieldset > <
            fieldset className = "form-group position-relative has-icon-left" >
            <
            input type = "password"
            className = "form-control form-control-lg input-lg"
            id = "password"
            placeholder = "Enter Password"
            value = { this.state.password }
            onChange = { this.handleChange }
            required /
            >
            <
            div className = "form-control-position" >
            <
            i className = "la la-key" / >
            <
            /div> < /
            fieldset > <
            div className = "form-group row" >
            <
            div className = "col-md-6 col-12 text-center text-md-left" >
            <
            fieldset >
            <
            input type = "checkbox"
            id = "remember-me"
            className = "chk-remember" /
            >
            <
            label htmlFor = "remember-me" > { " " }
            Remember Me <
            /label> < /
            fieldset > <
            /div> <
            div className = "col-md-6 col-12 text-center text-md-right" >
            <
            a href = "recover-password.html"
            className = "card-link" >
            Forgot Password ?
            <
            /a> < /
            div > <
            /div> <
            button type = "submit"
            disabled = {!this.validateForm() }
            className = "btn btn-info btn-lg btn-block" >
            <
            i className = "ft-unlock" / > Login <
            /button> < /
            form > <
            /div> < /
            div > <
            /div> < /
            div > <
            /div> < /
            section > <
            /div> < /
            div > <
            /div>
        );
    }
}

export default Login;