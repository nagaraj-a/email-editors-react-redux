/**
 * Created by Nagaraj.ambig on 10/6/2016.
 */

import React from 'react';
import TinyMCE from 'react-tinymce';
import {addText, doUndo, doRedo} from '../actions/index';
import {connect} from 'react-redux';

class TinyMceContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.dispatch = props.dispatch;
    }

    handleEditorChange(e) {
        this.state.dispatch(addText(e.target.getContent()));
        e.stopPropagation();
    }

    doUndo() {

        this.state.dispatch({
            type: "DO_UNDO"
        });

    }

    doRedo() {
        this.state.dispatch({
            type: "DO_REDO"
        });
    }

    render() {

         console.log("i am in render");
        let redo = this.doRedo.bind(this), undo = this.doUndo.bind(this);
        let canUndo = !this.props.canUndo, canRedo = !this.props.canRedo;
        let present = this.props.present;
        let presentText = present.length > 0 ? present[0].text : '';

        let onAddText = this.props.onAddText;
        return (<TinyMCE
            config={{
                toolbar: 'undobutton | redobutton | bold | italic | alignleft aligncenter alignright | code',
                setup: function (editor) {
                    editor.addButton('undobutton', {
                        icon: 'undo',
                        disabled: canUndo,
                        onClick: undo
                    });
                    editor.addButton('redobutton', {
                        icon: 'redo',
                        disabled: canRedo,
                        onClick: redo
                    });
                }
            }}
            onChange={this.handleEditorChange.bind(this)}
            content= {presentText}
        />);
    }
};
const mapStateToProps = (state) => ({
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0,
    present: state.present
})

export default connect(mapStateToProps)(TinyMceContainer)
