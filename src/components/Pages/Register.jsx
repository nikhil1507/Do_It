import React from "react";
import "../../styles/main.scss";

export default function Register() {
  const wireFrame = [
    {
      id: 1,
      htmlFor: "name-input",
      type: "text",
      smallText: "Your name would be visible to all",
      label: "Name",
    },
    {
      id: 2,
      htmlFor: "email-input",
      type: "email",
      smallText: "We'll never share your email with anyone else",
      label: "Email",
    },
    {
      id: 3,
      htmlFor: "password-input",
      type: "password",
      smallText: "Feel Free! Your Password is hidden",
      label: "Password",
    },
  ];
  return (
    <div className="register-page">
      <h4 style={{ marginBottom: "20px" }}>Register</h4>
      <form>
        {wireFrame.map((data) => (
          <div key={data.id} className="form-group">
            <label htmlFor={data.htmlFor}>{data.label}</label>
            <input
              type={data.type}
              className="form-control"
              id={data.htmlFor}
            />
            <small className="form-text text-muted">{data.smallText}</small>
          </div>
        ))}
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
