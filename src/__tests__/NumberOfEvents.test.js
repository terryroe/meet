// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test('textbox exists on the page', () => {
    const textbox = NumberOfEventsComponent.queryByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('when no number is entered, 32 events shown by default', () => {
    const textbox = NumberOfEventsComponent.queryByRole('textbox');
    expect(textbox).toHaveValue('32');
  });

  test('updates number of events when user types', async () => {
    const textbox = NumberOfEventsComponent.queryByRole('textbox');
    await userEvent.type(textbox, '{backspace}{backspace}10');
    expect(textbox).toHaveValue('10');
  });
});
