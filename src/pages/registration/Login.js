import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Col,
  FormFeedback,
  Input,
  Label,
  Form,
  Row,
  Button,
  CardBody,
  Card,
} from "reactstrap";
import { Link } from "react-router-dom";

const Login = (prop) => {
  const [isLogin, setIsLogin] = useState(true)
  
  const validation = useFormik({
    enableReinitialize: false,
    initialValues: {
      user_id: "",
      password: "",
      dob: "",
      sergeon_name: ""
    },
    validationSchema: Yup.object({
      user_id: Yup.string().required("Please Enter Your User Id"),
      password: Yup.string().required("Please Enter Your Password"),
      dob: Yup.date()
      .required('Please select your Date of Birth')
      .max(new Date(), 'Date of Birth cannot be in the future'),
      sergeon_name: Yup.string().required("Please Enter Your Surgeon Name")
    }),

    onSubmit: (values) => {
      console.log(values, "hi");
      // write the logic of onSubmit here //
    },
  });

  const handleClick = () => {
    setIsLogin(!isLogin);
  }
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Col md={12}>
            <h2>Please Enter your Account details</h2>
            <div style={{minWidth: "20vh", maxWidth: "40vh"}}>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Col>
                  <Label className="form-label fw-semibold text-dark">
                    User Id
                    <span className="text-danger">*</span>
                  </Label>
                </Col>
                <Col>
                  <Input
                    name="user_id"
                    placeholder="user id"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.user_id || ""}
                    invalid={
                      validation.touched.user_id && validation.errors.user_id
                        ? true
                        : false
                    }
                  />
                  {validation.touched.user_id && validation.errors.user_id ? (
                    <FormFeedback type="invalid">
                      {validation.errors.user_id}
                    </FormFeedback>
                  ) : null}
                </Col>
                <Col>
                  <Label className="form-label fw-semibold text-dark">
                    Password
                    <span className="text-danger">*</span>
                  </Label>
                </Col>
                <Col>
                  <Input
                    name="password"
                    placeholder="password"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.password || ""}
                    invalid={
                      validation.touched.password && validation.errors.password
                        ? true
                        : false
                    }
                  />
                  {validation.touched.password && validation.errors.password ? (
                    <FormFeedback type="invalid">
                      {validation.errors.password}
                    </FormFeedback>
                  ) : null}
                </Col>
                {
                  isLogin && 
                  <>
                  <Col>
                    <Label className="form-label fw-semibold text-dark">
                      Data Of Birth
                      <span className="text-danger">*</span>
                    </Label>
                  </Col>
                  <Col>
                  <Input
                      name="dob"
                      type="date"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.dob || ""}
                      invalid={
                        validation.touched.dob && validation.errors.dob
                          ? true
                          : false
                      }
                  />

                  {validation.touched.dob && validation.errors.dob ? (
                            <div>{validation.errors.dob}</div>
                  ) : null}
                  </Col>
                  <Col>
                    <Label className="form-label fw-semibold text-dark">
                      Surgeon Name
                      <span className="text-danger">*</span>
                    </Label>
                  </Col>
                  <Col>
                    <Input
                      name="sergeon_name"
                      placeholder="sergeon name"
                      type="text"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.sergeon_name || ""}
                      invalid={
                        validation.touched.sergeon_name && validation.errors.sergeon_name
                          ? true
                          : false
                      }
                    />
                    {validation.touched.sergeon_name && validation.errors.sergeon_name ? (
                      <FormFeedback type="invalid">
                        {validation.errors.sergeon_name}
                      </FormFeedback>
                    ) : null}
                  </Col>
                  </>
                }
                <Button
                  className="btn w-lg"
                  type="submit"
                  name="submit"
                >
                  { !isLogin ? "Login" : "Signup" }
                </Button>
              </Form>
            </div>
            <div className="d-flex align-items-end">
              <Button onClick={() => handleClick()}>{isLogin? "Already have an account":"Don't have an account" } </Button>
            </div>
            
          </Col>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Login;

