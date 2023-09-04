import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 events are shown by default.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let EventList;
    given("the user hasn't specified a number of events to list", () => {
      AppComponent = render(<App />);
    });

    when('the user views the list of events for a city', async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        EventList = within(AppDOM).queryAllByRole('listitem');
        expect(EventList[0]).toBeTruthy();
      });
    });

    then(/^the app will show (\d+) events by default$/, (arg0) => {
      expect(EventList).toHaveLength(32);
    });
  });

  test('User can change the number of events displayed.', ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    given('the user has opened the app', () => {
      AppComponent = render(<App />);
    });

    and('is viewing a list of events', async () => {
      AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const EventList = within(AppDOM).queryAllByRole('listitem');
        expect(EventList[0]).toBeTruthy();
      });
    });

    when('the user changes the number of events to display', async () => {
      const input = AppDOM.querySelector('#number-of-events-input');
      expect(input).toHaveValue('32');
      await userEvent.type(input, '{backspace}{backspace}10');
    });

    then(
      'the list of events changes to show the number of events the user selected',
      async () => {
        await waitFor(() => {
          const EventList = within(AppDOM).queryAllByRole('listitem');
          expect(EventList).toHaveLength(10);
        });
      }
    );
  });
});
