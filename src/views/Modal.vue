<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">게시판</h3>
    <button
      @click="open = true"
      class="mt-3 px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
    >
      게시물 올리기
    </button>

    <div v-for="(post, index) in posts" v-bind:key="index">
      날짜: {{dateToString(post.createAt)}}<br>
      제목: {{post.title}}<br>
      내용: {{post.body}}<br><br>
    </div>

    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>

      <div
        class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">게시물 작성</p>
            <div class="modal-close cursor-pointer z-50" @click="open = false">
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

          <!--Body-->
            <input style="width: 100%; margin-bottom:10px" type="text" v-model="title" placeholder="제목">
            <textarea style="width: 100%" type="text" v-model="body" placeholder="내용"></textarea>
          <!--Footer-->
          <div class="flex justify-end pt-2">
            <button
              @click="open = false"
              class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
            >
              닫기
            </button>
            <button
              @click="open = false; post()"
              class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
            >
              올리기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import App from '../firebase'

export default defineComponent({
  data() {
    return {
      title: "",
      body: "",
      posts: [

      ]
    }
  },
  mounted() {
    App.database().ref("Board").on("value", (snapshot) => {
      this.posts = snapshot.val()
    })
  },
  methods: {
    post() {
      App.database().ref("Board/" + this.title).set({
        title: this.title,
        body: this.body,
        createAt: new Date().getTime()
      })
    },
    dateToString(data) {
      const date = new Date(data);
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    }
  },
  setup() {
    const open = ref(false);
    return {
      open,
    };
  },
});
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>