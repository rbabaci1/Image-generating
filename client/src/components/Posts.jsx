import React from 'react';
import Card from './Card';

const Posts = ({ data, message }) => {
  if (data?.length > 0) {
    return data.map(post => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className='mt-5 font-bold text-[#6469ff] text-xl uppercase'>
      {message}
    </h2>
  );
};

export default Posts;
