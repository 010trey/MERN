import React from 'react';
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <Link to={'/registerteacher'} className='flex justify-center items-center h-screen gap-5 '>
      {/* Box1 */}

      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          src="/public/img/Profpic.png"
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
          alt="Louvre"
        />
      </div>

      {/* Box2 */}
      <Link to={'/registerstudent'} className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          src="/public/img/student.jpg"
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
          alt="Louvre"
        />
      </Link>
    </Link>
  );
};

export default Choose;