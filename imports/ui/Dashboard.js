import React from 'react';

import PrivateHeader from './PrivateHeader';


//stateless funcitonal component
export default () => {
  return (
    <div>
      <PrivateHeader title="Your Dashboard"/>
      <div className="page-content">
        Dashboard page content.
      </div>

    </div>
  );
};
