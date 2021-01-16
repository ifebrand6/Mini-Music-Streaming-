import React from "react";

function Form(props) {
    console.log(props)
   const handleAuthenticationSubmission = props.handleAuthenticationSubmission
  return (
    <div>
      <form className="form-signin" id="authForm" onSubmit={handleAuthenticationSubmission}>
    <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label htmlFor="firstName" className="sr-only">First Name</label>
    <input type="text" id="firstName" className="form-control" name="firstName" placeholder="First Name" required="" autoFocus="" />
    <label htmlFor="lastName" className="sr-only">Last Name</label>
    <input type="text" id="lastName" className="form-control" name="lastName" placeholder="Last Name" required="" autoFocus="" />
    <label htmlFor="inputEmail" className="sr-only">Email address</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" name="email" />
    <label htmlFor="inputPassword" className="sr-only">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" name="password" />
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
  </form>
    </div>
  );
}

export default Form;
