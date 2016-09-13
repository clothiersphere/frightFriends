import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import RegistrationForm from './registrationForm';
import { submitUserInfo } from '../actions/index';

const handleSubmit = (data) => {
  // console.log('Submitted', data);
  submitUserInfo(data)
  //call action passing in data 
};

const Main = () => {
  return (
    <div>   
      <RegistrationForm 
        onSubmit={handleSubmit} 
      />
    </div>
  )
};

export default Main;
