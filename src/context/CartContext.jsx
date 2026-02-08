import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from "react";

/* -------------------- CONTEXT -------------------- */
const CartContext = createContext();

/* -------------------- INITIAL STATE -------------------- */
const initialState = {
  items: []
};

/* -------------------- REDUCER -------------------- */
function cartReducer(state, action) {
  switch (action.type) {
    case "RESTORE":
      return {
        ...state,
        items: action.payload || []
      };

    case "ADD_ITEM": {
      const existing = state.items.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.payload
        )
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
}

/* -------------------- PROVIDER -------------------- */
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 🔒 hydration flag (CRITICAL)
  const [hydrated, setHydrated] = useState(false);

  /* -------- RESTORE CART (RUNS ONCE) -------- */
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      dispatch({
        type: "RESTORE",
        payload: JSON.parse(storedCart)
      });
    }

    setHydrated(true);
  }, []);

  /* -------- PERSIST CART (AFTER HYDRATION) -------- */
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }, [state.items, hydrated]);

  /* -------------------- ACTIONS -------------------- */
  const addItem = (item) => {
    if (!item || !item.id) return;
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const clearCart = () =>
    dispatch({ type: "CLEAR_CART" });

  /* -------------------- PROVIDER VALUE -------------------- */
  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* -------------------- HOOK -------------------- */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
