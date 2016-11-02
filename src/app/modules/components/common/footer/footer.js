// CSS
require('./footer.css');

import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
        <footer className="footer">
            <div className="grid">
                <div className="col-1-1">
                    {this.props.footerMessage}

                    <a href="#" className="facebook" title="Facebook">
                        <svg className="share-icon icon-header-facebook">
                            <use xlinkHref="/svg/sprite.svg#icon-header-facebook"></use>
                        </svg>
                    </a>
                    <a href="#" className="twitter" title="Twitter">
                        <svg className="share-icon icon-header-twitter">
                            <use xlinkHref="/svg/sprite.svg#icon-header-twitter"></use>
                        </svg>
                    </a>
                    <a href="#" className="google" title="Google+" target="_blank">
                        <svg className="share-icon icon-header-gplus">
                            <use xlinkHref="/svg/sprite.svg#icon-header-gplus"></use>
                        </svg>
                    </a>
                    <a href="#" className="email" target="_blank" title="Email" >
                        <svg className="share-icon icon-header-mail">
                            <use xlinkHref="/svg/sprite.svg#icon-header-mail"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
  }
}