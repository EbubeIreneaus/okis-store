<template>
    <div
        class="max-w-4xl sm:px-3 px-10 lg:px-16 mx-auto sm:my-10 py-10 font-sans shadow-md shadow-black/50 bg-slate-200 min-h-screen flex items-center">
        <div class=" w-full grid md:grid-cols-2 gap-x-7 gap-y-10 ">

            <form id="form" class="w-full" @submit.prevent="signin($event)">
                <h2 class="text-3xl font-bold mb-7"> SIGN UP</h2>
                <p class="py-2 w-full bg-red-300 text-red-500 px-5 rounded-md mb-5 text-sm font-semibold"
                    v-if="formerror.display">
                    <i class="fa fa-warning"></i> {{ formerror.msg }}
                </p>
                <div class="flex item-center gap-2 border-b-2 border-black/50 pb-1.5 px-0.5 mb-7">
                    <label class="h-fit"><i class="fa fa-user"></i></label>
                    <input type="text" v-model="formobj.name" placeholder="Your Name"
                        class="w-full bg-slate-200 outline-0  ps-3">
                </div>
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
                <div class="flex item-center gap-2 border-b-2 border-black/50 pb-1.5 px-0.5 mb-7">
                    <label class="h-fit"><i class="fa fa-envelope"></i></label>
                    <input type="password" v-model="confirmpass" placeholder="Confirm Password"
                        class="w-full bg-slate-200 outline-0  ps-3">
                </div>
                <div class="flex item-center gap-2  pb-1.5 px-0.5 mb-7">
                    <input type="checkbox" v-model="formobj.consent" class="">
                    <label class="h-fit text-sm font-semibold" id="consent">I agree all statement in
                        <nuxt-link to="" class=" underline underline-offset-1 font-bold">Terms of
                            Services</nuxt-link></label>
                </div>
                <button type="submit" class="ring-2 px-10 py-2 rounded-lg font-bold ring-black/50 hover:ring-4">Sign
                    Up</button>
            </form>

            <div class="h-full flex flex-col items-center">
                <img src="~/assets/images/bg/authbg.png" class=" w-full object-cover normal">
                <p class="h-fit text-sm font-semibold">I already have an account
                    <nuxt-link to="" class=" underline underline-offset-1 font-bold">Sign In</nuxt-link>
                </p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useApi } from '@/stores/url'
definePageMeta({
    layout: ''
})
const api_url = useApi()
const confirm = ref()
const formerror = reactive({
    msg: '',
    display: false
})
const formobj = reactive({
    name: '',
    email: '',
    password: '',
    consent: false
})

function validateData() {
    if (formobj.name == '') {
        return "Name Field Is Required"
    }
    if (formobj.email == '') {
        return "Email Field Is Required"
    }
    if (formobj.password == '') {
        return "Password Field Is Required"
    }
    if (formobj.password !== confirm.value) {
        return "Password Field Is Required"
    }
    return "validated"
}

const signin = (e) => {
    const validation = validateData()
    if ( validation !== 'validated') {
        formerror.msg = validation; formerror.display = true
        location.assign('#form')
    }
}
</script>

<style lang="scss" scoped></style>