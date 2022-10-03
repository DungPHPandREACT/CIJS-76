import React, { useState, useEffect } from 'react';
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
  const [listMovie, setListMovie] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [movieUpdate, setMovieUpdate] = useState({});
  const [dataSearch, setDataSearch] = useState('');
  const [dataMovie, setDataMovie] = useState([]);
  const [widthState, setWidthState] = useState(50);
  const [isCreate, setIsCreate] = useState(true);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddNewMovie = () => {
    const newMovie = {
      title: title,
      description: description,
    };
    fetch('https://633ae6e3471b8c395577e139.mockapi.io/api/v1/list-movie', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setIsCreate(!isCreate);
      });
    // const listMovieTemp = [...listMovie];
    // listMovieTemp.push(newMovie);
    // setListMovie(listMovieTemp);
  };

  const handleDeleteMovie = (id) => {
    // const listMovieTemp = [...listMovie];
    // const movies = listMovieTemp.filter((element) => !(element.id == id));
    // console.log('movies: ', movies);
    // setListMovie(movies);

    fetch(
      'https://633ae6e3471b8c395577e139.mockapi.io/api/v1/list-movie/' + id,
      {
        method: 'DELETE',
      }
    )
      .then((res) => res.text()) // or res.json()
      .then((res) => setIsCreate(!isCreate));
  };

  const handleGetDataUpdate = (id) => {
    // const movies = [...listMovie];
    // const index = movies.findIndex((movie) => {
    //   return movie.id === id;
    // });
    // setTitle(movies[index].title);
    // setDescription(movies[index].description);
    // setMovieUpdate(movies[index]);
    fetch(
      'https://633ae6e3471b8c395577e139.mockapi.io/api/v1/list-movie/' + id,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Đã sửa thông tin',
          description: 'Đã sửa description',
        }),
      }
    )
      .then((response) => {
        response.json().then((response) => {
          setIsCreate(!isCreate);
        });
      })
      .catch((err) => {
        console.error(err);
      });
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

  const handleSearchMovie = (event) => {
    const dataInput = event.target.value;
    if (dataInput === '') {
      setDataMovie([]);
      setDataSearch(dataInput);
    } else {
      const dataInput = event.target.value;
      setDataSearch(dataInput);

      const newListMovie = listMovie.filter((movie) => {
        return movie.title.includes(dataInput);
      });
      setDataMovie(newListMovie);
    }
  };

  useEffect(() => {
    fetch('https://633ae6e3471b8c395577e139.mockapi.io/api/v1/list-movie')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListMovie(data);
      });
  }, [isCreate]);

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
        <Input
          id="search"
          name="search"
          placeholder="Search ...."
          type="text"
          onChange={handleSearchMovie}
          value={dataSearch}
        />
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
            {dataMovie.length > 0
              ? dataMovie.map((item) => {
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
                })
              : listMovie.map((item) => {
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
