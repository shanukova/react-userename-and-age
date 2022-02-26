import React, { useState } from 'react';

import classes from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [err, setErr] = useState('');


  const addUserHandler = e => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErr({
        title: 'Invalid input!',
        message: 'Please enter a valid name and age (non-empty values).'
      });
    };
    if (+enteredAge < 1) {
      setErr({
        title: 'Invalid input!',
        message: 'Please enter a valid age (> 0).'
      });
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');

  };

  const usernameChangeHandler = e => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value);
  };

  const errHandler = () => {
    setErr(null);
  }

  return (
    <div>
      {err &&
        <ErrorModal
          title={err.title}
          message={err.message}
          onConfirm={errHandler}
        />
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
