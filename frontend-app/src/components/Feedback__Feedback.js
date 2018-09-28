import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import InputMask from 'react-input-mask';

// bootstrap
import { Row, Col, Checkbox, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'


// code
export default class Feedback__Feedback extends Component {

    constructor() {
        super()
        this.state = {html: ""};
    };

    handleChange = evt => {
        this.setState({html: evt.target.value});
    };

    render() {

        return(
            <form>
                <Row>
                    <Col xs={12} sm={4} md={4} lg={4} className="">
                        <p className="text-color__gray">
                            <span className="text-bold">
                                Отметьте документы подтверждающие долг
                            </span>
                        </p>
                        <Checkbox>
                            <span className="text-color__blood-red text-bold">
                                Расписка
                            </span>
                        </Checkbox>
                        <Checkbox>
                            <span className="text-color__blood-red text-bold">
                                Договор
                            </span>
                        </Checkbox>
                        <Checkbox>
                            <span className="text-color__blood-red text-bold">
                                Судебное решение
                            </span>
                        </Checkbox>
                        <Checkbox>
                            <span className="text-color__blood-red text-bold">
                                Исполнительный лист
                            </span>
                        </Checkbox >
                        <Checkbox>
                            <span className="text-color__blood-red text-bold">
                                Другой документ
                            </span>
                        </Checkbox>
                    </Col>
                    <Col xs={12} sm={8} md={8} lg={8} className="">
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel className="text-color__gray">
                                Краткая история долга
                            </ControlLabel>
                            <ContentEditable
                                html={this.state.html}
                                disabled={false}
                                onChange={this.handleChange}
                                tagName='article'
                                className="form-textarea"
                            />

                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4} md={4} lg={4} className="">
                        <FormGroup controlId="name">
                            <FormControl
                                type="text"
                                placeholder="Имя"
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} className="">
                        <InputMask
                            {...this.props} mask="+7 (999) 999 99 99" maskChar="-"
                            placeholder="Телефон"
                        />
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} className="">
                        <FormGroup controlId="email">
                            <FormControl
                                type="text"
                                placeholder="Имя"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Button type="submit">Получить бесплатный анализ ситуации</Button>
                </Row>
            </form>
        )
    }

}