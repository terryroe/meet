# Meet App

## About

The meet app is designed to allow users to find events in cities they are interested in.

It uses server-less technology, React, and graphing frameworks imported into the project.

Here is the live site: https://terryroe.github.io/meet/

### Serverless Usage

The Meet app uses serverless technologies for authorization. It is also quickly and easily deployed because it is serverless. The app costs will be small since only executed code is charged for. There are some drawbacks to using serverless technologies, but they should be minimal for a small application like this.

## User Stories & Scenarios

### Feature 1: Filter Events By City

**User Story:** As a user, I should be able to find events in a city so that I can gage my interest in the events where I'll be.

##### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

**Given** the user hasn't searched for a city
**When** the user opens the app
**Then** the user should see upcoming events for all cities

##### Scenario 2: User should see a list of suggestions when they search for a city.

**Given** the main page is open
**When** the user starts typing in the city search box
**Then** the user should see a list of cities (suggestions) that match the text they typed

##### Scenario 3: User can select a city from the suggested list.

**Given** the user has entered text in the city search text box and the list of suggested cities is showing
**When** the user selects a city from the list of suggestions
**Then** the city should change to the one they selected and a list of events for that city should be shown

### Feature 2: Show/Hide Event Details

**User Story:** As a user, I should be able to show and hide details about an event so that I can gain an overall perspective or a detailed perspective.

##### Scenario 1: An event element is collapsed by default.

**Given** the user is viewing an event element
**When** the element has just been shown
**Then** by default the event element should be collapsed

##### Scenario 2: User can expand an event to see details.

**Given** the user has searched for events
**When** the user chooses to expand an event
**Then** the event expands to show the user the details of the event

##### Scenario 3: User can collapse an event to hide details.

**Given** the user is viewing an event and the event is expanded
**When** the user clicks on the event
**Then** the event collapses to hide the details

### Feature 3: Specify Number of Events

**User Story:** As a user, I should be able to specify the number of events to be shown so that I can get the level of detail I need for deciding on events.

##### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.

**Given** the user hasn't specified a number of events to list
**When** the user views the list of events for a city
**Then** the app will show 32 events by default

##### Scenario 2: User can change the number of events displayed.

**Given** the user has opened the app and is viewing a list of events
**When** the user changes the number of events to display
**Then** the list of events changes to show the number of events the user selected

### Feature 4: Use the App When Offline

**User Story:** As a user, I should be able to use the app offline so that I can view information about events when I have no Internet connection or am otherwise offline.

##### Scenario 1: Show cached data when there’s no internet connection.

**Given** the user has opened the app
**When** the user doesn't have an internet connection
**Then** the app will display data that has been cached

##### Scenario 2: Show error when user changes search settings (city, number of events).

**Given** the user is using the app offline (no internet connection)
**When** the user changes the search settings, such as the city or number of events
**Then** the app will display an error message that search settings can't be changed offline

### Feature 5: Add an App Shortcut to the Home Screen

**User Story:** As a user, I should be able to add a shortcut to my device's home screen so that I can access the app quickly and easily.

##### Scenario 1: User can install the meet app as a shortcut on their device home screen.

**Given** the user has installed the app on their device
**When** the user chooses to display the meet app on their home screen
**Then** the app adds a shortcut to the app on the device's home screen

### Feature 6: Display Charts Visualizing Event Details

**User Story:** As a user, I should be able to view charts about events in order to get a high-level overview of events and where they are located.

##### Scenario 1: Show a chart with the number of upcoming events in each city.

**Given** the user has opened the app and has not chosen a city
**When** the user chooses to view the number of upcoming events in each city
**Then** the app will display a chart with the number of upcoming events in each city
