<template>
    <div>
        <div class="relative  border-4">
            <img src="~/assets/images/breadcrumb/1.jpg" alt="" class="!h-full w-full object-cover">
            <div class="absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center">
                <h2 class="text-4xl font-extrabold text-white uppercase mb-2.5">WishList</h2>
                <p class="block font-lighter text-white/90">
                    <nuxt-link to="/">Home</nuxt-link> &gt; <nuxt-link to="/wishlist">Wishlist</nuxt-link>
                </p>
            </div>
        </div>
        <div>
            <div class=" overflow-scroll py-7 px-5">
                <table class="w-full text-center text-black/50" v-auto-animate>
                    <tr>
                        <th class="px-5 md:py-2.5">Remove</th>
                        <th class="px-10">Images</th>
                        <th class="px-20">Title</th>
                        <th class="px-10">Price</th>
                        <th>Stock</th>
                        <th class="px-10">Action</th>
                    </tr>
                    <tr v-for="(product, index) in wishlist.items" :key="index">
                        <td class="px-10"><i class="fa fa-trash cursor-pointer" @click="wishlist.removeItem(index)"></i></td>
                        <td class="p-5">
                            <NuxtImg format="webp" :src="product.image" class="mx-auto" quality="80" width="100"
                                height="100" fit="cover" />
                        </td>
                        <td class="">{{ product.title }}</td>
                        <td class="font-mono font-bold">{{ money(product.price) }}</td>
                        <td>In Stock</td>
                        <td class="font-mono">
                        <button class="px-7 py-2.5 bg-slate-200 border hover:ring-2 font-bold">Add To Cart</button></td>
                    </tr>
                </table>
            </div>
          
        </div>
    </div>
</template>

<script setup>
import { useCart } from '@/stores/cart'
import { useWishlist } from '@/stores/wishlist'
const cart = useCart()
const wishlist = useWishlist()

/**@param {number} amount - amount to be formated to currency*/
function money(amount) {
    const formmater = new Intl.NumberFormat('en-US', {
        style: "currency", currency: 'USD', maximumFractionDigits: 2
    })
    return formmater.format(amount)
}
const addToCart = (product, e) => {
  e.target.classList.add('!ring-4')
  e.target.classList.add('!ring-orange-500')
  e.target.classList.add('!text-orange-600')

  const cart = useCart()
  cart.addCart(product.title, product.price, product.description, product.image, product.id)

}
</script>

<style  scoped>
table,
th,
td {
    border: 1px solid rgba(0,0,0,.5);
}
</style>