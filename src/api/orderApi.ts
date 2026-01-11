import { apiFetch } from "./apiClient";

export const createOrder = (total: number) => {
  return apiFetch("/orders", {
    method: "POST",
    body: JSON.stringify({ total }),
  });
};

export const getMyOrders = () => {
  return apiFetch("/orders/me");
};