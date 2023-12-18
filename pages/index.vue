<template>
    <div>
        <div class="swiper-container main md:h-[500px] h-[600px] group">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div class="w-full h-full relative before:absolute before:w-full before:h-full before:top-0
                                                    before:left-0 before:bg-black/50">
                        <img src="~/assets/images/bg/bg.jpg" alt="" class="w-full h-full object-cover">
                        <div class="absolute z-30 flex justify-center items-center w-full h-full top-0 right-0">
                            <div class="w-[100%] ms-5 md:w-[80%] lg:w-[50%] md:-ms-[100px]">
                                <h2 class="text-2xl  font-bold text-orange-300 animate__animated animate__backInUp
                                                                animate__fast">
                                    OKI'S INT'L ONLINE AND PHYSICAL STORE
                                </h2>
                                <h1 class="md:text-5xl text-4xl font-extrabold text-white animate__animated animate__backInUp
                                                                animate__slow">
                                    START SHOPING AT YOUR COMFORT
                                </h1><br>
                                <p class="text-2xl text-slate-200 font-semibold animate__animated animate__backInUp
                                                                animate__slower ">Starting with as low as<span
                                        class="font-mono">
                                        $5.00</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="w-full h-full relative before:absolute before:w-full before:h-full before:top-0
                                                    before:left-0 before:bg-black/50">
                        <img src="~/assets/images/bg/bg-1.jpg" alt="" class="w-full h-full object-cover">
                        <div class="absolute z-30 flex justify-center items-center w-full h-full top-0 right-0">
                            <div class="w-[100%] ms-5 md:w-[50%] md:-ms-[100px]">
                                <h2 class="text-2xl  font-bold text-orange-300 animate__animated animate__backInUp
                                                                animate__fast">
                                    NEW AND FAIRLY USED COMPUTER, GADGET AND ACCESSORIES
                                </h2>
                                <h1 class="md:text-5xl text-4xl font-extrabold text-white animate__animated animate__backInUp
                                                                animate__slow">
                                    Laptops Desktop and Phones
                                </h1><br>
                                <p class="text-2xl text-slate-200 font-semibold animate__animated animate__backInUp
                                                                animate__slower ">Starting at <span
                                        class="font-mono">$50.00</span>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="w-full h-full relative before:absolute before:w-full before:h-full before:top-0
                                                    before:left-0 before:bg-black/50">
                        <img src="~/assets/images/bg/bg-2.jpg" alt="" class="w-full h-full object-cover">
                        <div class="absolute z-30 flex justify-center items-center w-full h-full top-0 right-0">
                            <div class="w-[100%] ms-5 md:w-[50%] md:-ms-[100px]">
                                <h2 class="text-2xl  font-bold text-orange-300 animate__animated animate__backInUp
                                                                animate__fast">
                                    NEW ARRIVAL AVAILABLE INSTORE AND ONLINE
                                </h2>
                                <h1 class="md:text-5xl text-4xl font-extrabold text-white animate__animated animate__backInUp
                                                                animate__slow">
                                    MEN AND WOMEN FASHION WEARS
                                </h1><br>
                                <p class="text-2xl text-slate-200 font-semibold animate__animated animate__backInUp
                                                                animate__slower ">Starting at <span
                                        class="font-mono">$15.00</span>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev !text-white !hidden group-hover:!block"></div>
            <div class="swiper-button-next !text-white !hidden group-hover:!block"></div>
        </div>

        <div class="w-[95%] my-16 py-10 border border-orange-500 mx-auto">
            <div class="grid md:grid-cols-2 md:gap-7 gap-8 w-full lg:w-[75%] mx-auto px-3">
                <div class="flex items-center  w-fit gap-5 px-2 py-5 ms-5">
                    <i class="fas fa-shipping-fast text-2xl"></i>
                    <div class="block">
                        <h2 class="font-bold text-lg font-serif mb-2">Free Shipping</h2>
                        <p class="text-black/50 font-semibold font-mono text-sm">Free Delivery on all Abuja order</p>
                    </div>
                </div>
                <div class="flex items-center  w-fit gap-5 px-2 py-5 ms-5">
                    <i class="far fa-question-circle text-2xl"></i>
                    <div class="block">
                        <h2 class="font-bold text-lg font-serif mb-2">Support 24/7</h2>
                        <p class="text-black/50 font-semibold font-mono text-sm">Contact us 24 hours a day</p>
                    </div>
                </div>

                <div class="flex items-center  w-fit gap-5 px-2 py-5 ms-5">
                    <i class="fas fa-redo text-2xl"></i>
                    <div class="block">
                        <h2 class="font-bold text-lg font-serif mb-2">100% Money Back</h2>
                        <p class="text-black/50 font-semibold font-mono text-sm">You have 30 days to Return</p>
                    </div>
                </div>
                <div class="flex items-center  w-fit gap-5 px-2 py-5 ms-5">
                    <i class="fas fa-recycle text-2xl"></i>
                    <div class="block">
                        <h2 class="font-bold text-lg font-serif mb-2">90 Days Return</h2>
                        <p class="text-black/50 font-semibold font-mono text-sm">90 Days Return</p>
                    </div>
                </div>

            </div>
        </div>

        <!-- Featured Categories -->
        <div>
            <div class="text-center">
                <p class="text-black/50 font-semibold text-sm">Top Featured Collections</p>
                <p class=" text-3xl font-bold text-black/90">Featured Categories</p>
            </div>

            <div class="swiper-container fcs max-h-fit h-full my-10 md:w-[90%] mx-auto group relative">
                <div class="swiper-wrapper ">
                    <div class="swiper-slide " v-for="(product, index) in product">
                        <div class="flex items-center gap-2 border px-5 py-20 shadow-sm rounded-2xl">
                            <img :src="product.image" alt="" class="w-32 h-32 object-cover">
                            <div>
                                <p class="text-lg text-orange-400">({{ 20 * index / 2 }} product available)</p>
                                <ul class="text-sm font-bold text-black/50 ">
                                    <li class="my-1 flex items-center gap-1.5">
                                        <i class="fa fa-arrow-right font-bold text-black/70"></i>
                                        <nuxt-link to="">codeXtreme</nuxt-link>
                                    </li>
                                    <li class="my-1 flex items-center gap- !line-clamp-1">
                                        <i class="fa fa-arrow-right font-bold text-black/70"></i>&nbsp;
                                        <nuxt-link to="">{{product.title}}</nuxt-link>
                                    </li>
                                    <li class="my-1 flex items-center gap-1.5 !sr-onlyline-clamp-1">
                                        <i class="fa fa-arrow-right font-bold text-black/70"></i>
                                        <nuxt-link to="">{{ product.category }}</nuxt-link>
                                    </li>
                                    <li class="my-1 flex items-center gap-1.5">
                                        <i class="fa fa-arrow-right font-bold text-black/70"></i>
                                        <nuxt-link to="">In Stock</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="swiper-button-prev border px-7 py-7 bg-slate-200 !invisible group-hover:!visible"></div>
                <div class="swiper-button-next px-7 py-7 bg-slate-200 !invisible group-hover:!visible"></div>
            </div>
        </div>

        <!-- BANNER -->
        <div class="grid lg:grid-cols-2 gap-5 w-full max-w-[95%] mx-auto my-24">
            <div class="h-[400px] w-full relative">
                <img src="~/assets/images/banner/1-1.jpg" alt="" class="w-full h-full object-cover">
                <div class="flex w-full h-full items-center absolute top-0 md:left-16 left-5">
                    <div class="">
                        <p class="text-orange-300 font-semibold mb-2">GET 20% OFF YOUR ORDER</p>
                        <h2 class="text-4xl text-white">CAR AND TRUCK</h2>
                        <h2 class="text-4xl text-white/80 font-bold"> MERCEDES BENZ</h2>
                        <p class="font-semibold mt-3 text-slate-100">
                            Lorem ipsum dolor sit amet consectetur<br> adipisicing elit. Illum, voluptate.</p>
                        <br><br>
                        <nuxt-link to="" class="ring ring-orange-200 px-10 py-2.5 bg-orange-500 text-white rounded-lg
                        hover:bg-orange-300">
                            Shop now</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="h-[400px] w-full relative">
                <img src="~/assets/images/banner/1-2.jpg" alt="" class="w-full h-full object-cover">
                <div class="flex w-full h-full items-center absolute top-0 md:left-16 left-5">
                    <div class="">
                        <p class="text-orange-300 font-semibold mb-2">SAVE $120 WHEN YOU BUY</p>
                        <h2 class="text-4xl text-white">ROTIFORM SFO</h2>
                        <h2 class="text-4xl text-white/80 font-bold"> CUSTOM FORGED</h2>
                        <p class="font-semibold mt-3 text-slate-100 max-w-sm">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tempore distinctio cupiditate
                            expedita officiis laudantium.</p>
                        <br>
                        <nuxt-link to="" class="ring ring-orange-200 px-10 py-2.5 bg-orange-500 text-white rounded-lg
                        hover:bg-orange-300">
                            Shop now</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- small banners -->
        <div>
            <div class="grid lg:grid-cols-3 gap-3 mx-5">
                <img src="~/assets/images/banner/1-3.jpg" alt="" class="w-full h-36 object-cover">
                <img src="~/assets/images/banner/1-4.jpg" alt="" class="w-full h-36 object-cover">
                <img src="~/assets/images/banner/1-5.jpg" alt="" class="w-full h-36 object-cover">
            </div>
        </div>
        <!-- new on arrival -->
        <div class="my-14">
            <div class="text-center">
                <p class="text-black/50 font-semibold text-sm">New Arrivals Products</p>
                <p class=" text-3xl font-bold text-black/90">New Arrivals Products</p>
            </div>
            <div class="mt-10">
                <oneline-product></oneline-product>
            </div>
        </div>
        <!-- banner large -->
        <div>
            <div class="mt-5">
                <img src="~/assets/images/banner/1-6.jpg" alt="" class="w-full h-full">
            </div>
        </div>

        <div class="grid md:grid-cols-3 gap-5 my-16 px-5">
            <img src="~/assets/images/banner/2-3.jpg" alt="">
            <img src="~/assets/images/banner/2-4.jpg" alt="">
            <img src="~/assets/images/banner/2-5.jpg" alt="">
        </div>

        <!-- shop by brands -->
        <div>
            <div class="text-center">
                <p class="text-black/50 font-semibold text-sm">Top Quality Partner</p>
                <p class=" text-3xl font-bold text-black/90">Shop By Brands</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 my-10 px-5">
                <img src="~/assets/images/brand/1.jpg" alt="">
                <img src="~/assets/images/brand/2.jpg" alt="">
                <img src="~/assets/images/brand/3.jpg" alt="">
                <img src="~/assets/images/brand/4.jpg" alt="">
                <img src="~/assets/images/brand/5.jpg" alt="">
                <img src="~/assets/images/brand/6.jpg" alt="">
                <img src="~/assets/images/brand/7.jpg" alt="">
            </div>

        </div><br>
        <!-- new laters -->
        <div>
            <div class="relative">
                <img src="~/assets/images/breadcrumb/1.jpg" alt="">
                <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div class="text-white text-center max-w-2xl w-full">
                        <h2 class="text-4xl font-bold">Join our news Later</h2>
                        <p class="text-sm font-semibold mt-3">Get E-mail updates about our latest shop and special offers.
                        </p>

                        <div class="mt-10 flex items-center">
                            <input type="email" placeholder="Enter your email"
                                class="w-full py-2.5 outline-none ps-5 text-black/50">
                            <button class="bg-orange-400 py-2.5 px-10">subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const { data: product, pending, error } =  await useFetch('https://fakestoreapi.com/products', {
    params: { imit: 20 },
    watch: false
})

onMounted(() => {
    const main = new Swiper('.main', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000
        },
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const fcs = new Swiper('.fcs', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
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
</script>

<style scoped>img {
    object-fit: cover;
}</style>