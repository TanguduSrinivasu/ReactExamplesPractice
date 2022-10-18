import React from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>Logout</Button>
      {/* <h3>{props.loginData.emailData}</h3>
      <h3>{props.loginData.passwordData}</h3> */}
    </Card>
  );
};

export default Home;
