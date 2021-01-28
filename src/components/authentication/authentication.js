
import React from 'react'
import { useHistory} from 'react-router-dom';
import {Form} from './authenticationForm';
const axios = require('axios');

export function Authentication() {
    let history = useHistory()
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
        
       // set loginState.status to true
       axios.post('https://udunkulu-api.herokuapp.com/api/v1/users', {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      })
      .then(function (response) {
            localStorage.setItem("good", response.data)
            history.push("/dashboard");

        // pop up notification for success
        
      })
      .catch(
          function(error){
            let message = error.response.data.message;
            document.getElementById('error_message').innerText = message
            
          }
      )
    }
    return (
        <div>
            <Form handleAuthenticationSubmission={handleAuthenticationSubmission}></Form>
        </div>
    )
}
