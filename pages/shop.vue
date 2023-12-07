<template>
    <div class="flex px-10 my-10">
        <div class="max-w-[25%] w-full">
            <shop-leftbar></shop-leftbar>
        </div>

        <div class="w-full  py-3 px-5 font-sans">
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
                            <p >Display: </p>
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
        </div>

    </div>
</template>

<script setup>
const grid_display = ref(3)
</script>

<style lang="scss" scoped></style>