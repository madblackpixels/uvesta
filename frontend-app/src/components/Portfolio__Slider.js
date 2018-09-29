import React, { Component } from 'react'
import Coverflow from 'react-coverflow'
import { StyleRoot } from 'radium'


// code
export default class Portfolio__Slider extends Component {

    render() {

        return(

            <StyleRoot>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation
                    enableHeading
                    enableScroll={false}
                    media={{
                        '@media (max-width: 900px)': {
                            width: '600px',
                            height: '300px'
                        },
                        '@media (min-width: 900px)': {
                            width: '960px',
                            height: '400px'
                        }
                    }}
                >

                    {this.props.content.map(item => (
                        <img key={item.id} src={item.image} alt={item.name} data-action="http://yandex.ru/"/>
                    ))}

                </Coverflow>
            </StyleRoot>
        )
    }

}