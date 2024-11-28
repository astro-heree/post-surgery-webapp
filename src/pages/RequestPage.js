import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/RequestPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const validationSchema = Yup.object({
  bodyPart: Yup.string().required("Please select Hip or Knee"),
  sideOption: Yup.string().required("Please select a side"),
  surgeonName: Yup.string()
    .required("Please enter the surgeon's name")
    .min(2, "Name must be at least 2 characters"),
});

const RequestPage = () => {
  const handleSubmit = (values) => {
    console.log("Submitted Data:", values);
    toast.success("Your request has been submitted successfully!");
  };

  return (
    <div>
      <Formik
        initialValues={{ bodyPart: "", sideOption: "", surgeonName: "", file: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="form">
            <div className="input-group">
              <label>
                Choose Body Part<span className="required">*</span>:
              </label>
              <div>
                <Field type="radio" id="hip" name="bodyPart" value="hip" />
                <label htmlFor="hip">Hip</label>
              </div>
              <div>
                <Field type="radio" id="knee" name="bodyPart" value="knee" />
                <label htmlFor="knee">Knee</label>
              </div>
              <ErrorMessage name="bodyPart" component="div" className="error" />
            </div>

            <div className="input-group">
              <label>
                Choose Side<span className="required">*</span>:
              </label>
              <div>
                <Field type="radio" id="left" name="sideOption" value="left" />
                <label htmlFor="left">Left</label>
              </div>
              <div>
                <Field type="radio" id="right" name="sideOption" value="right" />
                <label htmlFor="right">Right</label>
              </div>
              <div>
                <Field type="radio" id="both" name="sideOption" value="both" />
                <label htmlFor="both">Both</label>
              </div>
              <ErrorMessage name="sideOption" component="div" className="error" />
            </div>

            <div className="input-group">
              <label>
                Surgeon Name<span className="required">*</span>:
              </label>
              <Field type="text" name="surgeonName" placeholder="Enter surgeon's name" />
              <ErrorMessage name="surgeonName" component="div" className="error" />
            </div>

            <div className="input-group">
              <label>Upload File (Optional):</label>
              <input
                type="file"
                onChange={(event) => setFieldValue("file", event.currentTarget.files[0])}
                accept=".jpg,.jpeg,.png,.pdf"
              />
              <ErrorMessage name="file" component="div" className="error" />
            </div>

            <button type="submit" className="button">Request</button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};
export default RequestPage
