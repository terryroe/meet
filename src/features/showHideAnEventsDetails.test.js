import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor } from '@testing-library/react';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let AppDOM;
  beforeEach(async () => {
    const AppComponent = render(<App />);
    AppDOM = AppComponent.container.firstChild;
    await waitFor(() => {
      const EventDOM = AppDOM.querySelector('.event');
      expect(EventDOM).toBeInTheDocument();
    });
  });

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user is viewing an event element', () => {});

    when('the element has just been shown', () => {});

    then('by default the event element should be collapsed', async () => {
      const allEvents = await getEvents();
      const EventComponent = render(<Event event={allEvents[0]} />);
      const details = EventComponent.container.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    given('the user has searched for events', () => {});

    when('the user chooses to expand an event', async () => {
      const user = userEvent.setup();
      const allEvents = await getEvents();
      const EventComponent = render(<Event event={allEvents[0]} />);
      const button = EventComponent.queryAllByText('Show Details')[0];
      await user.click(button);
    });

    then('the event expands to show the user the details of the event', () => {
      const details = AppDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details.', ({
    given,
    when,
    then,
  }) => {
    let button;
    given(
      'the user is viewing an event and the event is expanded',
      async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const EventComponent = render(<Event event={allEvents[0]} />);
        button = EventComponent.queryAllByText('Show Details')[0];
        await user.click(button);
        const details = AppDOM.querySelector('.details');
        expect(details).toBeInTheDocument();
      }
    );

    when('the user clicks on the event', async () => {
      const user = userEvent.setup();
      await user.click(button);
    });

    then('the event collapses to hide the details', () => {
      const details = AppDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });
});
