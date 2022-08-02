const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTotalPrice =
        state.totalPrice + action.item.price * action.item.quantity;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItem = state.items[existingItemIndex];

      let updatedItems;
      if (existingItem) {
        let updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + action.item.quantity,
        };

        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    }

    case "REMOVE": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const existingItem = state.items[existingItemIndex];
      const updatedTotalPrice = state.totalPrice - existingItem.price;

      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
