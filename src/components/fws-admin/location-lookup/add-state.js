import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useHistory, useLocation } from "react-router-dom";
import { createCountry, createState, getCountryLookupList } from "../../../store/actions/location-lookup-actions";
import Card from "../../Card";
import { locationLocations } from "../../../router/fws-path-locations";

const AddCountry = () => {

  // ACCESSING STATE FROM REDUX STORE
  const state = useSelector((state) => state);
  const { isSuccessful, message, countryList } = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    countryName: Yup.string()
      .min(2, "Country Name Too Short!")
      .required("Country is required"),
  });
  //VALIDATIONS SCHEMA

  //VARIABLE DECLARATIONS
  let locations = useLocation();
  const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(locations.search);
  const countryIdQueryParam = queryParams.get("countryId") || "";
  const [addStateItem, setAddStateItem] = useState({ countryId: countryIdQueryParam, stateName: "", isActive: isChecked })
  //VARIABLE DECLARATIONS

  // const addStateItem = { countryId: countryIdQueryParam, stateName: field, isActive: isChecked }

  React.useEffect(() => {
    getCountryLookupList()(dispatch)
  }, [])

  // React.useEffect(() => {
  //   if (!isSuccessful) {
  //     history.push(locationLocations.country);
  //   }
  // }, [!isSuccessful])


  console.log('countryIdQueryParam', countryIdQueryParam);
  console.log('addStateItem', addStateItem);

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Body>
                <Formik
                  initialValues={{
                    countryId: countryIdQueryParam,
                    stateName: "",
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.countryId = countryIdQueryParam;
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
                              history.push(`${locationLocations.addState}?countryId=${e.target.value}`
                              );
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
                              addStateItem.isActive = e.target.value
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
                          // onClick={() => {
                          //   createState(addStateItem)(dispatch)
                          // }}
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

export default AddCountry;
