import React from 'react';
import Typewriter from 'typewriter-effect';

function MyTypewriterComponent() {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Recent Graduate', 'Development', 'Technical Support', 'Cloud Architecture', 'Cybersecurity'],
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