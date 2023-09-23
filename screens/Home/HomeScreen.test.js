const {render} = require('@testing-library/react-native');
const {default: HomeScreen} = require('./HomeScreen');

describe('Testing Home Screen', () => {
  it('should have title at the top', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('This is home screen')).toBeTruthy();
  });
});
