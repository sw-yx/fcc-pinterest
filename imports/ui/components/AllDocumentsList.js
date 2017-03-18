import React from 'react';
// import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const DocumentsList = ({ documents }) => (
  documents.length > 0 ?
    <div>
      <script src="/node_modules/masonry-layout/dist/masonry.pkgd.min.js"></script>
      {documents.map(({ _id, title, url, userobject }) => (
        <div key={ _id } className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
            <div className="grid-item">
            { title } <br/>
            <i> by </i><a href={`/users/${userobject._id}`}>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
            `${userobject.profile.name.first} ${userobject.profile.name.last}`
            : `${userobject.profile.name}` } </a> <br/>
            <img onError={(x) => { x.target.src = 'http://icons.iconarchive.com/icons/umut-pulat/tulliana-2/128/file-broken-icon.png'; }} src={url}></img></div>
        </div>
      ))}
    </div>
  :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;


// <ListGroupItem key={ _id } >{ title }
//             <img src={url}></img>
//             <i> by </i><a href={`/users/${userobject._id}`}>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
//             `${userobject.profile.name.first} ${userobject.profile.name.last}`
//             : `${userobject.profile.name}` } </a>
//           </ListGroupItem>
//         ))}
//       </ListGroup>


//  data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'


// const DocumentsList = ({ documents }) => (
//   documents.length > 0 ?
//     <div>
//       <script src="/node_modules/masonry-layout/dist/masonry.pkgd.min.js"></script>
//       {documents.map(({ _id, title, url, userobject }) => (
//         <div key={ _id } className="grid">
//             <div className="grid-item">{ title } <br/> <img src={url}></img></div>
//         </div>
//       ))}
//     </div>
//   :
//   <Alert bsStyle="warning">No documents yet.</Alert>
// );
