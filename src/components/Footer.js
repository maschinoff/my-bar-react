import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const Footer = (props) => (
    <footer className="footer">
        <div className="content-container">
            <div className="footer__content">
                <div>Copyright &copy; {moment().format('YYYY')} by <a href="http://www.maschinov.pp.ua" target="blank">Maschinoff</a></div>
                <Link to="/help">Help</Link>
            </div>
        </div>
    </footer>
);

export default Footer;