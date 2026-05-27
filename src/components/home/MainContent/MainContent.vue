<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules'
import { useVideoStore } from '@/stores/video'

const video = useVideoStore()
const { hoveredVideo } = storeToRefs(video)
const { playVideo, pauseVideo } = video

const navigation = ref({
  nextEl: '.custom-next',
  prevEl: '.custom-prev',
})

const modules = [Autoplay, Pagination, Navigation, Scrollbar]

const prevEl = () => {}
const nextEl = () => {}
const onSlideChange = (swiper) => {
  console.log(swiper.activeIndex)
}
</script>

<template>
    <div class="content">
      <div style="margin-left: 100px; flex: 3">
        <div class="swiper-container" style="width: 545px; height: 307px">
          <swiper
            :modules="modules"
            :loop="true"
            :slides-per-view="1"
            :space-between="50"
            :autoplay="{ delay: 40000000000, disableOnInteraction: false }"
            :navigation="navigation"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: false }"
            class="swiperBox"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/1.jpg"
                  alt="Slide 1"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">分享双11生活记录，超40万等你瓜分！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/2.jpg"
                  alt="Slide 2"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">直播中……精彩程度堪比上海万圣节！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/3.jpg"
                  alt="Slide 3"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">这也行？</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/4.jpg"
                  alt="Slide 4"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">豆瓣8.6，英国奇幻情景剧更新！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/5.jpg"
                  alt="Slide 5"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">年底冲刺中 看看你的珍藏回忆！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/6.jpg"
                  alt="Slide 6"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">重温暑期黑马《古相思曲》</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/7.jpg"
                  alt="Slide 7"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">魔镜魔镜，告诉我...</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/8.jpg"
                  alt="Slide 8"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">那些万圣节必看的经典恐怖片！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="@/assets/img/9.jpg"
                  alt="Slide 9"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">吴慷仁柯佳嬿联手，演绎人性善恶</p>
              </div>
            </swiper-slide>
            <!-- 左箭头 -->
            <div class="swiper-button-prev custom-prev" @click.stop="prevEl" />
            <!-- 右箭头 -->
            <div class="swiper-button-next custom-next" @click.stop="nextEl" />
          </swiper>
        </div>
      </div>
      <div class="contentmain">
        <ul>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(1, $event)"
              @mouseleave.stop="pauseVideo(1, $event)"
            >
              <img
                referrerpolicy="no-referrer"
                src="https://i1.hdslb.com/bfs/archive/d4b1bf651d827dd2f24fc5bcdcb3f38995a314c1.jpg"
                alt="Video Cover"
                ref="videoCover1"
              />
              <iframe
                v-if="hoveredVideo === 1"
                src="https://player.bilibili.com/player.html?bvid=BV14TLA6FEBf&autoplay=1&high_quality=1&danmaku=0"
                allowfullscreen
                scrolling="no"
                ref="video1"
              ></iframe>
            </div>
            <div class="video-info">
              <h3 title="《异环》安魂曲角色短片丨晚安，我温柔的星光">
                《异环》安魂曲角色短片丨晚安，我温柔的星光
              </h3>
              <div style="padding-top: 4px; align-items: center">
                <!---->
                <!--[--><span
                  class="bili-video-card__info--owner"
                  data-spmid="333.1007"
                  data-mod="tianma.1-1-1"
                  data-idx="click"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="lightgray"
                    class="bili-video-card__info--owner__up"
                  >
                    <!--[-->
                    <path
                      d="M6.15 8.24805C6.5642 8.24805 6.9 8.58383 6.9 8.99805L6.9 12.7741C6.9 13.5881 7.55988 14.248 8.3739 14.248C9.18791 14.248 9.8478 13.5881 9.8478 12.7741L9.8478 8.99805C9.8478 8.58383 10.1836 8.24805 10.5978 8.24805C11.012 8.24805 11.3478 8.58383 11.3478 8.99805L11.3478 12.7741C11.3478 14.41655 10.01635 15.748 8.3739 15.748C6.73146 15.748 5.4 14.41655 5.4 12.7741L5.4 8.99805C5.4 8.58383 5.73578 8.24805 6.15 8.24805z"
                      fill="#D3D3D3"
                    ></path>
                    <path
                      d="M12.6522 8.99805C12.6522 8.58383 12.98795 8.24805 13.4022 8.24805L15.725 8.24805C17.31285 8.24805 18.6 9.53522 18.6 11.123C18.6 12.71085 17.31285 13.998 15.725 13.998L14.1522 13.998L14.1522 14.998C14.1522 15.4122 13.8164 15.748 13.4022 15.748C12.98795 15.748 12.6522 15.4122 12.6522 14.998L12.6522 8.99805zM14.1522 12.498L15.725 12.498C16.4844 12.498 17.1 11.8824 17.1 11.123C17.1 10.36365 16.4844 9.74804 15.725 9.74804L14.1522 9.74804L14.1522 12.498z"
                      fill="#D3D3D3"
                    ></path>
                    <path
                      d="M12 4.99805C9.48178 4.99805 7.283 5.12616 5.73089 5.25202C4.65221 5.33949 3.81611 6.16352 3.72 7.23254C3.60607 8.4998 3.5 10.171 3.5 11.998C3.5 13.8251 3.60607 15.4963 3.72 16.76355C3.81611 17.83255 4.65221 18.6566 5.73089 18.7441C7.283 18.8699 9.48178 18.998 12 18.998C14.5185 18.998 16.7174 18.8699 18.2696 18.74405C19.3481 18.65655 20.184 17.8328 20.2801 16.76405C20.394 15.4973 20.5 13.82645 20.5 11.998C20.5 10.16965 20.394 8.49877 20.2801 7.23205C20.184 6.1633 19.3481 5.33952 18.2696 5.25205C16.7174 5.12618 14.5185 4.99805 12 4.99805zM5.60965 3.75693C7.19232 3.62859 9.43258 3.49805 12 3.49805C14.5677 3.49805 16.8081 3.62861 18.3908 3.75696C20.1881 3.90272 21.6118 5.29278 21.7741 7.09773C21.8909 8.3969 22 10.11405 22 11.998C22 13.88205 21.8909 15.5992 21.7741 16.8984C21.6118 18.7033 20.1881 20.09335 18.3908 20.23915C16.8081 20.3675 14.5677 20.498 12 20.498C9.43258 20.498 7.19232 20.3675 5.60965 20.2392C3.81206 20.0934 2.38831 18.70295 2.22603 16.8979C2.10918 15.5982 2 13.8808 2 11.998C2 10.1153 2.10918 8.39787 2.22603 7.09823C2.38831 5.29312 3.81206 3.90269 5.60965 3.75693z"
                      fill="#D3D3D3"
                    ></path>
                    <!--]-->
                  </svg>
                  <span
                    title="异环"
                    style="color: lightgray; align-items: center"
                    >异环</span
                  >
                  <span style="color: lightgray">· 05-27</span>
                </span>
                <!--]-->
              </div>
            </div>
          </li>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(2, $event)"
              @mouseleave.stop="pauseVideo(2, $event)"
            >
              <img
                referrerpolicy="no-referrer"
                src="https://i1.hdslb.com/bfs/archive/b1476bed76ab8ca677e2d1ca7addc37ee8a682c7.jpg"
                alt="Video Cover"
                ref="videoCover2"
              />
              <iframe
                v-if="hoveredVideo === 2"
                src="https://player.bilibili.com/player.html?bvid=BV1yVVw6EEBE&autoplay=1&high_quality=1&danmaku=0"
                allowfullscreen
                scrolling="no"
                ref="video2"
              ></iframe>
            </div>
            <div class="video-info">
              <h3
                title="聪明的猫是要多承担一点的…"

              >
                聪明的猫是要多承担一点的…
              </h3>
              <div style="display: flex; align-items: center">
                <div
                  style="
                    margin-right: 10px;
                    padding-top: 13px;
                    color: #ff7f24;
                    font-size: 12px;
                  "
                >
                  <span style="background: #fff0e3"> 已关注 </span>
                </div>
                <span
                  title="亮亮也是酿酿"
                  style="
                    color: lightgray;
                    align-items: center;
                    padding-top: 12px;
                  "
                  >亮亮也是酿酿</span
                >
                <span style="color: lightgray; padding-top: 12px"
                  >· 05-26</span
                >
              </div>
            </div>
          </li>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(3, $event)"
              @mouseleave.stop="pauseVideo(3, $event)"
            >
              <img
                referrerpolicy="no-referrer"
                src="https://i2.hdslb.com/bfs/archive/2d99f0a2ffb98a26b0feae21b8b2cde1a9e99b1c.jpg"
                alt="Video Cover"
                ref="videoCover3"
              />
              <iframe
                v-if="hoveredVideo === 3"
                src="https://player.bilibili.com/player.html?bvid=BV1vYVw6vEuE&autoplay=1&high_quality=1&danmaku=0"
                allowfullscreen
                scrolling="no"
                ref="video3"
              ></iframe>
            </div>
            <div class="video-info">
              <h3
                title="【原创短剧】第二季01：飞升失败 开局成为人渣"

              >
                【原创短剧】第二季01：飞升失败 开局成为人渣
              </h3>
              <div style="display: flex; align-items: center">
                <div
                  style="
                    margin-right: 10px;
                    padding-top: 13px;
                    color: #ff7f24;
                    font-size: 12px;
                  "
                >
                  <span style="background: #fff0e3"> 2万点赞 </span>
                </div>
                <span
                  title="熟练丶"
                  style="
                    color: lightgray;
                    align-items: center;
                    padding-top: 12px;
                  "
                  >熟练丶</span
                >
                <span style="color: lightgray; padding-top: 12px">· 05-26</span>
              </div>
            </div>
          </li>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(4, $event)"
              @mouseleave.stop="pauseVideo(4, $event)"
            >
              <img
                referrerpolicy="no-referrer"
                src="https://i0.hdslb.com/bfs/archive/e5910140923c535afc3571c54cca9cb71f45c185.jpg"
                alt="Video Cover"
                ref="videoCover4"
              />
              <iframe
                v-if="hoveredVideo === 4"
                src="https://player.bilibili.com/player.html?bvid=BV1GPVP6PEdj&autoplay=1&high_quality=1&danmaku=0"
                allowfullscreen
                scrolling="no"
                ref="video4"
              ></iframe>
            </div>
            <div class="video-info">
              <h3
                title="取一个好的标题更能吸引观众哦～～"

              >
                取一个好的标题更能吸引观众哦～～
              </h3>
              <div style="padding-top: 4px; align-items: center">
                <!---->
                <!--[--><span
                  class="bili-video-card__info--owner"
                  data-spmid="333.1007"
                  data-mod="tianma.1-1-1"
                  data-idx="click"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="lightgray"
                    class="bili-video-card__info--owner__up"
                  >
                    <!--[-->
                    <path
                      d="M6.15 8.24805C6.5642 8.24805 6.9 8.58383 6.9 8.99805L6.9 12.7741C6.9 13.5881 7.55988 14.248 8.3739 14.248C9.18791 14.248 9.8478 13.5881 9.8478 12.7741L9.8478 8.99805C9.8478 8.58383 10.1836 8.24805 10.5978 8.24805C11.012 8.24805 11.3478 8.58383 11.3478 8.99805L11.3478 12.7741C11.3478 14.41655 10.01635 15.748 8.3739 15.748C6.73146 15.748 5.4 14.41655 5.4 12.7741L5.4 8.99805C5.4 8.58383 5.73578 8.24805 6.15 8.24805z"
                      fill="#D3D3D3"
                    ></path>
                    <path
                      d="M12.6522 8.99805C12.6522 8.58383 12.98795 8.24805 13.4022 8.24805L15.725 8.24805C17.31285 8.24805 18.6 9.53522 18.6 11.123C18.6 12.71085 17.31285 13.998 15.725 13.998L14.1522 13.998L14.1522 14.998C14.1522 15.4122 13.8164 15.748 13.4022 15.748C12.98795 15.748 12.6522 15.4122 12.6522 14.998L12.6522 8.99805zM14.1522 12.498L15.725 12.498C16.4844 12.498 17.1 11.8824 17.1 11.123C17.1 10.36365 16.4844 9.74804 15.725 9.74804L14.1522 9.74804L14.1522 12.498z"
                      fill="#D3D3D3"
                    ></path>
                    <path
                      d="M12 4.99805C9.48178 4.99805 7.283 5.12616 5.73089 5.25202C4.65221 5.33949 3.81611 6.16352 3.72 7.23254C3.60607 8.4998 3.5 10.171 3.5 11.998C3.5 13.8251 3.60607 15.4963 3.72 16.76355C3.81611 17.83255 4.65221 18.6566 5.73089 18.7441C7.283 18.8699 9.48178 18.998 12 18.998C14.5185 18.998 16.7174 18.8699 18.2696 18.74405C19.3481 18.65655 20.184 17.8328 20.2801 16.76405C20.394 15.4973 20.5 13.82645 20.5 11.998C20.5 10.16965 20.394 8.49877 20.2801 7.23205C20.184 6.1633 19.3481 5.33952 18.2696 5.25205C16.7174 5.12618 14.5185 4.99805 12 4.99805zM5.60965 3.75693C7.19232 3.62859 9.43258 3.49805 12 3.49805C14.5677 3.49805 16.8081 3.62861 18.3908 3.75696C20.1881 3.90272 21.6118 5.29278 21.7741 7.09773C21.8909 8.3969 22 10.11405 22 11.998C22 13.88205 21.8909 15.5992 21.7741 16.8984C21.6118 18.7033 20.1881 20.09335 18.3908 20.23915C16.8081 20.3675 14.5677 20.498 12 20.498C9.43258 20.498 7.19232 20.3675 5.60965 20.2392C3.81206 20.0934 2.38831 18.70295 2.22603 16.8979C2.10918 15.5982 2 13.8808 2 11.998C2 10.1153 2.10918 8.39787 2.22603 7.09823C2.38831 5.29312 3.81206 3.90269 5.60965 3.75693z"
                      fill="#D3D3D3"
                    ></path>
                    <!--]-->
                  </svg>
                  <span
                    title="北古橘右京"
                    style="color: lightgray; align-items: center"
                    >北古橘右京</span
                  >
                  <span style="color: lightgray">· 05-26</span>
                </span>
                <!--]-->
              </div>
            </div>
          </li>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(5, $event)"
              @mouseleave.stop="pauseVideo(5, $event)"
            >
              <img
                referrerpolicy="no-referrer"
                src="https://i2.hdslb.com/bfs/archive/63976395c0f66ef471e6910d141fb87289cbe507.jpg"
                alt="Video Cover"
                ref="videoCover5"
              />
              <iframe
                v-if="hoveredVideo === 5"
                src="https://player.bilibili.com/player.html?bvid=BV1ZT5X6EEvA&autoplay=1&high_quality=1&danmaku=0"
                allowfullscreen
                scrolling="no"
                ref="video5"
              ></iframe>
            </div>
            <div class="video-info">
              <h3
                title="【剧情】黑爵士 第一季（1983）01【罗温·艾金森】"

              >
                【剧情】黑爵士 第一季（1983）01【罗温·艾金森】
              </h3>
              <div style="display: flex; align-items: center">
                <div
                  style="
                    margin-right: 10px;
                    padding-top: 13px;
                    color: #ff7f24;
                    font-size: 12px;
                  "
                >
                  <span style="background: #fff0e3"> 已关注 </span>
                </div>
                <span
                  title="迷影社"
                  style="
                    color: lightgray;
                    align-items: center;
                    padding-top: 12px;
                  "
                  >迷影社</span
                >
                <span style="color: lightgray; padding-top: 12px">· 05-24</span>
              </div>
            </div>
          </li>
          <li class="video-card--placeholder">
            <div class="video-container">
              <img src="@/assets/img/icon2.jpg" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <div class="changetag">
        <button data-v-7ae03d4e="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            style="transform: rotate(0deg)"
          >
            <path
              d="M8.624933333333333 13.666666666666666C8.624933333333333 14.011849999999999 8.345125 14.291666666666666 7.999933333333333 14.291666666666666C4.525166666666666 14.291666666666666 1.7082933333333332 11.474791666666665 1.7082933333333332 8C1.7082933333333332 6.013308333333333 2.629825 4.2414233333333335 4.066321666666667 3.089385C4.335603333333333 2.8734283333333335 4.728959999999999 2.9166533333333335 4.944915 3.1859349999999997C5.160871666666666 3.4552099999999997 5.1176466666666665 3.848573333333333 4.848366666666666 4.0645283333333335C3.694975 4.98953 2.9582933333333328 6.40852 2.9582933333333328 8C2.9582933333333328 10.784416666666667 5.215528333333333 13.041666666666666 7.999933333333333 13.041666666666666C8.345125 13.041666666666666 8.624933333333333 13.321483333333333 8.624933333333333 13.666666666666666zM11.060475 12.810558333333333C10.844225000000002 12.541558333333331 10.887033333333335 12.148125 11.156041666666667 11.931875C12.306858333333333 11.006775 13.041599999999999 9.589424999999999 13.041599999999999 8C13.041599999999999 5.215561666666666 10.784408333333332 2.958333333333333 7.999933333333333 2.958333333333333C7.6548083333333325 2.958333333333333 7.374933333333333 2.6785083333333333 7.374933333333333 2.333333333333333C7.374933333333333 1.9881533333333332 7.6548083333333325 1.7083333333333333 7.999933333333333 1.7083333333333333C11.474725000000001 1.7083333333333333 14.291599999999999 4.525206666666667 14.291599999999999 8C14.291599999999999 9.984108333333333 13.372483333333332 11.753958333333332 11.939225 12.906125C11.670166666666663 13.122375 11.276725 13.079625 11.060475 12.810558333333333z"
              fill="currentColor"
            ></path>
            <path
              d="M1.375 3.4130866666666666C1.375 3.0679066666666666 1.654825 2.7880866666666666 2 2.7880866666666666L4.333333333333333 2.7880866666666666C4.862608333333333 2.7880866666666666 5.291666666666666 3.2171449999999995 5.291666666666666 3.7464199999999996L5.291666666666666 6.079753333333334C5.291666666666666 6.424928333333334 5.011841666666666 6.704736666666666 4.666666666666666 6.704736666666666C4.321491666666667 6.704736666666666 4.041666666666666 6.424928333333334 4.041666666666666 6.079753333333334L4.041666666666666 4.038086666666667L2 4.038086666666667C1.654825 4.038086666666667 1.375 3.7582616666666664 1.375 3.4130866666666666z"
              fill="currentColor"
            ></path>
            <path
              d="M14.625 12.5864C14.625 12.931591666666666 14.345183333333333 13.2114 14 13.2114L11.666666666666666 13.2114C11.137408333333335 13.2114 10.708333333333332 12.782383333333332 10.708333333333332 12.253066666666665L10.708333333333332 9.919733333333333C10.708333333333332 9.574608333333334 10.98815 9.294733333333333 11.333333333333332 9.294733333333333C11.678516666666667 9.294733333333333 11.958333333333332 9.574608333333334 11.958333333333332 9.919733333333333L11.958333333333332 11.9614L14 11.9614C14.345183333333333 11.9614 14.625 12.241275000000002 14.625 12.5864z"
              fill="currentColor"
            ></path>
          </svg>
          <span>换一换</span>
        </button>
      </div>
    </div>

</template>

<style lang="scss" scoped>
@import './styles/content.scss';
</style>

<style lang="scss">
.swiper-pagination {
  text-align: left;
  padding-left: 15px;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 1;
}

.swiper-pagination-bullet-active {
  width: 14px;
  height: 14px;
  bottom: 0;
  opacity: 1;
  background-color: #ffffff;
}

</style>
