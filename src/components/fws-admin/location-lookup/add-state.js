import React from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useHistory, useLocation } from "react-router-dom";
import { createState, getCountryLookupList } from "../../../store/actions/location-lookup-actions";
import Card from "../../Card";
import { locationLocations } from "../../../router/fws-path-locations";

const AddState = () => {
  //VARIABLE DECLARATIONS
  let locations = useLocation();
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
  const { isSuccessful, message, countryList } = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

  const queryParams = new URLSearchParams(locations.search);
  const countryIdQueryParam = queryParams.get("countryId") || "";

  React.useEffect(() => {
    getCountryLookupList()(dispatch)
  }, [dispatch]);

  //   if (isSuccessful) {
  //     history.push(sessionLocations.subjectSetupList);
  //   }

  // const item = {
  //   countryId: "443be913-6a4c-4602-5981-08da9731379b",
  //   stateName: "calabar",
  //   isActive: true,
  // }

  console.log('isSuccessful', isSuccessful);

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Body>
                <Formik
                  initialValues={{
                    countryId: "",
                    stateName: "",
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.countryId = countryIdQueryParam;
                    values.stateName = values.stateName;
                    values.isActive = isChecked;
                    createState(values)(dispatch);
                    console.log('values', values);
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
                        <div className=" me-3 mx-2 mt-3 mt-lg-0 dropdown">
                          <label htmlFor="countryId" className="form-label">
                            {" "}
                            <b>Choose Country</b>
                          </label>
                          <Field
                            as="select"
                            name="countryId"
                            className="form-select"
                            id="countryId"
                            onChange={(e) => {
                              setFieldValue("countryId", e.target.value);
                              // history.push(`${locationLocations.addState}?countryId=${e.target.value}`
                              // );
                            }}
                          >
                            <option value="">Select Country</option>
                            {countryList?.map((country, idx) => (
                              <option
                                key={idx}
                                value={country?.countryId}
                              >
                                {country.countryName}
                              </option>
                            ))}
                          </Field>
                        </div>
                      </Col>
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
                            onChange={(e) => setFieldValue("stateName", e.target.value)}
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
                            checked={isChecked}
                            onChange={(e) => {
                              setIsChecked(!isChecked);
                            }}
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
                            history.push(locationLocations.state)
                          }}
                        >
                          Back
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

export default AddState;
