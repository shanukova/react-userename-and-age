import React from 'react';

import classes from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = props => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) =>
          <li key={user.id}>
            {user.name} ({user.age} year old)
          </li>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
