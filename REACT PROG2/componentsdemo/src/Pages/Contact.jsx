import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <form className="col-md-6 mx-auto border p-4 rounded shadow">
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control"></textarea>
        </div>

        <button className="btn btn-success w-100">Submit</button>
      </form>
    </div>
  );
}

export default Contact;