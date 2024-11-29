import React from "react";
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
  FormGroup,
  Row,
  Container,
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
      surgeon_name: Yup.string(),
    }),
    onSubmit: (values) => {
      validation.resetForm();
      alert("Form Submitted Successfully");
    },
  });

  return (
    <React.Fragment>
      <div className="bg-dark text-white d-flex align-items-center" style={{height: "80vh"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="bg-secondary text-white">
                <CardBody>
                  <h2 className="text-center mb-4">Submit Your Request</h2>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <FormGroup>
                      <Label className="fw-semibold">
                        Procedure<span className="text-danger">*</span>
                      </Label>
                      <Input
                        name="procedure"
                        type="select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.procedure}
                        invalid={
                          validation.touched.procedure &&
                          validation.errors.procedure
                        }
                      >
                        <option value="">Select</option>
                        <option value="hip">Hip</option>
                        <option value="knee">Knee</option>
                      </Input>
                      {validation.touched.procedure &&
                      validation.errors.procedure ? (
                        <FormFeedback>
                          {validation.errors.procedure}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>

                    <FormGroup>
                      <Label className="fw-semibold">
                        Side<span className="text-danger">*</span>
                      </Label>
                      <Input
                        name="side"
                        type="select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.side}
                        invalid={
                          validation.touched.side && validation.errors.side
                        }
                      >
                        <option value="">Select</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                        <option value="both">Both</option>
                      </Input>
                      {validation.touched.side && validation.errors.side ? (
                        <FormFeedback>
                          {validation.errors.side}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>

                    <FormGroup>
                      <Label className="fw-semibold">
                        Surgeon Name
                      </Label>
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
                        }
                      />
                      {validation.touched.surgeon_name &&
                      validation.errors.surgeon_name ? (
                        <FormFeedback>
                          {validation.errors.surgeon_name}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>

                    <FormGroup>
                      <Label className="fw-semibold">
                        Upload File (Optional)
                      </Label>
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
                        }
                      />
                      {validation.touched.file && validation.errors.file ? (
                        <FormFeedback>
                          {validation.errors.file}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>

                    <Button color="primary" type="submit" className="w-100">
                      Submit Request
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default RequestForm;
