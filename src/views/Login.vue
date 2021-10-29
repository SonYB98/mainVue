<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">

        <span class="text-gray-600 font-semibold text-2xl">물품방지태그</span>
      </div>

      <form class="mt-4" @submit="login">
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
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="mx-2 text-gray-600 text-sm">save</span>
            </label>
          </div>

          <div>
            <p>          
              <router-link to="/SignUp">SignUp</router-link></p>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500"
          >
           Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Firebase from 'firebase'

export default defineComponent({
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login: function(e) {
      e.preventDefault()
      if(this.email == "") { 
        alert("이메일을 입력하세요.")
        return
      } else if(this.password == "") {
        alert("비밀번호를 입력하세요.")
        return
      } 
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        this.$router.push("/dashboard");
      })
      .catch(err => {
        alert("로그인 실패")
      })
    }
  },
  setup() {
    const router = useRouter();
  }
});
</script>
