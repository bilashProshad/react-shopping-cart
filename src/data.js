const products = [
  {
    id: "1",
    name: "Sony Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 89.99,
    rating: 4,
    numReviews: 12,
    inStock: 7,
    fastDelivery: true,
  },
  {
    id: "2",
    name: "Head Phones",
    image:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 599.99,
    rating: 4,
    numReviews: 8,
    inStock: 20,
    fastDelivery: false,
  },
  {
    id: "3",
    name: "iPhone",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 929.99,
    rating: 3,
    numReviews: 12,
    inStock: 5,
    fastDelivery: true,
  },
  {
    id: "4",
    name: "Sony PS 5 Controller",
    image:
      "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzdGF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 399.99,
    rating: 5,
    numReviews: 12,
    inStock: 10,
    fastDelivery: true,
  },
  {
    id: "5",
    name: "Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",

    price: 49.99,
    rating: 3,
    numReviews: 10,
    inStock: 8,
    fastDelivery: false,
  },
  {
    id: "6",
    name: "Apple Watch",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    inStock: 5,
    fastDelivery: false,
  },
  {
    id: "7",
    name: "Sony Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 89.99,
    rating: 4,
    numReviews: 12,
    inStock: 7,
    fastDelivery: true,
  },
  {
    id: "8",
    name: "Head Phones",
    image:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 599.99,
    rating: 4,
    numReviews: 8,
    inStock: 20,
    fastDelivery: false,
  },
  {
    id: "9",
    name: "iPhone",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 929.99,
    rating: 3,
    numReviews: 12,
    inStock: 5,
    fastDelivery: true,
  },
  {
    id: "10",
    name: "Sony PS 5 Controller",
    image:
      "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzdGF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 399.99,
    rating: 5,
    numReviews: 12,
    inStock: 10,
    fastDelivery: true,
  },
  {
    id: "11",
    name: "Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",

    price: 49.99,
    rating: 3,
    numReviews: 10,
    inStock: 8,
    fastDelivery: false,
  },
  {
    id: "12",
    name: "Apple Watch",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    inStock: 5,
    fastDelivery: false,
  },
];

export default products;
