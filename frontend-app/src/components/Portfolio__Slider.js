import React, { Component } from 'react'
import Coverflow from 'react-coverflow'

// bootstrap
import { Modal, Button } from 'react-bootstrap'


// code
export default class Portfolio__Slider extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
            modal_content: "",
            modal_title: "1",
        };
    }

    handleHide() {
        this.setState({
            show: false,

        });
    };

    fn = function(id, name) {
        this.setState({
            show: true,
            modal_title: name
        });
    };


    render() {

        return(
            <div>
                <Coverflow width="960" height="300"
                    displayQuantityOfSide={2}
                    navigation={true}
                    enableScroll={false}
                    clickable={true}
                    active={0}
                >

                    {this.props.content.map(item => (
                        <img key={item.id} src={item.image} alt={item.name} onClick={() => this.fn(item.id, item.name)}/>
                    ))}
                </Coverflow>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            {this.state.modal_title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                        ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}