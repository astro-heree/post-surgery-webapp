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
} from "reactstrap";

const RequestForm = () => {
  const validation = useFormik({
    enableReinitialize: false,
    initialValues: {
      procedure: "",
      side: "",
      file: null,
      surgeon_name: "",
    },
    validationSchema: Yup.object({
      procedure: Yup.string().required("Please select a procedure"),
      side: Yup.string().required("Please select a side"),
      file: Yup.mixed().nullable(), // File is optional
      surgeon_name: Yup.string().required("Please enter the surgeon's name"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Col md={12}>
            <h2>Submit Your Request</h2>
            <div style={{ minWidth: "20vh", maxWidth: "40vh" }}>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Col>
                  <Label className="form-label fw-semibold text-dark">
                    Procedure
                    <span className="text-danger">*</span>
                  </Label>
                </Col>
                <Col>
                  <Input
                    name="procedure"
                    type="select"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.procedure}
                    invalid={
                      validation.touched.procedure &&
                      validation.errors.procedure
                        ? true
                        : false
                    }
                  >
                    <option value="">Select</option>
                    <option value="hip">Hip</option>
                    <option value="knee">Knee</option>
                  </Input>
                  {validation.touched.procedure && validation.errors.procedure ? (
                    <FormFeedback type="invalid">
                      {validation.errors.procedure}
                    </FormFeedback>
                  ) : null}
                </Col>
                <Col>
                  <Label className="form-label fw-semibold text-dark">
                    Side
                    <span className="text-danger">*</span>
                  </Label>
                </Col>
                <Col>
                  <Input
                    name="side"
                    type="select"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.side}
                    invalid={
                      validation.touched.side && validation.errors.side
                        ? true
                        : false
                    }
                  >
                    <option value="">Select</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="both">Both</option>
                  </Input>
                  {validation.touched.side && validation.errors.side ? (
                    <FormFeedback type="invalid">
                      {validation.errors.side}
                    </FormFeedback>
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
                    name="surgeon_name"
                    type="text"
                    placeholder="Enter surgeon name"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.surgeon_name || ""}
                    invalid={
                      validation.touched.surgeon_name &&
                      validation.errors.surgeon_name
                        ? true
                        : false
                    }
                  />
                  {validation.touched.surgeon_name &&
                  validation.errors.surgeon_name ? (
                    <FormFeedback type="invalid">
                      {validation.errors.surgeon_name}
                    </FormFeedback>
                  ) : null}
                </Col>
                <Col>
                  <Label className="form-label fw-semibold text-dark">
                    Upload File (Optional)
                  </Label>
                </Col>
                <Col>
                  <Input
                    name="file"
                    type="file"
                    onChange={(event) =>
                      validation.setFieldValue(
                        "file",
                        event.currentTarget.files[0]
                      )
                    }
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.file && validation.errors.file
                        ? true
                        : false
                    }
                  />
                  {validation.touched.file && validation.errors.file ? (
                    <FormFeedback type="invalid">
                      {validation.errors.file}
                    </FormFeedback>
                  ) : null}
                </Col>
                <Button className="btn w-lg" type="submit" name="submit">
                  Submit Request
                </Button>
              </Form>
            </div>
          </Col>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default RequestForm;
