import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import WelcomeScreen from './WelcomeScreen';

describe('WelcomeScreen', () => {
  it('shows the title message', () => {
    const {getByText, getByTestId} = render(<WelcomeScreen />);
    const title = getByTestId('title');
    expect(title).toHaveTextContent('Welcome to SahasJiban');
  });

  it('should have continue button', () => {
    const {getByText, getByTestId} = render(<WelcomeScreen />);
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });
  it('on press continue button, it should navigate to next screen', () => {
    const navigationMock = {navigate: jest.fn()};
    const {getByText, getByTestId} = render(
      <WelcomeScreen navigation={navigationMock} />,
    );
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Home');
  });
});
