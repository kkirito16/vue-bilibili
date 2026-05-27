import { useUiStore } from '@/stores/ui'

export function useSearch() {
  const ui = useUiStore()

  function searchFocus() {
    const search = document.querySelector('.header .search input')
    const sear = document.querySelector('.header .search')
    if (search) search.style.backgroundColor = 'rgb(227,229,231)'
    if (sear) {
      sear.style.borderBottomLeftRadius = '0px'
      sear.style.borderBottomRightRadius = '0px'
    }
    ui.searchDialog = true
  }

  function searchBlur() {
    const search = document.querySelector('.header .search input')
    const sear = document.querySelector('.header .search')
    if (search) search.style.backgroundColor = '#f1f2f3'
    if (sear) {
      sear.style.borderBottomLeftRadius = '8px'
      sear.style.borderBottomRightRadius = '8px'
    }
    ui.searchDialog = false
  }

  return { searchFocus, searchBlur }
}
