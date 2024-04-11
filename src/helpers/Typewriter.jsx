import React from 'react';
import Typewriter from 'typewriter-effect';

function MyTypewriterComponent() {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Recent Graduate', 'Full-Stack Developer', 'React, Next.js, Express', 'MERN Stack', 'AWS Certified'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </>
  );
}

export default MyTypewriterComponent;