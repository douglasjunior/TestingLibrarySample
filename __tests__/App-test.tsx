import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TextInput, TextInputProps} from 'react-native';
import {ThemeProvider, ThemeType, withTheme} from '../theme';

describe('Sample', () => {
  it('test getByPlaceholderText TextInput native', () => {
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

  it('test getByTestId TextInput native', () => {
    const handleFocus = jest.fn();

    const result = render(
      <TextInput testID="my-input" onFocus={handleFocus} editable={false} />,
    );

    const rnTextInput = result.getByTestId('my-input');

    fireEvent(rnTextInput, 'focus');

    expect(handleFocus).not.toBeCalled(); // fail
  });

  it('test getByPlaceholderText TextInput native with custom component', () => {
    const CustomTextInput: React.FC<{label: string} & TextInputProps> = ({
      label,
      ...others
    }) => {
      return <TextInput {...others} placeholder={label} />;
    };

    const handleFocus = jest.fn();

    const result = render(
      <CustomTextInput
        label="my-input"
        onFocus={handleFocus}
        editable={false}
      />,
    );

    const rnTextInput = result.getByPlaceholderText('my-input');

    fireEvent(rnTextInput, 'focus');

    expect(handleFocus).not.toBeCalled(); // pass
  });

  it('test getByPlaceholderText TextInput native withTheme', () => {
    const CustomTextInput: React.FC<
      {label: string; theme: ThemeType} & TextInputProps
    > = ({label, ...others}) => {
      return <TextInput {...others} placeholder={label} />;
    };

    const CustomInputWithTheme = withTheme(CustomTextInput);

    const handleFocus = jest.fn();

    const result = render(
      <ThemeProvider>
        <CustomInputWithTheme
          label="my-input"
          onFocus={handleFocus}
          editable={false}
        />
      </ThemeProvider>,
    );

    const rnTextInput = result.getByPlaceholderText('my-input');

    fireEvent(rnTextInput, 'focus');

    expect(handleFocus).not.toBeCalled(); // <--- fail
  });
});
