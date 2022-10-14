import { Row, Col, } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Card from '../Card'


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  dashboardLocations } from '../../router/fws-path-locations';
import {  registerUser } from '../../store/actions/auth-actions';
import { IAuthState } from '../../store/Models/AuthState';


const Register = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state);
    const { message }: IAuthState  = state.auth;
    var token = sessionStorage.getItem('token');
    var user = sessionStorage.getItem('user')
    console.log("token", token);
    useEffect(() => {
        
       
        if (token) {
            if (JSON.parse(user|| '').userType === '0') {
                window.location.href = '/dashboard';
            } else {
                window.location.href = '/client-dashboard';
            }

        }
    }, [token, history, user])

    const validation = Yup.object().shape({
        email: Yup.string()
            .min(2, 'email Too Short!')
            .max(50, 'email Too Long!')
            .required('email is required to login'),
        password: Yup.string().required("Password Required")
            .min(4, 'Password must be a minimum of 4 characters'),
    });

    return (
        <>
            <section className="login-content">
                {/* <SmpLoader /> */}
                <Row className="m-0 align-items-center d-flex justify-content-center bg-white vh-100">
                    <Col md="6">
                        <Row className="justify-content-center">
                            <Col md="10">
                                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                                    <Card.Body>
                                        <Link to={dashboardLocations.dashboard} className="navbar-brand d-flex align-items-center mb-3">
                                            {/* <Logo color={true} /> */}
                                            {/* <h4 className="logo-title ms-3">FLAVTECH</h4> */}
                                        </Link>
                                        <h2 className="mb-2 text-center">Sign Up</h2>
                                        <p className="text-center">Register as a first time.</p>

                                        <Formik
                                            initialValues={{
                                                email: '',
                                                password: '',
                                            }}
                                            validationSchema={validation}
                                            onSubmit={values => {
                                                registerUser(values)(dispatch)
                                            }}
                                        >
                                            {({
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                values,
                                                touched,
                                                errors,
                                                isValid }) => (

                                                <Form >
                                                    <Row>
                                                        {message && <div className='text-danger'>{message}</div>}
                                                        <Col lg="12">
                                                            <div className="form-group">
                                                                {((touched.email && errors.email) || message) && <div className='text-danger'>{errors.email}</div>}
                                                                <label htmlFor="email" className="form-label">Email</label>
                                                                <Field type="email" className="form-control" name="email" id="email" aria-describedby="email" required placeholder=" " />
                                                            </div>
                                                        </Col>
                                                        <Col lg="12" className="">
                                                            <div className="form-group">
                                                                {(touched.password && errors.password) && <div className='text-danger'>{errors.password}</div>}
                                                                <label htmlFor="password" className="form-label">Password</label>
                                                                <Field type="password" required className="form-control" name="password" id="password" aria-describedby="password" placeholder=" " />
                                                            </div>
                                                        </Col>
                                                        <Col lg="12" className="d-flex justify-content-between">
                                                            <div className="form-check mb-3 form-Check">
                                                                <Field type="checkbox" id="customCheck1" className="form-check-input" />
                                                                <label htmlFor="customCheck1" className='check-label'>Remember Me </label>
                                                            </div>
                                                            {/* <Link to={authLocations.firstTimeLogin}>Forgot Password?</Link> */}
                                                        </Col>
                                                    </Row>
                                                    <div className="d-flex justify-content-center">
                                                        <button onSubmit={() => {
                                                            handleSubmit()
                                                        }} type="submit"  className='btn btn-primary'>Sign Up</button>
                                                    </div>
                                                    {/* <p className="mt-3 text-center">
                                                        Don’t have an account? <Link to="/auth/sign-up" className="text-underline">Click here to sign up.</Link>
                                                    </p> */}
                                                </Form>
                                            )}
                                        </Formik>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <div className="sign-bg">
                            <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.05">
                                    <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF" />
                                    <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF" />
                                    <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF" />
                                    <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF" />
                                </g>
                            </svg>
                        </div>
                    </Col>
                    {/* <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                        {/* <Image src={auth1} className="Image-fluid gradient-main animated-scaleX" alt="images" />
                    </Col> */}
                </Row>
            </section>
        </>
    )
}

export default Register
