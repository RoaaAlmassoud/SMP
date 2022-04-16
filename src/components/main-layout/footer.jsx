import React from 'react';
import {Menu} from "semantic-ui-react"

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    handleItemClick = (e, {name}) => {
        this.setState({
            activeItem: name,
            menuOpen: false
        }, () => {
            this.props.history.push(`/${name === 'home' ? '' : name ===
            'support' || name === 'trips' || name === 'requests' ? name + '/1' : name}`)
        })
    };

    render() {
        return (
            <div className={'footer-section'} id={'footer-section'}>
                <img src={"/images/main-images/media.svg"}
                     alt={'img'}
                     className={'footer-image'}
                />
                <div className={'footer'}>
                    <Menu>

                        <Menu.Item
                            className={'underline'}
                            name='運営会社'
                            // active={activeItem === 'support'}
                            onClick={this.handleItemClick}
                        />

                        <Menu.Item
                            // className={'underline'}
                            name='プライバシーポリシー'
                            //active={activeItem === 'disclaimer'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            //className={'underline'}
                            name='利用規約'
                            //active={activeItem === 'Advises'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            //className={'underline'}
                            name='お問い合わせ'
                            //active={activeItem === 'Advises'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            //className={'underline'}
                            name='nichijo media'
                            //active={activeItem === 'Advises'}
                            onClick={this.handleItemClick}
                        >
                            <span>nichijo media</span>
                            <img src={'/images/main-images/media-box.svg'}/>

                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <p>
                                Copyright © 2021 SPM Co., Ltd. All rights reserved.
                            </p>
                        </Menu.Menu>
                    </Menu>
                </div>
            </div>
        );
    }
}
