import React from "react";
import './Footer.css';
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="col-12 footer">
            <span><p>© 2019 2FilesComparator Software Inc</p></span>
            <span>|</span>
            <span><Link to="/terms">Terms</Link></span>
            <span>|</span>
            <span><Link to="/privacy">Privacy Policy</Link></span>
        </footer>
    );
};

export default Footer;