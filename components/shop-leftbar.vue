<template>
    <div class="w-full border bg-slate-300">
        <div class="px-5 py-7">
            <div class="">
                <h2 class="text-2xl font-bold">CATEGORIES</h2>
            </div>
            <ul class="my-5 font-sans">
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Game and Console</span> <span>(21)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Appliance</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Audio</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Bakeware</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Body parts</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Camera &amp; Camcoder</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Car parts</span> <span>(15)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Cookies &amp; Crackers</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Interior</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>shop</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Smartwatch</span> <span>(31)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Suspension</span> <span>(18)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Tools &amp; Accessories</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Turbo System</span> <span>(22)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>TV &amp; Audio</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Oil &amp; Fluid</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Exterior</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>BreakFast</span> <span>(0)</span>
                    </li>
                </nuxt-link>
            </ul>
        </div>
    </div>

    <div class="font-sans my-10 bg-slate-300 py-7 px-5">
        <div>
            <h2 class="text-3xl font-bold">PRICE:</h2>
        </div><br>
        <div><input type="range" min="10" max="1000" v-model="price_range" step="10" class="w-full py-2.5 "></div>
        <div class=" font-mono flex">
            <p>Price: &nbsp;</p>
            <p>$10 - ${{ price_range }}</p>
        </div>
    </div>

    <div class="w-full border bg-slate-300 my-7 py-7 px-5">
        <div class="px-3">
            <div class="">
                <h2 class="text-2xl font-bold">COLOR</h2>
            </div>
            <ul class="my-5 font-sans">
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Black</span> <span>(21)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>White</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Yellow</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Orange</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Blue</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>Green</span> <span>(0)</span>
                    </li>
                </nuxt-link>
            </ul>
        </div>
    </div>

    <div class="w-full border bg-slate-300 py-7 px-5">
        <div class="px-3">
            <div class="">
                <h2 class="text-2xl font-bold">SIZE</h2>
            </div>
            <ul class="my-5 font-sans">
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>xsm</span> <span>(21)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>sm</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>md</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>lg</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>xl</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-black/80">
                        <span>xxl</span> <span>(0)</span>
                    </li>
                </nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script setup>
const price_range = ref(100)
</script>

<style lang="scss" scoped></style>