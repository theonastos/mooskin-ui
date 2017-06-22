import * as React from 'react';
import renderer from 'react-test-renderer';
import Select, {Option} from './Select';

import {shallow} from 'enzyme';

describe('Select', () => {

    it('renders correctly', () => {
        const func = jest.fn();
        const func2 = jest.fn();

        const tree = renderer.create(
            <Select
                onChange={func}
                selected="option1"
                dataLabel="plan"
                id="select1"
                label="Select something"
                placeholder="placeholder"
                className="myClass"
                style={{color: 'blue'}}
                noResultsText="no results found"
                isLoading
            >
                <Option value="option1" onClick={func2}>Option1</Option>
                <Option value="option2" onClick={func2}>Option2</Option>
            </Select>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders properly with 1 child', () => {
        const func = jest.fn();

        const component = shallow(
            <Select onChange={func} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
            </Select>
        );

        expect(component.find('.select-component').length).toBe(1);

        expect(component.find(Option).length).toBe(1);
    });

    test('renders properly with multiple children', () => {
        const func = jest.fn();

        const component = shallow(
            <Select onChange={func} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        expect(component.find(Option).length).toBe(2);
    });

    test('appends onClick callback to each Option', () => {
        const func = jest.fn();

        const component = shallow(
            <Select onChange={func} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        component.find(Option).forEach((option) => {
            expect(option.prop('onClick')).toBeTruthy();
        });
    });

    test('Option renders without onClick by default', () => {

        const component = shallow(<Option value="option1">Option1</Option>);

        expect(component.prop('onClick')).toBeFalsy();
    });

    test('opens the list when clicked with right mouse btn', () => {
        const func = jest.fn();

        const component = shallow(
            <Select onChange={func} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        expect(component.find('.options-container').prop('style')).toEqual({display: 'none'});

        component.find('.label-container').simulate('click', {button: 0});

        expect(component.find('.options-container').prop('style')).toEqual({display: 'block'});
    });
});
