<template>
  <div class="flex px-10 my-10">
    <div class="max-w-[25%] w-full">
      <shop-leftbar></shop-leftbar>
    </div>

    <!-- main section -->
    <div class="w-full py-3 px-5 font-sans">
      <!-- top bar -->
      <div class="flex justify-between text-black/50">
        <div class="flex gap-2">
          <button class="px-5 py-2.5 border text-white bg-black/70" @click="grid_display = 2"
            :class="{ '!bg-white/70 !text-black/70': grid_display == 2 }">
            2
          </button>
          <button class="px-5 py-2.5 border text-white bg-black/70" @click="grid_display = 3"
            :class="{ '!bg-white/70 !text-black/70': grid_display == 3 }">
            3
          </button>
          <button class="px-5 py-2.5 border text-white bg-black/70" @click="grid_display = 4"
            :class="{ '!bg-white/70 !text-black/70': grid_display == 4 }">
            4
          </button>
          <button class="px-5 py-2.5 border text-white bg-black/70" @click="grid_display = 5"
            :class="{ '!bg-white/70 !text-black/70': grid_display == 5 }">
            5
          </button>
        </div>
        <div>
          <div class="flex gap-10">
            <div class="flex items-center gap-5">
              <p>Sort By:</p>
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
              <p>Display:</p>
              <select name="" id="" class="py-2.5 border w-36 text-center" v-model="no_of_display">
                <option value="6">6</option>
                <option value="10">10</option>
                <option value="14">14</option>
                <option value="18">18</option>
                <option value="22">22</option>
                <option value="26">26</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="grid gap-7 py-10" 
        :class="{'grid-cols-3':grid_display==3, 'grid-cols-4': grid_display == 4, 'grid-cols-5':grid_display == 5, 
        'grid-cols-2': grid_display == 2 }">

          <!-- single products -->
          <div class="w-full border relative group" v-for="(product, index) in products">
            <div class="px-5 py-5">
              <div>
                <p class="border w-fit px-2.5 bg-red-600 text-white text-xs mb-1" v-if="index % 2 != 0">-20%</p>
                <p class="border w-fit px-2.5 bg-yellow-600 text-white text-sm">new</p>
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
                  <p class="text-black/50 font-bold">{{ product.title }}</p>
                  <p class="font-mono font-bold text-black/80">${{ product.price }}</p>
                </div>
              </div>
              <!-- hover display -->
              <div class="absolute top-0 left-0 w-full  opacity-0 overflow-hidden h-0 bg-white group-hover:h-full
                group-hover:opacity-100 transition-all duration-300 ease-in-out px-5 py-5">
                <div>
                  <p class="border w-fit px-2.5 bg-red-600 text-white text-xs mb-1" v-if="index % 2 != 0">-20%</p>
                <p class="border w-fit px-2.5 bg-yellow-600 text-white text-sm">new</p>
                </div>
                    <div class="">
                        <img :src="product.image" alt=""
                            class="w-52 h-52 object-cover mx-auto py-2.5">
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

      <!-- Paggination -->
      <div class="flex gap-2 justify-center">
        <button class="px-5 py-2.5 border text-white bg-black/70">1</button>
        <button class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600">
          2
        </button>
        <button class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600">
          3
        </button>
        <button class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600">
          4
        </button>
        <button class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600">
          ...
        </button>
        <button class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600">
          56
        </button>
        <button class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600">
          57
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

const grid_display = ref(3);
const no_of_display = ref(10)

const { data: products, pending: pending, error: error } = await useAsyncData('products',
  () => $fetch('https://fakestoreapi.com/products', {
    params: {
      limit: no_of_display.value
    }
  }),
  {
    watch: [no_of_display]
  }
)
console.log(products.value);
</script>

<style lang="scss" scoped></style>
