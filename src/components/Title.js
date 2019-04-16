import React from 'react';

function Title({ children }) {
  return (
    <h1 className="font-mono font-hairline text-2xl text-center py-4">
      {children}
    </h1>
  );
}

export default Title;
