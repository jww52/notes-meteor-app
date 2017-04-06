import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';


//stateless funcitonal component
export default () => {
  return (
    <div>
      <PrivateHeader title="Your Dashboard"/>
      <div className="page-content">
        <NoteList/>
        <Editor/>
      </div>

    </div>
  );
};
