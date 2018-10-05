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
            modal_text:    "",
        };
    }

    handleHide() {
        this.setState({
            show: false,
        });
    };

    fn = function(id, name, text) {
        let cur_image = document.getElementById(id);
        let figure_style = window.getComputedStyle(cur_image.parentNode);

        if (figure_style.getPropertyValue('opacity') == 1) {
            this.setState({
                show: true,
                modal_title: name,
                modal_text:  text,
            });
        }
    };


    render() {
        
        return(
            <div>
                <Coverflow width="960" height="300"
                    displayQuantityOfSide={2}
                    enableScroll={false}
                    clickable={true}
                    active={0}
                >

                    {this.props.content.map(item => (
                        <img
                            id={item.id}
                            key={item.id}
                            src={item.image}
                            alt={item.name}
                            onClick={
                                () => this.fn(
                                    item.id,
                                    item.name,
                                    item.text,
                                )
                            }
                        />
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
                        {this.state.modal_text}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}