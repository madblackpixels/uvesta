import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col, Glyphicon, Image } from 'react-bootstrap'



// code
export default class Main_IntroBlock extends Component {

    render() {

        return(
            <Grid fluid={true} className="no-padding">

                <div id="triangle-topleft__thin-bright"></div>
                <div id="triangle-topleft__thin-blood"></div>

                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={8}>
                            <h1 className="text-color__bright-red">
                                НЕ ВОЗВРАЩАЮТ ДОЛГ?
                            </h1>
                            <h2 className="text-color__blood-red">
                                ВЕРНЕМ ВАШ ДОЛГ
                                С ФИЗИЧЕСКОГО ИЛИ ЮРИДИЧЕСКОГО ЛИЦА.
                                БЫСТРО. НАДЕЖНО. ЗАКОННО. БЕЗ ПРЕДОПЛАТЫ.
                            </h2>
                            <h3 className="text-color__bright-red">
                                ПОЧЕМУ МЫ?
                            </h3>
                            <ul>
                                <li>
                                    <Glyphicon glyph="ok" className="text-color__bright-red glyphicon__margin"/>
                                    <span className="text-color__blood-red">
                                        Более 10 лет успешного опыта в сфере юридических услуг по взысканию долгов.
                                    </span>
                                </li>
                                <li>
                                    <Glyphicon glyph="ok" className="text-color__bright-red glyphicon__margin"/>
                                    <span className="text-color__blood-red">
                                        Уникальная законная схема работы по взысканию долга - от судебных переговоров
                                        с должником до исполнительного производства.
                                        Мы сотрудничаем с судебными приставами, это позволяет наложить взыскание
                                        на имущество должника. Применяем иные эффективные процедуры предусмотренные законом
                                        (в том числе наложение субсидарной ответственности и т.д.).
                                    </span>
                                </li>
                                <li>
                                    <Glyphicon glyph="ok" className="text-color__bright-red glyphicon__margin"/>
                                    Поможем даже в самой сложной ситуации.
                                </li>
                                <li>
                                    <Glyphicon glyph="ok" className="text-color__bright-red glyphicon__margin"/>
                                    <span className="text-color__blood-red">
                                        Мы берем оплату только за результат, в размере от 10% до 30% от суммы долга
                                        (размер процента зависит от сложности ситуации), в определенных случаях наша
                                        работа окажется бесплатной для Вас, мы вернем долг, а за это оплатит должник.
                                    </span>
                                </li>
                                <li>
                                    <Glyphicon glyph="ok" className="text-color__bright-red glyphicon__margin"/>
                                    <span className="text-color__blood-red">
                                        Работаем по договору, поэтому Ваши права защищены.
                                    </span>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <Image src="http://127.0.0.1:8000/media/system/intro.png" className="intro_img"/>
                        </Col>
                    </Row>
                </Grid>

                <div id="triangle-bottomright__bold-blood"></div>

            </Grid>
        )
    }
}