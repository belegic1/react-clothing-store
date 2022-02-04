import React, { Component } from 'react';
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from '../custom-button/custom-button.component';

export default class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({email: "", password: ""})

   
    }
    
    handleChange = e => {
        const { value, name } = e.target
        this.setState({[name]: value})
    }
    

  render() {
      return <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email an password</span>
          <form onSubmit={this.handleSubmit}>
              <FormInput type="email" handleChange={this.handleChange} name="email" value={this.state.email} required label="email" />
              <FormInput  label="password" type="password" handleChange={this.handleChange} name="password" value={this.state.password} required  />
              <CustomButton type="submit">Sign In</CustomButton>
          </form>
    </div>
  }
}
