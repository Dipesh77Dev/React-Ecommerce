import React from 'react'

const Login = () => {
  return (
    <>
    <h2 className="text-center">Register</h2>

      <i class="fa-solid fa-envelope"></i>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="Enter your Email"
        />
        <label for="floatingInput">Email </label>
      </div>

      <i class="fa-solid fa-lock"></i>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Enter your Email"
        />
        <label for="floatingPassword">Password</label>
      </div>

    </>
  )
}

export default Login