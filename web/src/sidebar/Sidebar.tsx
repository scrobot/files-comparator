import React, { Component } from 'react';
import "./Sidebar.css"

type Banner = {
    url: string,
    link: string
}

export class Sidebar extends Component<Banner> {

    static defaultProps = {
        url: 'https://loremflickr.com/150/200',
        link: 'https://www.lipsum.com/'
    }

    render() {
        return <aside className="Sidebar">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                <img src={this.props.url} alt="banner" />
            </a>
        </aside>
    }

}