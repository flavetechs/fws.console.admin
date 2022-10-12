import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useHistory, useLocation } from "react-router-dom";
import { createCountry, updateCountry } from "../../../store/actions/location-lookup-actions";
import Card from "../../Card";
import { locationLocations } from "../../../router/fws-path-locations";

const EditCountry = () => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  //VARIABLE DECLARATIONS

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    countryName: Yup.string()
      .min(2, "Country Name Too Short!")
      .required("Country is required"),
  });
  //VALIDATIONS SCHEMA

  // ACCESSING STATE FROM REDUX STORE
  let locations = useLocation();
  const state = useSelector((state) => state);
  const { isSuccessful, message } = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

  const queryParams = new URLSearchParams(locations.search);
  const countryIdQueryParam = queryParams.get("countryId") || "";


  React.useEffect(() => {
    if (!isSuccessful) {
      history.push(locationLocations.country);
    }
  }, [!isSuccessful])


  console.log('countryIdQueryParam', countryIdQueryParam);

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Header>
                <div className='header'>
                    <h4>Edit Country Details</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Formik
                  initialValues={{
                    countryId: countryIdQueryParam,
                    countryName: "",
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.countryId = countryIdQueryParam;
                    values.countryName = values.countryName.toUpperCase();
                    values.isActive = isChecked;
                    updateCountry(values)(dispatch);
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
                      <Col lg="12">
                        <div className="form-group">
                          {touched.countryName && errors.countryName && (
                            <div className="text-danger">{errors.countryName}</div>
                          )}
                          <label htmlFor="countryName" className="form-label">
                            {" "}
                            <b>Country Name</b>
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            name="countryName"
                            id="countryName"
                            aria-describedby="countryName"
                            required
                            placeholder="Enter Country name e.g Ghana... etc"
                            onChange={(e) => setFieldValue("countryName", e.target.value)}
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
                            history.goBack();
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

export default EditCountry;
