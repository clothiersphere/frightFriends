import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {

  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } 
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.zip) {
    errors.zip = 'Required'
  } else if(isNaN(Number(values.zip))) {
    errors.zip = "Must be a number"
  }
  console.log(errors)
  return errors;
}

const RegistrationForm = (props) => {
  const { handleSubmit } = props

  return (
   <form onSubmit={handleSubmit}>
     <div className="form-group row">
       <label htmlFor="firstNameInput" className="col-xs-2 col-form-label">First Name </label>
       <div className="col-xs-5">
         <Field name="firstName" className="form-control" component="input" type="text" placeholder="First Name" />
       </div>
     </div>
     <div className="form-group row">
       <label htmlFor="lastNameInput" className="col-xs-2 col-form-label">Last Name</label>
       <div className="col-xs-5">
         <Field name="lastName" className="form-control" component="input" type="text" placeholder="Last Name" />
       </div>
     </div>
     <div className="form-group row">
       <label htmlFor="passwordInput" className="col-xs-2 col-form-label">Password</label>
       <div className="col-xs-5">
         <Field name="password" className="form-control" component="input" type="text" placeholder="Password" />
       </div>
     </div>
     <div className="form-group row">
       <label htmlFor="emailInput" className="col-xs-2 col-form-label">Email</label>
       <div className="col-xs-5">
         <Field name="email" className="form-control" component="input" type="email" placeholder="E-mail" />
       </div>
     </div>
     <div className="form-group row">
       <label htmlFor="zipCodeInput" className="col-xs-2 col-form-label">Zip Code</label>
       <div className="col-xs-5">
         <Field name="zip" className="form-control" component="input" type="text" placeholder="Zip Code" />
       </div>
     </div>
     <div>
       <button type="submit" className="btn btn-primary">Submit</button>
     </div>
   </form>
  );
}

export default reduxForm({ 
  form: 'user',
  validate
})(RegistrationForm)