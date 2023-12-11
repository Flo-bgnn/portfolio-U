
import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <div className="page-content">
      <style jsx>{`
        .page-content {
          background: url('/images/F1.jpg') no-repeat center;
          background-size: cover;
          padding: 50px;
        }
        .content {
          background-color: white;
          padding: 20px;
          margin: 0 auto;
          width: 80%;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }
      `}</style>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
