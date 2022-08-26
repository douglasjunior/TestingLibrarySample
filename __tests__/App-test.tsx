import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {TextInput} from 'react-native';

describe('Sample', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('test TextInput native by placeholder', () => {
    const handleFocus = jest.fn();

    const result = render(
      <TextInput
        placeholder="my-input"
        onFocus={handleFocus}
        editable={false}
      />,
    );

    const rnTextInput = result.getByPlaceholderText('my-input');

    fireEvent(rnTextInput, 'focus');

    expect(handleFocus).not.toBeCalled(); // pass
  });

  it('test TextInput native by testID', () => {
    const handleFocus = jest.fn();

    const result = render(
      <TextInput testID="my-input" onFocus={handleFocus} editable={false} />,
    );

    const rnTextInput = result.getByTestId('my-input');

    fireEvent(rnTextInput, 'focus');

    expect(handleFocus).not.toBeCalled(); // fail
  });
});
