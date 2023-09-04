Feature: Specify number of events
 Scenario: When user hasn’t specified a number, 32 events are shown by default.
  Given the user hasn't specified a number of events to list
  When the user views the list of events for a city
  Then the app will show 32 events by default

 Scenario: User can change the number of events displayed.
  Given the user has opened the app
  And is viewing a list of events
  When the user changes the number of events to display
  Then the list of events changes to show the number of events the user selected