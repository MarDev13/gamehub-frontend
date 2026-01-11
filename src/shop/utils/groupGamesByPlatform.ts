export function groupGamesByPlatform(games: any[], platformName: string) {
  return games.filter(game =>
    game.platforms?.some((p: any) => p.name === platformName)
  )
}
