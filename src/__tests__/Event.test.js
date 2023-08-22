import Event from '../components/Event';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders the event title', () => {
    const title = EventComponent.queryByText(allEvents[0].summary);
    expect(title).toBeInTheDocument();
  });

  test('renders the event start time', () => {
    const time = EventComponent.queryByText(
      new Date(allEvents[0].start.dateTime).toUTCString()
    );
    expect(time).toBeInTheDocument();
  });

  test('renders the event location', () => {
    const location = EventComponent.queryByText(allEvents[0].location);
    expect(location).toBeInTheDocument();
  });

  test('renders event details button with title "Show Details"', () => {
    const detailsBtn = EventComponent.queryByText('Show Details');
    expect(detailsBtn).toBeInTheDocument();
  });

  test('event details are not shown by default', () => {
    const details = EventComponent.container.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

  test('event details are shown when "Show Details" button is clicked', async () => {
    const user = userEvent.setup();
    const detailsBtn = EventComponent.queryByText('Show Details');
    await user.click(detailsBtn);
    const details = EventComponent.container.querySelector('.details');
    expect(details).toBeInTheDocument();
  });

  test('"Show Details" button changes to "Hide Details" when clicked', async () => {
    const user = userEvent.setup();
    const detailsBtn = EventComponent.queryByText('Show Details');
    await user.click(detailsBtn);
    const hideBtn = EventComponent.queryByText('Hide Details');
    expect(hideBtn).toBeInTheDocument();
  });

  test('event details are hidden when "Hide Details" button is clicked', async () => {
    const user = userEvent.setup();
    const detailsBtn = EventComponent.queryByText('Show Details');
    await user.click(detailsBtn);
    const hideBtn = EventComponent.queryByText('Hide Details');
    await user.click(hideBtn);
    const details = EventComponent.container.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });
});
