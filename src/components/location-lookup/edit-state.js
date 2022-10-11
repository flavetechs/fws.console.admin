import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useHistory } from "react-router-dom";
import { createCountry, createState } from "../../store/actions/location-lookup-actions";
import Card from "../Card";

const EditState = () => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  //VARIABLE DECLARATIONS

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    countryName: Yup.string()
      .min(2, "State Name Too Short!")
      .required("State is required"),
  });
  //VALIDATIONS SCHEMA

  // ACCESSING STATE FROM REDUX STORE
  const state = useSelector((state) => state);
  const { isSuccessful, message } = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

//   if (isSuccessful) {
//     history.push(sessionLocations.subjectSetupList);
//   }

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Body>
                <Formik
                  initialValues={{
                    stateName: "",
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.stateName = values.stateName.toUpperCase();
                    values.isActive = isChecked;
                    createState(values)(dispatch);
                  }}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    values,
                    touched,
                    errors,
                    isValid,
                  }) => (
                    <Form>
                      {message && <div className="text-danger">{message}</div>}
                      <Col lg="12">
                        <div className="form-group">
                          {touched.stateName && errors.stateName && (
                            <div className="text-danger">{errors.stateName}</div>
                          )}
                          <label htmlFor="stateName" className="form-label">
                            {" "}
                            <b>State Name</b>
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            name="stateName"
                            id="stateName"
                            aria-describedby="stateName"
                            required
                            placeholder="Enter State name"
                            onChange={(e)=> setFieldValue("stateName",e.target.value)}
                          />
                        </div>
                      </Col>

                      <Col lg="12" className="d-flex justify-content-between">
                        <div className="form-check mb-3 form-Check">
                          <input
                            type="checkbox"
                            id="customCheck1"
                            className="form-check-input"
                            name="isActive"
                            // checked={isChecked}
                            // onChange={(e) => {
                            //   setIsChecked(!isChecked);
                            // }}
                          />
                          <label htmlFor="isActive" className="check-label">
                            isActive{" "}
                          </label>
                        </div>
                      </Col>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="button"
                          variant="btn btn-danger mx-2"
                          onClick={() => {
                            history.goBack();
                          }}
                        >
                          Cancel
                        </Button>{" "}
                        <Button
                          type="button"
                          variant="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EditState;
