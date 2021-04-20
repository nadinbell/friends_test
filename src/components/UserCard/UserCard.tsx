import React from 'react';
import { getUserImage } from '../../api/api';
import './UserCard.css';

type UserCardProps = {
  name: string,
  email: string,
  id: number
}

export const UserCard: React.FC<UserCardProps> = ({ name, email, id }) => {
  const userImage = getUserImage(id);
  return (
    <div className='userCard'>
      <img alt='users' src={userImage} />
      <div className='userName'>{name}</div>
      <div>{email}</div>
    </div>
  )
}