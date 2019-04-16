import React from 'react';

function Content({ children }) {
  return (
    <div className="container mx-auto bg-grey-light p-4">
      {children}
    </div>
  );
}

export default Content;
