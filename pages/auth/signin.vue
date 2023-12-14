<template>
    <div
        class="max-w-4xl sm:px-3 px-10 lg:px-16 mx-auto sm:my-10 py-10 font-sans shadow-md shadow-black/50 bg-slate-200 min-h-screen flex items-center">
        <div class=" w-full grid md:grid-cols-2 gap-x-10 gap-y-10 place-items-center">
            <div class="h-full flex flex-col items-center !order-1 md:!order-2">
                <img src="~/assets/images/bg/authbg.png" class=" w-full object-cover normal">
                <p class="h-fit text-sm font-semibold">I don't have an account
                    <nuxt-link to="/auth/signup" class=" underline underline-offset-1 font-bold">Sign Up</nuxt-link>
                </p>
            </div>

            <form id="form" class="w-full" @submit.prevent="signin($event)">
                <h2 class="text-3xl font-bold mb-10"> SIGN UP</h2>
                <p class="py-2 w-full bg-red-300 text-red-500 px-5 rounded-md mb-5 text-sm font-semibold"
                    v-if="formerror.display">
                    <i class="fa fa-warning"></i> {{ formerror.msg }}
                </p>
              
                <div class="flex item-center gap-2 border-b-2 border-black/50 pb-1.5 px-0.5 mb-7">
                    <label class="h-fit"><i class="fa fa-envelope"></i></label>
                    <input type="email" v-model="formobj.email" placeholder="Your Email"
                        class="w-full bg-slate-200 outline-0  ps-3">
                </div>
                <div class="flex item-center gap-2 border-b-2 border-black/50 pb-1.5 px-0.5 mb-7">
                    <label class="h-fit"><i class="fa fa-user"></i></label>
                    <input type="password" v-model="formobj.password" placeholder="Password"
                        class="w-full bg-slate-200 outline-0  ps-3">
                </div>
                <div class="flex item-center gap-2  pb-1.5 px-0.5 mb-7">
                    <input type="checkbox" v-model="formobj.remember" class="">
                    <label class="h-fit  font-semibold" id="consent">Remember me</label>
                </div>
            
                <button type="submit" id="submit" class="ring-2 px-10 py-2 group rounded-lg font-bold ring-black/50 hover:ring-4">
               <i class="fa fa-spinner animate-spin !hidden group-disabled:!inline-block"></i> Sign In</button>
            </form>

         
        </div>

    </div>
</template>

<script setup>
import { useApi } from '@/stores/url'
const profileId = useCookie('profileId')
definePageMeta({
    layout: ''
})
const api_url = useApi()
const confirmpass = ref()
const formerror = reactive({
    msg: '',
    display: false
})
const formobj = reactive({
    email: '',
    password: '',
    remember: true
})

function validateData() {

    if (formobj.email == '') {
        return "Email Field Is Required"
    }
    if (formobj.password == '') {
        return "Password Field Is Required"
    }

    return "validated"
}

const signin = async (e) => {
    const validation = validateData()
    const submit = document.getElementById('submit');
    submit.disabled = true
    if ( validation !== 'validated') {
        formerror.msg = validation; formerror.display = true
        location.assign('#form')
        submit.disabled = false
        return false
    }
    const formData = new FormData()
  
    const {data:res, error} = await useFetch(`${api_url.url}/auth/`,{
        query: formobj,
        watch: false,
        method: 'get',

    })
    if (error) {
        submit.disabled = false
    }
    if (res.value.status == 'success') {
        // registeration successfull
        
        profileId.value = res.value.id
        useRouter().push('/')
    }else{
        formerror.msg = res.value.msg; formerror.display = true
        console.log(res.value.code);
    }
}
</script>

<style lang="scss" scoped></style>