import React from 'react';

export default class Banner extends React.Component {
    render() {
        return (
            <nav className="banner container-fluid p-0">
                <img className="pasteur-logo" src='' alt="none" />
                <div className=" banner-text col-12">Collaborations Institut Pasteur Paris</div>
                <div className="banner-login col-20">
                    <div className="login-title">
                        Login
                    </div>
                    <form className="login-content">
                       
                    </form>
                </div>
            </nav>
        );
    }
}