import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

const Main = (() =>
  // <form className="form-block">
  <div>
    <div className="form-group row">
      <label htmlFor="firstNameInput" className="col-xs-2 col-form-label">First Name</label>
      <div className="col-xs-5">
        <input className="form-control" type="text" id="firstNameInput" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="lastNameInput" className="col-xs-2 col-form-label">Last Name</label>
      <div className="col-xs-5">
        <input type="text" className="form-control" id="lastNameInput" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="passwordInput" className="col-xs-2 col-form-label">Password</label>
      <div className="col-xs-5">
        <input type="password" className="form-control" id="passwordInput" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="emailInput" className="col-xs-2 col-form-label">Email</label>
      <div className="col-xs-5">
        <input type="email" className="form-control" id="emailInput" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="zipCodeInput" className="col-xs-2 col-form-label">Zip Code</label>
      <div className="col-xs-5">
        <input type="text" className="form-control" id="zipCodeInput" />
      </div>
    </div>
    <div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </div>
  // </form>
);

export default Main;
