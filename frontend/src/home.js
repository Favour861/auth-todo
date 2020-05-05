import React from 'react';
import logo from './logo.svg';
import Login from './login';
import SignUp from './signup';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router'

import './App.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
  }));
  

function Home(){
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    return(
        <div className="container-fluid">
            <div className="row bg-danger" style={{height: '150px'}}>

            </div>
            <div className="row">
                <div className="col-10 col-md-6 mx-auto shadow bg-white" style={{height: '86vh', marginTop: '-90px', zIndex: 1000, overflow: 'auto'}}>
                    <div className="row">
                        <div className="col-12" className={classes.root}>
                        <AppBar position="static" color="default">
                          <Tabs
                            value={value}
                            // initialSelectedIndex={1}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            // variant="fullWidth"
                            aria-label="full width tabs example"
                            centered
                          >
                            <Tab label="Login" {...a11yProps(0)} />
                            <Tab label="Sign Up" {...a11yProps(1)} />
                          </Tabs>
                        </AppBar>
                        <SwipeableViews
                          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                          index={value}
                          onChangeIndex={handleChangeIndex}
                        >
                          <TabPanel value={value} index={0} dir={theme.direction}>
                            <Login />
                          </TabPanel>
                          <TabPanel value={value} index={1} dir={theme.direction}>
                            <SignUp />
                          </TabPanel>
                        </SwipeableViews>
                    </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);