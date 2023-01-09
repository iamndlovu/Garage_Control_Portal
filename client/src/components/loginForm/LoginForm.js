import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from './LoginForm.module.scss';

const LoginForm = ({ handler }) => {
  const [users, setUsers] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8080/users')
      .then(res => setUsers(res.data))
      .catch(err => alert(`LoginForm COMPONENNT - ${err}`));
  }, []);

  const onChangeName = e => setUsername(e.target.value);
  const onChangePwd = e => setPassword(e.target.value);

  const submitForm = e => {
    e.preventDefault();

    for (let user of users) {
      if (user.username === username && user.password === password) {
        handler(user);
        return;
      }
    }

    alert('Wrong username or password');
    setPassword('');
  };

  return (
    <form className={styles.LoginForm} onSubmit={submitForm}>
      <div className={styles.formGroup}>
        <label htmlFor="username" className={styles.offscreen}>
          Your username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={onChangeName}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.offscreen}>
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={onChangePwd}
          required
        />
      </div>
      <input type="submit" value="LOGIN" />
    </form>
  );
};

export default LoginForm;
