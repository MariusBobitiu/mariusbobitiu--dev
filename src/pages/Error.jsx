import React from 'react';
import '../styles/Pages/Error.css';

const Error = () => {
  return (
    <div className='error-page'>
        <div className='error-page__container'>
            <h1 className='error-page__container__title'>404</h1>
            <div className='error-page__container__divider'>
              <h2 className='error-page__container__subtitle'>Page Not Found</h2> 
            </div>
            <p className='error-page__container__text'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href='/' className='button' aria-label='Homepage button'>Go to Homepage</a>
        </div>
    </div>
  )
}

export default Error
