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

``` bash
src/
├── components/
│ ├── sidebar/ 
│ ├── navbar/ 
│ ├── widget/ 
│ ├── chart/ 
│ ├── featured/ 
│ ├── table/ 
│ ├── systemHealth/ 
│ └── logs/ 
│
├── context/
│ └── darkmodeContext.js
│
├── pages/
│ ├── home/ 
│ ├── login/
│ ├── list/ 
│ ├── single/ 
│ └── new/ 
│
├── formSource.js 
├── style/
│ └── dark.scss =
└── App.jsx 
```
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
