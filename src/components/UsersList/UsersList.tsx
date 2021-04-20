import * as React from 'react';
import { UserCard } from '../UserCard/UserCard';
import { User } from '../../App';

type UsersListProps = {
  users: User[]
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div>
      {
        users?.map((user: User) => (
          <UserCard
            key={user.id}
            {...user}
            />
          )
        )
      }
    </div>
  );
};
