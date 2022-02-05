import React, { Component } from 'react';
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = this.state
        
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({emial:"",password: ""})
        } catch (error) {
            console.error(error)
        }

   
    }
    
    handleChange= (e)=>{
        const { value, name } = e.target
        this.setState({...this.state, [name]: value})
    }
    

  render() {
      return <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email an password</span>
          <form onSubmit={this.handleSubmit}>
              <FormInput type="email" handleChange={e => this.setState({...this.state, email: e.target.value})} name="Email" value={this.state.email} required label="email" />
              <FormInput label="password" type="password" handleChange={e => this.setState(
                  {...this.state, password: e.target.value}
              )} name="Password" value={this.state.password} required  />
              <div className="buttons">
                  <CustomButton type="submit">Sign In {" "}</CustomButton>
                  {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn  >Sign In With Google {" "}</CustomButton> */}
                  <button className='google-sign-in custom-button' onClick={signInWithGoogle}>Google</button>
           </div>
          </form>

    </div>
      
  }
}
