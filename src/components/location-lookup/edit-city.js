import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useHistory } from "react-router-dom";
import { createCity, createState } from "../../store/actions/location-lookup-actions";
import Card from "../Card";

const EditCity = () => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  //VARIABLE DECLARATIONS

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    countryName: Yup.string()
      .min(2, "City Name Too Short!")
      .required("City is required"),
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
                    cityName: "",
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.cityName = values.cityName.toUpperCase();
                    values.isActive = isChecked;
                    createCity(values)(dispatch);
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
                          {touched.cityName && errors.cityName && (
                            <div className="text-danger">{errors.cityName}</div>
                          )}
                          <label htmlFor="cityName" className="form-label">
                            {" "}
                            <b>City Name</b>
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            name="cityName"
                            id="cityName"
                            aria-describedby="cityName"
                            required
                            placeholder="Enter City name"
                            onChange={(e)=> setFieldValue("cityName",e.target.value)}
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

export default EditCity;
