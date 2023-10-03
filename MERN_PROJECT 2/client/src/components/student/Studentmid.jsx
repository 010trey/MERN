import React from 'react';
import './ImageLink.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function ImageLink() {
  return (
    <div>
      <div target="_blank" rel="noopener noreferrer">
        <br />
        <br />
        <br />
        <div className="image-container">
          <div className='box'>
            <br />
            <Link to={'/math'}>
              <img src="/public/img/download.jpeg" alt="Clickable Image" />
            </Link>
            <h3 className="text-center bg-green-500 text-white py-2">Math</h3>
          </div>
          <div className='box'>
            <Link to={'/mern'}>
              <img src="/public/img/download (2).jpeg" alt="Clickable Image" />
            </Link>
            <h3 className="text-center bg-green-500 text-white py-2">Biology</h3>
          </div>
          <div className='box'>
            <br />
            <Link to={'/physics'}>
              <img src="/public/img/download (12).jpeg" alt="Clickable Image" />
            </Link>
            <h3 className="text-center bg-green-500 text-white py-2">Physics</h3>
          </div>
        </div>

        <br />

        <div className="image-container">
          <div className='box'>
            <br />
            <Link to={'/geography'}>
              <img src="/public/img/download (16).jpeg" alt="Clickable Image" />
            </Link>
            <h3 className="text-center bg-green-500 text-white py-2">Geography</h3>
          </div>
          <div className='box'>
            <Link to={'/history'}>
              <img src="/public/img/download (21).jpeg" alt="Clickable Image" />
            </Link>
            <h3 className="text-center bg-green-500 text-white py-2"> History</h3>
          </div>
          <div className='box'>
            <br />
            <Link to={'/chemistry'}>
              <img src="/public/img/download (7).jpeg" alt="Clickable Image" />
            </Link>
            <h3 className="text-center bg-green-500 text-white py-2"> Chemistry</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLink;