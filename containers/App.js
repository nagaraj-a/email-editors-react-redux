/**
 * Created by Nagaraj.ambig on 10/5/2016.
 */

import React from 'react';
import TinyMCE from 'react-tinymce';

export default class App extends React.Component {

    render() {
        return (
            <TinyMCE
                config={{
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                }}
            />
        );
    }
}