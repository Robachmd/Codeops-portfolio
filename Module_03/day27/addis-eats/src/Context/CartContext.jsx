import { createContext, useCallback, useContext, useMemo, useReducer, } from "react";
  
  import cartReducer from "../Cart/CartReducer";
  
  const CartContext = createContext(null);

  export function CartProvider({ children }) {
    const [items, dispatch] = useReducer( cartReducer, []);
  
    const addToCart = useCallback((dish) => {
      dispatch({
        type: "ADD",
        payload: dish,
      }); }, []);
  
    const removeFromCart = useCallback((id) => {
      dispatch({ type: "REMOVE", payload: id,
      }); }, []);
  
    const clearCart = useCallback(() => {
      dispatch({
        type: "CLEAR",
      }); }, []);
  
    const total = useMemo(() => {
      return items.reduce((sum, item) =>
          sum + item.price * item.quantity, 0 );
    }, [items]);
  
    const itemCount = useMemo(() => {
      return items.reduce(
        (sum, item) => sum + item.quantity,
        0 ); }, [items]);
  
    const value = useMemo(
      () => ({
        items,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        itemCount,
      }),
      [
        items,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        itemCount,
      ]
    );
  
    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  }
  
  export function useCart() {
    return useContext(CartContext);
  }