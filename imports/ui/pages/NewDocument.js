import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';

const NewDocument = () => (
  <div className="NewDocument">
    <h4 className="page-header">New Document (You can try posting links from <a href="http://reddit.com/r/wholesomememes" target="_blank">/r/wholesomememes</a>.)</h4>
    <DocumentEditor />
  </div>
);

export default NewDocument;
