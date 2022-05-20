import React, { useState } from 'react';
import { Form, FormikProvider, useFormik } from "formik";
import Button , {ButtonType} from './common/Button/Button';
import InputBox from './common/Input/InputBox'
import * as yup from "yup";
import { singupAuth } from './redux/Action/auth.action';
import { useDispatch } from 'react-redux';

function Login(props) {
    const [userType, setuserType] = useState('Login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reset, setReset] = useState(false)
    const dispatch = useDispatch()

    const handleLogin = (values) => {
    };

    const handleSignup = (values) => {
        console.log("handleSignup")
        dispatch(singupAuth(values))
    }

    const handleReset = () => {
    }

    const LoginSchema = {
        email: yup.string()
            .required("E-mail is must required")
            .email("Invalid"),
        password: yup.string()
            .required("Password is must required")
            .min(8, "Password is must 8 character long"),
    };
    const SignupSchema = {
        name: yup.string()
            .required("Name is must be requrired"),
        email: yup.string()
            .required("E-mail is must required")
            .email("Invalid"),
        password: yup.string()
            .required("Password is must required")
            .min(8, "Password is must 8 character long"),
    };
    const ResetSchema = {
        email: yup.string()
            .required("E-mail is must required")
            .email("Invalid")
    }

    let schema;
    if (reset === true ? null : userType === "Signup") {
        schema = yup.object().shape(SignupSchema)
    } else if (reset === true ? null : userType === "Login") {
        schema = yup.object().shape(LoginSchema)
    } else {
        schema = yup.object().shape(ResetSchema)
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(userType)
            if (!reset && userType === "Signup") {
                handleSignup(values);
            } else if (!reset && userType === "Login") {
                handleLogin(values);
            } else {
                handleReset(values);
            }
        }
    });


    const { handleSubmit, errors, getFieldProps } = formik;
    return (
        <div>
            <div className="container">
                <div className="section-title mt-4">
                    {
                        reset === true ? <h2> forgot password</h2> :
                            userType === 'Signup' ?
                                <h2>Sign up</h2>
                                :
                                <h2>Log in</h2>
                    }
                </div>
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit}>
                        <div className="php-email-form">
                            <div className="row justify-content-center">
                                <div className="col-md-6 form-group m-3">
                                    {
                                        reset === true ? null : userType === 'Signup' ?
                                            <div className="row">
                                                <InputBox
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Your Name"
                                                    {...getFieldProps("name")}
                                                    errors={Boolean(errors.name)}
                                                    errorMessage={errors.name}
                                                />
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-6 form-group mt-3">
                                    <InputBox
                                        type="email"
                                        className="form-control "
                                        name="email"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your Email"
                                        {...getFieldProps("email")}
                                        errors={Boolean(errors.email)}
                                        errorMessage={errors.email}
                                    />
                                </div>
                            </div>
                            {
                                reset === true ? null :
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 form-group mt-3 px-0 ">
                                            <InputBox
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password" s
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Your Password"
                                                {...getFieldProps("password")}
                                                errors={Boolean(errors.password)}
                                                errorMessage={errors.password}
                                            />
                                        </div>
                                    </div>
                            }



                            <div className="mt-5 text-center">
                                {
                                    reset === true ?
                                        <Button buttonType={ButtonType.PRIMARY} type="submit" >Submit</Button>
                                        :
                                        userType === 'Signup' ?
                                            <Button buttonType={ButtonType.PRIMARY} type="submit">Sign Up</Button>
                                            :
                                            <Button buttonType={ButtonType.PRIMARY} type="submit" >Log In</Button>
                                }
                            </div>

                            {/* {
                                reset === true ? null : userType === "Signup" ? (
                                    <div className="text-center">
                                        <p className="mt-4 mb-4"> OR </p>
                                        <NavLink
                                        to={{ pathname: "https://accounts.google.com/" }}
                                        target="_blank"
                                    >
                                        <Button
                                            social=""
                                            buttonType={ButtonType.OUTLINE}
                                            onClick={() => handleGoogleSignup()}
                                        >
                                            Signup With Google
                                        </Button>

                                        </NavLink>
                                    </div>
                                ) : null
                            } */}
                            
                            <div className="text-center my-4 ps-0">
                                {
                                    userType === 'Signup' ?
                                        <div>
                                            <label>don't have an account :</label>
                                            <Button buttonType={ButtonType.LINK} onClick={() => { setReset(false); setuserType('Login') }}>Log in</Button>
                                        </div>

                                        :
                                        <div>
                                            <label className="pe-2">Already have an account?</label>
                                            <Button buttonType={ButtonType.LINK} onClick={() => { setReset(false); setuserType('Signup') }}>Sign up</Button>
                                        </div>

                                }
                            </div>
                            <div className="text-center">
                                <div> forgot password ? <Button buttonType={ButtonType.LINK} onClick={() => setReset(true)}>Click</Button></div>
                            </div>

                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </div >
    );
}

export default Login;