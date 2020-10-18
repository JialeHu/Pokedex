import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import InfiniteScroll from 'react-infinite-scroller';

import pCard from "../components/Card";
import PopupContent from "../components/PopupContent";

function Pokemon() {
    const baseAPI = "https://pokeapi.co/api/v2/pokemon/";

    const [searchVal, setSearchVal] = React.useState("");
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState({});

    const [items, setItems] = React.useState([]);
    const [hasMore, setHasMore] = React.useState(true);
    const [nextURL, setNextURL] = React.useState(baseAPI);

    function search(event) {
        event.preventDefault();
        if (searchVal.length === 0) return;
        fetch(baseAPI + searchVal.toLowerCase()).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return null;
            }
        }).then(data => {
            if (data) {
                setContent(PopupContent(data));
            } else {
                setContent("Pokemon Not Found");
            }
            setOpen(true);
        });
    }

    function loadMore(page) {
        fetch(nextURL).then(response => response.json()).then(data => {
            if (data.next) {
                setNextURL(data.next);
                data.results.forEach(entry => {
                    fetch(entry.url).then(response => response.json()).then(pokemon => {
                        items.push(pCard(pokemon));
                    });
                });
            } else {
                setHasMore(false);
            }
        });
        setItems(items);
    }

    return (
        <Container>
            <Row>
                <Col style={{marginTop: "100px"}} >
                    <Form inline onSubmit={search}>
                        <FormControl type="text" placeholder="Search for Pokemon" className="mr-sm-2" value={searchVal} onChange={val => setSearchVal(val.target.value)} />
                        <Button variant="outline-primary" onClick={search}>Search</Button>
                    </Form>
                </Col>
            </Row>

            <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)}>
                {content}
            </Popup>
            
            <InfiniteScroll
                threshold={100}
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<Spinner key="0" animation="border" variant="primary" style={{marginLeft: "50%", marginTop: "20px"}} />} 
            >
                <Row>
                    {items}
                </Row>
            </InfiniteScroll>

        </Container>
    );
}

export default Pokemon;