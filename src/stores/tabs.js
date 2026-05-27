import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabsStore = defineStore('tabs', () => {
  const activeTabActivity = ref('视频动态')
  const activeTabHistory = ref('视频动态')
  const activeTabFavorites = ref('默认收藏夹')

  return {
    activeTabActivity,
    activeTabHistory,
    activeTabFavorites,
  }
})
