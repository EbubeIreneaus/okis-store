<template>
    <div class="md:px-5">
        <div v-if="pending">

        </div>
        <div class="flex gap-x-5 py-10 px-5 bg-slate-50">
            <div class="w-fit "><nuxt-img :src="product.image" width="500" /></div>
            <div class="font-semibold text-black/60 w-full px-5">
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
                        <input type="text" pattern="{0-9}*" v-model="pdt_form.quantity"
                            class="outline-none border w-14 text-center invalid:border-red-500" />
                        <div class="flex flex-col font-bold">
                            <button class="border px-1.5 hover:bg-slate-200 " @click="pdt_form.quantity++">
                                <i class="fa fa-angle-up "></i></button>
                            <button class="border px-1.5 hover:bg-slate-200" :disabled="pdt_form.quantity <= 1"
                                @click="pdt_form.quantity--"><i class="fa fa-angle-down"></i></button>
                        </div>
                    </div>
                </div>

                <div class="flex gap-3 mb-7">
                    <button class="py-2.5  px-5 bg-orange-500 hover:bg-orange-400"
                     @click="addSingleCart($event)">Add To Cart</button>
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
                <span class=" cursor-pointer" @click="comp_index = 0"
                    :class="{ 'text-orange-500': comp_index == 0 }">description</span>
                <i class="fa fa-arrow-right"></i>
                <span class="cursor-pointer" @click="comp_index = 1"
                    :class="{ 'text-orange-500': comp_index == 1 }">specification</span>
                <i class="fa fa-arrow-right"></i>
                <span class="cursor-pointer" @click="comp_index = 2"
                    :class="{ 'text-orange-500': comp_index == 2 }">reviews</span>

            </div>
            <div class="px-5 py-7 border my-7">
                <component :is="comp[comp_index]" :product="product"></component>
            </div>
        </div>

        <!-- Feature category -->
        <div class="py-7">
        <h2 class="text-3xl font-extrabold text-center my-7 text-black/60">Feature Category</h2>
            <div class="swiper-container category">
                <div class="swiper-wrapper">
                    <div class="w-full border relative group swiper-slide" v-for="(product, index) in cat">
                        <div class="px-2.5 md:px-5 py-5">
                            <div>
                                <p class="border w-fit px-2.5 bg-red-600 text-white text-xs mb-1" v-if="index % 2 != 0">-20%
                                </p>
                                <p class="border w-fit px-2.5 bg-yellow-600 text-white text-sm">new</p>
                            </div>
                            <div class="">
                                <img :src="product.image" :alt="product.title"
                                    class="w-52 h-52 object-cover mx-auto py-2.5" />
                                <div class="text-center">
                                    <div class="flex gap-1 justify-center mb-3">
                                        <div v-for="(rate, index) in 5">
                                            <i class="fa fa-star text-sm text-black"
                                                :class="{ '!text-orange-500': index <= product.rating.rate }"></i>
                                        </div>
                                    </div>
                                    <p class="text-black/50 font-bold">{{ product.title }}</p>
                                    <p class="font-mono font-bold text-black/80">${{ product.price }}</p>
                                </div>
                            </div>
                            <!-- hover display -->
                            <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-red-600 text-white text-xs mb-1" v-if="index % 2 != 0">
                                        -20%</p>
                                    <p class="border w-fit px-2.5 bg-yellow-600 text-white text-sm">new</p>
                                </div>
                                <div class="">
                                    <img :src="product.image" alt="" class="w-52 h-52 object-cover mx-auto py-2.5">
                                    <div class="text-center">
                                        <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                            <div>
                                                <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-100 p-3
                                         hover:text-orange-600 rounded-md" @click="addToCart(product, $event)"></i>
                                            </div>
                                            <div>
                                                <i class="far fa-heart ring-1 hover:ring-2 ring-orange-100 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                            </div>
                                            <div>
                                                <NuxtLink :to="`/product/${product.id}`">
                                                    <i class="fa-solid fa-eye ring-1 hover:ring-2 ring-orange-100 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </NuxtLink>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useApi } from '@/stores/url'
import { useCart } from '@/stores/cart'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
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
const pdt_form = reactive({
    "product": null,
    'quantity': 1
})
// cat for category
const { data: cat, pending: cat_pending, error: cat_error } = await useFetch(
    `https://fakestoreapi.com/products/category/${product.value.category}`, {
    method: 'get'
})
console.log(cat.value);
function money(amount) {
    const formmater = new Intl.NumberFormat('en-US', {
        style: "currency", currency: 'USD', maximumFractionDigits: 2
    })
    return formmater.format(amount)
}
onMounted(() => {
    const category_slide = new Swiper('.category', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {

            // when window width is >= 640px

            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
})

const addSingleCart = (e) => {
    useCart().addCart(product.value.title, product.value.price, product.value.description,
     product.value.image, product.value.id, pdt_form.quantity)
    e.target.innerText = "Increase Quantity by 1"
}
const addToCart = (product, e) => {
  e.target.classList.add('!ring-4')
  e.target.classList.add('!ring-orange-500')
  e.target.classList.add('!text-orange-600')

  const cart = useCart()
  cart.addCart(product.title, product.price, product.description, product.image, product.id)

}
</script>

<style lang="scss" scoped></style>