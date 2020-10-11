## Project Name & Pitch

Mint-Flavour

An beta application for Q-menta.

## Project Status

#### In progress:

This project is currently in development. Users can add messages to a user personal information.

## Installation and Setup Instructions

#### Clone:

Clone down this repository. You will need `npm` installed globally on your machine.

#### Installation:

`npm install`

#### Testing:

`npm test`

#### Starting in dev:

`npm start`

#### in Browser:

`localhost:3000/`

## Consideration

- I used FontAwesome icons, is not like PDF design but is faster to show a model.

- I used Random URL images to user profile images. Same as above.

- I built an API call made by axios. I didn't used it. I fake a return API call in the Redux Store

- I show an alert in icons actions to show the functionality to build.

- Is built the online/offline user status logic.

## Functional Requirements

First of all, I consider that the FRONTEND only shows data and draw the UI, I always avoid to make the logic there. Off course can be done.

- Functional Requirements #3:

  **From the UI**: Add an "add a comment icon" in the right side of the selected comment, onclick show an input. Like the input that already exists. If a message has nestedMessages, show below the parent message with a padding in the left side.

  **From the FRONTEND**: After the user submit I will send a user object, parent-message id and the message to an endpoint.

  **From the BACKEND**: In the backend receive the data, and push the message to an nestedMessage attribute in each message that already exists.

- Functional Requirements #4:

  **From the UI**: Add an "like icon" below the message. Show likes for every message and If User likes the button turns into anothe color

  **From the FRONTEND**: After the user likes a message, I will send a userId, and the messageId to an endpoint. When I received the data I check with if the loggedUserId has likes and return true to show the like status in every message.

  **From the BACKEND**: In the backend receive the data, and I created an likes attribute in each message in the messages object, with the userId and the count of likes

- Functional Requirements #5:
  **From the UI**: The user clicks on search icon, show an input in the space between in the header.

  **From the FRONTEND**: After the enters a word, I will send the query to an endpoint.

  **From the BACKEND**: In the backend receive the data, and makes a filter in the message object searching the messages that contains the query. After that I return an array with the result.

- Functional Requirements #6:

  **Chart**: I didn't really use a lot of charts. I know that D3.js is really a good library (Google has one library too). I don't see to much trouble to make a chart considering that you have the dateTime of every message. You have to group the messages in days, months, years, whatever, and show the count of how many message was in that period.

## Non-Functional Requirements

- Question #4:
  **From the BACKEND**: If you have an API that receive a userId and return a messages for that user, i couldn't see what scalability problem you would have.
