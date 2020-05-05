import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignupDialog({ reqStatus, handleClose, control } ) {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const history = useHistory();
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

    useEffect(()=>{
        // console.log(control);
        // console.log(reqStatus);
        setOpen(control)
          if(reqStatus.status){
            setMessage("You have Successfully signed up to have free access to the todo app, use the button below to continue");
          }else{
            setMessage(reqStatus.message)
          }
    },[control])

    const handleProceed = () => {
        control = false;
        history.push('/')
        handleClose();
        // setOpen(control);
    };
    const backDrop = () => {
        control = false;
        handleClose();
        // setOpen(control);
    };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onBackdropClick = {backDrop}
        // keepMounted
        // onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
            Sign Up {reqStatus.status ? 'Successful' : 'Failed'}
            {/* <button className="btn-sm float-right">X</button> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          { reqStatus.status &&
            <Button onClick={handleProceed} color="primary">
              Proceed to Login
            </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}