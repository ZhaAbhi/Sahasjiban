import React from 'react';
import {render} from '@testing-library/react-native';
import WelcomeScreen from './WelcomeScreen';

describe('WelcomeScreen', () => {
  it('shows the title message', () => {
    const {getByText, getByTestId, debug} = render(<WelcomeScreen />);
    const title = getByTestId('title');
    expect(title).toHaveTextContent('Welcome to SahasJiban');
  });
});
