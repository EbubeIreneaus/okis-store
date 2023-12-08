<template>
    <div class="flex px-10 my-10">
        <div class="max-w-[25%] w-full">
            <shop-leftbar></shop-leftbar>
        </div>

        <!-- main section -->
        <div class="w-full  py-3 px-5 font-sans">
            <!-- top bar -->
            <div class="flex justify-between text-black/50">
                <div class="flex gap-2 ">
                    <button class="px-5 py-2.5 border text-white bg-black/70" @click="grid_display = 2"
                        :class="{ '!bg-white/70 !text-black/70': grid_display == 2 }">2</button>
                    <button class="px-5 py-2.5 border text-white bg-black/70" @click="grid_display = 3"
                        :class="{ '!bg-white/70 !text-black/70': grid_display == 3 }">3</button>
                    <button class="px-5 py-2.5 border text-white bg-black/70" @click="grid_display = 4"
                        :class="{ '!bg-white/70 !text-black/70': grid_display == 4 }">4</button>
                    <button class="px-5 py-2.5 border text-white bg-black/70" @click="grid_display = 5"
                        :class="{ '!bg-white/70 !text-black/70': grid_display == 5 }">5</button>
                </div>
                <div>
                    <div class="flex gap-10">
                        <div class="flex items-center gap-5">
                            <p>Sort By: </p>
                            <select name="" id="" class="py-2.5 border w-36 text-center">
                                <option value="" class="!py-2 h-10">Default</option>
                                <option value="">Name, a to z</option>
                                <option value="">Name, z to a</option>
                                <option value="">Price, low to high</option>
                                <option value="">Price, high to low</option>
                                <option value="">Rating, lowest</option>
                                <option value="">Rating, highest</option>
                            </select>
                        </div>
                        <div class="flex items-center gap-5">
                            <p>Display: </p>
                            <select name="" id="" class="py-2.5 border w-36 text-center ">
                                <option value="" class="!py-2 h-10">6</option>
                                <option value="">10</option>
                                <option value="">14</option>
                                <option value="">18</option>
                                <option value="">22</option>
                                <option value="">26</option>
                                <option value="">30</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- product list -->
            <div class="my-7">
                <div class="swiper-container product-swipe">
                    <div class="px-5 grid gap-5" :class="`grid-cols-${grid_display}`">
                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/1-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$122.00</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/1-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/2-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$122.00</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/2-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/3-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$286.30</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/3-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/4-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$200.10</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/4-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/5-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$286.30</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/5-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/6-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$310.10</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/6-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/7-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$201.55</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/7-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/8-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$185.72</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/1-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/1-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$265.72</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/1-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/2-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$325.72</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/2-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/2-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$115.72</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/2-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                          <!-- single product -->
                          <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/3-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$212.60</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/3-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                   <!-- single product -->
                   <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/1-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$122.00</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/1-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/2-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$122.00</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/2-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/3-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$286.30</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/3-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/4-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$200.10</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/4-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/5-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$286.30</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/5-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/6-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$310.10</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/6-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/7-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-slate-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$201.55</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/7-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/8-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$185.72</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/1-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/1-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$265.72</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/1-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single product -->
                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/2-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$325.72</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/2-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/2-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$115.72</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/2-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                          <!-- single product -->
                          <div class="w-full border relative group ">
                            <div class="px-5 py-5">
                                <div>
                                    <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                </div>
                                <div class="">
                                    <img src="~/assets/images/product/medium-size/3-1.jpg" alt=""
                                        class="w-52 h-52 object-cover mx-auto">
                                    <div class="text-center">
                                        <div class="flex gap-1 justify-center mb-3">
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                            <i class="fa fa-star text-sm text-orange-300"></i>
                                        </div>
                                        <p class="text-black/30 font-bold">Lorem ipsum dolor.</p>
                                        <p class=" font-mono font-semibold text-black/50">$212.60</p>
                                    </div>
                                </div>
                                <!-- hover display -->
                                <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                                    <div>
                                        <p class="border w-fit px-2.5 bg-orange-300 text-white">new</p>
                                    </div>
                                    <div class="">
                                        <img src="~/assets/images/product/medium-size/3-2.jpg" alt=""
                                            class="w-52 h-52 object-cover mx-auto">
                                        <div class="text-center">
                                            <div class="flex gap-2.5 justify-center mb-3 mt-2">
                                                <div>
                                                    <i class="fab fa-opencart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="far fa-heart ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-list ring-1 hover:ring-2 ring-orange-300 p-3
                                         hover:text-orange-600 rounded-md"></i>
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

    </div>
</template>

<script setup>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const grid_display = ref(3)

// onMounted(() => {
//     const swipper = new Swiper('.product-swipe', {
//     direction: 'horizontal',
//     slidesPerView: 1,
//     spaceBetween: 20,
//     breakpoints: {

//         // when window width is >= 640px
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 30
//         },

//         768: {
//             slidesPerView: 3,
//             spaceBetween: 30
//         },
//         992: {
//             slidesPerView: 4,
//             spaceBetween: 30
//         }

//     },
// })
// })
</script>

<style lang="scss" scoped></style>