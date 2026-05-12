# FlowServe

FlowServe is a fullstack SaaS-style service marketplace application where users can browse professional services, manage a cart, and complete a multi-step checkout flow.

The project focuses on scalable React architecture, protected routing, reusable state management patterns, and API-integrated service fetching.

---

## Features

### Authentication & Route Protection
- User login flow with form validation
- Persistent auth state using `localStorage`
- Protected routes using route guards
- Guest-only and authenticated route handling
- Conditional UI rendering based on authentication state

### Services Marketplace
- Browse professional services
- Search services with debounced input
- Client-side pagination
- Dynamic service rendering
- API-based service fetching with mock fallback architecture

### Cart System
- Global cart state using `Context API + useReducer`
- Add/remove services from cart
- Quantity management
- Derived cart calculations (subtotal, item count)
- Persistent cart state using `localStorage`
- Live cart badge updates

### Checkout Flow
Multi-step checkout experience including:
- Order review
- Contact information
- Purchase confirmation
- Success state handling

Additional functionality:
- Progress tracking
- Sticky order summary
- Cart reset after successful checkout

### UI & UX
- Layout-based application structure
- Responsive navigation
- Auth-aware navbar and actions
- Loading states and skeleton behavior
- Interactive dropdown menus
- Reusable component architecture

---

## Architecture

### Frontend
- React Hooks
- React Router v6
- Context API
- useReducer state management
- Custom Hooks
- Layout-based routing
- API abstraction layer
- Component-driven architecture

### Backend Integration
- Service fetching through REST endpoints
- Environment-based API configuration
- Mock fallback support for frontend-only execution

---

## Key Concepts Demonstrated

- Global state management
- Reducer-based state updates
- Separation of concerns
- Protected routing
- Persistent application state
- Debounced search patterns
- API abstraction
- Reusable hooks
- Multi-step transactional UI flows
- Layout-based application architecture

---

## Tech Stack

### Frontend
- React
- React Router
- Vite
- Context API
- React Icons
- CSS3

### Backend
- Node.js
- Express
- REST API

---

## Demo Credentials

```txt
Email: user@test.com
Password: Test@1234
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/LaibaFirdouse/flowserve.git
cd flowserve
```

### Install Dependencies

Frontend:
```bash
npm install
```

Backend:
```bash
npm install
```

---

## Run Application

### Frontend

```bash
npm run dev
```

### Backend

```bash
npm start
```

---

## Future Improvements

- Real backend authentication
- Persistent order history
- Payment gateway integration
- Service reviews and ratings
- Admin dashboard
- Provider-side service management
- Real-time notifications
- Backend-powered cart persistence

---

## Author

Built as part of a frontend engineering portfolio focused on scalable React architecture, reusable state management patterns, and production-style UI workflows.