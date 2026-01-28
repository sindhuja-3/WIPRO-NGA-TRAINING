import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AdminLogin() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters"),
  });

  const handleSubmit = (values) => {
    const { email, password } = values;
    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid credentials 😢");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="auth-box">
        <h2>Admin Login</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <div className="form-group">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-msg"
              />
            </div>

            <div className="form-group">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-msg"
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AdminLogin;