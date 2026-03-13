# 🚀 FlowServe

FlowServe is a full-stack SaaS-style service marketplace where users can discover professional services, manage a cart, and complete a multi-step checkout flow.

The project demonstrates modern frontend architecture, state management, protected routing, and backend-driven authentication.

---

## ✨ Core Features

### 🔐 Authentication
- User registration & login
- Email/password validation
- Auth state persistence via `localStorage`
- Protected routes using route guards
- Role-based access (User / Provider)

### 🛒 Cart System
- Global cart using **React Context + useReducer**
- Add / remove items
- Quantity management
- Derived cart state (subtotal, item count)
- Persistent cart via `localStorage`
- Live cart badge in navbar

### 📦 Services Marketplace
- Browse professional services
- Client-side pagination
- Search with **debounced input**
- Add-to-cart functionality

### 💳 Checkout Flow
Multi-step checkout process:

1. Review order  
2. Contact details  
3. Confirm purchase  
4. Success page  

Includes:
- Progress indicator
- Sticky order summary
- Cart clearing after order completion

### 🧑‍💼 Provider Tools
- Role-based provider routes
- Provider pricing engine
- Protected provider dashboard

---

## 🏗 Architecture

### Frontend
- React (Hooks)
- React Router v6
- Context API + useReducer
- Custom Hooks
- Layout-based routing (Public / Auth / App / Provider)

### Backend
- API-driven authentication
- Service data endpoints
- User role handling

---

## 🧠 Key Concepts Demonstrated

- Global state management
- Layout-based routing
- Role-based route guards
- Persistent application state
- Multi-step transactional UI
- Separation of public and authenticated application layers

---

## 🛠 Tech Stack

**Frontend**
- React
- React Router
- Context API
- Vite
- React Icons

**Backend**
- Node.js
- Express
- REST API

---

## 🧪 Demo Credentials

```
Email: user@test.com
Password: Test@1234
```

---

## 🚀 Run Locally

### Clone repository
```bash
git clone https://github.com/LaibaFirdouse/flowserve.git
cd flowserve
```

### Install dependencies
```bash
npm install
```

### Run frontend
```bash
npm run dev
```


### Run backend
```bash
npm install
npm start
```


## 🔮 Future Improvements

- Stripe payment integration
- Order history & invoices
- Admin dashboard
- Notifications system
- Service reviews & ratings
- Real-time order updates

---

## 👩‍💻 Author

Built as part of a frontend engineering portfolio demonstrating real-world SaaS architecture and application state management.
