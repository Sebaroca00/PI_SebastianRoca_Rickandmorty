import React from 'react';
import styles from './Form.module.css';
import { useState } from 'react';
import validator from './Validation';

function Form(props) {
  const { login } = props;
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validator({ ...userData, [event.target.name]: event.target.value }));
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.e1 ? (
            <span className={styles.Error}>{errors.e1}</span>
          ) : errors.e2 ? (
            <span className={styles.Error}>{errors.e2}</span>
          ) : (
            <span className={styles.Error}>{errors.e3}</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
          {errors.p1 ? (
            <span className={styles.Error}>{errors.p1}</span>
          ) : (
            <span className={styles.Error}>{errors.p2}</span>
          )}
        </div>
        <div></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
