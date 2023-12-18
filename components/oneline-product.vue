<template>
    <div class="swiper-container group/container product-swipe relative">
        <div class="swiper-wrapper px-5">
            <!-- single product -->
            <div class="w-full border relative swiper-slide group/slide" v-for="(product, index) in products">
                <div class="px-2.5 md:px-5 py-5">
                    <div>
                        <p class="border w-fit px-2.5 bg-yellow-600 text-white text-sm">new</p>
                        <p class="border w-fit px-2.5 bg-red-600 text-white text-xs mb-1 invisible" :class="{'!visible':index % 2 != 0}">-20%
                        </p>
                      
                    </div>
                    <div class="">
                        <img :src="product.image" :alt="product.title" class="w-52 h-52 object-cover mx-auto py-2.5" />
                        <div class="text-center">
                            <div class="flex gap-1 justify-center mb-3">
                                <div v-for="(rate, index) in 5">
                                    <i class="fa fa-star text-sm text-black"
                                        :class="{ '!text-orange-500': index <= product.rating.rate }"></i>
                                </div>
                            </div>
                            <p class="text-black/50 font-bold line-clamp-1">{{ product.title }}</p>
                            <p class="font-mono font-bold text-black/80">${{ product.price }}</p>
                        </div>
                    </div>
                    <!-- hover display -->
                    <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover/slide:!h-full
                group-hover/slide:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
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
        <div class="swiper-button-prev ms-5 border px-7 py-7 bg-slate-200 !invisible group-hover/container:!visible"></div>
        <div class="swiper-button-next me-5 px-7 py-7 bg-slate-200 !invisible group-hover/container:!visible"></div>

    </div>
</template>

<script setup>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { useCart } from '@/stores/cart'

const { data: products, pending, error } = useFetch('https://fakestoreapi.com/products', {
    params: { imit: 30 },
    watch: false
})

const addToCart = (product, e) => {
    e.target.classList.add('!ring-4')
    e.target.classList.add('!ring-orange-500')
    e.target.classList.add('!text-orange-600')

    const cart = useCart()
    cart.addCart(product.title, product.price, product.description, product.image, product.id)
}
onMounted(() => {
    const swipper = new Swiper('.product-swipe', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {

            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            }

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
})
</script>

<style lang="scss" scoped></style>