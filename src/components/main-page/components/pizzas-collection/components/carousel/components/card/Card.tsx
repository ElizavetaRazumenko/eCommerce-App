import React from 'react';

type Props = {
  name: string;
};

export const Card: React.FC<Props> = ({ name }) => (
  <div>
    <p>Card with Pizza</p>
    <p>{name}</p>
  </div>
);
