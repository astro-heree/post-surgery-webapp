import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Col,
  FormFeedback,
  Input,
  Label,
  Form,
  Button,
  CardBody,
  Card,
  Container,
  Row,
  FormGroup,
} from "reactstrap";

const SurgeonLogin = (prop) => {
  const [isLogin, setIsLogin] = useState(true)
  
  const validation = useFormik({
    enableReinitialize: false,
    initialValues: {
      user_id: "",
      password: "",
    },
    validationSchema: Yup.object({
      user_id: Yup.string().required("Please Enter Your User Id"),
      password: Yup.string().required("Please Enter Your Password"),
    }),

    onSubmit: (values) => {
      if (isLogin) {
        const item = localStorage.getItem("user");
        const user = item ? JSON.parse(item) : null;
        if (user && user.password === values.password) {
          window.location.href = "/surgeon-page";
        } else {
          alert("Invalid username or password");
        }
      } else {
        const user = {
          email: values.user_id,
          password: values.password,
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Account created successfully. Please log in.");
        validation.resetForm();
        setIsLogin(true)
      }
    },
  });

  const handleClick = () => {
    setIsLogin(!isLogin);
    validation.resetForm();
  }
  return (
    <React.Fragment>
      <div className="bg-dark text-white d-flex align-items-center" style={{height: "80vh"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <Card className="bg-secondary text-white">
                <CardBody>
                  <h2 className="text-center mb-4">
                    {isLogin ? "Surgeon Login" : "Surgeon Signup"}
                  </h2>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <FormGroup>
                      <Label className="fw-semibold">
                        User Id<span className="text-danger">*</span>
                      </Label>
                      <Input
                        name="user_id"
                        placeholder="Enter User Id"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.user_id || ""}
                        invalid={
                          validation.touched.user_id &&
                          validation.errors.user_id
                            ? true
                            : false
                        }
                      />
                      {validation.touched.user_id &&
                      validation.errors.user_id ? (
                        <FormFeedback>
                          {validation.errors.user_id}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                    <FormGroup>
                      <Label className="fw-semibold">
                        Password<span className="text-danger">*</span>
                      </Label>
                      <Input
                        name="password"
                        placeholder="Enter Password"
                        type="password"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password || ""}
                        invalid={
                          validation.touched.password &&
                          validation.errors.password
                            ? true
                            : false
                        }
                      />
                      {validation.touched.password &&
                      validation.errors.password ? (
                        <FormFeedback>
                          {validation.errors.password}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                    <Button color="primary" type="submit" className="w-100">
                      {isLogin ? "Login" : "Signup"}
                    </Button>
                  </Form>
                  <div className="text-center mt-3">
                    <Button
                      color="link"
                      className="text-white"
                      onClick={handleClick}
                    >
                      {isLogin
                        ? "Don't have an account? Sign up"
                        : "Already have an account? Login"}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SurgeonLogin;

