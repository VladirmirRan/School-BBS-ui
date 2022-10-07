<template>
  <div>
    <div class="bg-gray-100 flex h-72 justify-between border-b-8 border-gray-100">
      <div class=" w-9/12  bg-white border-r-8 border-gray-100">
        <img src="@/assets/images/main/banner.png"
             style="width: 100%;height: auto;">
        alt="">
      </div>
      <!-- 用户信息 -->
      <div class="bg-white w-3/12 p-2 flex flex-col gap-3"
           v-if="store.getters.token">
        <div class="text-center text-3xl m-7">
          <!-- <img src=""
               alt=""> -->
          <span>Hi ,<span class="cursor-pointer"
                  @click="router.push('/profile')">{{store.getters.userInfo.usrName}}</span></span>
        </div>
        <div class="text-center">中国人民大学 人工智能学院</div>
        <div class="flex">
          <div class="flex-1 flex flex-col items-center p-2 gap-1 cursor-pointer"
               @click="router.push('/profile/article/star')">
            <div class="text-xl">30</div>
            <div>点赞</div>
          </div>
          <div class="flex-1 flex flex-col items-center p-2 gap-1 cursor-pointer"
               @click="router.push('/profile/article/star')">
            <div class="text-xl">100</div>
            <div>收藏</div>
          </div>
          <div class="flex-1 flex flex-col items-center p-2 gap-1 cursor-pointer"
               @click="router.push('/profile/article')">
            <div class="text-xl">23</div>
            <div>发帖</div>
          </div>
        </div>
        <button @click="router.push('/profile/article/add')"
                class="text-center text-white bg-red-400 p-2 rounded">我要发帖</button>
      </div>
      <div v-else
           class="bg-white w-3/12 p-2 flex flex-col gap-3">
        <div class="text-center py-20 text-lg mb-4">
          Hi， 请登录
        </div>
        <button @click="router.push('/login')"
                class="text-center text-white bg-red-400 p-2 rounded">登录</button>
      </div>
    </div>

    <div class="bg-white flex">
      <!-- 帖子 -->
      <div class=" w-9/12 bg-white border-r-8 border-gray-100">
        <header class="flex h-20 p-3 mx-2 border-b-2 items-center gap-1">
          <div class="py-2 px-8 rounded-xl bg-red-200 text-red-600 ">热帖</div>
          <div class="py-2 px-8 rounded-xl ">新帖</div>
        </header>

        <!-- 内容 -->
        <div v-for="(item, index) in [0,1,2,3,4]"
             :key="index">
          <div class="flex py-6 px-4 gap-2">
            <img src="@/assets/images/main/classroom.png"
                 alt=""
                 class="border-2 w-20 h-20">
            <div class="w-7/12">
              <div class="mb-3 text-xl truncate whitespace-nowrap">[精]对于最新自习室规定，大家有什么看法</div>
              <div class="flex justify-between">
                <span class="w-9/12 max-w-sm truncate whitespace-nowrap">最新评论：我认为，这既是机遇也是挑战这既是机遇也是挑战这既是机遇也是挑战这既是机遇也是挑战</span>
                <span class="min-w-min text-right whitespace-nowrap">2022/10/5 11:22</span>
              </div>
            </div>
            <div class="w-2/12 text-center font-bold">dxy</div>
            <div class="flex-1 flex flex-col items-end">
              <div class="mb-4 whitespace-nowrap">2022/10/5 11:22</div>
              <div class="whitespace-nowrap">评论3890 点赞39490</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 主题 -->
      <div class="pt-4 px-2">
        <div class="pl-2 mb-6 border-l-2 border-red-400 text-red-400 font-bold">热门主题</div>
        <div class="pl-6 mb-4"
             v-for="(item, index) in [0,1,2,3,4]"
             :key="index">
          <ul class="list-disc">
            <li class="font-bold">失物招领</li>
          </ul>
          <div class="text-gray-400">
            主题帖：8993
          </div>
          <div class="text-gray-400">
            最新发帖：2022/10/5 11:22
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
</script>
