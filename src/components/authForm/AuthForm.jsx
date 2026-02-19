import React from 'react'

const AuthForm = ({ type }) => {
  return (
     <div>
      <h2>{type === "login" ? "Login" : "Create Account"}</h2>

      {type === "register" && (
        <input type="text" placeholder="Full Name" />
      )}

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>
        {type === "login" ? "Login" : "Register"}
      </button>
    </div>
  )
}

export default AuthForm
