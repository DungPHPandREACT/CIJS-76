import React from 'react';
import { Button } from 'reactstrap';

const Movie = (props) => {
  const handleRemoveMovie = () => {
    props.onMovie(props.id);
  };

  const handleGetID = () => {
    props.onUpdate(props.id);
  };

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.create}</td>
      <td>{props.update}</td>
      <td>
        <Button color="primary" className="mg-btn" onClick={handleGetID}>
          Edit
        </Button>
        <Button color="danger" onClick={handleRemoveMovie}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Movie;
