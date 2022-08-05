import React from 'react';
import { Link } from 'react-router-dom';

export default function notfound() {
  return (
    <>
      <div className="error-page vh-100 d-flex justify-content-center text-center">
        <div className="my-auto">
          <h3>Comming Soon</h3>
          <p>This page is under progress...</p>
          <Link to="/" className="btn">
            Back to Home <i className="icon ion-md-home"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
