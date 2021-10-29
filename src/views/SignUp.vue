<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">

        <span class="text-gray-600 font-semibold text-2xl">회원가입</span>
      </div>

      <form class="mt-4" @submit="signup">
        <label class="block">
          <span class="text-gray-700 text-sm">ID</span>
          <input
            type="email"
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="email"
          />
        </label>

        <label class="block mt-1">
          <span class="text-gray-700 text-sm">Password</span>
          <input
            type="password"
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="password"
          />
        </label>

        <label class="block mt-2">
          <span class="text-gray-700 text-sm">Name</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="name"
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
import App from '../firebase'
import Firebase from "firebase";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      name: ""
    }
  },
  methods: {
    signup: function(e) {
      e.preventDefault()
      if(this.email == "") {
        alert("이메일을 입력해주세요.")
        return
      } else if(this.password == "") {
        alert("비밀번호를 입력해주세요.")
        return
      } else if(this.name == "") {
        alert("이름을 입력해주세요.")
        return
      }
      Firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            App.database().ref("Users/"+userCredential.user.uid).set({
              uid: userCredential.user.uid,
              email: this.email,
              name: this.name
            })
            this.$router.push("/dashboard");
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  },
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

    return {
      login,
      Back,
      email,
      password,
    };
    
  },
});
</script>
