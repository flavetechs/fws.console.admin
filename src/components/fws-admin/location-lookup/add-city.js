import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useHistory, useLocation } from "react-router-dom";
import { createCity } from "../../../store/actions/location-lookup-actions";
import Card from "../../Card";
import { locationLocations } from "../../../router/fws-path-locations";

const AddCity = () => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();
  let locations = useLocation();
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
  const { isSuccessful, message, stateList } = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

  const queryParams = new URLSearchParams(locations.search);
  const stateIdQueryParam = queryParams.get("stateId") || "";

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Body>
                <Formik
                  initialValues={{
                    stateId: stateIdQueryParam,
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
                      <Col lg="12">
                        <div className=" me-3 mx-2 mt-3 mt-lg-0 dropdown">
                          <label htmlFor="cityName" className="form-label">
                            {" "}
                            <b>State Name</b>
                          </label>
                          <Field
                            as="select"
                            name="stateId"
                            className="form-select"
                            id="stateId"
                            onChange={(e) => {
                              setFieldValue("stateId", e.target.value);
                              history.push(`${locationLocations.addCity}?stateId=${e.target.value}`
                              );
                            }}
                          >
                            <option value="">Select State</option>
                            {stateList?.map((item, idx) => (
                              <option
                                key={idx}
                                value={item?.stateId}
                              >
                                {item.stateName}
                              </option>
                            ))}
                          </Field>
                        </div>
                      </Col>
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
                            onChange={(e) => setFieldValue("cityName", e.target.value)}
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
                            history.push(locationLocations.city);
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

export default AddCity;
