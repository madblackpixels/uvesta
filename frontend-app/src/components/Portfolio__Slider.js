import React, { Component } from 'react'

// bootstrap
import { Modal } from 'react-bootstrap'

function CardData(ff) {
  return ff;
}


// code
class Cards extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
            modal_content: "",
            modal_text:    "",
            modal_name:    "",
            modal_pdf:     "",

        };
    }

    fn = function(id, name, text, pdf) {

        this.setState({
            show: true,
            modal_text: text,
            modal_name: name,
            modal_pdf:  pdf,
        });

    };

    handleHide() {
        this.setState({
            show: false,
        });
    };


    render() {
        const cardData = CardData(this.props.data);
        
        return(
            <section style={{marginLeft:"45px",marginRight:"45px",overflow:"hidden"}}>
                {
                    cardData.map((card, i) => {
                        return (
                            <div className="card" id="card" style={this.props.cardStyle} key={i}>
                                <a>
                                    <img src={card.image} style={{cursor:"pointer"}} onClick={
                                        () => this.fn(
                                            card.id,
                                            card.name,
                                            card.text,
                                            card.pdf
                                        )
                                    }
                                    />
                                </a>
                                <div className="title text-color__white" style={{fontSize:"15px"}}
                                     dangerouslySetInnerHTML={{__html: card.name}}
                                />

                                <Modal show={this.state.show} onHide={this.handleHide} bsSize="large">
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            {this.state.modal_name}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <object data={this.state.modal_pdf} type="application/pdf" width="100%" height="500px">
                                                PDF файл: <a href={this.state.modal_pdf}>uvesta.pdf</a>
                                            </object>
                                        </div>
                                    </Modal.Body>
                                </Modal>

                            </div>
                        )
                    })
                }
            </section>
        )
    }

}


export default class Portfolio__Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard: 0,
            position: 0,
            cardStyle: {
                transform: 'translateX(0px)'
            },
            width: 300,
        };
    }

    componentDidMount() {
        let boxWidth = document.getElementById("card").clientWidth;
        this.setState({ width: boxWidth });
    }

    handleClick(type) {
        let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
        let elem = document.getElementById("cards-slider").offsetWidth;
        margin = JSON.parse(margin.replace(/px/i, ''));
        const cardWidth = this.state.width;
        const cardMargin = margin;
        const cardNumber = this.props.content.length;
        let currentCard = this.state.currentCard;
        let position = this.state.position;

        if(type === 'next' && currentCard < cardNumber-1) {
            currentCard++;
            position -= (cardWidth+cardMargin+(elem*0.035));
        } else if(type === 'prev' && currentCard > 0) {
            currentCard--;
            position += (cardWidth+cardMargin+(elem*0.035));
        }
        this.setCard(currentCard, position);
    }

    setCard(currentCard, position) {
        this.setState({
            currentCard: currentCard,
            position: position,
            cardStyle: {
                transform: `translateX(${position}px)`
            }
        })
    }

    render() {
        return (
            <div className="cards-slider" id="cards-slider">
                <div className="slider-btns">
                    <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
                    <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
                </div>
                <Cards cardStyle={this.state.cardStyle} data={this.props.content}/>
            </div>
        )
    }
}
