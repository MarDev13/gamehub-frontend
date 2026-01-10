import { apiFetch } from "@/api/apiClient";

export type ShopGamesResponse = {
  page: number;
  total: number;
  hasMore: boolean;
  items: any[];
};

export const getShopGames = (page = 1, limit = 12): Promise<ShopGamesResponse> => {
  return apiFetch(`/shop/games?page=${page}&limit=${limit}`);
};


