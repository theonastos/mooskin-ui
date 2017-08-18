import * as React from 'react';

import Readme from '../../components/RadioAccordion/README.md';

import {Button, H2, Input, RadioAccordion, RadioAccordionContent} from '../../components/index/';
import RadioAccordionExampleCode from './component-strings/RadioAccordion.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class RadioAccordionExample extends React.Component<any, any> {
    render(){

        const components = {React, Button, H2, Input, RadioAccordion, RadioAccordionContent};

        return(
            <ReactLiveEditor
                scope={components}
                code={RadioAccordionExampleCode}
                title="RadioAccordion Example"
                doc={Readme}
            />
        );
    }
}
