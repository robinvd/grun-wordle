const gameStateKey = 'gameState'
const archiveGameStateKey = 'archiveGameState'
const highContrastKey = 'highContrast'

export type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (
  isHardMode: boolean,
  isLatestGame: boolean,
  gameState: StoredGameState
) => {
  let key = isLatestGame ? gameStateKey : archiveGameStateKey
  if (isHardMode) {
    key += 'Harder'
  }
  localStorage.setItem(key, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = (
  isHardMode: boolean,
  isLatestGame: boolean
) => {
  let key = isLatestGame ? gameStateKey : archiveGameStateKey
  if (isHardMode) {
    key += 'Harder'
  }
  const state = localStorage.getItem(key)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

export const setStoredIsHighContrastMode = (isHighContrast: boolean) => {
  if (isHighContrast) {
    localStorage.setItem(highContrastKey, '1')
  } else {
    localStorage.removeItem(highContrastKey)
  }
}

export const getStoredIsHighContrastMode = () => {
  const highContrast = localStorage.getItem(highContrastKey)
  return highContrast === '1'
}
