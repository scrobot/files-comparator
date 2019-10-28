import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../css/WelcomeCard.css"

type Card = {
    title?: string,
    text: Array<String>
}

export class WelcomeCard extends Component<Card> {

    static defaultProps = {
        text: []
    }

    render() {
        return <div className="welcome-board">
            <img className="icon" src={process.env.PUBLIC_URL + '/files.svg'}/>
            <div className="content">
                <h1>{this.props.title}</h1>
                <p>
                    {this.props.text.map((text, index) => <span key={"id-" + index}>{text}<br/></span>)}
                </p>
            </div>
        </div>
    }

}

export default WelcomeCard;