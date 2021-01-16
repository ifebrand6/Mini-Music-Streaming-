import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import Form from './authenticationForm';
const axios = require('axios');

export default function Authentication() {
    const [loginState, setloginState] = useState({
        status: false
    });
    function handleAuthenticationSubmission(event) {
        event.preventDefault();
        let formData,user;
        formData = new FormData(event.target);
        user = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password')
        };
        authenticate(user)
    }
    function authenticate(user) {
        
       // use aunthenication will go on here
       // set loginState.status to true
       axios.post('https://udunkulu-api.herokuapp.com/api/v1/users', {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      })
      .then(function (response) {
          console.log("Hello it was success")
        console.log(response);
        // redirect to home page
        // pop up notification for success
        // 
      })
      .catch(
          function(e){
            // push the  error to the dom
            console.log(e.response.data.message)
            console.log('you got an error')
          }
      )
    }
    return (
        <div>
            <Form handleAuthenticationSubmission={handleAuthenticationSubmission}></Form>
        </div>
    )
}
