import React from "react";

const Register = () => {
  return (
    <>
      <h2 className="text-center">Register</h2>

      <div class="form-floating mb-3">
      <i class="fa-solid fa-user"></i>
        <input
          type="name"
          class="form-control"
          id="floatingInput"
          placeholder="Enter Your Name"
        />
        <label for="floatingInput">Name</label>
      </div>

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

      <i class="fa-solid fa-phone"></i>
      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          id="floatingNumber"
          placeholder="Enter your Phone No."
        />
        <label for="floatingPassword">Phone</label>
      </div>
    </>
  );
};

export default Register;
