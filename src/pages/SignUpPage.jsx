import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {

    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/', true);
    }
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: ''
    };

    const validationSchema = Yup.object({
        firstname: Yup.string().required('first name is required'),
        lastname: Yup.string().required('last name is required'),
        email: Yup.string().required('email is required').email('email must be a valid email'),
        mobile: Yup.string().required('mobile is required'),
        password: Yup.string().required('password is required').min(6, 'password must be at least 6 characters')
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">


                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {
                                (formik) => {
                                    return (
                                        <Form style={{ padding: '30px 100px' }}>
                                            <h1 style={{ textAlign: 'center', margin: '0px 0px 30px 0px' }}>
                                                Sign up
                                            </h1>
                                            <div className="form-group" >
                                                <Field type="text" name="firstname" placeholder="First Name" className={
                                                    formik.touched.firstname && formik.errors.firstname
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                } />
                                                <ErrorMessage name="firstname">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                    )}
                                                </ErrorMessage>
                                            </div>


                                            <div className="form-group">
                                                <Field type="text" name="lastname" placeholder="Last Name" className={
                                                    formik.touched.lastname && formik.errors.lastname
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                } />
                                                <ErrorMessage name="lastname">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                    )}
                                                </ErrorMessage>
                                            </div>

                                            <div className="form-group">
                                                <Field type="text" name="email" placeholder="Email" className={
                                                    formik.touched.email && formik.errors.email
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                } />
                                                <ErrorMessage name="email">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                    )}
                                                </ErrorMessage>
                                            </div>

                                            <div className="form-group">
                                                <Field type="number" name="mobile" placeholder="Mobile No." className={
                                                    formik.touched.email && formik.errors.email
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                } />
                                                <ErrorMessage name="mobile">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                    )}
                                                </ErrorMessage>
                                            </div>

                                            <div className="form-group">
                                                <Field type="password" name="password" placeholder="Password" className={
                                                    formik.touched.email && formik.errors.email
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                } />
                                                <ErrorMessage name="password">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                    )}
                                                </ErrorMessage>
                                            </div>


                                            <Field type="submit" value="SignUp" className="btn btn-primary btn-block" />
                                        </Form>
                                    )
                                }
                            }

                        </Formik>
                        <p className="text-center" >
                            Already Registerd <Link to="/login">Login here</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3"> </div>
        </div>
    )
}
export default SignUpPage