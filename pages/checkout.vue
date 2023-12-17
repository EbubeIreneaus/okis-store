<template>
    <div>
        <div class="relative  border-4">
            <img src="~/assets/images/breadcrumb/1.jpg" alt="" class="!h-full w-full object-cover">
            <div class="absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center">
                <h2 class="text-4xl font-extrabold text-white uppercase mb-2.5">Checkout</h2>
                <p class="block font-lighter text-white/90">
                    <nuxt-link to="/">Home</nuxt-link> &gt; <nuxt-link to="/checkout">Checkout</nuxt-link>
                </p>
            </div>
        </div>

        <div>
            <div></div>

            <div class="grid grid-cols-2 font-sans md:px-10 py-10">
                <div>
                    <h2 class="text-2xl font-bold text-black">Billing Details</h2>
                    <form class="text-black/50">
                        <div class="mb-5">
                            <label class="font-semibold">Country <span class="text-red-500">*</span></label>
                            <select class=" appearance-none py-2.5 w-full outline-none border ps-2">
                                <option v-for="(x, index) in countries" :value="x">{{ x }}</option>
                            </select>
                        </div>
                        <div class="mb-5">
                            <label class="font-semibold">Company Name</label>
                            <input type="text" class="py-2.5 w-full outline-none border ps-2" placeholder="company name" />
                        </div>
                        <div class="mb-5">
                            <label class="font-semibold">Address<span class="text-red-500">*</span></label>
                            <input type="text" class="py-2.5 w-full outline-none border ps-2" placeholder="Address" />
                        </div>
                        <div class="mb-5">

                            <input type="text" class="py-2.5 w-full outline-none border ps-2"
                                placeholder="Apartment, suite, unit (optional)" />
                        </div>
                        <div class="mb-5">
                            <label class="font-semibold">Town / City <span class="text-red-500">*</span></label>
                            <select class=" appearance-none py-2.5 w-full outline-none border ps-2">
                                <option v-for="(x, index) in countries" :value="x">{{ x }}</option>
                            </select>
                        </div>
                        <div class="grid gap-x-5 gap-y-7 md:grid-cols-2 mb-5">
                            <div>
                                <label class="font-semibold">State <span class="text-red-500">*</span></label>
                                <input type="text" class="py-2.5 w-full outline-none border ps-2" placeholder="state" />
                            </div>
                            <div>
                                <label class="font-semibold">Postal / Zip <span class="text-red-500">*</span></label>
                                <input type="text" class="py-2.5 w-full outline-none border ps-2" placeholder="zip code" />
                            </div>
                            <div>
                                <label class="font-semibold">Phone <span class="text-red-500">*</span></label>
                                <input type="text" class="py-2.5 w-full outline-none border ps-2" placeholder="phone" />
                            </div>
                            <div>
                                <label class="font-semibold">Phone (2)</label>
                                <input type="text" class="py-2.5 w-full outline-none border ps-2" placeholder="phone" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const countries = ["Nigeria", "Ghana", "Cameroon", "Niger", "Togo", "South Africa"]
</script>

<style lang="scss" scoped></style>