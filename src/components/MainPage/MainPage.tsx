import React, { useEffect, useMemo } from 'react';
import { UsersList } from '../UsersList/UsersList';
import { Search } from '../Search/Search';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';

export type User = {
  name: string;
  id: number;
  email: string;
};

const filterUsers = (users: User[], searchField: string) => {
  return users.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
}

export const MainPage = (props) => {
  useEffect(() => props.onRequestUsers(), []);
  const { searchField, users, isPending, onSearchChange } = props;

  const filteredUsers = useMemo(
    () => filterUsers(users, searchField)
  , [users, searchField]);

  return (
    <div>
      <Search searchChange={onSearchChange}/>
      {isPending ? (
        <h1>Loading</h1>
        ) : ( 
          <ErrorHandler>
            <UsersList users={filteredUsers} />
          </ErrorHandler>
        )
      }
    </div>
  )
};