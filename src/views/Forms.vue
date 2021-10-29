<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-semibold">비콘 등록</h3>

    <div class="mt-4">
      <h4 class="text-gray-600">비콘ID입력</h4>

      <div class="mt-4">
        <div
          class="max-w-sm w-full bg-white shadow-md rounded-md overflow-hidden border"
        >
          <form>
            <div
              class="flex justify-between items-center px-5 py-3 text-gray-700 border-b"
            >
              <h3 class="text-sm">BEACON</h3>
              <button>
                <svg
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="px-5 py-6 bg-gray-200 text-gray-700 border-b">
              <label class="text-xs">B-ID</label>

              <div class="mt-2 relative rounded-md shadow-sm">
                <span
                  class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  class="w-full px-12 py-2 appearance-none rounded-md focus:border-indigo-600"
                />
              </div>
            </div>

            <div class="flex justify-between items-center px-5 py-3">
              <button
                class="px-3 py-1 text-gray-700 text-sm rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
              >
                취소
              </button>
              <button
                class="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-500 focus:outline-none"
              >
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h4 class="text-gray-600">비콘 찾기</h4>

      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg text-gray-700 font-semibold capitalize">
            입력란
          </h2>

          <form @submit.prevent="register">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label class="text-gray-700" for="username">B - ID</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-indigo-600"
                  type="text"
                  v-model="user.username"
                />
              </div>

              <div>
                <label class="text-gray-700" for="emailAddress"
                  >Email</label
                >
                <input
                  class="w-full mt-2 rounded-md focus:border-indigo-600"
                  type="email"
                  v-model="user.email"
                />
              </div>

              <div>
                <label class="text-gray-700" for="password">Password</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-indigo-600"
                  type="password"
                  v-model="user.password"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation"
                  >Password Success</label
                >
                <input
                  class="w-full mt-2 rounded-md focus:border-indigo-600"
                  type="password"
                  v-model="user.confirm"
                />
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <button
              @click="open = true"
                class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                찾기
              </button>
              <div>

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
            <p class="text-2xl font-bold">비콘 탐색 완료</p>
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
          <p>맥주소 : "DA:0B:88:20:7C:CF"</p>
          <p>현재위치</p>
          <p>36.4287351</p>
          <p>127.3912949</p>

          <!--Footer-->
          <div class="flex justify-end pt-2">
            <button
              @click="open = false"
              class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
            >
              닫기
            </button>
            <button
              @click="open = false"
              class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
            >
              실행
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface User {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

export default defineComponent({
  setup() {
    const user = ref<User>({
      username: "",
      email: "",
      password: "",
      confirm: "",
    });

    const register = () => {
      const data = JSON.parse(JSON.stringify(user.value));
      console.log("Registered: ", data);
    };

    return {
      user,
      register,
    };
  },
});
</script>
