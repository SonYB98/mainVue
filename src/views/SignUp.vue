<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">

        <span class="text-gray-600 font-semibold text-2xl">회원가입</span>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-gray-700 text-sm">ID</span>
          <input
            type="email"
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Password</span>
          <input
            type="password"
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="password"
          />
        </label>

        <div class="flex justify-between items-center mt-4">

        <div>
            <a
              class="block text-sm fontme text-indigo-700 hover:underline"
              href="http://localhost:3000/"
              >뒤로가기</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500"
          >
           가입완료
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
// import firebase from 'firebase'

export default defineComponent({
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    function Back() {
      router.push("/");
    }

    function login() {
      router.push("/");
    }

/*
  firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
  function(user) {
    alert('회원가입 성공')
  },
  function(err){
    alert('에러 :' + err.message)
  }
);
*/

//this.$firebase로 접근
    return {
      login,
      Back,
      email,
      password,
    };
    
  },
});
</script>
