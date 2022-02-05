import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import "./sign-up.stylesw.scss"
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils.js"

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handlesubmit = async e => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.error(error)
        }

    }
    render() {
      
        const {displayName, email,password,confirmPassword} = this.state
      return (
          
          <div className="sign-up">
              <h2 className="title">I do not have an account</h2>
              <span>Sign with your email and password</span>
              <form onSubmit={this.handlesubmit} className="sign-up-form">
                  <FormInput
                      onChange={this.handleChange}
                      type="text"
                      name="displayName"
                      value={displayName}
                      required
                      label="Name"
                  />
                  <FormInput
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      value={email}
                      required
                      label="Email"
                  />
                  <FormInput
                      onChange={this.handleChange}
                      type="password"
                      name="password"
                      value={password}
                      label="Password"
                      required
                  />
                  <FormInput
                      onChange={this.handleChange}
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      label="Confirm Password"
                      required
                  />
                  <CustomButton>SIGN UP</CustomButton>
              </form>
          </div>
    )
  }
}
