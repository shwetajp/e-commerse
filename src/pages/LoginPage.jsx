import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate()

    const onSubmit = () => {
        navigate('/', true);
    }
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('email must be a valid email'),
        password: Yup.string().required('password is required').min(6, 'password must be at least 6 characters')
    });
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
                                                Login
                                            </h1>
                                            <div className="form-group">
                                                <Field type="text" placeholder="Email" name="email" className={
                                                    formik.touched.email && formik.errors.email
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                />
                                                <ErrorMessage name="email">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <Field type="password" name="password" placeholder="password" className={formik.touched.password && formik.errors.password
                                                    ? 'form-control is-invalid' : 'form-control'}
                                                />
                                                <ErrorMessage name="password">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>

                                                    )}
                                                </ErrorMessage>
                                            </div>


                                            <Field type="submit" name="login" value="Login" className="btn btn-primary btn-block" />
                                        </Form>
                                    )
                                }
                            }

                        </Formik>

                        <p className="text-center">
                            Don't have an account  <Link to="/signup">SignUp here</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3"> </div>
        </div>
    )
}
export default LoginPage