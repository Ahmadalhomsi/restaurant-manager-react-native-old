import api from "./api";

// Hello World Fonksiyonu
export const getHelloWorld = async () => {
  try {
    const response = await api.get(`/testhello`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hello world:", error);
    return null;
  }
};

// Products Fonksiyonları
export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return null;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return null;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await api.post("/products", product);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
};

export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await api.put(`/products/${id}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error);
    return null;
  }
};

// Customers Fonksiyonları
export const getAllCustomers = async () => {
  try {
    const response = await api.get("/customers");
    return response.data;
  } catch (error) {
    console.error("Error fetching all customers:", error);
    return null;
  }
};

export const getCustomerById = async (id) => {
  try {
    const response = await api.get(`/customers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching customer with id ${id}:`, error);
    return null;
  }
};

export const createCustomer = async (customer) => {
  try {
    const response = await api.post("/customers", customer);
    return response.data;
  } catch (error) {
    console.error("Error creating customer:", error);
    return null;
  }
};

export const updateCustomer = async (id, updatedCustomer) => {
  try {
    const response = await api.put(`/customers/${id}`, updatedCustomer);
    return response.data;
  } catch (error) {
    console.error(`Error updating customer with id ${id}:`, error);
    return null;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await api.delete(`/customers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting customer with id ${id}:`, error);
    return null;
  }
};

// Orders Fonksiyonları
export const getAllOrders = async () => {
  try {
    const response = await api.get("/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching all orders:", error);
    return null;
  }
};

export const getOrderById = async (id) => {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order with id ${id}:`, error);
    return null;
  }
};

export const createOrder = async (order) => {
  try {
    const response = await api.post("/orders", order);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    return null;
  }
};

export const updateOrder = async (id, updatedOrder) => {
  try {
    const response = await api.put(`/orders/${id}`, updatedOrder);
    return response.data;
  } catch (error) {
    console.error(`Error updating order with id ${id}:`, error);
    return null;
  }
};

export const deleteOrder = async (id) => {
  try {
    const response = await api.delete(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting order with id ${id}:`, error);
    return null;
  }
};

// OrderDetails Fonksiyonları
export const getAllOrderDetails = async () => {
  try {
    const response = await api.get("/order-details");
    return response.data;
  } catch (error) {
    console.error("Error fetching all order details:", error);
    return null;
  }
};

export const getOrderDetailById = async (id) => {
  try {
    const response = await api.get(`/order-details/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order detail with id ${id}:`, error);
    return null;
  }
};

export const createOrderDetail = async (orderDetail) => {
  try {
    const response = await api.post("/order-details", orderDetail);
    return response.data;
  } catch (error) {
    console.error("Error creating order detail:", error);
    return null;
  }
};

export const updateOrderDetail = async (id, updatedOrderDetail) => {
  try {
    const response = await api.put(`/order-details/${id}`, updatedOrderDetail);
    return response.data;
  } catch (error) {
    console.error(`Error updating order detail with id ${id}:`, error);
    return null;
  }
};

export const deleteOrderDetail = async (id) => {
  try {
    const response = await api.delete(`/order-details/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting order detail with id ${id}:`, error);
    return null;
  }
};

// Belirli bir siparişin tüm sipariş detaylarını getir
export const getOrderDetailsByOrderId = async (orderId) => {
  try {
    const response = await api.get(`/orders/${orderId}/order-details`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching order details for order id ${orderId}:`,
      error
    );
    return null;
  }
};
