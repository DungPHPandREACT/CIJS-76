import React from 'react';
import { Button } from 'reactstrap';

const Movie = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.create}</td>
      <td>{props.update}</td>
      <td>
        <Button color="primary" className="mg-btn">
          Edit
        </Button>
        <Button color="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default Movie;
