import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=pEzK1fEoYwKuwE1cb7QEM3VkFlAOwywy&limit=12`
      );
      setGifs(response.data.data);
      setSearch('');
      setSearched(true);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Search GIFs</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for GIFs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      <Row>
        {gifs.map((gif) => (
          <Col xs={12} sm={6} md={4} lg={3} key={gif.id}>
            <Card className="text-center">
              <Card.Img variant="top" src={gif.images.fixed_height.url} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
