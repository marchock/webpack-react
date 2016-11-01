import React, { Component } from 'react';
import YouTube from 'react-youtube';


// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './video-action';


class Video extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.getData();
    }

    render() {

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };


        return (
            <div>
                <h1>{this.props.video.feed}</h1>

                  <YouTube
                    videoId="sC9abcLLQpI"
                    opts={opts}
                    onReady={this._onReady}
                  />
            </div>
        );
    }
};


// REDUX

// these are required mapStateToProps, mapDispatchToProps and connect


// bind data to the props
function mapStateToProps(state) {
    return {
        video: state.video,
    }
}

// bind actions to the props
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

// connect props and actions to the Home Class
export default connect(mapStateToProps, mapDispatchToProps)(Video);
