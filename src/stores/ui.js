import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const live = ref(false)
  const game = ref(false)
  const book = ref(false)
  const download = ref(false)
  const searchDialog = ref(false)
  const userDialog = ref(false)
  const vip = ref(false)
  const message = ref(false)
  const activity = ref(false)
  const favorites = ref(false)
  const history = ref(false)
  const submission = ref(false)

  return {
    live,
    game,
    book,
    download,
    searchDialog,
    userDialog,
    vip,
    message,
    activity,
    favorites,
    history,
    submission,
  }
})
