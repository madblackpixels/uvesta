import React, { Component } from 'react'
import Coverflow from 'react-coverflow';

const fn = function () {
  /* do your action */
};


// code
export default class Portfolio__Slider extends Component {

    render() {

        return(
            <Coverflow width="960" height="300"
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableScroll={false}
                    clickable={true}
                    active={0}
                >
                <div
                    onClick={() => fn()}
                    onKeyDown={() => fn()}
                    role="menuitem"
                    tabIndex="0"
                >
                    <img
                        src='/system/portfolio/portfolio3.jpg'
                        alt='title or description3'
                        style={{
                            display: 'block',
                            width: '100%',
                        }}
                    />
                </div>
                <img src='/system/portfolio/portfolio1.jpg' alt='title or description' data-action="http://yandex.ru/"/>
                <img src='/system/portfolio/portfolio2.jpg' alt='title or description' data-action="http://yandex.ru/"/>
            </Coverflow>
        )
    }

}