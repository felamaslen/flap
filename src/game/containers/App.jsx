/* eslint-disable no-unused-vars */
import { Map as map } from 'immutable';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { } from '../actions/app.actions';

import Header from '../components/Header';

import getConfig from '../../config';
const config = getConfig();

export class App extends Component {
    render() {
        return (
            <div className="container">
                <Header title={this.props.title} />
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

function mapStateToProps(reduction, ownProps) {
    const appState = reduction.get('appState');

    return {
        title: appState.get('title')
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

