# React Admin Panel Dashboard

A modern **Admin Panel Dashboard** built with React, focused on clean architecture, scalable routing, and real-world admin UI patterns.

## Tech Stack
- React (Functional Components)
- React Router v6
- Context API (Global Dark Mode)
- SCSS (Sass)
- Material UI Icons

## Key Features
- Dark / Light mode with global state
- Modular Sidebar & Navbar layout
- Dashboard with widgets, charts, and tables
- User & Product management routes
- System Health and Logs pages
- Clean, scalable folder structure
  
## Folder Structure 
src/
├── components/
│ ├── sidebar/ # Primary navigation and theme controls
│ ├── navbar/ # Top navigation, actions, and indicators
│ ├── widget/ # Reusable KPI widgets (users, orders, earnings)
│ ├── chart/ # Data visualization components
│ ├── featured/ # Highlighted analytics section
│ ├── table/ # Tabular data (orders, listings)
│ ├── systemHealth/ # System monitoring UI
│ └── logs/ # Application logs viewer
│
├── context/
│ └── darkmodeContext.js # Global theme state (Dark / Light mode)
│
├── pages/
│ ├── home/ # Dashboard layout and composition
│ ├── login/ # Authentication UI
│ ├── list/ # Users / Products listing pages
│ ├── single/ # Detailed view for a single entity
│ └── new/ # Create new user / product forms
│
├── formSource.js # Centralized form configuration
├── style/
│ └── dark.scss # Global dark theme styles
└── App.jsx # Root component and routing configuration

## Key React Concepts Implemented

- **Functional Components & Hooks**
- **Context API** for global dark/light theme management
- **Nested Routing** with React Router v6
- **Reusable, props-driven components**
- **Conditional rendering and theming**

## Why I Chose This Project

I chose to build an **Admin Panel Dashboard** because it represents a real-world frontend problem that goes beyond simple UI pages.

- Admin dashboards are used in **most production applications**, making this project highly practical.
- It allowed me to work on **application architecture**, not just components.
- I could demonstrate **routing, global state management, and layout systems** together in one project.
- It helped me practice building **scalable and maintainable React structures**.
- Features like dashboards, tables, logs, and system monitoring reflect **actual industry use cases**.
- The project clearly showcases my understanding of **how frontend systems are designed**, not just how they look.

This project was chosen to highlight my ability to think in terms of **structure, scalability, and real application workflows**, which are critical in professional frontend development.
