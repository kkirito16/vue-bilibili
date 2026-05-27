import { defineStore } from 'pinia'
import { ref } from 'vue'
import img1 from '@/assets/img/1.jpg'
import img2 from '@/assets/img/2.jpg'
import img3 from '@/assets/img/3.jpg'
import img4 from '@/assets/img/4.jpg'
import img5 from '@/assets/img/5.jpg'

export const useVideoStore = defineStore('video', () => {
  const hoveredVideo = ref(0)
  const isPlaying = ref({ 1: false, 2: false })
  const imagePaths = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
  }

  function playVideo(videoId, event) {
    const videoCoverElement = event.currentTarget.querySelector('img')
    if (videoCoverElement) videoCoverElement.style.opacity = '0'
    hoveredVideo.value = videoId
    isPlaying.value[videoId] = true
  }

  function pauseVideo(videoId, event) {
    const videoCoverElement = event.currentTarget.querySelector('img')
    if (videoCoverElement) videoCoverElement.style.opacity = '1'
    hoveredVideo.value = 0
    isPlaying.value[videoId] = false
  }

  return {
    hoveredVideo,
    isPlaying,
    imagePaths,
    playVideo,
    pauseVideo,
  }
})
