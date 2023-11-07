<template>
  <div>
    <div class="header">
      <div class="header-nav">
        <div class="menu">
          <ul>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-right: 6px; color: white"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span style="position: relative; bottom: 3.5px">首页</span>
            </li>
            <li><span>番剧</span></li>
            <li @mouseenter="live = true" @mouseleave="live = false">
              <span>直播</span>
            </li>
            <li @mouseenter="game = true" @mouseleave="game = false">
              <span>游戏中心</span>
            </li>
            <li><span>会员购</span></li>
            <li @mouseenter="book = true" @mouseleave="book = false">
              <span>漫画</span>
            </li>
            <li><span>赛事</span></li>
            <li><span>新世代</span></li>
            <li><span>S13</span></li>
            <li @mouseenter="download = true" @mouseleave="download = false">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-right: 5px; width: 16px; height: 16px"
              >
                <path
                  d="M7.23181 8.65895V1.75796C7.23181 1.33935 7.57582 1 8.00018 1C8.42453 1 8.76854 1.33935 8.76854 1.75796V8.67097L9.98589 7.47009C10.286 7.17409 10.7725 7.17409 11.0725 7.47009C11.3726 7.7661 11.3726 8.24601 11.0725 8.54201L8.54958 11.0308C8.24952 11.3268 7.76302 11.3268 7.46295 11.0308L4.94002 8.54201C4.63995 8.24601 4.63995 7.7661 4.94002 7.47009C5.24008 7.17409 5.72658 7.17409 6.02665 7.47009L7.23181 8.65895Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M3.48023 4.29936C2.40686 4.29936 1.53672 5.15772 1.53672 6.21656V11.5669C1.53672 12.6257 2.40686 13.4841 3.48023 13.4841H12.5198C13.5931 13.4841 14.4633 12.6257 14.4633 11.5669V6.21656C14.4633 5.15772 13.5931 4.29936 12.5198 4.29936H11.6158C11.1915 4.29936 10.8475 3.96001 10.8475 3.5414C10.8475 3.12279 11.1915 2.78344 11.6158 2.78344H12.5198C14.4418 2.78344 16 4.3205 16 6.21656V11.5669C16 13.4629 14.4418 15 12.5198 15H3.48023C1.55815 15 0 13.4629 0 11.5669V6.21656C0 4.3205 1.55815 2.78344 3.48023 2.78344H4.38418C4.80853 2.78344 5.15254 3.12279 5.15254 3.5414C5.15254 3.96001 4.80853 4.29936 4.38418 4.29936H3.48023Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>下载客户端</span>
            </li>
          </ul>
        </div>
        <div class="search">
          <div class="input-container">
            <input
              type="text"
              placeholder="搜索"
              @focus="searchFoucs"
              @blur="searchBlur"
            />
            <div class="search-icon">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div class="shDialog" v-if="searchDialog">
            <ul>
              <h2 style="font-size: 18px">搜索历史</h2>
              <h3
                style="font-size: 12px; color: #9499a0; cursor: pointer"
                onmouseover="this.style.color='#00aeec'"
                onmouseout="this.style.color='#9499a0'"
              >
                清空
              </h3>
            </ul>
            <ul>
              <li>&nbsp&nbsp明日方舟恶兆湍流&nbsp&nbsp</li>
              <li>&nbsp&nbsp土豆兄弟&nbsp&nbsp</li>
              <li>&nbsp&nbspVue3学习&nbsp&nbsp</li>
              <li>&nbsp&nbsp英雄联盟世界赛&nbsp&nbsp</li>
            </ul>
            <ol>
              <h2>bilibili热搜</h2>
              <div>
                <div class="search-num1">1</div>
                李佳琦直播间再次带货花西子&nbsp<img
                  src="../assets/img/热.jpg"
                  alt=""
                  style="width: 16px; height: 16px; vertical-align: bottom"
                />
              </div>
              <div>
                <div class="search-num1">2</div>
                声优一城美由希去世&nbsp<img
                  src="../assets/img/热.jpg"
                  alt=""
                  style="width: 16px; height: 16px; vertical-align: bottom"
                />
              </div>
              <div>
                <div class="search-num1">3</div>
                观察者网评高校禁酒令&nbsp<img
                  src="../assets/img/热.jpg"
                  alt=""
                  style="width: 16px; height: 16px; vertical-align: bottom"
                />
              </div>
              <div>
                <div class="search-num2">4</div>
                LPL三支队均无优先选边权&nbsp<img
                  src="../assets/img/热.jpg"
                  alt=""
                  style="width: 16px; height: 16px; vertical-align: bottom"
                />
              </div>
              <div>
                <div class="search-num2">5</div>
                JDG这就是369的剑魔
              </div>
              <div>
                <div class="search-num2">6</div>
                UP上央视主持人大赛了&nbsp<img
                  src="../assets/img/新.jpg"
                  alt=""
                  style="width: 16px; height: 16px; vertical-align: bottom"
                />
              </div>
              <div>
                <div class="search-num2">7</div>
                IGN上线GTA6页面&nbsp<img
                  src="../assets/img/新.jpg"
                  alt=""
                  style="width: 16px; height: 16px; vertical-align: bottom"
                />
              </div>
              <div>
                <div class="search-num2">8</div>
                海底捞回应招传菜员要985
              </div>
              <div>
                <div class="search-num2">9</div>
                金智秀与安普贤分手
              </div>
              <div>
                <div class="search-num2">10</div>
                LOL泰坦Q闪BUG&nbsp<img
                  src="../assets/img/新.jpg"
                  alt=""
                  style="width: 16px; height: 16px; vertical-align: bottom"
                />
              </div>
            </ol>
          </div>
        </div>
        <div class="user">
          <ul>
            <li
              class="user-img"
              @mouseenter="userDialog = true"
              @mouseleave="userDialog = false"
            >
              <img src="../assets/img/user.jpg" alt="" style="z-index: 9999" />
              <div class="user-content" v-if="userDialog" style="z-index: 9998">
                <h2 style="margin-top: 50px">啥也不会但是啥也懂一点</h2>
                <ul style="font-size: 12px; color: #85888a; margin-top: 5px">
                  <li>硬币:868.8</li>
                  <li>B币:999</li>
                </ul>
                <ul style="margin: 10px 0px">
                  <li
                    style="
                      color: white;
                      text-shadow: -1px -1px 0 orange, 1px -1px 0 orange,
                        -1px 1px 0 orange, 1px 1px 0 orange;
                    "
                  >
                    lv5
                  </li>
                  <li
                    style="
                      width: 180px;
                      height: 2px;
                      background: linear-gradient(
                        to right,
                        orange 80%,
                        #cad0d4 20%
                      );
                    "
                  ></li>
                  <li
                    style="
                      color: white;
                      text-shadow: -1px -1px 0 orange, 1px -1px 0 orange,
                        -1px 1px 0 orange, 1px 1px 0 orange;
                    "
                  >
                    lv6
                  </li>
                </ul>
                <span style="font-size: 12px; color: #d0d3d6"
                  >当前成长25204,距离升级lv.6还需要成长3596</span
                >
                <ul style="margin: 10px 0">
                  <li
                    style="
                      display: flex;
                      flex-direction: column;
                      margin-right: 40px;
                    "
                  >
                    <span>204</span>
                    <span style="font-size: 12px; color: #b4b7bb">关注</span>
                  </li>
                  <li
                    style="
                      display: flex;
                      flex-direction: column;
                      margin-right: 40px;
                    "
                  >
                    <span>25</span>
                    <span style="font-size: 12px; color: #b4b7bb">粉丝</span>
                  </li>
                  <li style="display: flex; flex-direction: column">
                    <span>16</span>
                    <span style="font-size: 12px; color: #b4b7bb">动态</span>
                  </li>
                </ul>
                <div
                  style="
                    width: 260px;
                    height: 60px;
                    background: rgb(254, 223, 228);
                    margin: 15px 20px;
                    position: relative;
                    border-radius: 5px;
                    border: 0;
                  "
                >
                  <span
                    style="
                      color: rgb(239, 97, 189);
                      position: absolute;
                      top: 15px;
                      left: 10px;
                      font-size: 14px;
                    "
                    >大会员×QQSVIP特惠中</span
                  >
                  <span
                    style="
                      font-size: 12px;
                      color: #616161;
                      position: absolute;
                      top: 35px;
                      left: 10px;
                    "
                    >168元买一年送一年</span
                  >
                  <button
                    style="
                      position: absolute;
                      top: 17px;
                      left: 170px;
                      width: 70px;
                      height: 27px;
                      font-size: 12px;
                      background: white;
                      border-radius: 5px;
                      border: 0;
                      color: rgb(240, 157, 171);
                    "
                  >
                    立即开通
                  </button>
                </div>
                <ul
                  style="
                    font-size: 14px;
                    color: #616161;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    left: -90px;
                  "
                >
                  <li style="margin-bottom: 30px">个人中心</li>
                  <li style="margin-bottom: 30px">投稿管理</li>
                  <li style="margin-bottom: 30px">推荐服务</li>
                  <hr style="border-top: 1px solid #ccc; margin: 8px 0" />
                  <li>退出登录</li>
                </ul>
              </div>
            </li>
            <!-- menu -->
            <li
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
                cursor: pointer;
                padding-bottom: 30px;
              "
              @mouseenter="vip = true"
              @mouseleave="vip = false"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="right-entry-icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 1C5.02955 1 1 5.02955 1 10C1 14.9705 5.02955 19 10 19C14.9705 19 19 14.9705 19 10C19 5.02955 14.9705 1 10 1ZM10.0006 2.63614C14.0612 2.63614 17.3642 5.93996 17.3642 9.99977C17.3642 14.0604 14.0612 17.3634 10.0006 17.3634C5.93996 17.3634 2.63696 14.0604 2.63696 9.99977C2.63696 5.93996 5.93996 2.63614 10.0006 2.63614Z"
                  fill="white"
                ></path>
                <path
                  d="M13.1381 8.05573V8.05331H10.7706C10.7859 7.8643 10.7948 7.67286 10.7948 7.47981C10.7948 7.26414 10.7843 7.05008 10.7649 6.83926C10.7658 6.82552 10.7674 6.81179 10.7674 6.79725V6.79483C10.7674 6.35541 10.4111 6 9.97254 6C9.53312 6 9.17771 6.35622 9.17771 6.79483V6.79725C9.17771 6.85137 9.18336 6.90468 9.19386 6.95557L9.18255 6.95719C9.19871 7.12924 9.20759 7.30291 9.20759 7.479C9.20759 7.67286 9.19709 7.8643 9.17771 8.0525H6.74313V8.05573C6.32876 8.08239 6 8.42649 6 8.84814V8.85057C6 9.28998 6.33683 9.64216 6.77544 9.64216C6.80937 9.64216 6.8441 9.64378 6.89903 9.64297L8.7601 9.63893C8.28837 10.7294 7.47011 11.6341 6.44507 12.2149C6.44023 12.2173 6.43619 12.2197 6.43134 12.2229C6.42003 12.2294 6.40953 12.2359 6.39822 12.2423L6.39903 12.2431C6.17528 12.3837 6.02585 12.6325 6.02585 12.916V12.9184C6.02585 13.3578 6.38207 13.7132 6.82068 13.7132C6.99111 13.7132 7.14782 13.6591 7.27706 13.5687C8.7706 12.706 9.9168 11.3094 10.4556 9.64055H13.0105C13.0517 9.64136 13.1131 9.63893 13.1131 9.63893C13.5905 9.62924 13.9039 9.2916 13.9039 8.85299V8.85057C13.9047 8.42003 13.5638 8.07108 13.1381 8.05573Z"
                  fill="white"
                ></path>
                <path
                  d="M13.7731 12.5388C13.7715 12.5356 13.7691 12.5331 13.7674 12.5307C13.74 12.4814 13.7077 12.4362 13.6713 12.3942C13.1584 11.6672 12.513 11.0412 11.7674 10.5541L11.7666 10.555C11.6366 10.4613 11.4766 10.4055 11.3046 10.4055C10.8652 10.4055 10.5098 10.7617 10.5098 11.2003V11.2028C10.5098 11.5033 10.677 11.765 10.9233 11.8999C11.5615 12.3215 12.0825 12.8045 12.4944 13.4499L12.5372 13.5041C12.6786 13.6333 12.866 13.7133 13.0728 13.7133C13.5122 13.7133 13.8676 13.3571 13.8676 12.9184V12.916C13.8668 12.7795 13.8329 12.6511 13.7731 12.5388Z"
                  fill="white"
                ></path>
              </svg>
              <span
                style="
                  color: white;
                  margin-top: 3px;
                  font-size: 12px;
                  font-weight: bold;
                  cursor: pointer;
                "
                >大会员</span
              >
            </li>
            <li
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
                cursor: pointer;
                padding-bottom: 30px;
              "
              @mouseenter="message = true"
              @mouseleave="message = false"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="right-entry-icon"
              >
                <path
                  d="M15.435 17.7717H4.567C2.60143 17.7717 1 16.1723 1 14.2047V5.76702C1 3.80144 2.59942 2.20001 4.567 2.20001H15.433C17.3986 2.20001 19 3.79943 19 5.76702V14.2047C19.002 16.1703 17.4006 17.7717 15.435 17.7717ZM4.567 4.00062C3.59327 4.00062 2.8006 4.79328 2.8006 5.76702V14.2047C2.8006 15.1784 3.59327 15.9711 4.567 15.9711H15.433C16.4067 15.9711 17.1994 15.1784 17.1994 14.2047V5.76702C17.1994 4.79328 16.4067 4.00062 15.433 4.00062H4.567Z"
                  fill="white"
                ></path>
                <path
                  d="M9.99943 11.2C9.51188 11.2 9.02238 11.0667 8.59748 10.8019L8.5407 10.7635L4.3329 7.65675C3.95304 7.37731 3.88842 6.86226 4.18996 6.50976C4.48954 6.15544 5.0417 6.09699 5.4196 6.37643L9.59412 9.45943C9.84279 9.60189 10.1561 9.60189 10.4067 9.45943L14.5812 6.37643C14.9591 6.09699 15.5113 6.15544 15.8109 6.50976C16.1104 6.86409 16.0478 7.37731 15.6679 7.65675L11.4014 10.8019C10.9765 11.0667 10.487 11.2 9.99943 11.2Z"
                  fill="white"
                ></path>
              </svg>
              <span
                style="
                  color: white;
                  margin-top: 3px;
                  font-size: 12px;
                  font-weight: bold;
                  cursor: pointer;
                "
                >消息</span
              >
            </li>
            <li
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
                cursor: pointer;
                padding-bottom: 30px;
              "
              @mouseenter="activity = true"
              @mouseleave="activity = false"
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="channel-icon dynamic"
              >
                <path
                  d="M6.41659 15.625C3.88528 15.625 1.83325 13.7782 1.83325 11.5H10.9999C10.9999 13.7782 8.94789 15.625 6.41659 15.625Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.125 16.0827C15.125 18.614 13.2782 20.666 11 20.666L11 11.4993C13.2782 11.4993 15.125 13.5514 15.125 16.0827Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.875 6.91667C6.875 9.44797 8.72183 11.5 11 11.5L11 2.33333C8.72182 2.33333 6.875 4.38536 6.875 6.91667Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.5833 7.375C13.052 7.375 11 9.22183 11 11.5H20.1667C20.1667 9.22183 18.1146 7.375 15.5833 7.375Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span
                style="
                  color: white;
                  margin-top: 3px;
                  font-size: 12px;
                  font-weight: bold;
                  cursor: pointer;
                "
                >动态</span
              >
            </li>
            <li
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
                cursor: pointer;
                padding-bottom: 30px;
              "
              @mouseenter="favorites = true"
              @mouseleave="favorites = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                style="color: #ffffff"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M10 10.743C7.69883 10.743 5.83333 8.87747 5.83333 6.5763C5.83333 4.27512 7.69883 2.40964 10 2.40964V10.743Z"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10 10.743C10 13.0441 8.1345 14.9096 5.83333 14.9096C3.53217 14.9096 1.66667 13.0441 1.66667 10.743H10Z"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10 10.743C10 8.44182 11.8655 6.57632 14.1667 6.57632C16.4679 6.57632 18.3333 8.44182 18.3333 10.743H10Z"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9.99999 10.743C12.3012 10.743 14.1667 12.6085 14.1667 14.9096C14.1667 17.2108 12.3012 19.0763 9.99999 19.0763V10.743Z"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="20"
                      height="20"
                      fill="currentColor"
                      transform="matrix(-1 0 0 1 20 0.742981)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <span
                style="
                  color: white;
                  margin-top: 3px;
                  font-size: 12px;
                  font-weight: bold;
                  cursor: pointer;
                "
                >收藏</span
              >
            </li>
            <li
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
                cursor: pointer;
                padding-bottom: 30px;
              "
              @mouseenter="history = true"
              @mouseleave="history = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="color: #ffffff"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 1.74286C5.02955 1.74286 1 5.7724 1 10.7429C1 15.7133 5.02955 19.7429 10 19.7429C14.9705 19.7429 19 15.7133 19 10.7429C19 5.7724 14.9705 1.74286 10 1.74286ZM10.0006 3.379C14.0612 3.379 17.3642 6.68282 17.3642 10.7426C17.3642 14.8033 14.0612 18.1063 10.0006 18.1063C5.93996 18.1063 2.63696 14.8033 2.63696 10.7426C2.63696 6.68282 5.93996 3.379 10.0006 3.379Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M9.99985 6.6521V10.743"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M12.4545 10.7427H10"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span
                style="
                  color: white;
                  margin-top: 3px;
                  font-size: 12px;
                  font-weight: bold;
                  cursor: pointer;
                "
                >历史</span
              >
            </li>
            <li
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
                cursor: pointer;
                padding-bottom: 30px;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="color: #ffffff"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="1"
                  width="16"
                  height="20"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 1.74286H17.5V20.0762H2.5V1.74286Z"
                    fill="currentColor"
                  ></path>
                </mask>
                <g mask="url(#mask0)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.99999 1.74286C9.92916 1.74286 9.85916 1.74369 9.78833 1.74536C5.85416 1.85453 2.58416 5.14869 2.50166 9.08286C2.44999 11.5404 3.58666 13.7304 5.36999 15.1337C5.52166 15.2529 5.63166 15.4162 5.67333 15.6045L6.30416 18.447C6.51583 19.3987 7.36083 20.0762 8.33583 20.0762H11.6617C12.6383 20.0762 13.4842 19.3987 13.6958 18.4445L14.3275 15.602C14.3692 15.4154 14.4775 15.2537 14.6275 15.1354C16.3733 13.7629 17.5 11.637 17.5 9.24286C17.5 5.10036 14.1425 1.74286 9.99999 1.74286ZM10.0003 3.40939C13.2161 3.40939 15.8336 6.02606 15.8336 9.24273C15.8336 11.0386 15.0186 12.7086 13.5978 13.8252C13.1428 14.1827 12.8244 14.6852 12.7011 15.2402L12.0686 18.0827C12.0269 18.2752 11.8586 18.4094 11.6619 18.4094H8.33609C8.14109 18.4094 7.97359 18.2761 7.93192 18.0852L7.30025 15.2427C7.17609 14.6869 6.85775 14.1827 6.40109 13.8236C4.94359 12.6769 4.12942 10.9619 4.16859 9.11773C4.23192 6.05523 6.77442 3.49606 9.83442 3.41189C9.88942 3.41023 9.94525 3.40939 10.0003 3.40939Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10 6.81299L8.81253 9.18726H11.1875L9.99952 11.561"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <path
                  d="M6.66656 15.9095H13.3332"
                  stroke="currentColor"
                  stroke-width="1.7"
                ></path>
              </svg>
              <span
                style="
                  color: white;
                  margin-top: 3px;
                  font-size: 12px;
                  font-weight: bold;
                  cursor: pointer;
                "
                >创作中心</span
              >
            </li>
            <li
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 16px;
                width: 90px;
                height: 96px;
              "
              @mouseenter="submission = true"
              @mouseleave="submission = false"
            >
              <div class="submit">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="margin-left: 19px"
                >
                  <path
                    d="M12.0824 10H14.1412C15.0508 10 15.7882 10.7374 15.7882 11.6471V12.8824C15.7882 13.792 15.0508 14.5294 14.1412 14.5294H3.84707C2.93743 14.5294 2.20001 13.792 2.20001 12.8824V11.6471C2.20001 10.7374 2.93743 10 3.84707 10H5.90589"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.99413 11.2353L8.99413 3.82353"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.0823 6.29413L8.9941 3.20589L5.90587 6.29413"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span style="color: white">投稿</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="logo"></div>
      <div
        class="live"
        v-if="live"
        @mouseenter="live = true"
        @mouseleave="live = false"
        style="z-index: 10000"
      >
        <div class="live-left">
          <h1>热门直播:</h1>
          <div class="grid-container">
            <span>
              <img src="../assets/img/直播1.jpg" alt="" />
              <p>丸嘻嘻</p>
            </span>
            <span>
              <img src="../assets/img/直播2.jpg" alt="" />
              <p>咝小猫MAO</p>
            </span>
            <span>
              <img src="../assets/img/直播3.jpg" alt="" />
              <p>Spark-Mmonk</p>
            </span>
            <span>
              <img src="../assets/img/直播4.jpg" alt="" />
              <p>SNH48官方账号</p>
            </span>
            <span>
              <img src="../assets/img/直播5.jpg" alt="" />
              <p>键盘车神教</p>
            </span>
            <span>
              <img src="../assets/img/直播6.jpg" alt="" />
              <p>污喵污喵哒</p>
            </span>
          </div>
        </div>
        <div class="live-right">
          <h1>热门活动:</h1>
          <img src="../assets/img/热门活动.jpg" alt="" />
        </div>
      </div>
      <div
        class="game"
        v-if="game"
        @mouseenter="game = true"
        @mouseleave="game = false"
      >
        <div class="game-left">
          <div class="row">
            <img src="../assets/img/游戏1.jpg" alt="" />
          </div>
          <div class="row">
            <span>
              <img src="../assets/img/游戏2.jpg" alt="" />
              <p>碧蓝航线</p>
            </span>
            <span>
              <img src="../assets/img/游戏3.jpg" alt="" />
              <p>坎特伯雷公主与骑士唤醒冠军之剑的奇幻冒险</p>
            </span>
            <span>
              <img src="../assets/img/游戏4.jpg" alt="" />
              <p>时空猎人3</p>
            </span>
          </div>
        </div>
        <div class="GameMiddle"></div>
        <div class="game-right">
          <h2>新游预告</h2>
          <ul>
            <li>钢岚</li>
            <li>依露希尔：星晓</li>
            <li>宿命回响：弦上的叹息</li>
            <li>纳萨力克之王</li>
            <li>星球：重启</li>
            <li>西游：笔绘西行</li>
            <li>乖离性百万亚瑟王：环</li>
          </ul>
        </div>
      </div>
      <div
        class="book"
        v-if="book"
        @mouseenter="book = true"
        @mouseleave="book = false"
      >
        <div class="book-left">
          <div class="book-row">
            <span>
              <img
                src="../assets/img/漫画1.jpg"
                alt="辉夜大小姐想让我告白 ~天才们的恋爱头脑战~"
              />
              <p>辉夜大小姐想让我告白 ~天才们的恋爱头脑战~</p>
            </span>
            <span>
              <img src="../assets/img/漫画2.jpg" alt="天官赐福" />
              <p>天官赐福</p>
            </span>
          </div>
          <div class="book-row">
            <span>
              <img src="../assets/img/漫画3.jpg" alt="刀剑神域 Alicization篇" />
              <p>刀剑神域 Alicization篇</p>
            </span>
            <span>
              <img
                src="../assets/img/漫画4.jpg"
                alt="石之海（乔乔的奇妙冒险第6部）"
              />
              <p>石之海（乔乔的奇妙冒险第6部）</p>
            </span>
          </div>
        </div>
        <div class="book-middle"></div>
        <div class="book-right">
          <h2>人气漫画</h2>
          <ol>
            <li>碧蓝之海</li>
            <li>间谍过家家</li>
            <li>葬送的芙莉莲</li>
            <li>我家老婆来自一千年前</li>
            <li>香格里拉边境~粪作猎人向神作游戏发起挑战~</li>
            <li>航海王</li>
          </ol>
        </div>
      </div>
      <div
        class="download"
        v-if="download"
        @mouseenter="download = true"
        @mouseleave="download = false"
      >
        <div class="down-left">
          <ul>
            <li>
              <div style="font-size: 14px; font-weight: bold">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2 1.00012H8H4.80003C3.56489 1.00012 2.56006 2.00495 2.56006 3.24009V12.7599C2.56006 13.9951 3.56489 14.9999 4.80003 14.9999H11.2C12.4351 14.9999 13.4399 13.9951 13.4399 12.7599V3.24009C13.4399 2.00495 12.4351 1.00012 11.2 1.00012ZM12.1599 12.76C12.1599 13.2893 11.7293 13.7199 11.2 13.7199H4.80003C4.27067 13.7199 3.84006 13.2893 3.84006 12.76V3.24009C3.84006 2.71073 4.27068 2.28011 4.80003 2.28011H11.2C11.7293 2.28011 12.1599 2.71073 12.1599 3.24009V12.76ZM5.91992 3.7201C5.91992 3.36664 6.20646 3.08011 6.55991 3.08011H9.43987C9.79333 3.08011 10.0799 3.36664 10.0799 3.7201C10.0799 4.07356 9.79333 4.36009 9.43987 4.36009H6.55991C6.20646 4.36009 5.91992 4.07356 5.91992 3.7201ZM7.26109 12.4261C7.22089 12.329 7.2002 12.225 7.2002 12.12C7.2002 11.9078 7.28448 11.7043 7.4345 11.5543C7.58453 11.4043 7.78801 11.32 8.00018 11.32C8.21235 11.32 8.41582 11.4043 8.56585 11.5543C8.71588 11.7043 8.80016 11.9078 8.80016 12.12C8.80016 12.225 8.77947 12.329 8.73926 12.4261C8.69906 12.5232 8.64014 12.6114 8.56585 12.6856C8.49157 12.7599 8.40338 12.8189 8.30632 12.8591C8.20926 12.8993 8.10523 12.92 8.00018 12.92C7.89512 12.92 7.7911 12.8993 7.69404 12.8591C7.59698 12.8189 7.50879 12.7599 7.4345 12.6856C7.36022 12.6114 7.30129 12.5232 7.26109 12.4261Z"
                    fill="black"
                  ></path>
                </svg>
                手机版
              </div>
            </li>
            <li style="font-size: 12px; color: gray">
              <span>扫码即可下载手机app</span>
            </li>
            <li>
              <img src="../assets/img/下载.png" alt="" />
            </li>
          </ul>
        </div>
        <div class="DownloadMiddle"></div>
        <div class="down-right">
          <ul>
            <li>
              <div style="font-size: 14px; font-weight: bold">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0H0V16H16V0Z"
                    fill="white"
                    fill-opacity="0.01"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.683594 2.33335C0.683594 1.97436 0.974609 1.68335 1.33359 1.68335H14.6669C15.0259 1.68335 15.3169 1.97436 15.3169 2.33335V11C15.3169 11.359 15.0259 11.65 14.6669 11.65H8.6501V13C8.6501 13.0056 8.65003 13.0111 8.64989 13.0167H12.0001C12.3591 13.0167 12.6501 13.3077 12.6501 13.6667C12.6501 14.0257 12.3591 14.3167 12.0001 14.3167H4.0001C3.64111 14.3167 3.3501 14.0257 3.3501 13.6667C3.3501 13.3077 3.64111 13.0167 4.0001 13.0167H7.35031C7.35017 13.0111 7.3501 13.0056 7.3501 13V11.65H1.33359C0.974609 11.65 0.683594 11.359 0.683594 11V2.33335ZM1.98359 2.98335V10.35H14.0169V2.98335H1.98359Z"
                    fill="black"
                  ></path>
                </svg>
                Windows端
              </div>
            </li>
            <li style="font-size: 12px; color: gray">适合win系统设备</li>
            <li>
              <img src="../assets/img/哔哩哔哩.png" alt="" />
            </li>
            <li>
              <button style="font-size: 13px">立即下载</button>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <p style="cursor: pointer">点击查看更多下载内容></p>
        </div>
      </div>
      <div
        class="vip"
        v-if="vip"
        @mouseenter="vip = true"
        @mouseleave="vip = false"
        style="flex-flow: row warp"
      >
        <div class="vip-left">
          <div>
            <h3>大会员特权</h3>
          </div>
          <div class="vip-privilege">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.24 6.23975C27.698 6.23975 28.8881 7.38695 28.9568 8.82796L28.96 8.95975V24.3197C28.96 25.7778 27.8128 26.9679 26.3717 27.0366L26.24 27.0397H7.67996C6.22193 27.0397 5.03184 25.8925 4.9631 24.4515L4.95996 24.3197V16.6397C4.95996 16.1979 5.31813 15.8397 5.75996 15.8397C6.17417 15.8397 6.51486 16.1545 6.55583 16.558L6.55996 16.6397V24.3197C6.55996 24.9074 7.01251 25.3893 7.5881 25.436L7.67996 25.4397H26.24C26.8276 25.4397 27.3095 24.9872 27.3562 24.4116L27.36 24.3197V8.95975C27.36 8.37212 26.9074 7.89018 26.3318 7.84346L26.24 7.83975H10.88C10.4381 7.83975 10.08 7.48157 10.08 7.03975C10.08 6.62553 10.3948 6.28484 10.7982 6.24388L10.88 6.23975H26.24Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M10.24 12.6396C10.6543 12.6396 10.9949 12.9544 11.0359 13.3579L11.04 13.4396V17.2796C11.04 17.8316 10.4983 18.2095 9.98911 18.0394L9.91665 18.0114L7.04004 16.7395L4.16343 18.0114C3.6586 18.2345 3.09395 17.8918 3.04366 17.3573L3.04004 17.2796V13.4396C3.04004 12.9978 3.39821 12.6396 3.84004 12.6396C4.25425 12.6396 4.59494 12.9544 4.63591 13.3579L4.64004 13.4396V16.0508L6.71665 15.1337C6.89321 15.0556 7.09094 15.0445 7.27355 15.1002L7.36343 15.1337L9.44004 16.0508V13.4396C9.44004 13.0254 9.75484 12.6847 10.1582 12.6438L10.24 12.6396Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.75977 9.59982C1.75977 6.68376 4.1237 4.31982 7.03977 4.31982C9.95583 4.31982 12.3198 6.68376 12.3198 9.59982C12.3198 12.5159 9.95583 14.8798 7.03977 14.8798C4.1237 14.8798 1.75977 12.5159 1.75977 9.59982ZM10.7194 9.59992C10.7194 7.56751 9.07178 5.91992 7.03938 5.91992C5.00697 5.91992 3.35938 7.56751 3.35938 9.59992C3.35938 11.6323 5.00697 13.2799 7.03938 13.2799C9.07178 13.2799 10.7194 11.6323 10.7194 9.59992Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M7.04022 7.67969C7.19731 7.67969 7.32797 7.79289 7.35506 7.94217L7.36022 7.99969V11.5197C7.36022 11.6964 7.21695 11.8397 7.04022 11.8397C6.88312 11.8397 6.75247 11.7265 6.72537 11.5772L6.72022 11.5197L6.71958 8.31969H6.37664C6.21955 8.31969 6.08889 8.20649 6.0618 8.05721L6.05664 7.99969C6.05664 7.84259 6.16984 7.71194 6.31912 7.68484L6.37664 7.67969H7.04022Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4962 12.8648L20.7629 15.3779C21.9566 16.0811 21.9566 17.7583 20.7629 18.4615L16.4962 20.9746C15.2666 21.6989 13.6582 20.8588 13.6582 19.4328L13.6582 14.4066C13.6582 12.9806 15.2666 12.1405 16.4962 12.8648ZM15.6846 19.5961L19.9512 17.083C20.0944 16.9987 20.0944 16.841 19.9512 16.7567L15.6846 14.2435C15.4933 14.1309 15.2586 14.2535 15.2586 14.4067V19.433C15.2586 19.5862 15.4933 19.7088 15.6846 19.5961Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M28.1596 9.27979C28.3364 9.27979 28.4796 9.42305 28.4796 9.59979C28.4796 9.75688 28.3664 9.88753 28.2172 9.91463L28.1596 9.91979H16.9596C16.7829 9.91979 16.6396 9.77652 16.6396 9.59979C16.6396 9.44269 16.7528 9.31204 16.9021 9.28494L16.9596 9.27979H28.1596Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M23.6643 23.3599C23.841 23.3599 23.9843 23.5031 23.9843 23.6799C23.9843 23.837 23.8711 23.9676 23.7218 23.9947L23.6643 23.9999H5.44012C5.26339 23.9999 5.12012 23.8566 5.12012 23.6799C5.12012 23.5228 5.23332 23.3921 5.3826 23.365L5.44012 23.3599H23.6643Z"
                  fill="#FB7199"
                ></path></svg
            ></span>
            <span>热剧抢先看</span>
            <span style="margin-left: 20px">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.83977 4.95996H23.0398C24.1885 4.95996 25.1198 5.89121 25.1198 7.03996V24.96C25.1198 26.1087 24.1885 27.04 23.0398 27.04H3.83977C2.69101 27.04 1.75977 26.1087 1.75977 24.96V7.03996C1.75977 5.89121 2.69101 4.95996 3.83977 4.95996ZM23.0394 6.56006H3.83938C3.57428 6.56006 3.35938 6.77496 3.35938 7.04006V24.9601C3.35938 25.2252 3.57428 25.4401 3.83938 25.4401H23.0394C23.3045 25.4401 23.5194 25.2252 23.5194 24.9601V7.04006C23.5194 6.77496 23.3045 6.56006 23.0394 6.56006Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M7.26966 13.3218C7.68838 13.3218 8.02781 13.6612 8.02781 14.0799C8.02781 14.4725 7.72948 14.7953 7.34718 14.8342L7.26966 14.8381L5.87724 14.8377L5.87764 18.4954C5.87764 18.888 5.5793 19.2109 5.197 19.2497L5.11948 19.2536C4.72693 19.2536 4.40407 18.9553 4.36524 18.573L4.36133 18.4954V14.0799C4.36133 13.6874 4.65966 13.3645 5.04197 13.3257L5.11948 13.3218H7.26966Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M7.26966 15.5532C7.68838 15.5532 8.02781 15.8927 8.02781 16.3114C8.02781 16.7039 7.72948 17.0268 7.34718 17.0656L7.26966 17.0695L5.87724 17.0695L5.87764 18.4956C5.87764 18.8881 5.5793 19.211 5.197 19.2498L5.11948 19.2537C4.72693 19.2537 4.40407 18.9554 4.36524 18.5731L4.36133 18.4956V16.3114C4.36133 15.9188 4.65966 15.596 5.04197 15.5571L5.11948 15.5532H7.26966Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M17.2267 13.3218C17.6454 13.3218 17.9848 13.6612 17.9848 14.0799C17.9848 14.4725 17.6865 14.7953 17.3042 14.8342L17.2267 14.8381L15.8341 14.8377V17.7369L17.2267 17.7373C17.6192 17.7373 17.9421 18.0356 17.9809 18.4179L17.9848 18.4954C17.9848 18.888 17.6865 19.2109 17.3042 19.2497L17.2267 19.2536H15.0765C14.684 19.2536 14.3611 18.9553 14.3223 18.573L14.3184 18.4954V14.0799C14.3184 13.6874 14.6167 13.3645 14.999 13.3257L15.0765 13.3218H17.2267Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M16.9967 15.5532C17.4154 15.5532 17.7549 15.8927 17.7549 16.3114C17.7549 16.7039 17.4565 17.0268 17.0742 17.0656L16.9967 17.0695H15.0765C14.6578 17.0695 14.3184 16.7301 14.3184 16.3114C14.3184 15.9188 14.6167 15.596 14.999 15.5571L15.0765 15.5532H16.9967Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M21.8605 13.3218C22.2792 13.3218 22.6186 13.6612 22.6186 14.0799C22.6186 14.4725 22.3203 14.7953 21.938 14.8342L21.8605 14.8381L20.4684 14.8377V17.7369L21.8605 17.7373C22.253 17.7373 22.5759 18.0356 22.6147 18.4179L22.6186 18.4954C22.6186 18.888 22.3203 19.2109 21.938 19.2497L21.8605 19.2536H19.7103C19.3178 19.2536 18.9949 18.9553 18.9561 18.573L18.9521 18.4954V14.0799C18.9521 13.6874 19.2505 13.3645 19.6328 13.3257L19.7103 13.3218H21.8605Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M21.6305 15.5532C22.0492 15.5532 22.3886 15.8927 22.3886 16.3114C22.3886 16.7039 22.0903 17.0268 21.708 17.0656L21.6305 17.0695H19.7103C19.2916 17.0695 18.9521 16.7301 18.9521 16.3114C18.9521 15.9188 19.2505 15.596 19.6328 15.5571L19.7103 15.5532H21.6305Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M11.1933 13.3218C11.6121 13.3218 11.9515 13.6612 11.9515 14.0799C11.9515 14.4725 11.6532 14.7953 11.2709 14.8342L11.1933 14.8381L10.5109 14.8377L10.5114 18.4954C10.5114 18.888 10.2131 19.2109 9.83079 19.2497L9.75327 19.2536C9.36072 19.2536 9.03786 18.9553 8.99903 18.573L8.99512 18.4954V14.0799C8.99512 13.6874 9.29345 13.3645 9.67575 13.3257L9.75327 13.3218H11.1933Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4563 13.3218H11.4781C12.513 13.3218 13.3519 14.1607 13.3519 15.1956C13.3519 16.2305 12.513 17.0694 11.4781 17.0694H10.4563C9.64931 17.0694 8.99512 16.4152 8.99512 15.6082V14.7829C8.99512 13.976 9.64931 13.3218 10.4563 13.3218ZM10.5109 14.8377V15.5526L11.4781 15.5531C11.6755 15.5531 11.8356 15.393 11.8356 15.1956C11.8356 14.9981 11.6755 14.8381 11.4781 14.8381L10.5109 14.8377Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M10.9594 15.6538C11.2981 15.459 11.7244 15.5549 11.9495 15.8636L11.9946 15.933L13.251 18.1172C13.4598 18.4801 13.3348 18.9436 12.9718 19.1524C12.6331 19.3473 12.2067 19.2514 11.9817 18.9426L11.9366 18.8733L10.6802 16.689C10.4714 16.3261 10.5964 15.8626 10.9594 15.6538Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M20.6014 8.31982C20.7781 8.31982 20.9214 8.46309 20.9214 8.63982C20.9214 8.79692 20.8082 8.92757 20.6589 8.95467L20.6014 8.95982H2.56023C2.3835 8.95982 2.24023 8.81656 2.24023 8.63982C2.24023 8.48273 2.35343 8.35207 2.50271 8.32498L2.56023 8.31982H20.6014Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M23.6641 23.04C23.8408 23.04 23.9841 23.1833 23.9841 23.36C23.9841 23.5171 23.8709 23.6478 23.7216 23.6749L23.6641 23.68H6.195C6.01827 23.68 5.875 23.5368 5.875 23.36C5.875 23.2029 5.9882 23.0723 6.13748 23.0452L6.195 23.04H23.6641Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M23.7367 7.08697C23.9262 6.68784 24.4033 6.51789 24.8025 6.70738C28.4934 8.45964 30.8794 12.025 30.8794 15.9998C30.8794 19.9693 28.4998 23.5307 24.8166 25.2856C24.4177 25.4756 23.9403 25.3063 23.7502 24.9074C23.5602 24.5086 23.7295 24.0312 24.1284 23.8411C27.2685 22.345 29.2794 19.3355 29.2794 15.9998C29.2794 12.6596 27.263 9.64671 24.1163 8.15276C23.7171 7.96327 23.5472 7.4861 23.7367 7.08697Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M25.7583 12.5689C25.9059 12.4717 26.1044 12.5126 26.2016 12.6602C27.0234 13.9083 27.306 14.6411 27.306 15.9781C27.306 17.3153 27.0256 18.0636 26.2314 19.2937C26.1355 19.4421 25.9374 19.4848 25.7889 19.3889C25.6405 19.293 25.5978 19.095 25.6937 18.9465C26.427 17.8108 26.666 17.173 26.666 15.9781C26.666 14.7868 26.4263 14.1652 25.667 13.0121C25.5698 12.8645 25.6107 12.6661 25.7583 12.5689Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.83977 4.95996H23.0398C24.1885 4.95996 25.1198 5.89121 25.1198 7.03996V24.96C25.1198 26.1087 24.1885 27.04 23.0398 27.04H3.83977C2.69101 27.04 1.75977 26.1087 1.75977 24.96V7.03996C1.75977 5.89121 2.69101 4.95996 3.83977 4.95996ZM23.0394 6.56006H3.83938C3.57428 6.56006 3.35938 6.77496 3.35938 7.04006V24.9601C3.35938 25.2252 3.57428 25.4401 3.83938 25.4401H23.0394C23.3045 25.4401 23.5194 25.2252 23.5194 24.9601V7.04006C23.5194 6.77496 23.3045 6.56006 23.0394 6.56006Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M7.26966 13.3218C7.68838 13.3218 8.02781 13.6612 8.02781 14.0799C8.02781 14.4725 7.72948 14.7953 7.34718 14.8342L7.26966 14.8381L5.87724 14.8377L5.87764 18.4954C5.87764 18.888 5.5793 19.2109 5.197 19.2497L5.11948 19.2536C4.72693 19.2536 4.40407 18.9553 4.36524 18.573L4.36133 18.4954V14.0799C4.36133 13.6874 4.65966 13.3645 5.04197 13.3257L5.11948 13.3218H7.26966Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M7.26966 15.5532C7.68838 15.5532 8.02781 15.8927 8.02781 16.3114C8.02781 16.7039 7.72948 17.0268 7.34718 17.0656L7.26966 17.0695L5.87724 17.0695L5.87764 18.4956C5.87764 18.8881 5.5793 19.211 5.197 19.2498L5.11948 19.2537C4.72693 19.2537 4.40407 18.9554 4.36524 18.5731L4.36133 18.4956V16.3114C4.36133 15.9188 4.65966 15.596 5.04197 15.5571L5.11948 15.5532H7.26966Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M17.2267 13.3218C17.6454 13.3218 17.9848 13.6612 17.9848 14.0799C17.9848 14.4725 17.6865 14.7953 17.3042 14.8342L17.2267 14.8381L15.8341 14.8377V17.7369L17.2267 17.7373C17.6192 17.7373 17.9421 18.0356 17.9809 18.4179L17.9848 18.4954C17.9848 18.888 17.6865 19.2109 17.3042 19.2497L17.2267 19.2536H15.0765C14.684 19.2536 14.3611 18.9553 14.3223 18.573L14.3184 18.4954V14.0799C14.3184 13.6874 14.6167 13.3645 14.999 13.3257L15.0765 13.3218H17.2267Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M16.9967 15.5532C17.4154 15.5532 17.7549 15.8927 17.7549 16.3114C17.7549 16.7039 17.4565 17.0268 17.0742 17.0656L16.9967 17.0695H15.0765C14.6578 17.0695 14.3184 16.7301 14.3184 16.3114C14.3184 15.9188 14.6167 15.596 14.999 15.5571L15.0765 15.5532H16.9967Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M21.8605 13.3218C22.2792 13.3218 22.6186 13.6612 22.6186 14.0799C22.6186 14.4725 22.3203 14.7953 21.938 14.8342L21.8605 14.8381L20.4684 14.8377V17.7369L21.8605 17.7373C22.253 17.7373 22.5759 18.0356 22.6147 18.4179L22.6186 18.4954C22.6186 18.888 22.3203 19.2109 21.938 19.2497L21.8605 19.2536H19.7103C19.3178 19.2536 18.9949 18.9553 18.9561 18.573L18.9521 18.4954V14.0799C18.9521 13.6874 19.2505 13.3645 19.6328 13.3257L19.7103 13.3218H21.8605Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M21.6305 15.5532C22.0492 15.5532 22.3886 15.8927 22.3886 16.3114C22.3886 16.7039 22.0903 17.0268 21.708 17.0656L21.6305 17.0695H19.7103C19.2916 17.0695 18.9521 16.7301 18.9521 16.3114C18.9521 15.9188 19.2505 15.596 19.6328 15.5571L19.7103 15.5532H21.6305Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M11.1933 13.3218C11.6121 13.3218 11.9515 13.6612 11.9515 14.0799C11.9515 14.4725 11.6532 14.7953 11.2709 14.8342L11.1933 14.8381L10.5109 14.8377L10.5114 18.4954C10.5114 18.888 10.2131 19.2109 9.83079 19.2497L9.75327 19.2536C9.36072 19.2536 9.03786 18.9553 8.99903 18.573L8.99512 18.4954V14.0799C8.99512 13.6874 9.29345 13.3645 9.67575 13.3257L9.75327 13.3218H11.1933Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4563 13.3218H11.4781C12.513 13.3218 13.3519 14.1607 13.3519 15.1956C13.3519 16.2305 12.513 17.0694 11.4781 17.0694H10.4563C9.64931 17.0694 8.99512 16.4152 8.99512 15.6082V14.7829C8.99512 13.976 9.64931 13.3218 10.4563 13.3218ZM10.5109 14.8377V15.5526L11.4781 15.5531C11.6755 15.5531 11.8356 15.393 11.8356 15.1956C11.8356 14.9981 11.6755 14.8381 11.4781 14.8381L10.5109 14.8377Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M10.9594 15.6538C11.2981 15.459 11.7244 15.5549 11.9495 15.8636L11.9946 15.933L13.251 18.1172C13.4598 18.4801 13.3348 18.9436 12.9718 19.1524C12.6331 19.3473 12.2067 19.2514 11.9817 18.9426L11.9366 18.8733L10.6802 16.689C10.4714 16.3261 10.5964 15.8626 10.9594 15.6538Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M20.6014 8.31982C20.7781 8.31982 20.9214 8.46309 20.9214 8.63982C20.9214 8.79692 20.8082 8.92757 20.6589 8.95467L20.6014 8.95982H2.56023C2.3835 8.95982 2.24023 8.81656 2.24023 8.63982C2.24023 8.48273 2.35343 8.35207 2.50271 8.32498L2.56023 8.31982H20.6014Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M23.6641 23.04C23.8408 23.04 23.9841 23.1833 23.9841 23.36C23.9841 23.5171 23.8709 23.6478 23.7216 23.6749L23.6641 23.68H6.195C6.01827 23.68 5.875 23.5368 5.875 23.36C5.875 23.2029 5.9882 23.0723 6.13748 23.0452L6.195 23.04H23.6641Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M23.7367 7.08697C23.9262 6.68784 24.4033 6.51789 24.8025 6.70738C28.4934 8.45964 30.8794 12.025 30.8794 15.9998C30.8794 19.9693 28.4998 23.5307 24.8166 25.2856C24.4177 25.4756 23.9403 25.3063 23.7502 24.9074C23.5602 24.5086 23.7295 24.0312 24.1284 23.8411C27.2685 22.345 29.2794 19.3355 29.2794 15.9998C29.2794 12.6596 27.263 9.64671 24.1163 8.15276C23.7171 7.96327 23.5472 7.4861 23.7367 7.08697Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M25.7583 12.5689C25.9059 12.4717 26.1044 12.5126 26.2016 12.6602C27.0234 13.9083 27.306 14.6411 27.306 15.9781C27.306 17.3153 27.0256 18.0636 26.2314 19.2937C26.1355 19.4421 25.9374 19.4848 25.7889 19.3889C25.6405 19.293 25.5978 19.095 25.6937 18.9465C26.427 17.8108 26.666 17.173 26.666 15.9781C26.666 14.7868 26.4263 14.1652 25.667 13.0121C25.5698 12.8645 25.6107 12.6661 25.7583 12.5689Z"
                  fill="#FB7199"
                ></path>
              </svg>
            </span>
            <span>会员免费看</span>
          </div>
          <div class="vip-privilege">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.75969 4.95996H26.2397C27.3884 4.95996 28.3197 5.89121 28.3197 7.03996V24.96C28.3197 26.1087 27.3884 27.04 26.2397 27.04H5.75969C4.61094 27.04 3.67969 26.1087 3.67969 24.96V7.03996C3.67969 5.89121 4.61094 4.95996 5.75969 4.95996ZM26.2393 6.56006H5.7593C5.4942 6.56006 5.2793 6.77496 5.2793 7.04006V24.9601C5.2793 25.2252 5.4942 25.4401 5.7593 25.4401H26.2393C26.5044 25.4401 26.7193 25.2252 26.7193 24.9601V7.04006C26.7193 6.77496 26.5044 6.56006 26.2393 6.56006Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.51696 5.43994H26.4834C27.2327 5.43994 27.8402 6.0474 27.8402 6.79674V9.85594C27.8402 10.0327 27.6969 10.1759 27.5202 10.1759H4.48016C4.30343 10.1759 4.16016 10.0327 4.16016 9.85594V6.79674C4.16016 6.0474 4.76762 5.43994 5.51696 5.43994ZM26.5618 6.08428L26.4836 6.08008H5.51724C5.12137 6.08008 4.80044 6.401 4.80044 6.79688L4.7998 9.53544H27.1998L27.2004 6.79688C27.2004 6.42739 26.9209 6.1232 26.5618 6.08428Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.483 26.5601L5.51664 26.5601C4.7673 26.5601 4.15984 25.9526 4.15984 25.2033V22.1441C4.15984 21.9673 4.30311 21.8241 4.47985 21.8241L27.5198 21.8241C27.6966 21.8241 27.8398 21.9673 27.8398 22.1441V25.2033C27.8398 25.9526 27.2324 26.5601 26.483 26.5601ZM5.43825 25.9157L5.51635 25.9199L26.4828 25.9199C26.8786 25.9199 27.1996 25.599 27.1996 25.2031L27.2002 22.4646L4.80019 22.4646L4.79955 25.2031C4.79955 25.5726 5.07911 25.8768 5.43825 25.9157Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.1452 5.43994H13.3816C13.5583 5.43994 13.7016 5.58321 13.7016 5.75994V9.85594C13.7016 10.0327 13.5583 10.1759 13.3816 10.1759H8.1452C7.96846 10.1759 7.8252 10.0327 7.8252 9.85594V5.75994C7.8252 5.58321 7.96846 5.43994 8.1452 5.43994ZM13.0615 9.53529V6.07929H8.46502V9.53529H13.0615Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.1452 21.8237H13.3816C13.5583 21.8237 13.7016 21.967 13.7016 22.1437V26.2397C13.7016 26.4165 13.5583 26.5597 13.3816 26.5597H8.1452C7.96846 26.5597 7.8252 26.4165 7.8252 26.2397V22.1437C7.8252 21.967 7.96846 21.8237 8.1452 21.8237ZM13.0615 25.9197V22.4637H8.46502V25.9197H13.0615Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3815 5.43994H18.6179C18.7946 5.43994 18.9379 5.58321 18.9379 5.75994V9.85594C18.9379 10.0327 18.7946 10.1759 18.6179 10.1759H13.3815C13.2048 10.1759 13.0615 10.0327 13.0615 9.85594V5.75994C13.0615 5.58321 13.2048 5.43994 13.3815 5.43994ZM18.297 9.5351V6.0791H13.7012V9.5351H18.297Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3815 21.8237H18.6179C18.7946 21.8237 18.9379 21.967 18.9379 22.1437V26.2397C18.9379 26.4165 18.7946 26.5597 18.6179 26.5597H13.3815C13.2048 26.5597 13.0615 26.4165 13.0615 26.2397V22.1437C13.0615 21.967 13.2048 21.8237 13.3815 21.8237ZM18.297 25.9199V22.4639H13.7012V25.9199H18.297Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.6179 5.43994H23.8542C24.0309 5.43994 24.1742 5.58321 24.1742 5.75994V9.85594C24.1742 10.0327 24.0309 10.1759 23.8542 10.1759H18.6179C18.4411 10.1759 18.2979 10.0327 18.2979 9.85594V5.75994C18.2979 5.58321 18.4411 5.43994 18.6179 5.43994ZM23.5338 9.53529V6.07929H18.9373V9.53529H23.5338Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.6179 21.8237H23.8542C24.0309 21.8237 24.1742 21.967 24.1742 22.1437V26.2397C24.1742 26.4165 24.0309 26.5597 23.8542 26.5597H18.6179C18.4411 26.5597 18.2979 26.4165 18.2979 26.2397V22.1437C18.2979 21.967 18.4411 21.8237 18.6179 21.8237ZM23.5338 25.9197V22.4637H18.9373V25.9197H23.5338Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0353 13.3583C10.9944 12.9549 10.6537 12.6401 10.2395 12.6401C9.79763 12.6401 9.43945 12.9983 9.43945 13.4401V19.0256L9.44358 19.1074C9.48455 19.5108 9.82524 19.8256 10.2395 19.8256C10.6813 19.8256 11.0395 19.4674 11.0395 19.0256V13.4401L11.0353 13.3583ZM15.589 13.3583C15.5481 12.9549 15.2074 12.6401 14.7932 12.6401C14.3513 12.6401 13.9932 12.9983 13.9932 13.4401V19.0256L13.9973 19.1074C14.0383 19.5108 14.379 19.8256 14.7932 19.8256C15.235 19.8256 15.5932 19.4674 15.5932 19.0256V13.4401L15.589 13.3583Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M14.7926 15.2002V16.8002H10.2393V15.2002H14.7926Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.7102 12.6401H19.4708C21.455 12.6401 23.0635 14.2487 23.0635 16.2329C23.0635 18.2171 21.455 19.8256 19.4708 19.8256H17.7102C17.2683 19.8256 16.9102 19.4674 16.9102 19.0256V13.4401C16.9102 12.9983 17.2683 12.6401 17.7102 12.6401ZM18.5096 14.2401V18.2254L19.4708 18.2256C20.5713 18.2256 21.4635 17.3334 21.4635 16.2329C21.4635 15.1323 20.5713 14.2401 19.4708 14.2401H18.5096Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M21.4395 8.31982C21.6162 8.31982 21.7595 8.46309 21.7595 8.63982C21.7595 8.79692 21.6463 8.92757 21.497 8.95467L21.4395 8.95982H4.79949C4.62276 8.95982 4.47949 8.81656 4.47949 8.63982C4.47949 8.48273 4.59269 8.35207 4.74197 8.32498L4.79949 8.31982H21.4395Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M27.5197 23.04C27.6965 23.04 27.8397 23.1833 27.8397 23.36C27.8397 23.5171 27.7265 23.6478 27.5772 23.6749L27.5197 23.68H15.0397C14.863 23.68 14.7197 23.5368 14.7197 23.36C14.7197 23.2029 14.8329 23.0723 14.9822 23.0452L15.0397 23.04H27.5197Z"
                  fill="#FB7199"
                ></path></svg
            ></span>
            <span>4K超清画质</span>
            <span style="margin-left: 20px">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.04004 16C3.04004 8.84243 8.84243 3.04004 16 3.04004C23.1576 3.04004 28.96 8.84243 28.96 16C28.96 23.1576 23.1576 28.96 16 28.96C8.84243 28.96 3.04004 23.1576 3.04004 16ZM27.3596 16.0001C27.3596 9.72618 22.2736 4.64014 15.9996 4.64014C9.72569 4.64014 4.63965 9.72618 4.63965 16.0001C4.63965 22.2741 9.72569 27.3601 15.9996 27.3601C22.2736 27.3601 27.3596 22.2741 27.3596 16.0001Z"
                  fill="#FB7199"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16ZM23.3596 16.0001C23.3596 11.9353 20.0645 8.64014 15.9996 8.64014C11.9348 8.64014 8.63965 11.9353 8.63965 16.0001C8.63965 20.065 11.9348 23.3601 15.9996 23.3601C20.0645 23.3601 23.3596 20.065 23.3596 16.0001Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M15.1666 16.4325L13.5754 14.5198C13.2929 14.1802 12.7885 14.1339 12.4488 14.4165C12.1091 14.699 12.0629 15.2034 12.3454 15.5431C12.3454 15.5431 12.9537 16.2743 13.2579 16.6399C13.4841 16.9119 15.4492 16.7722 15.1666 16.4325Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M16.6674 16.4325L18.2586 14.5198C18.5411 14.1802 19.0455 14.1339 19.3852 14.4165C19.7249 14.699 19.7711 15.2034 19.4886 15.5431C19.4886 15.5431 18.8803 16.2743 18.5761 16.6399C18.3499 16.9119 16.3848 16.7722 16.6674 16.4325Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M19.802 16.3125C20.6403 16.3125 21.3262 16.9649 21.3797 17.7897L21.3831 17.8936V21.6993C21.3831 21.876 21.2398 22.0193 21.0631 22.0193C20.906 22.0193 20.7754 21.9061 20.7483 21.7568L20.7431 21.6993V17.8936C20.7431 17.4044 20.3699 17.0024 19.8926 16.9568L19.802 16.9525H12.1407C11.6515 16.9525 11.2495 17.3257 11.2039 17.803L11.1996 17.8936V21.6993C11.1996 21.876 11.0563 22.0193 10.8796 22.0193C10.7225 22.0193 10.5918 21.9061 10.5647 21.7568L10.5596 21.6993V17.8936C10.5596 17.0553 11.212 16.3694 12.0367 16.3159L12.1407 16.3125H19.802Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M14.4557 18.4298C14.6968 18.3196 14.9816 18.4256 15.0919 18.6667C15.1929 18.8877 15.1122 19.1454 14.9124 19.2718L14.855 19.3029L12.9932 20.1543C12.7521 20.2646 12.4673 20.1585 12.3571 19.9174C12.256 19.6964 12.3367 19.4387 12.5366 19.3123L12.594 19.2813L14.4557 18.4298Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M17.4621 18.425C17.2184 18.3208 16.9362 18.4338 16.832 18.6775C16.7364 18.901 16.8234 19.1566 17.0263 19.278L17.0845 19.3077L19.1055 20.1723C19.3492 20.2766 19.6313 20.1636 19.7356 19.9198C19.8312 19.6964 19.7442 19.4408 19.5413 19.3194L19.4831 19.2897L17.4621 18.425Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M16.0004 20.7998C16.1771 20.7998 16.3204 20.9431 16.3204 21.1198C16.3204 21.65 15.8906 22.0798 15.3604 22.0798C14.8302 22.0798 14.4004 21.65 14.4004 21.1198C14.4004 20.9431 14.5437 20.7998 14.7204 20.7998C14.8775 20.7998 15.0081 20.913 15.0352 21.0623L15.0404 21.1198C15.0404 21.2965 15.1837 21.4398 15.3604 21.4398C15.5175 21.4398 15.6481 21.3266 15.6752 21.1773L15.6804 21.1198C15.6804 20.9431 15.8237 20.7998 16.0004 20.7998Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M17.2797 20.7998C17.4564 20.7998 17.5997 20.9431 17.5997 21.1198C17.5997 21.65 17.1699 22.0798 16.6397 22.0798C16.1095 22.0798 15.6797 21.65 15.6797 21.1198C15.6797 20.9431 15.823 20.7998 15.9997 20.7998C16.1568 20.7998 16.2874 20.913 16.3145 21.0623L16.3197 21.1198C16.3197 21.2965 16.463 21.4398 16.6397 21.4398C16.7968 21.4398 16.9274 21.3266 16.9545 21.1773L16.9597 21.1198C16.9597 20.9431 17.103 20.7998 17.2797 20.7998Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M25.7378 14.1071C26.5844 18.4622 24.4368 22.8131 20.5523 24.8166C20.3952 24.8976 20.2022 24.8359 20.1212 24.6789C20.0402 24.5218 20.1018 24.3288 20.2589 24.2478C23.8924 22.3737 25.9015 18.3034 25.1096 14.2292C25.0759 14.0557 25.1892 13.8877 25.3626 13.854C25.5361 13.8203 25.7041 13.9336 25.7378 14.1071Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M8.11025 14.3599C8.37535 14.3599 8.59025 14.5748 8.59025 14.8399C8.59025 15.0829 8.40967 15.2837 8.17539 15.3155L8.11025 15.3199H5.97316C5.70807 15.3199 5.49316 15.105 5.49316 14.8399C5.49316 14.5969 5.67374 14.396 5.90803 14.3642L5.97316 14.3599H8.11025Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M7.04152 13.1519C7.28453 13.1519 7.48536 13.3324 7.51714 13.5667L7.52152 13.6319V16.6403C7.52152 16.9054 7.30662 17.1203 7.04152 17.1203C6.79852 17.1203 6.59769 16.9397 6.56591 16.7054L6.56152 16.6403V13.6319C6.56152 13.3668 6.77643 13.1519 7.04152 13.1519Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M12.4861 9.12012C12.9279 9.12012 13.2861 9.47829 13.2861 9.92012C13.2861 10.3343 12.9713 10.675 12.5679 10.716L12.4861 10.7201H9.28047C8.83864 10.7201 8.48047 10.3619 8.48047 9.92012C8.48047 9.5059 8.79527 9.16522 9.19867 9.12425L9.28047 9.12012H12.4861Z"
                  fill="#FB7199"
                ></path>
                <path
                  d="M10.883 7.18652C11.2972 7.18652 11.6379 7.50132 11.6789 7.90473L11.683 7.98652V12.8C11.683 13.2418 11.3248 13.6 10.883 13.6C10.4688 13.6 10.1281 13.2852 10.0871 12.8818L10.083 12.8V7.98652C10.083 7.5447 10.4412 7.18652 10.883 7.18652Z"
                  fill="#FB7199"
                ></path></svg
            ></span>
            <span>会员专属装扮</span>
          </div>
        </div>
        <div class="vip-right">
          <img src="../assets/img/大会员.png" />
        </div>
        <div class="vip-bottom">
          <div class="vip-wrap">
            <div class="vip-desc">
              <div class="vip-desc-title">大会员专属权益待领取</div>
              <div class="vip-desc-content">
                免费体验装扮、游戏道具礼包等精彩权益
              </div>
            </div>
            <div class="vip-btn">
              立即领取
              <!---->
            </div>
          </div>
        </div>
      </div>
      <div
        class="message"
        v-if="message"
        @mouseenter="message = true"
        @mouseleave="message = false"
      >
        <div class="container">
          <div class="item"><p>回复我的</p></div>
          <div class="item"><p>@我</p></div>
          <div class="item"><p>收到的赞</p></div>
          <div class="item"><p>系统消息</p></div>
          <div class="item"><p>我的消息</p></div>
        </div>
      </div>
      <div
        class="activity"
        v-if="activity"
        @mouseenter="activity = true"
        @mouseleave="
          activity = false;
          activeTabActivity = '视频动态';
        "
      >
        <div class="header-tabs-container">
          <div
            class="header-tabs-panel-item"
            :class="{ active: activeTabActivity === '视频动态' }"
            @click="activeTabActivity = '视频动态'"
          >
            视频动态
          </div>
          <div
            class="header-tabs-panel-item"
            :class="{ active: activeTabActivity === '直播' }"
            @click="activeTabActivity = '直播'"
          >
            直播
          </div>
          <div
            class="header-tabs-panel-item"
            :class="{ active: activeTabActivity === '专栏' }"
            @click="activeTabActivity = '专栏'"
          >
            专栏
          </div>
        </div>
        <div class="activityContainer">
          <div
            class="header-tabs-panel-content-activity"
            v-if="activeTabActivity === '视频动态'"
          >
            暂时没有新视频动态了哦！
          </div>
          <div
            class="header-tabs-panel-content-activity"
            v-if="activeTabActivity === '直播'"
          >
            暂时没有新直播动态了哦！
          </div>
          <div
            class="header-tabs-panel-content-activity"
            v-if="activeTabActivity === '专栏'"
          >
            暂时没有新专栏动态了哦！
          </div>
        </div>
      </div>

      <div
        class="favorites"
        v-if="favorites"
        @mouseenter="favorites = true"
        @mouseleave="
          favorites = false;
          activeTabFavorites = '默认收藏夹';
        "
      >
        <div class="favorites-left-column">
          <div
            class="favorites-box"
            :class="{ active: activeTabFavorites === '默认收藏夹' }"
            @click="activeTabFavorites = '默认收藏夹'"
            style="margin-top: 10px"
          >
            <span class="favorites-tab-item-title">默认收藏夹</span>
            <span class="favorites-tab-item-num">0</span>
          </div>
          <div
            class="favorites-box"
            :class="{ active: activeTabFavorites === '稍后再看' }"
            @click="activeTabFavorites = '稍后再看'"
          >
            <span class="favorites-tab-item-title">稍后再看</span>
            <span class="favorites-tab-item-num">0</span>
          </div>
        </div>
        <div
          class="favorites-right-column"
          v-if="activeTabFavorites === '默认收藏夹'"
        >
          该收藏夹还没有视频哦~
        </div>
        <div
          class="favorites-right-column"
          v-if="activeTabFavorites === '稍后再看'"
        >
          该收藏夹还没有视频哦~
        </div>
      </div>

      <div
        class="history"
        v-if="history"
        @mouseenter="history = true"
        @mouseleave="
          history = false;
          activeTabActivity = '视频动态';
        "
      >
        <div class="header-tabs-container">
          <div
            class="header-tabs-panel-item"
            :class="{ active: activeTabActivity === '视频动态' }"
            @click="activeTabActivity = '视频动态'"
          >
            视频动态
          </div>
          <div
            class="header-tabs-panel-item"
            :class="{ active: activeTabActivity === '直播' }"
            @click="activeTabActivity = '直播'"
          >
            直播
          </div>
          <div
            class="header-tabs-panel-item"
            :class="{ active: activeTabActivity === '专栏' }"
            @click="activeTabActivity = '专栏'"
          >
            专栏
          </div>
        </div>
        <div class="historyContainer">
          <div
            class="header-tabs-panel-content-history"
            v-if="activeTabActivity === '视频动态'"
          >
            好像最近没有看过视频呢
          </div>
          <div
            class="header-tabs-panel-content-history"
            v-if="activeTabActivity === '直播'"
          >
            好像最近没有看过直播呢
          </div>
          <div
            class="header-tabs-panel-content-history"
            v-if="activeTabActivity === '专栏'"
          >
            好像最近没有看过专栏呢
          </div>
        </div>
      </div>
      <div
        class="submission"
        v-if="submission"
        @mouseenter="submission = true"
        @mouseleave="submission = false"
      >
        <div class="submission-box">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="position: relative; top: -5px"
          >
            <rect
              opacity="0.01"
              x="1"
              y="1"
              width="24"
              height="8"
              fill="#61666d"
            ></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.5 3.5H15.5C17.9853 3.5 20 5.51472 20 8V12.5C20 13.0523 20.4477 13.5 21 13.5C21.5523 13.5 22 13.0523 22 12.5V11.5C22 11.4989 22 11.4977 22 11.4966V8C22 4.41015 19.0899 1.5 15.5 1.5H5.5C4.11929 1.5 3 2.61929 3 4V21C3 22.3807 4.11929 23.5 5.5 23.5H14.2615H15H15.2615C15.8138 23.5 16.2615 23.0523 16.2615 22.5C16.2615 21.9477 15.8138 21.5 15.2615 21.5H15H14.2615H5.5C5.22386 21.5 5 21.2761 5 21V4C5 3.72386 5.22386 3.5 5.5 3.5Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 10C7 9.44772 7.44772 9 8 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H8C7.44772 11 7 10.5523 7 10Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 14C7 13.4477 7.44772 13 8 13H11C11.5523 13 12 13.4477 12 14C12 14.5523 11.5523 15 11 15H8C7.44772 15 7 14.5523 7 14Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.0502 15.348C21.4644 14.7622 20.5146 14.7622 19.9288 15.348L17.454 17.8228C17.0634 18.2134 17.0634 18.8465 17.454 19.237C17.8445 19.6276 18.4777 19.6276 18.8682 19.237L20.9895 17.1157L23.1108 19.237C23.5013 19.6276 24.1345 19.6276 24.525 19.237C24.9156 18.8465 24.9156 18.2134 24.525 17.8228L22.0502 15.348Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.9895 14.9758C21.5418 14.9758 21.9895 15.4235 21.9895 15.9758L21.9895 22.5C21.9895 23.0523 21.5418 23.5 20.9895 23.5C20.4372 23.5 19.9895 23.0523 19.9895 22.5L19.9895 15.9758C19.9895 15.4235 20.4372 14.9758 20.9895 14.9758Z"
              fill="#61666d"
            ></path>
          </svg>
          <div class="submission-item-title">专栏投稿</div>
        </div>
        <div class="submission-box">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="position: relative; top: -5px"
          >
            <rect
              opacity="0.01"
              x="0.5"
              y="1"
              width="24"
              height="24"
              fill="#C4C4C4"
            ></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 3.5H15C17.4853 3.5 19.5 5.51472 19.5 8V11.5V12.5C19.5 13.0523 19.9477 13.5 20.5 13.5C21.0523 13.5 21.5 13.0523 21.5 12.5V11.5V8C21.5 4.41015 18.5899 1.5 15 1.5H5C3.61929 1.5 2.5 2.61929 2.5 4V21C2.5 22.3807 3.61929 23.5 5 23.5H13.5H14.0802H14.5C15.0523 23.5 15.5 23.0523 15.5 22.5C15.5 21.9477 15.0523 21.5 14.5 21.5H14.0802H13.5H5C4.72386 21.5 4.5 21.2761 4.5 21V4C4.5 3.72386 4.72386 3.5 5 3.5Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.5611 15.348C20.9753 14.7622 20.0255 14.7622 19.4397 15.348L16.9649 17.8228C16.5743 18.2134 16.5743 18.8465 16.9649 19.237C17.3554 19.6276 17.9886 19.6276 18.3791 19.237L20.5004 17.1157L22.6217 19.237C23.0122 19.6276 23.6454 19.6276 24.0359 19.237C24.4265 18.8465 24.4265 18.2134 24.0359 17.8228L21.5611 15.348Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5004 14.9758C21.0527 14.9758 21.5004 15.4235 21.5004 15.9758L21.5004 22.5C21.5004 23.0523 21.0527 23.5 20.5004 23.5C19.9481 23.5 19.5004 23.0523 19.5004 22.5L19.5004 15.9758C19.5004 15.4235 19.9481 14.9758 20.5004 14.9758Z"
              fill="#61666d"
            ></path>
            <path
              d="M12.7504 9.54767V12.5477"
              stroke="#61666d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.75037 13.9222C8.75037 13.1631 9.39507 12.5477 10.1904 12.5477H12.7504V14.1731C12.7504 14.9323 12.1057 15.5477 11.3104 15.5477H10.1904C9.39507 15.5477 8.75037 14.9323 8.75037 14.1731V13.9222Z"
              stroke="#61666d"
              stroke-width="2"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.2504 10.0477L12.7504 9.54767"
              stroke="#61666d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <div class="submission-item-title">音频投稿</div>
        </div>
        <div class="submission-box">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="position: relative; top: -5px"
          >
            <path d="M24 2H0V26H24V2Z" fill="white" fill-opacity="0.01"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.0607 15.348C22.4749 14.7622 21.5251 14.7622 20.9393 15.348L18.4645 17.8228C18.0739 18.2134 18.0739 18.8465 18.4645 19.237C18.855 19.6276 19.4882 19.6276 19.8787 19.237L22 17.1157L24.1213 19.237C24.5118 19.6276 25.145 19.6276 25.5355 19.237C25.9261 18.8465 25.9261 18.2134 25.5355 17.8228L23.0607 15.348Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 14.9759C22.5523 14.9759 23 15.4236 23 15.9759L23 22.5C23 23.0523 22.5523 23.5 22 23.5C21.4477 23.5 21 23.0523 21 22.5L21 15.9759C21 15.4236 21.4477 14.9759 22 14.9759Z"
              fill="#61666d"
            ></path>
            <path d="M24 1H0V25H24V1Z" fill="white" fill-opacity="0.01"></path>
            <path
              d="M22 12.4875C22 6.96464 17.5229 2.48749 12 2.48749C6.47715 2.48749 2 6.96464 2 12.4875C2 18.0103 6.47715 22.4875 12 22.4875C13.8026 22.4875 15.4938 22.0105 16.9543 21.176"
              stroke="#61666d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 16.4132C13.6072 16.4132 14.2501 15.1274 14.2501 15.1274H9.74991C9.74991 15.1274 10.3928 16.4132 12 16.4132Z"
              stroke="#61666d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.5 9.48749V11.4875"
              stroke="#61666d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.5 9.48749V11.4875"
              stroke="#61666d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <div class="submission-item-title">贴纸投稿</div>
        </div>
        <div class="submission-box">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="position: relative; top: -5px"
          >
            <rect
              opacity="0.01"
              x="1.55603"
              width="24"
              height="24"
              fill="#C4C4C4"
            ></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.556 10.1866C21.0037 10.1866 20.556 10.6343 20.556 11.1866V12.5712C20.556 13.1234 21.0037 13.5712 21.556 13.5712C22.1083 13.5712 22.556 13.1234 22.556 12.5712V11.1866C22.556 10.6343 22.1083 10.1866 21.556 10.1866ZM14.556 20.5C14.0037 20.5 13.556 20.9477 13.556 21.5C13.556 22.0523 14.0037 22.5 14.556 22.5H15.556C16.1083 22.5 16.556 22.0523 16.556 21.5C16.556 20.9477 16.1083 20.5 15.556 20.5H14.556Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.6093 15.348C22.0235 14.7622 21.0738 14.7622 20.488 15.348L18.0131 17.8229C17.6226 18.2134 17.6226 18.8465 18.0131 19.2371C18.4037 19.6276 19.0368 19.6276 19.4274 19.2371L21.5487 17.1158L23.67 19.2371C24.0605 19.6276 24.6937 19.6276 25.0842 19.2371C25.4747 18.8465 25.4747 18.2134 25.0842 17.8229L22.6093 15.348Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.5487 14.9759C22.101 14.9759 22.5487 15.4236 22.5487 15.9759L22.5487 22.5C22.5487 23.0523 22.101 23.5 21.5487 23.5C20.9964 23.5 20.5487 23.0523 20.5487 22.5L20.5487 15.9759C20.5487 15.4236 20.9964 14.9759 21.5487 14.9759Z"
              fill="#61666d"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.20868 5.5H19.556C20.1083 5.5 20.556 5.94771 20.556 6.5V11.8911H22.556V6.5C22.556 4.84315 21.2129 3.5 19.556 3.5H3.20868C1.55183 3.5 0.208679 4.84315 0.208679 6.5V19.5C0.208679 21.1569 1.55182 22.5 3.20868 22.5H15.453V20.5H3.20868C2.65639 20.5 2.20868 20.0523 2.20868 19.5V6.5C2.20868 5.94772 2.6564 5.5 3.20868 5.5Z"
              fill="#61666d"
            ></path>
            <path
              d="M13.3617 12.134C14.0284 12.5189 14.0284 13.4811 13.3617 13.866L10.3617 15.5981C9.69503 15.983 8.86169 15.5019 8.86169 14.7321V11.2679C8.86169 10.4981 9.69503 10.017 10.3617 10.4019L13.3617 12.134Z"
              fill="#61666d"
            ></path>
          </svg>
          <div class="submission-item-title">视频投稿</div>
        </div>
        <div class="submission-box">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="position: relative; top: -5px"
          >
            <rect
              opacity="0.01"
              x="1.5"
              y="1"
              width="24"
              height="24"
              fill="#C4C4C4"
            ></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V21C5.5 21.2761 5.72386 21.5 6 21.5H10.5H11.5C12.0523 21.5 12.5 21.9477 12.5 22.5C12.5 23.0523 12.0523 23.5 11.5 23.5H10.5H6C4.61929 23.5 3.5 22.3807 3.5 21V4C3.5 2.61929 4.61929 1.5 6 1.5H16C19.5899 1.5 22.5 4.41015 22.5 8V11.2806V11.818V12.2806C22.5 12.8329 22.0523 13.2806 21.5 13.2806C20.9477 13.2806 20.5 12.8329 20.5 12.2806V11.818V11.2806V8C20.5 5.51472 18.4853 3.5 16 3.5ZM15 10.634C15.6667 11.0189 15.6667 11.9811 15 12.366L12 14.0981C11.3333 14.483 10.5 14.0019 10.5 13.2321V9.76795C10.5 8.99815 11.3333 8.51702 12 8.90192L15 10.634ZM23.9227 20.238C24.2799 19.6192 24.2799 18.8568 23.9227 18.238L22.3274 15.4748C21.9701 14.856 21.3098 14.4748 20.5953 14.4748H17.4047C16.6902 14.4748 16.0299 14.856 15.6727 15.4748L14.0774 18.238C13.7201 18.8568 13.7201 19.6192 14.0774 20.238L15.6727 23.0011C16.0299 23.6199 16.6902 24.0011 17.4047 24.0011H20.5953C21.3098 24.0011 21.9701 23.6199 22.3274 23.0011L23.9227 20.238ZM17.2604 16.7248C17.3497 16.5701 17.5148 16.4748 17.6934 16.4748H20.3066C20.4853 16.4748 20.6503 16.5701 20.7397 16.7248L22.0463 18.988C22.1356 19.1427 22.1356 19.3333 22.0463 19.488L20.7397 21.7511C20.6503 21.9058 20.4853 22.0011 20.3066 22.0011H17.6934C17.5148 22.0011 17.3497 21.9058 17.2604 21.7511L15.9538 19.488C15.8644 19.3333 15.8644 19.1427 15.9538 18.988L17.2604 16.7248ZM19 17.9879C18.3096 17.9879 17.75 18.5476 17.75 19.2379C17.75 19.9283 18.3096 20.4879 19 20.4879C19.6904 20.4879 20.25 19.9283 20.25 19.2379C20.25 18.5476 19.6904 17.9879 19 17.9879Z"
              fill="#61666d"
            ></path>
          </svg>
          <div class="submission-item-title">投稿管理</div>
        </div>
      </div>
    </div>
    <div class="category">
      <div class="total">
        <div class="left">
          <ul>
            <li>
              <div>
                <img
                  src="../assets/img/动态icon.jpg"
                  style="border-radius: 50%; width: 40px; height: 40px"
                />
              </div>
              <span style="padding-top: 5px">动态</span>
            </li>
            <li>
              <div
                style="
                  background: #f38e8c;
                  border-radius: 50%;
                  width: 40px;
                  height: 40px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-bg--icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.89054 17.272L4.89277 17.2742C6.49674 18.8782 8.66472 19.7888 10.9624 19.7888C13.2503 19.7888 15.2113 19.0539 16.6107 17.6108L16.6108 17.6108L16.6128 17.6086C18.0002 16.1345 18.7835 14.182 18.7421 12.1819C18.7852 11.3835 18.6916 9.36321 17.4088 6.75488L17.4082 6.7537C17.209 6.35523 16.8163 6.06598 16.3391 5.96993C15.8904 5.87103 15.4021 6.01997 15.061 6.35741C14.9094 6.48781 14.7796 6.61755 14.6655 6.7317L14.6637 6.73348L14.6329 6.76426C14.2107 3.35588 12.6083 1.7368 11.1654 1.00465C11.148 0.987812 11.1265 0.967972 11.1036 0.950782C11.0775 0.931205 11.0311 0.900467 10.9694 0.888912C10.2276 0.608301 9.41043 1.01168 9.1237 1.77629L9.12314 1.7778C8.50566 3.46558 7.35287 4.62281 6.16627 5.76704C4.51756 7.33121 2.75938 9.03623 2.80163 12.093C2.75906 14.055 3.54464 15.8826 4.89054 17.272ZM3.04999 13.0648C3.01092 12.7459 2.99439 12.4218 3.00168 12.0939C2.95933 9.12977 4.6531 7.47834 6.30453 5.9116C7.49017 4.76831 8.67581 3.58267 9.31098 1.84655C9.56504 1.16904 10.2849 0.830288 10.9201 1.08435C10.9624 1.08435 11.0048 1.1267 11.0471 1.16904C11.9267 1.60884 12.8853 2.39635 13.5753 3.77299C12.8853 2.39633 11.9267 1.6088 11.0471 1.16901C11.0047 1.12666 10.9624 1.08432 10.9201 1.08432C10.2849 0.830251 9.56503 1.16901 9.31097 1.84651C8.6758 3.58263 7.49016 4.76827 6.30452 5.91157C4.65309 7.47831 2.95932 9.12973 3.00166 12.0938C2.99438 12.4218 3.01092 12.7459 3.04999 13.0648ZM14.477 7.18189C14.477 7.1819 14.477 7.18192 14.477 7.18193C14.5828 7.09724 14.6887 6.99138 14.8052 6.87493C14.9216 6.75849 15.0486 6.63146 15.1968 6.50442C15.4932 6.20801 15.9167 6.08098 16.2978 6.16567C16.7212 6.25036 17.06 6.50443 17.2294 6.84318C17.3088 7.0046 17.3835 7.16371 17.4539 7.32035C17.3835 7.1637 17.3087 7.00458 17.2294 6.84314C17.06 6.50439 16.7212 6.25032 16.2978 6.16563C15.9167 6.08094 15.4932 6.20798 15.1968 6.50439C15.0486 6.63142 14.9216 6.75845 14.8051 6.87489L14.8051 6.8749C14.7557 6.92437 14.7081 6.97191 14.6617 7.01675C14.5988 7.07745 14.5379 7.13318 14.477 7.18189ZM12.6977 6.35925C12.8428 7.15476 12.8833 7.97963 12.8679 8.74864C12.8679 8.79032 12.8704 8.8315 12.8754 8.87195C12.8704 8.83151 12.8679 8.79035 12.8679 8.74867C12.8833 7.97966 12.8428 7.15478 12.6977 6.35925ZM16.7358 10.6654C16.8108 11.1478 16.8483 11.6393 16.8483 12.1362V12.1786C16.8483 13.703 16.2978 15.2274 15.2392 16.3283C14.0535 17.4293 12.5291 18.0221 10.9201 17.9374C9.1416 17.9374 7.44783 17.2175 6.21984 15.9472C5.82743 15.5548 5.50448 15.1119 5.25584 14.6331C5.50447 15.1119 5.82743 15.5548 6.21983 15.9472C7.44782 17.2175 9.14159 17.9373 10.9201 17.9373C12.5291 18.022 14.0535 17.4292 15.2392 16.3283C16.2978 15.2273 16.8483 13.7029 16.8483 12.1785V12.1362C16.8483 11.6393 16.8108 11.1478 16.7358 10.6654ZM10.9306 17.7376C12.4802 17.8192 13.9509 17.2497 15.0989 16.1856C16.1154 15.1261 16.6483 13.655 16.6483 12.1785V12.1362C16.6483 10.8624 16.3969 9.6266 15.8955 8.49474C15.2436 9.11663 14.7845 9.49093 14.4179 9.68717C14.2122 9.79725 14.0268 9.85633 13.846 9.86789C13.6644 9.8795 13.5028 9.84219 13.3473 9.78249C12.9207 9.62211 12.6679 9.20129 12.6679 8.74864V8.74464L12.6679 8.74464C12.6889 7.69735 12.6046 6.55594 12.2954 5.53554C12.01 4.59379 11.5372 3.76766 10.7904 3.20655C9.96581 4.94926 8.72521 6.18561 7.58695 7.28323L7.50836 7.35967C5.97191 8.85397 4.81321 9.98087 4.85306 12.1325L4.85313 12.1362H4.85309C4.85309 13.5239 5.38326 14.8277 6.36125 15.8057L6.36365 15.8081L6.36363 15.8082C7.55387 17.0394 9.19573 17.7374 10.9201 17.7374H10.9306L10.9306 17.7376Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </div>
              <span style="padding-top: 5px">热门</span>
            </li>
          </ul>
        </div>
        <div class="center">
          <ul>
            <li><span>番剧</span></li>
            <li><span>国创</span></li>
            <li><span>综艺</span></li>
            <li><span>动画</span></li>
            <li><span>鬼畜</span></li>
            <li><span>舞蹈</span></li>
            <li><span>娱乐</span></li>
            <li><span>科技</span></li>
            <li><span>美食</span></li>
            <li><span>汽车</span></li>
            <li><span>运动</span></li>
            <li><span>电影</span></li>
            <li><span>电视剧</span></li>
            <li><span>纪录片</span></li>
            <li><span>游戏</span></li>
            <li><span>音乐</span></li>
            <li><span>影视</span></li>
            <li><span>知识</span></li>
            <li><span>咨询</span></li>
            <li><span>生活</span></li>
            <li><span>时尚</span></li>
            <li>
              <span style="margin-left: 5px">更多</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="channel-entry-more__link--arrow"
                style="margin-left: 5px; transition: color 0.3s"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <el-divider direction="vertical" style="height: 60%; z-index: -1" />
      <div class="right">
        <!-- .right -->
        <ul>
          <li>
            <div class="column">
              <svg
                t="1642646834655"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4061"
                width="18"
                height="18"
              >
                <path
                  d="M810.6496 153.6C843.6736 153.6 870.4 180.3264 870.4 213.3504v597.2992c0 33.024-26.7264 59.7504-59.7504 59.7504H213.3504A59.7504 59.7504 0 0 1 153.6 810.6496V213.3504C153.6 180.3264 180.3264 153.6 213.3504 153.6z m-332.8 460.8H341.3504a34.1504 34.1504 0 0 0 0 68.2496h136.4992a34.1504 34.1504 0 1 0 0-68.2496z m204.8-136.6016H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 0 0 0-68.2496z m0-136.3968H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 1 0 0-68.2496z"
                  p-id="4062"
                ></path>
              </svg>
              <span>专栏</span>
            </div>
          </li>
          <li>
            <div class="column">
              <svg
                t="1642646844599"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4188"
                width="18"
                height="18"
              >
                <path
                  d="M772.4544 229.2736l2.048 6.4512 87.2448 283.136c8.8576 33.1264-10.24 66.56-41.984 78.4384l-6.5536 2.048-118.1696 31.744a32.768 32.768 0 0 1-8.192 1.0752l-4.096-0.2048-124.672-14.6432-193.3824 51.8144 36.6592 136.704a49.152 49.152 0 0 1-93.184 30.8736l-1.792-5.4272L155.2896 267.264a49.152 49.152 0 0 1 93.184-30.8736l1.792 5.4272 4.096 15.36 188.928-50.6368a32.768 32.768 0 0 1 8.1408-1.0752l4.096 0.2048 124.5184 14.592 112.1792-30.0544c33.4336-8.96 68.1984 7.7824 80.2304 39.0144z"
                  p-id="4189"
                ></path>
              </svg>
              <span>活动</span>
            </div>
          </li>
          <li>
            <div class="column">
              <svg
                t="1642670011510"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3116"
                width="18"
                height="18"
              >
                <path
                  d="M836.3008 170.6496c17.1008 0 31.2832 12.6464 33.7408 29.0816L870.4 204.8v316.16a34.1504 34.1504 0 0 1-29.0816 33.792l-5.0176 0.3584h-102.4v195.7888a34.1504 34.1504 0 0 1-29.1328 33.792l-5.0176 0.3584H386.7648l-127.3344 95.5392a34.2016 34.2016 0 0 1-53.248-17.3568l-1.024-4.8128-0.3584-5.12-0.0512-68.3008H153.6a34.1504 34.1504 0 0 1-32.6656-24.2176l-1.0752-4.8128-0.4096-5.0688v-409.6c0-17.152 12.6464-31.3344 29.0816-33.792L153.6 307.2h174.2336V204.8c0-17.152 12.6464-31.3344 29.1328-33.792l5.0176-0.3584h474.3168z m-477.9008 409.6H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h102.4l5.0688-0.4096A34.1504 34.1504 0 0 0 358.4 580.2496z m102.4-136.4992H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h204.8l5.0688-0.4096A34.1504 34.1504 0 0 0 460.8 443.7504z m341.2992-204.8512h-406.016v68.2496h303.616c17.152 0 31.3856 12.6464 33.792 29.1328l0.3584 5.0176v145.4592l68.2496 0.0512V238.8992z"
                  p-id="3117"
                ></path>
              </svg>
              <span>社区中心</span>
            </div>
          </li>
          <li>
            <div class="column">
              <svg
                t="1642646710703"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3158"
                width="18"
                height="18"
              >
                <path
                  d="M682.6496 204.8512c35.4816 0 64.6656 27.136 67.9424 61.696l0.3072 6.6048V358.4l81.92-61.44a34.2016 34.2016 0 0 1 53.248 17.408l1.024 4.7616 0.3584 5.12v392.5504a34.1504 34.1504 0 0 1-50.2784 30.1056l-4.352-2.7648-81.92-61.4912v68.3008c0 33.1264-23.552 60.7232-54.8352 66.9696l-6.8608 1.024-6.5536 0.256H204.8a68.2496 68.2496 0 0 1-67.9936-61.696l-0.3072-6.5536V273.152c0-35.4816 27.136-64.6656 61.696-67.9936L204.8 204.8512h477.8496zM385.3824 389.12a34.1504 34.1504 0 0 0-34.0992 34.1504v179.6096a34.1504 34.1504 0 0 0 53.0432 28.416l134.7584-89.8048a34.1504 34.1504 0 0 0 0-56.832L404.3264 394.8544a34.1504 34.1504 0 0 0-18.944-5.7344z"
                  p-id="3159"
                ></path>
              </svg>
              <span>直播</span>
            </div>
          </li>
          <li>
            <div class="column">
              <svg
                t="1642669966795"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2862"
                width="18"
                height="18"
              >
                <path
                  d="M749.2096 168.96a102.4 102.4 0 0 1 102.2464 96.3584l0.1536 6.0416v477.8496a102.4 102.4 0 0 1-96.3584 102.2464l-6.0416 0.1536H271.36a102.4 102.4 0 0 1-102.2464-96.3584l-0.1536-6.0416V271.36a102.4 102.4 0 0 1 96.3584-102.2464L271.36 168.96h477.8496z m-69.9392 385.4848a34.1504 34.1504 0 0 0-48.2816 0 170.6496 170.6496 0 0 1-241.3568 0 34.1504 34.1504 0 1 0-48.2816 48.2304 238.9504 238.9504 0 0 0 337.92 0 34.1504 34.1504 0 0 0 0-48.2304zM322.56 339.6608a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z m375.4496 0a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z"
                  p-id="2863"
                ></path>
              </svg>
              <span>课堂</span>
            </div>
          </li>
          <li>
            <div class="column">
              <svg
                t="1642669999866"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2989"
                width="18"
                height="18"
              >
                <path
                  d="M783.36 221.8496a102.4 102.4 0 0 1 102.0928 94.7712l0.3072 7.68v409.6a102.4 102.4 0 0 1-94.72 102.0928l-7.68 0.256H237.2096a102.4 102.4 0 0 1-102.0928-94.72l-0.3072-7.68v-409.6A102.4 102.4 0 0 1 229.5808 222.208l7.68-0.3072H783.36z m-155.5968 81.408a34.1504 34.1504 0 0 0-50.7904 23.6032l-54.1696 203.3152a128 128 0 1 0-108.288 220.8256l6.7584 1.024a128 128 0 0 0 141.5168-104.8576l71.7824-253.7984 47.4624 35.4816 3.2768 2.2016a34.1504 34.1504 0 0 0 37.5808-56.832l-91.8528-68.7616z"
                  p-id="2990"
                ></path>
              </svg>
              <span>新歌热榜</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
                  src="../assets/img/1.jpg"
                  alt="Slide 1"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">分享双11生活记录，超40万等你瓜分！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="../assets/img/2.jpg"
                  alt="Slide 2"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">直播中……精彩程度堪比上海万圣节！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="../assets/img/3.jpg"
                  alt="Slide 3"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">这也行？</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="../assets/img/4.jpg"
                  alt="Slide 4"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">豆瓣8.6，英国奇幻情景剧更新！</p>
              </div> </swiper-slide
            >]
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="../assets/img/5.jpg"
                  alt="Slide 5"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">年底冲刺中 看看你的珍藏回忆！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="../assets/img/6.jpg"
                  alt="Slide 6"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">重温暑期黑马《古相思曲》</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="../assets/img/7.jpg"
                  alt="Slide 7"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">魔镜魔镜，告诉我...</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="../assets/img/8.jpg"
                  alt="Slide 8"
                  style="width: 100%; height: 100%"
                />
                <p class="slide-text">那些万圣节必看的经典恐怖片！</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-content">
                <img
                  src="../assets/img/9.jpg"
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
              @mouseenter.stop="playVideo(1)"
              @mouseleave.stop="pauseVideo(1)"
            >
              <img
                src="../assets/img/视频1.jpg"
                style="border-radius: 10px"
                alt="Video Cover"
                ref="videoCover1"
              />
              <video
                src="../assets/video/视频1.mp4"
                poster="../assets/img/视频1.jpg"
                style="border-radius: 10px"
                autoplay
                muted
                ref="video1"
              ></video>
            </div>
            <div style="padding-top: 10px">
              <h3
                title="红莲：恶魔耀光木格乌鸦三星一出 兄弟们要不按顺序点了吧"
                style="font-weight: 400; font-size: 15px"
              >
                红莲：恶魔耀光木格乌鸦三星一出 兄弟们要不按顺序点了吧
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
                    title="黑黑黑黑莲"
                    style="color: lightgray; align-items: center"
                    >黑黑黑黑莲</span
                  >
                  <span style="color: lightgray">· 10-5</span>
                </span>
                <!--]-->
              </div>
            </div>
          </li>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(2)"
              @mouseleave.stop="pauseVideo(2)"
            >
              <img
                src="../assets/img/视频2.jpg"
                style="border-radius: 10px"
                alt="Video Cover"
                ref="videoCover2"
              />
              <video
                src="../assets/video/视频2.mp4"
                poster="../assets/img/视频2.jpg"
                style="border-radius: 10px"
                autoplay
                muted
                ref="video2"
              ></video>
            </div>
            <div style="padding-top: 10px">
              <h3
                title="《堕落之主》游戏体验，3A类魂新作来了！往返于双重世界的持灯者！"
                style="font-size: 15px"
              >
                《堕落之主》游戏体验，3A类魂新作来了！往返于双重世界的持灯者！
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
                  title="紫雨carol"
                  style="
                    color: lightgray;
                    align-items: center;
                    padding-top: 12px;
                  "
                  >紫雨carol</span
                >
                <span style="color: lightgray; padding-top: 12px"
                  >· 17小时前</span
                >
              </div>
            </div>
          </li>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(3)"
              @mouseleave.stop="pauseVideo(3)"
            >
              <img
                src="../assets/img/视频3.jpg"
                style="border-radius: 10px"
                alt="Video Cover"
                ref="videoCover3"
              />
              <video
                src="../assets/video/视频3.mp4"
                poster="../assets/img/视频3.jpg"
                style="border-radius: 10px"
                autoplay
                muted
                ref="video3"
              ></video>
            </div>
            <div style="padding-top: 10px">
              <h3
                title="今天老九门开会是吧 |【海东老师】 2023年10月9日直播"
                style="font-size: 15px"
              >
                今天老九门开会是吧 |【海东老师】 2023年10月9日直播
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
                  title="海东鉴宝"
                  style="
                    color: lightgray;
                    align-items: center;
                    padding-top: 12px;
                  "
                  >海东鉴宝</span
                >
                <span style="color: lightgray; padding-top: 12px">· 10-9</span>
              </div>
            </div>
          </li>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(4)"
              @mouseleave.stop="pauseVideo(4)"
            >
              <img
                src="../assets/img/视频4.jpg"
                style="border-radius: 10px"
                alt="Video Cover"
                ref="videoCover4"
              />
              <video
                src="../assets/video/视频4.mp4"
                poster="../assets/img/视频4.jpg"
                style="border-radius: 10px"
                autoplay
                muted
                ref="video4"
              ></video>
            </div>
            <div style="padding-top: 10px">
              <h3
                title="佛罗里达不养闲人！男子对核武进行改造。让其为自家供电27年"
                style="font-weight: 400; font-size: 15px"
              >
                佛罗里达不养闲人！男子对核武进行改造。让其为自家供电27年
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
                    title="佛罗里达记录官"
                    style="color: lightgray; align-items: center"
                    >佛罗里达记录官</span
                  >
                  <span style="color: lightgray">· 10-9</span>
                </span>
                <!--]-->
              </div>
            </div>
          </li>
          <li>
            <div
              class="video-container"
              @mouseenter.stop="playVideo(5)"
              @mouseleave.stop="pauseVideo(5)"
            >
              <img
                src="../assets/img/视频5.jpg"
                style="border-radius: 10px"
                alt="Video Cover"
                ref="videoCover5"
              />
              <video
                src="../assets/video/视频5.mp4"
                poster="../assets/img/视频5.jpg"
                style="border-radius: 10px"
                autoplay
                muted
                ref="video5"
              ></video>
            </div>
            <div style="padding-top: 10px">
              <h3
                title="AMENG：你好像没见过世面 小海：确实没见过你这么厉害的T"
                style="font-size: 15px"
              >
                AMENG：你好像没见过世面 小海：确实没见过你这么厉害的T
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
                  title="MINSEA最小的海"
                  style="
                    color: lightgray;
                    align-items: center;
                    padding-top: 12px;
                  "
                  >MINSEA最小的海</span
                >
                <span style="color: lightgray; padding-top: 12px">· 10-1</span>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/icon2.jpg" />
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";
let live = ref(false);
let game = ref(false);
let book = ref(false);
let download = ref(false);
let searchDialog = ref(false);
let userDialog = ref(false);
let vip = ref(false);
let message = ref(false);
let activity = ref(false);
let favorites = ref(false);
let history = ref(false);
let submission = ref(false);

const navigation = ref({
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
});

const modules = [Autoplay, Pagination, Navigation, Scrollbar];

const prevEl = () => {
  // 上一张
};

const nextEl = () => {
  // 下一张
};

const onSlideChange = (swiper) => {
  console.log(swiper.activeIndex);
};

const searchFoucs = () => {
  let search = document.querySelector("input");
  let sear = document.querySelector(".search");
  search.style.backgroundColor = "rgb(227,229,231)";
  sear.style.borderBottomLeftRadius = "0px";
  sear.style.borderBottomRightRadius = "0px";
  searchDialog.value = true;
};
const searchBlur = () => {
  let search = document.querySelector("input");
  let sear = document.querySelector(".search");
  search.style.backgroundColor = "#f1f2f3";
  sear.style.borderBottomLeftRadius = "8px";
  sear.style.borderBottomRightRadius = "8px";
  searchDialog.value = false;
};
</script>
<script>
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
export default {
  data() {
    return {
      isPlaying: {
        1: false,
        2: false,
      },
      activeTabActivity: "视频动态",
      activeTabHistory: "视频动态",
      activeTabFavorites: "默认收藏夹",
      favorites: true,
      activity: true,
      history: true,
      imagePaths: {
        1: img1,
        2: img2,
        3: img3,
        4: img4,
        5: img5,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.videoElements = {
        1: this.$refs.video1,
        2: this.$refs.video2,
      };
      this.videoCoverElements = {
        1: this.$refs.videoCover1,
        2: this.$refs.videoCover2,
      };
    });
  },
  methods: {
    playVideo(videoId) {
      const videoElement = event.target.querySelector("video");
      const videoCoverElement = event.target.querySelector("img");
      videoElement.currentTime = 0;
      videoElement.play();
      videoCoverElement.style.opacity = "0";
      this.isPlaying[videoId] = true;
    },
    pauseVideo(videoId) {
      const videoElement = event.target.querySelector("video");
      const videoCoverElement = event.target.querySelector("img");
      videoElement.pause();
      videoCoverElement.style.opacity = "1";
      this.isPlaying[videoId] = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  min-width: 1512.9px;
  max-width: 1512.9px;
  MARGIN-RIGHT: auto;
	MARGIN-LEFT: auto;
  height: 155px;
  background: url("../assets/img/header.webp");
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 999999;
  .logo {
    width: 162px;
    height: 78px;
    background: url("../assets/img/logo.png");
    background-size: cover;
    position: absolute;
    bottom: 10px;
    left: 60px;
  }
  .header-nav {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    position: sticky;
    padding-top: 3px;
    padding-left: 30px;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
    .menu {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          color: #ffffff;
          font-size: 14px;
          margin-right: 10px;
          padding-bottom: 30px;
          padding-top: 30px;
          cursor: pointer;
        }
      }
    }
    .submit {
      display: flex;
      align-items: center;
      width: 90px;
      height: 34px;
      border-radius: 8px;
      background: #fb7299;
      color: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .submit:hover {
      background-color: #fc8bab;
    }
    .search {
      background: #f1f2f3;
      opacity: 0.9;
      width: 430px;
      height: 40px;
      left: 20px;
      border-radius: 8px;
      margin-right: 5px;
      position: relative;
      z-index: 999999;
      .input-container {
        display: flex;
        align-items: center;
        margin: 4px 8px;
      }
      span {
        position: absolute;
        bottom: 8px;
        right: 10px;
        color: #000;
        font-size: 20px;
        display: flex;
        align-items: center;
      }
      input {
        width: 380px;
        height: 32px;
        background: #f1f2f3;
        border: 0;
        border-radius: 5px;
      }
      .search-icon {
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
      }
      .search-icon:hover {
        background-color: #e3e5e7;
      }
      .shDialog {
        width: 430px;
        height: 520px;
        background: #f1f2f3;
        border-radius: 0 0 10px 10px;
        ul:first-child {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 15px;
          padding: 15px 0;
        }
        ul {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          li {
            text-align: center;
            line-height: 30px;
            height: 30px;
            background: #e3e5e5;
            border-radius: 5px;
            margin-left: 15px;
            margin-bottom: 10px;
            font-size: 12px;
            cursor: pointer;
          }
          li:hover {
            color: #00aeec;
          }
        }
        ol {
          list-style-type: decimal;
          list-style-position: inside;
          h2 {
            font-size: 18px;
            margin: 15px 0;
            margin-left: 15px;
          }
          div {
            height: 38px;
            display: flex;
            align-items: center;
            cursor: pointer;
          }
          div:hover {
            background-color: #e3e5e7;
          }
          .search-num1 {
            color: #18191c;
            padding-left: 15px;
            padding-right: 15px;
          }
          .search-num2 {
            color: #9499a0;
            padding-left: 15px;
            padding-right: 15px;
          }
        }
      }
    }
    .user {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        li {
          margin-left: 20px;
        }
        .user-img {
          position: relative;
          img {
            width: 40px;
            height: 40px;
            border: solid white 2px;
            border-radius: 50%;
            z-index: 999;
          }
          img:hover {
            animation: moveAndScale 0.1s ease-in-out forwards;
            position: relative;
          }
          .user-content {
            width: 300px;
            height: 450px;
            background: #ffffff;
            border-radius: 10px;
            position: absolute;
            left: -140px;
            top: 60px;
            text-align: center;
          }
        }
        @keyframes moveAndScale {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-15px, 40px) scale(2.3);
          }
        }
        .user-upload {
          width: 34px;
          height: 34px;
          background: rgb(247, 120, 141);
          border-radius: 20%;
          text-align: center;
          line-height: 34px;
          margin-left: 25px;
        }
      }
    }
  }
  .live {
    width: 550px;
    height: 300px;
    background: #ffffff;
    border-radius: 10px;
    position: absolute;
    left: 10px;
    display: flex;
    justify-content: center;
    // align-items: center;
    .live-left {
      flex: 6;
      h1 {
        padding-top: 25px;
        padding-left: 20px;
        font-size: 20px;
        font-weight: bold;
      }
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      margin-left: 20px;
      margin-top: 20px;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 13px;
        padding-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 10ch;
      }
    }

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    .live-right {
      padding-top: 25px;
      padding-left: 20px;
      flex: 4;
      font-size: 20px;
      font-weight: bold;
      img {
        width: 200px;
        height: 80px;
        border-radius: 5%;
        margin-top: 20px;
      }
    }
  }
  .game {
    width: 450px;
    height: 300px;
    background: #ffffff;
    border-radius: 10px;
    position: absolute;
    left: 100px;
    display: flex;
    z-index: 10000;
    // align-items: center;
    .game-left {
      flex: 6;
    }

    .row {
      display: flex;
    }

    img:first-child {
      width: 250px;
      height: 140px;
      margin-top: 20px;
      margin-left: 20px;
      border-radius: 10px;
    }

    span {
      display: flex;
      flex-direction: column;
      // align-items: center;
      text-align: center;
    }

    .game-left span img {
      width: 65px;
      height: 65px;
      border-radius: 10px;
    }
    .game-left span p {
      text-align: center;
      width: 10ch;
      margin-top: 10px;
      // margin-left: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical; /*垂直排列*/
      line-clamp: 2;
      -webkit-line-clamp: 2; /*只显示6行*/
      overflow: hidden; /*溢出隐藏*/
      text-overflow: ellipsis; /*省略号代替*/
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
      // word-wrap:break-word;
      // max-width: 10ch;
    }
    .GameMiddle {
      flex: 0.01;
      width: 1px;
      height: 260px;
      background: #e3e5e7;
      margin-top: 20px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .game-right {
      flex: 3;
      h2 {
        font-size: 20px;
        margin-bottom: 30px;
        margin-top: 20px;
        margin-left: 10px;
      }
      ul {
        li {
          font-size: 13px;
          color: #61666d;
          text-align: left;
          margin-bottom: 10px;
          margin-left: 10px;
          margin-top: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 14ch;
        }
      }
    }
  }
  .book {
    width: 490px;
    height: 260px;
    background: #ffffff;
    border-radius: 10px;
    position: absolute;
    left: 160px;
    display: flex;
    justify-content: center;
    z-index: 10000;
    .book-left {
      flex: 6;
      display: flex;
      flex-direction: column;
      // align-items: center;
      margin-top: 10px;
      margin-left: 20px;
      .book-row {
        display: flex;
      }

      .book-row span {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
      }

      .book-row img {
        width: 140px;
        height: 80px;
        margin: 5px 5px;
        border-radius: 10px;
      }

      .book-row p {
        font-size: 12px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 20ch;
      }
    }
    .book-middle {
      flex: 0.01;
      width: 1px;
      height: 200px;
      background: #e3e5e7;
      margin-top: 28px;
      margin-left: 15px;
      margin-right: 15px;
    }
    .book-right {
      text-align: left;
      flex: 3;
      h2 {
        font-size: 20px;
        margin-bottom: 25px;
        margin-top: 25px;
      }
      ol {
        font-size: 14px;
        list-style-type: decimal;
        list-style-position: inside;
        li {
          margin-bottom: 18px;
          color: #61666d;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 14ch;
        }
      }
    }
  }
  .vip {
    width: 450px;
    height: 220px;
    background: #ffffff;
    border-radius: 10px;
    position: absolute;
    left: 910px;
    display: flex;
    justify-content: center;
    z-index: 999999;
    flex-wrap: wrap;
  }

  .vip-left {
    flex: 10;
    display: flex;
    flex-direction: column;
    h3 {
      font-weight: bold;
      font-size: 18px;
      margin-top: 20px;
      margin-left: 25px;
    }
    .vip-privilege {
      margin-top: 10px;
      margin-left: 25px;
    }
  }

  .vip-right {
    text-align: left;
    flex: 4;
    flex-direction: column;
    img {
      margin-top: 30px;
      margin-left: 5px;
      margin-right: 20px;
      width: 120px;
      border: 8px solid #f1f2f3; /* 添加border属性来创建边框 */
      border-radius: 5px;
    }
  }

  .vip-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px; /* 根据你的需求设置高度 */
    .vip-wrap {
      margin-left: 15px;
      background: #ffecf1;
      width: 418px;
      height: 60px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .vip-desc {
        margin-left: 11px;
        .vip-desc-title {
          font-size: 14px;
          line-height: 20px;
          color: #ff6699;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          word-break: break-word !important;
          line-break: anywhere;
          -webkit-line-clamp: 1;
        }
        .vip-desc-content {
          font-size: 12px;
          line-height: 17px;
          color: #ff6699;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          word-break: break-word !important;
          line-break: anywhere;
          -webkit-line-clamp: 1;
        }
      }
      .vip-btn {
        width: 140px;
        height: 44px;
        line-height: 44px;
        border-radius: 6px;
        cursor: pointer;
        text-align: center;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.05)
          ),
          linear-gradient(270deg, #eb6194 0%, #ff6699 100%);
        color: white;
        font-weight: bold;
        font-size: 14px;
        position: relative;
      }
    }
  }
  .activity {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 1010px;
    background: white;
    border-radius: 8px;
    width: 372px;
    height: 150px;
  }
  .history {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 1100px;
    background: white;
    border-radius: 8px;
    width: 372px;
    height: 450px;
  }
  .header-tabs-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #e3e5e7;
    align-items: center;
  }
  .activityContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-direction: column;
  }
  .historyContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-direction: column;
  }
  .header-tabs-panel-item {
    width: 124px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }
  .header-tabs-panel-item.active {
    border-bottom-color: #00aeec;
    color: #00aeec;
  }
  .header-tabs-panel-content-activity {
    height: 100px;
    width: 372px;
    color: #9499a0;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-tabs-panel-content-history {
    height: 400px;
    width: 372px;
    color: #9499a0;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .favorites {
    display: flex;
    position: absolute;
    left: 900px;
    background: white;
    border-radius: 8px;
    width: 520px;
    height: 400px;
  }

  .favorites-left-column {
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 400px;
    border-right: 1px solid #e3e5e7;
  }

  .favorites-box {
    width: 150px;
    height: 46px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    transition: background-color 0.3s, color 0.3s;
  }

  .favorites-right-column {
    width: 370px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #9499a0;
  }
  .favorites-tab-item-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 12px;
    margin-top: 13px;
  }
  .favorites-tab-item-num {
    padding-right: 12px;
    margin-top: 13px;
  }
  .favorites-box.active {
    color: white;
    background: #00aeec;
  }
  .favorites-tab-item-num.active {
    color: white;
    background: #00aeec;
  }

  .submission {
    display: flex;
    position: absolute;
    left: 1150px;
    background: white;
    border-radius: 8px;
    width: 330px;
    height: 80px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #e3e5e7;
    color: #18191c;
    align-items: center;
    justify-content: center;
  }
  .submission-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 62px;
    height: 63px;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    line-height: 63px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .submission-box:hover {
    background-color: #e3e5e7;
  }
  .submission-item-title {
    color: #61666d;
    font-size: 12px;
    line-height: 17px;
  }
  .message {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 1100px;
  }

  .container {
    width: 142px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  .item {
    width: 142px;
    height: 37.5px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 0 10px 27px;
    color: #61666d;
    text-align: left;
    font-size: 14px;
    transition: background-color 0.3s;
    cursor: pointer;
  }
  .item:hover {
    background-color: #e3e5e7;
  }
  .download {
    width: 400px;
    height: 230px;
    background: #ffffff;
    border-radius: 10px;
    position: absolute;
    left: 320px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 10000;
  }
  .down-left {
    flex: 5;
    padding-left: 50px;
    padding-right: 40px;
    padding-top: 20px;
    img {
      width: 100px;
      height: 100px;
      border: #61666d solid 1px;
      border-radius: 10px;
    }
    ul {
      li {
        margin-bottom: 10px;
      }
    }
  }
  .DownloadMiddle {
    width: 1px;
    height: 143px;
    background: #e3e5e7;
    padding-top: 25px;
  }
  .down-right {
    flex: 5;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 15px;
    img {
      width: 60px;
      height: 60px;
    }
    ul {
      li {
        margin-bottom: 10px;
        button {
          background: #00aeec;
          border: 0;
          border-radius: 5px;
          height: 30px;
          width: 100px;
          color: #ffffff;
        }
        button:hover {
          background-color: #40c5f1;
        }
      }
    }
  }
  .bottom {
    font-size: 12px;
    color: lightgray;
    flex: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
}
.category {
  width: 100%;
  min-width:1512.9px;
  max-width: 1512.9px;
  MARGIN-RIGHT: auto;
	MARGIN-LEFT: auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .total {
    margin-left: 80px;
    display: flex;
    align-items: center;
    flex: 8;
    .left {
      margin-right: 15px;
      ul {
        display: flex;
        align-items: center;
        li {
          display: flex;
          flex-direction: column;
          font-size: 13px;
          margin-left: 15px;
          text-align: center;
          .icon {
            width: 35px;
            height: 35px;
            cursor: pointer;
          }
        }
      }
    }
    .center {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        li {
          width: 75px;
          height: 28px;
          font-size: 13px;
          background: #f6f7f8;
          color: #61666d;
          border: solid rgb(205, 203, 203) 1px;
          border-radius: 5px;
          margin-right: 8px;
          margin-bottom: 8px;
          text-align: center;
          line-height: 28px;
          cursor: pointer;
          border-color: transparent;
        }
      }
    }
  }
  .right {
    flex: 2;
    margin-left: 10px;
    margin-right: 50px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        align-items: center;
        width: 80px;
        height: 30px;
        color: #61666d;
        font-size: 15px;
        .column {
          display: flex;
          align-items: center;
          cursor: pointer;
          svg {
            margin-right: 2px;
            fill: #61666d;
          }
        }
      }
    }
  }
}
.content {
  min-width:1512.9px;
  max-width: 1512.9px;
  MARGIN-RIGHT: auto;
	MARGIN-LEFT: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiperBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .slide-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    position: relative;
  }

  .slide-text {
    position: absolute;
    bottom: 35px;
    left: 0;
    font-size: 18px;
    color: white;
    border-radius: 6px;
    font-weight: bold;
    display: block;
    text-indent: 15px; /* 根据需要设置文字最左端距离盒子左端的距离 */
  }

  .swiper-slide img {
    max-width: 100%;
    max-height: 100%;
  }

  .custom-prev,
  .custom-next {
    width: 28px;
    height: 28px;
  }

  .custom-prev {
    left: 400px;
  }

  .custom-next {
    right: 15px;
  }
  .swiper-button-prev {
    left: 470px;
    width: 20px;
    margin-top: 90px;
    color: rgba(0, 0, 0, 0) !important;
    background: url("../assets/img/左箭头.png") center center no-repeat;
    background-size: 22px 22px;
    opacity: 0.7;
  }
  .swiper-button-next {
    left: 510px;
    width: 20px;
    margin-top: 90px;
    color: rgba(0, 0, 0, 0) !important;
    background: url("../assets/img/右箭头.png") center center no-repeat;
    background-size: 22px 22px;
    opacity: 0.8;
  }

  .contentmain {
    flex: 5;
    margin-left: 15px;
  }
  .contentmain ul {
    display: flex;
    flex-wrap: wrap;
  }
  .contentmain ul li {
    width: 250px;
    height: 135px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 100px;
  }
  .contentmain ul li .video-container {
    width: 240px;
    height: 135px;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
  }
  .contentmain ul li .video-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 10px;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  .contentmain ul li video:hover {
    cursor: pointer;
  }
  .changetag {
    font-size: 12px;
    display: block;
    button {
      height: 90px;
      width: 40px;
      padding: 9px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background-color: white;
      border: 1px solid #e3e5e7;
      cursor: pointer;
      span {
        padding-top: 5px;
      }
    }
    button:hover {
      background-color: #e3e5e7;
    }
  }
}
</style>
<style>
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
