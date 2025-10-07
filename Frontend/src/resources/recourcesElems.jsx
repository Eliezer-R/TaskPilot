function useResources () {
  const icons = ['👨🏻‍💻', '💬', '☕', '🏋️', '📚', '⏰']
  const statusImg = [
    '/resources/Time_atack_duotone.svg',
    '/resources/Done_round_duotone.svg',
    '/resources/close_ring_duotone.svg'
  ]
  const status = ['In Progress', 'Completed', 'Won\'t do']
  const colorsStatus = [
    '--color-orange-task',
    '--color-green-task',
    '--color-red-task'
  ]
  const Hcolors = ['--color-overlay', '--color-yellow-task']
  const colorsStatus2 = [
    '--color-yellow-task',
    '--color-green-soft-task',
    '--color-pink-task'
  ]

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
