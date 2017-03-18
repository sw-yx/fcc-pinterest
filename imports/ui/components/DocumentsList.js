import React from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';


const DocumentsList = ({ documents, userName }) => (
  documents.length > 0 ?
    <div>
      <script src="/node_modules/masonry-layout/dist/masonry.pkgd.min.js"></script>
      <div className="page-header clearfix">
        <h4 className="pull-left">{ userName } Documents</h4>
        <Button
          bsStyle="success"
          className="pull-right"
          href="/documents/new"
        >New Document</Button>
      </div>
      {documents.map(({ _id, title, url, userobject }) => (
        <div key={ _id } className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
            <div className="grid-item">
            { title } <br/>
            <a href={`/documents/${_id}`}>
              <img onError={(x) => { x.target.src = 'http://icons.iconarchive.com/icons/umut-pulat/tulliana-2/128/file-broken-icon.png'; }} src={url}></img>
            </a>
            </div>
        </div>
      ))}
    </div>
  :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
  userName: React.PropTypes.string,
};

export default DocumentsList;



    // { documents.length > 0 ? <ListGroup className="DocumentsList">
    //   {documents.map(({ _id, title }) => (
    //     userName === 'My' ?
    //     <ListGroupItem key={ _id } href={`/documents/${_id}`}>{ title }
    //     </ListGroupItem> :
    //     <ListGroupItem key={ _id }>{ title }
    //     </ListGroupItem>
    //   ))}
    // </ListGroup> :
    // <Alert bsStyle="warning">No documents yet.</Alert> }



// const DocumentsList = ({ documents, userName }) => (
//   <div>
//     <script src="/node_modules/masonry-layout/dist/masonry.pkgd.min.js"></script>
//     <div className="page-header clearfix">
//       <h4 className="pull-left">{ userName } Documents</h4>
//       <Button
//         bsStyle="success"
//         className="pull-right"
//         href="/documents/new"
//       >New Document</Button>
//     </div>
//     { documents.length > 0
//       ?
//         <div className="grid">
//           {documents.map(({ _id, title }) => (
//             userName === 'My' ?
//             <ListGroupItem key={ _id } href={`/documents/${_id}`}>{ title }
//             </ListGroupItem> :
//             <ListGroupItem key={ _id }>{ title }
//             </ListGroupItem>
//           ))}
//         </div>
//       :
//         <Alert bsStyle="warning">No documents yet.</Alert> }
//   </div>
// );
