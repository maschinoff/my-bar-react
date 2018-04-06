import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout, userData }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>My Bar</h1>
                </Link>
                <div>
                    <h4>
                        <a href="https://myaccount.google.com">
                            <img className="header__avatar" src={ userData.photoURL } width="40px" /> &nbsp; Welcome, {userData.name}
                        </a>
                    </h4>
                </div>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});

const mapStateToProps = (state) => ({
    userData: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);