import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from 'reactstrap';
import './App.css';
import Movie from './Movie';

const App = () => {
  const [listMovie, setListMovie] = useState([
    {
      id: 1,
      title: 'Avenger EndGame',
      description: '2019',
      createAt: '11-09-2000',
      updateAt: '11-09-2000',
    },
    {
      id: 2,
      title: 'Avenger InfinityWar',
      description: '2018',
      createAt: '11-09-2000',
      updateAt: '11-09-2000',
    },
    {
      id: 3,
      title: 'Batman Bad Blood',
      description: '2016',
      createAt: '11-09-2000',
      updateAt: '11-09-2000',
    },
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [movieUpdate, setMovieUpdate] = useState({});

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddNewMovie = () => {
    const time = new Date();
    const newMovie = {
      id: Math.floor(Math.random() * 100) + 1,
      title: title,
      description: description,
      createAt: '12/09/2022',
      updateAt: '12/09/2022',
    };
    const listMovieTemp = [...listMovie];
    listMovieTemp.push(newMovie);
    setListMovie(listMovieTemp);
  };

  const handleDeleteMovie = (id) => {
    const listMovieTemp = [...listMovie];
    const movies = listMovieTemp.filter((element) => !(element.id == id));
    console.log('movies: ', movies);
    setListMovie(movies);
  };

  const handleGetDataUpdate = (id) => {
    const movies = [...listMovie];
    const index = movies.findIndex((movie) => {
      return movie.id === id;
    });
    setTitle(movies[index].title);
    setDescription(movies[index].description);
    setMovieUpdate(movies[index]);
  };

  const handleUpdateMovie = () => {
    const movies = [...listMovie];
    const index = movies.findIndex((movie) => {
      return movie.id === movieUpdate.id;
    });
    // Update data trong object
    movies[index].title = title;
    movies[index].description = description;
    setListMovie([...movies]);
    setMovieUpdate({});
    // clear input
    setTitle('');
    setDescription('');
  };

  return (
    <Container className="container-crud">
      <Row>
        <Col span={4}>
          <Button
            color="success"
            block="false"
            className="btn-create"
            onClick={handleAddNewMovie}
          >
            Create
          </Button>
        </Col>
        <Col span={4}>
          {movieUpdate.id ? (
            <Button
              color="primary"
              block="false"
              className="btn-create"
              onClick={handleUpdateMovie}
            >
              Update
            </Button>
          ) : (
            ''
          )}
        </Col>
      </Row>
      <Row>
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your title..."
              type="text"
              value={title}
              onChange={handleChangeTitle}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Enter your description..."
              type="text"
              value={description}
              onChange={handleChangeDescription}
            />
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <h1>Movie Index</h1>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listMovie.map((item) => {
              return (
                <Movie
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  create={item.createAt}
                  update={item.updateAt}
                  onMovie={handleDeleteMovie}
                  onUpdate={handleGetDataUpdate}
                ></Movie>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default App;
