import Event from '../components/Event';
import { render } from '@testing-library/react';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';

const mockEvent = mockData[0];

describe('<Event /> component', () => {
  let EventComponent;

  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />);
  });

  test('renders the event title', () => {
    const title = EventComponent.queryByText(mockEvent.summary);
    expect(title).toBeInTheDocument();
  });

  test('renders the event start time', () => {
    const time = EventComponent.queryByText(mockEvent.start.dateTime);
    expect(time).toBeInTheDocument();
  });

  test('renders the event location', () => {
    const location = EventComponent.queryByText(mockEvent.location);
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
