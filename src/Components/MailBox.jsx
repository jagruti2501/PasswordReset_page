import React from 'react';


function App() {
    
  return (
    <div className="container">
      <i className="fa fa-key fa-3x"></i><br/>
      <h><b>Forgot Password?</b></h>
      <p>No worries! Will send you reset instructions</p>
      <form>
        <p>Email</p>
        <input type='mail' placeholder='Enter your mail'></input><br/>
        <button>Reset Password</button>
      </form>
      <a href='#'><i class="fa fa-arrow-left"></i>  Back to Login</a>
    
         
      
    </div>
  );
}

export default App;
