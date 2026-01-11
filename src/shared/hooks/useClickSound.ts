export function useClickSound() {
  const audio = new Audio("/sounds/click.mp3")

  audio.volume = 0.4

  const play = () => {
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  return play
}
