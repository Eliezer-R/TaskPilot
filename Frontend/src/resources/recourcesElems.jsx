function useResources () {
  const icons = ['👨🏻‍💻', '💬', '☕', '🏋️', '📚', '⏰']
  const statusImg = ['/resources/Time_atack_duotone.svg', '/resources/Done_round_duotone.svg', '/resources/close_ring_duotone.svg']
  const status = ['In Progress', 'Completed', 'Won\'t do']
  const colorsStatus = ['--color-orange', '--color-green', '--color-red']
  const Hcolors = ['--color-overlay', '--color-yellow']
  const colorsStatus2 = ['--color-yellow', '--color-green-soft', '--color-pink']

  return {
    icons,
    status,
    statusImg,
    colorsStatus,
    Hcolors,
    colorsStatus2
  }
}

export default useResources
