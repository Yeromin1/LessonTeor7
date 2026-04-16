import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field type="email" name="email" />
            Email
          </label>
          <label>
            <Field type="password" name="password" />
            Password
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
