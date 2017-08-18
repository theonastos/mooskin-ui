import * as React from 'react';

import Readme from '../../components/TextArea/README.md';

import {TextArea} from '../../components/index/';
import TextAreaExampleCode from './component-strings/TextArea.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class TextAreaExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, TextArea}}
                code={TextAreaExampleCode}
                title="TextArea Example"
                doc={Readme}
            />
        );
    }
}
