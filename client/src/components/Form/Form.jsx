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
    <div className={styles.Contenedor}>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <div className={styles.Datos}>
          <label>Email</label>
          <input className={styles.Datos2}
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
       
       
          <label>Password</label>
          <input className={styles.Datos2}
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
       
      <hr />
        <button className={styles.Button} type="submit">Submit</button>
         </div>
      </form>
    </div>
  );
}

export default Form;
