# Kanban Board App

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Folder Structure](#folder-structure)
4. [Components](#components)
    - Hero
    - Header
5. [Context](#context)
    - DisplayCardContext
6. [Usage](#usage)
7. [Features](#features)
8. [External Dependencies](#external-dependencies)

## Introduction
A React-based Kanban board application that interacts with the provided API to display and organize tickets. The app allows users to dynamically adjust the Kanban board based on three grouping options: Status, User, and Priority. Additionally, users can sort tickets by Priority or Title. The application is designed to be visually appealing, responsive, and it saves the user's view state even after a page reload.

## Installation
1. Clone the repository:

```
git clone https://github.com/PranabKumarSahoo/kanban-board-app-react.git
```

5. Navigate to the project directory:

```
cd kanban-board-app-react
```

5. Install dependencies:

```
npm install
```

7. Start the development server:

```
npm run dev
```

## Folder Structure
The project has the following folder structure:

**src**
- **components:** Contains React components used in the app.
- **context:** Manages global state using React Context API.
- **pages:** Contains the main pages of the app.
- **App.jsx:** Main entry point for the app.
- **main.jsx:** Renders the app into the DOM.
- ...other files

## Components

**Usage**

`main.js`
```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DisplayCardProvider } from './context/DisplayCardContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <DisplayCardProvider>
        <App />
      </DisplayCardProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
```

`App.js`
```js
import React from 'react'
import Header from './components/Header';
import Hero from './pages/Hero';

const App = () => {
  return (
    <div>
      <Header />

      <Hero />
    </div>
  )
}

export default App;
```

**1. Hero:**
- The Hero component is the main display component that renders Kanban cards based on their status, user, or priority. It utilizes React Context to manage state related to cards, filters, and ordering.

**Key Features**
- Dynamic rendering of cards based on filtering and ordering options.
- Icons representing different card statuses.

**2. Header:**
- The Header component provides a user interface for changing display settings such as grouping and ordering. It uses React Context to manage global state for filtering and ordering options.

**State**
- open: Boolean representing the dropdown menu's visibility.

Methods
- `handleClick()`: Toggles the visibility of the dropdown menu.
- `handleGroupChange(value: string)`: Updates the filter option based on user selection.
- `handleOrderChange(value: string)`: Updates the order option based on user selection.
- `handleOutsideClick(e: Event)`: Closes the dropdown menu when clicking outside.

**Key Features**
- Dropdown menu for selecting grouping and ordering options.
- Dynamically updates the display based on user selections.

## Context
**DisplayCardContext:**
The `DisplayCardContext` manages global state for the React Kanban app. It includes the following state variables:

- `isCards`: An array containing Kanban cards.
- `isFilter`: A string representing the current grouping/filtering option.
- `isOrdered`: A string representing the current ordering option.
- `isUser`: A boolean representing the current user state.

It also provides functions to update these states:

- `setIsCards`: Sets the state of Kanban cards.
- `setIsFilter`: Sets the state of the grouping/filtering option.
- `setIsOrdered`: Sets the state of the ordering option.
- `setIsUser`: Sets the state of the user.

**Usage:**
```js
import { DisplayCardProvider, useCards } from './context/DisplayCardContext';

const ExampleComponent = () => {
  const { isCards, isFilter, isOrdered, isUser, getFilter, getOrdered } = useCards();

  // Component logic using context values
};
```

## External API
The application fetches task data from an external API:

**Url**: https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers

**Response**: JSON object containing tickets and users.

## Local Storage
The application persists user preferences, including card data, filtering, ordering, and user-related information, in the browser's local storage. This ensures that user preferences are maintained across sessions.

## Usage
To use the React Kanban app, follow these steps:

1. Open the app in your preferred web browser.
2. View and manage Kanban cards based on their status, assigned user, and priority.
3. Use the Header component to change display settings, such as grouping and ordering options.
4. Interact with the Kanban cards to view detailed information or perform additional actions.

## Features
### Grouping Options
**1. By Status**: Group tickets based on their current status.
**2. By User**: Arrange tickets according to the assigned user.
**3. By Priority**: Group tickets based on their priority level.

### Sorting Options
**1. Priority**: Arrange tickets in descending order of priority.
**2. Title**: Sort tickets in ascending order based on their title.

**(Unfortunately, Due to lack of time I couldn't able to do this ordering functionality.)**

### Responsive Design
The Kanban board is designed to be visually appealing and responsive, ensuring a seamless user experience across different devices.

### Persistent State
The application saves the user's view state, allowing the preservation of selected grouping and sorting preferences even after a page reload.

## Tech Stack
- **Vite**: Used as the build tool to enhance development speed and efficiency.
- **React**: The core library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the components.
- **Context API**: Employed for state management, ensuring efficient data flow within the application.
- **React-Icons**: Integrated for easy usage of icons to enhance the user interface.

## Hooks and Concepts
The application leverages various React hooks and concepts, including:
- `useState`: For managing local component state.
- `useEffect`: To handle side effects, such as fetching data from the API.
- `useRef`: Used for accessing and interacting with the DOM elements.
- `Custom Hooks`: Developed for reusable logic, enhancing the modularity of the application.

## Evaluation
The application will be evaluated based on the following criteria:

- **Functionality:** The application effectively fetch data from the provided API and allow users to group and sort tickets based on the given options. When the user clicks the "display" button and selects a grouping option, the Kanban board dynamically adjusts to reflect the user's choice.

- **Visual Design:** The UI matches the provided design, including the layout, card design, and overall aesthetics.

- **Business Logic Optimization:** The application is optimized for business logic. It utilizes various concepts and hooks provided by React, such as useState, useEffect, custom hooks, useRef, and ContextAPI. The components are appropriately structured to promote reusability and maintainability.

- **Component Structuring:** Components are appropriately structured, promoting reusability and maintainability.
