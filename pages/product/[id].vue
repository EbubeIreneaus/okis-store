<template>
    <div class="md:px-10">
        <div v-if="pending">

        </div>
        <div class="grid grid-cols-2 py-10 bg-slate-50">
            <div><nuxt-img :src="product.image" size="100px" /></div>
            <div class="font-semibold text-black/60 ">
                <h2 class="text-xl font-bold mb-3">{{ product.title }}</h2>
                <div class="flex mb-2">
                    <b>Rating ({{ product.rating.count }})</b>
                    <div v-for="(rate, index) in 5"> &nbsp;
                        <i class="fa fa-star text-sm text-black"
                            :class="{ '!text-orange-500': index <= product.rating.rate }"></i>
                    </div>
                </div>
                <p class="mb-2"><b>brands</b> &nbsp; codeXtreme</p>
                <p class="mb-3"><b>Availability</b> &nbsp; in stock</p>
                <p class="mb-3 "><b>Ex Tax</b> &nbsp; <span>{{ money(product.price) }}</span></p>
                <p class="mb-3"><b>Price reward points</b> &nbsp; 200</p>
                <div class="mb-3">
                    <b>Size:</b>&nbsp;
                    <select class="py-3 px-14 appearance-none outline-none border">
                        <option>xs</option>
                        <option>s</option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                        <option>xxl</option>
                    </select>
                </div>

                <div class="flex items-center mb-7">
                    <b>Quantity:</b>&nbsp;
                    <div class="flex">
                        <input type="text" pattern="{0-9}*"
                            class="outline-none border w-14 text-center invalid:border-red-500" />
                        <div class="flex flex-col font-bold">
                            <button class="border px-1.5 hover:bg-slate-200 ">
                                <i class="fa fa-angle-up "></i></button>
                            <button class="border px-1.5 hover:bg-slate-200"><i class="fa fa-angle-down"></i></button>
                        </div>
                    </div>
                </div>

                <div class="flex gap-3 mb-7">
                    <button class="py-2.5  px-5 bg-orange-500 ">Add To Cart</button>
                    <button class="py-2.5  px-5 hover:bg-slate-100 border "><i class="fa fa-heart"></i></button>
                    <!-- <button class="py-2.5  px-5 hover:bg-slate-100 border "><i class="fa fa-heart"></i></button> -->
                </div>
                <div class="flex gap-3">
                    <button class="fa-brands fa-facebook-f border py-3 px-4 rounded-full bg-blue-500"></button>
                    <button class="fa-brands fa-twitter border py-3 px-4 rounded-full bg-blue-300"></button>
                    <button class="fa-brands fa-instagram border py-3 px-4 rounded-full bg-purple-500"></button>
                    <button class="fa-brands fa-youtube border py-3 px-4 rounded-full bg-red-500"></button>
                    <button class="fa-brands fa-whatsapp border py-3 px-4 rounded-full bg-green-500"></button>
                </div>
            </div>
        </div>
        <div>
            <div class="w-full py-10 bg-slate-300 flex items-center gap-5 font-bold text-black/60 px-10">
                <span class=" cursor-pointer" @click="comp_index=0" :class="{ 'text-orange-500': comp_index == 0 }">description</span>
                <i class="fa fa-arrow-right"></i>
                <span class="cursor-pointer"  @click="comp_index=1" :class="{ 'text-orange-500': comp_index == 1 }">specification</span>
                <i class="fa fa-arrow-right"></i>
                <span class="cursor-pointer" @click="comp_index=2" :class="{ 'text-orange-500': comp_index == 2 }">reviews</span>

            </div>
            <div class="px-5 py-7 border my-7">
                <component :is="comp[comp_index]" :product="product"></component>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useApi } from '@/stores/url'
import { LazyProductDesc } from '#components'
import { LazyProductSpecification } from '#components'
import { LazyProductReviews } from '#components'
// import { LazyProductDesc} from '#components'
// import { LazyProductDesc} from '#components'
const { id } = useRoute().params

const comp = [LazyProductDesc, LazyProductSpecification, LazyProductReviews]
const comp_index = ref(0)

const { data: product, pending, error } = await useFetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'get'
})

function money(amount) {
    const formmater = new Intl.NumberFormat('en-US', {
        style: "currency", currency: 'USD', maximumFractionDigits: 2
    })
    return formmater.format(amount)
}
</script>

<style lang="scss" scoped></style>