import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

test('App renders correctly', () => {
  const tree = renderer.create(
    <App/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});