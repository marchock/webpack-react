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

                    <a href="#" title="Facebook">
                        <svg className="share-icon">
                            <use xlinkHref="/assets/svg/sprite.svg#icon-header-facebook"></use>
                        </svg>
                    </a>
                    <a href="#" title="Twitter">
                        <svg className="share-icon">
                            <use xlinkHref="/assets/svg/sprite.svg#icon-header-twitter"></use>
                        </svg>
                    </a>
                    <a href="#" title="Google+">
                        <svg className="share-icon">
                            <use xlinkHref="/assets/svg/sprite.svg#icon-header-gplus"></use>
                        </svg>
                    </a>
                    <a href="#" title="Email">
                        <svg className="share-icon">
                            <use xlinkHref="/assets/svg/sprite.svg#icon-header-mail"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
  }
}