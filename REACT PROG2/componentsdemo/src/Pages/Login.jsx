import React from "react";

function Login() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>

      <form className="col-md-6 mx-auto border p-4 rounded shadow">
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;