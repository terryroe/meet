Feature: Show/Hide Event Details
 Scenario: An event element is collapsed by default.
  Given the user is viewing an event element
  When the element has just been shown
  Then by default the event element should be collapsed
 Scenario: User can expand an event to see details.
  Given the user has searched for events
  When the user chooses to expand an event
  Then the event expands to show the user the details of the event
 Scenario: User can collapse an event to hide details.
  Given the user is viewing an event and the event is expanded
  When the user clicks on the event
  Then the event collapses to hide the details