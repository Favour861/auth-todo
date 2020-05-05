import React, { useState } from 'react';
import logo from './logo.svg';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StatusNotification from './snackbar';
import { useHistory } from 'react-router-dom';


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


function Login(){
    const history = useHistory();
    const classes = useStyles();

    const [status, setStatus] = useState({control: false, severity: '', message: ''})



    const submitForm = (values) => {
        console.log(values);
        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(values),
        }
        fetch('http://localhost:5000/user/authenticate', requestOptions).then(response => {
            if(response.status == 200){
                let newStatus = {control: true, severity: 'success', message: 'Logged In Successfully'};
                setStatus({...newStatus});
                setTimeout(()=>{
                    history.push('/app');
                },1000)
            }else{
                let newStatus;
                if(response.status == 500){
                    newStatus = {control: true, severity: 'error', message: 'Server Error'};
                }else if(response.status == 401){
                    newStatus = {control: true, severity: 'error', message: 'Invalid Login Credentials'};
                }
                setStatus({...newStatus});
                // console.log(status);
            }
        })
        // const json = await response;

    }
    const handleClose = () => {
        setStatus({...status, control: false})
    }
    return(
    <div>
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
                username: Yup.string()
                .required('Required'),
                password: Yup.string()
                .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                submitForm(values);
                setSubmitting(false);
            }}

            
            >
            <Form className={classes.root} style={{height: '40vh', marginTop: '20vh', overflow: 'auto'}}>
                {/* <label htmlFor="firstName">First Name</label> */}
                <Field name="username" type="text">
                    {({ field, form }) => (
                        <TextField id="outlined-basic" variant="outlined" label="Username or Email" 
                            style={form.touched.username && form.errors.username ? styleError : style}
                            {...field}
                            type="text"
                        />
                    )}
                </Field>
                <Field name="password" type="text">
                    {({ field, form }) => (
                        <TextField id="outlined-basic" variant="outlined" label="Password" 
                            style={form.touched.password && form.errors.password ? styleError : style}
                            {...field}
                            type="password"
                        />
                    )}
                </Field>
                <p align="center" className="mt-2">
                <Button variant="contained" color="secondary" type="submit">Log In</Button>
                    {/* <button className="btn btn-danger" type="submit" style={{borderRadius: '3px'}}>Login</button> */}
                </p>
            </Form>
        </Formik>
        <StatusNotification status={status} snackClose={handleClose} style={{position: 'absolute', bottom: '20px'}} />
    </div>
    )
}

export default Login;