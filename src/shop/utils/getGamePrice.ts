export function getGamePrice(game: any) {
  if (game.onSale && game.salePrice) {
    return game.salePrice.toFixed(2)
  }

  return game.price.toFixed(2)
}

