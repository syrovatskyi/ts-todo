import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Page of information</h1>
      <p>Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Atque deserunt ea fugit maiores numquam perspiciatis
        provident quidem rerum soluta tempora!
      </p>
      
      <button
        className="btn"
        onClick={() => history.push('/')}
      >
        Back to ToDo-list
      </button>
    </>
  )
};

export default AboutPage;
