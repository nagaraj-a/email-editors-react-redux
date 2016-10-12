/**
 * Created by Nagaraj.ambig on 10/5/2016.
 */

import React from 'react';
import TinyMceContainer from './tiny-mce-container';
import {Provider} from 'react-redux';
import store from '../stores/store';

export default class App extends React.Component {

    render() {
        return (<Provider store={store}>
                <TinyMceContainer />
            </Provider>
        );
    }
}