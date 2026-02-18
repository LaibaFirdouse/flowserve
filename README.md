# 🚀 FlowServe

FlowServe is a SaaS-style service marketplace built with React.  
It demonstrates scalable frontend architecture, state management discipline, and a transactional checkout flow.

Live demo-ready frontend MVP with authentication, persistent cart, and multi-step checkout.

---

## ✨ Core Features

- 🔐 Auth system (Login / Register with validation)
- 🔒 Protected routes
- 🛒 Global cart using Context + useReducer
- ♻️ Immutable cart updates (increment / decrement / remove)
- 💾 Cart persistence via localStorage (hydration-safe)
- 🔎 Debounced search
- 📄 Paginated service listing
- 📊 Live cart badge with derived state
- 💳 4-step checkout flow with progress tracking
- 📌 Sticky order summary layout

---

## 🧪 Demo Credentials

```
Email: user@test.com  
Password: 123456
```

---

## 🧠 Architecture Highlights

- Centralized state management using Context + Reducer
- Derived state (`totalItems`, `subtotal`) computed from source of truth
- Multi-step transactional flow handled via controlled state
- Separation of layouts (Public vs App)
- Custom hooks for service fetching & debounce logic
- Clean component structure and predictable data flow

---

## 🛠 Tech Stack

- React (Hooks)
- React Router
- Context API + useReducer
- Custom Hooks
- CSS (custom layout system)
- React Icons

---

## 🚀 Run Locally

```bash
git clone https://github.com/LaibaFirdouse/flowserve.git
cd flowserve
npm install
npm run dev
```

---

## 🔮 Next Iteration

- Stripe payment integration
- Backend API integration
- Order history & invoice generation
- Role-based dashboards (User / Provider)
- Admin service management
