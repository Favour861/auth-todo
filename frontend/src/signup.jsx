import React from 'react';
import logo from './logo.svg';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SignupDialog from './SignupDialog'

const style = {
    
}

const styleError = {...style, borderBottom: "1px solid tomato", outline: "none"}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



function SignUp(){
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState({});

    const submitForm = async(values) => {
        // console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(values)
        }
        const response = await fetch('http://localhost:5000/user/signup', requestOptions);
        const json = await response.json();
        // setOpen(false)
        if(json.success){
            setOpen(true)
            setStatus({status: true, message: json.message})
        }else{
            setStatus({status: false, message: json.message})
            setOpen(true)
        }
        // console.log(json);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return(
    <div>
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', phone: '', username: '', password: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                // .max(15, 'Must be 15 characters or less')
                .required('Required'),
                lastName: Yup.string()
                // .max(20, 'Must be 20 characters or less')
                .required('Required'),
                email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
                phone: Yup.string()
                .required('Required'),
                username: Yup.string()
                .required('Required'),
                password: Yup.string()
                .required('Required')
                .min(8,'Must be 8 characters or less'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                submitForm(values);
                setSubmitting(false);
            }}

            
            >
            <Form className={classes.root} style={{height: '70vh', overflow: 'auto'}}>
                {/* <label htmlFor="firstName">First Name</label> */}
                <Field name="firstName" type="text">
                    {({ field, form }) => (
                        <TextField id="standard-basic" label="First Name *" 
                            style={form.touched.firstName && form.errors.firstName ? styleError : style}
                            {...field}
                            type="text"
                        />
                    )}
                </Field>
                {/* <ErrorMessage name="firstName" /> */}
                {/* <label htmlFor="lastName">Last Name</label> */}
                <Field name="lastName" type="text">
                    {({ field, form }) => (
                        <TextField id="standard-basic" label="Last Name *"
                        style={form.touched.lastName && form.errors.lastName ? styleError : style}
                        {...field}
                        type="text"
                        />
                    )}
                </Field>
                {/* <ErrorMessage name="lastName" /> */}
                {/* <label htmlFor="email">Email Address</label> */}
                <Field name="email" type="email">
                    {({ field, form }) => (
                        <TextField id="standard-basic" label="Email *"
                        style={form.touched.email && form.errors.email ? styleError : style}
                        {...field}
                        type="text"
                        placeholder="Email"
                        />
                    )}
                </Field>
                {/* <ErrorMessage name="email" /> */}
                {/* <label htmlFor="phone">Phone Number</label> */}
                <Field name="phone" type="text">
                    {({ field, form }) => (
                        <TextField id="standard-basic" label="Phone *"
                        style={form.touched.phone && form.errors.phone ? styleError : style}
                        {...field}
                        type="text"
                        placeholder="Phone Number"
                        />
                    )}
                </Field>
                {/* <ErrorMessage name="phone" /> */}
                {/* <label htmlFor="username">Username</label> */}
                <Field name="username" type="text">
                    {({ field, form }) => (
                        <TextField id="standard-basic" label="Username *"
                        style={form.touched.username && form.errors.username ? styleError : style}
                        {...field}
                        type="text"
                        placeholder="Username"
                        />
                    )}
                </Field>
                {/* <ErrorMessage name="username" /> */}
                {/* <label htmlFor="password">Password</label> */}
                <Field name="password" type="text">
                    {({ field, form }) => (
                        <TextField id="standard-basic" label="Password *"
                        style={form.touched.password && form.errors.password ? styleError : style}
                        {...field}
                        type="text"
                        placeholder="Password"
                        />
                    )}
                </Field>
                <ErrorMessage name="password" />
                <p align="center" className="mt-2">
                    <Button variant="contained" color="secondary" type="submit">Sign Up</Button>

                    {/* <button className="btn btn-danger" type="submit" style={{borderRadius: 0}}>Sign Up</button> */}
                </p>
            </Form>
        </Formik>

        <SignupDialog reqStatus={status} handleClose={handleClose} control={open} />
    </div>
    )
}

export default SignUp;