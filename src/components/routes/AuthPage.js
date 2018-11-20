import React, { Component } from 'react';
import SigninForm from '../auth/SigninForm';

class AuthPage extends Component {
    static propTypes = {

    };

  render() {
    return (
    <div>
       <h1>Auth Page</h1>
       <SigninForm />
    </div>
    );
  }
}

export default AuthPage;
