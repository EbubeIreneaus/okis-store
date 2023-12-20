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

            <div class="grid grid-cols-2 gap-x-10 gap-y-7 font-sans md:px-10 py-10">
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
                            <label class="font-semibold">Full Name</label>
                            <input type="text"  class="py-2.5 w-full outline-none border ps-2"
                                placeholder="full name" />
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
                                <label class="font-semibold">Email<span class="text-red-500">*</span></label>
                                <input type="text" class="py-2.5 w-full outline-none border ps-2"
                                    placeholder="phone" />
                            </div>
                            <div>
                                <label class="font-semibold">Phone</label>
                                <input type="text" class="py-2.5 w-full outline-none border ps-2" placeholder="phone" />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <div class="md:px-7 bg-slate-100 py-10">
                        <h2 class="text-3xl font-bold text-black py-7">Your Order</h2>
                        <div>
                            <table class="w-full font-sans">
                                <tr class="uppercase border-b border-t">
                                    <th class="py-5">Product</th>
                                    <th class="py-5">Total</th>
                                </tr>
                                <tr v-for="(product, index) in cart.items" :key="index" class="text-black/70 border-t border-b">
                                    <td class="py-4">{{ product.title }}<span class="font-mono"> x {{product.quantity}}</span></td>
                                    <td class="font-mono py-4">{{ money(product.price * product.quantity) }}</td>
                                </tr>
                                <tr  class="text-black/70 border-t border-b font-bold ">
                                    <td class="py-4">Cart Totals</td>
                                    <td class="font-mono py-4">{{ money(cart.getTotalPrice()) }}</td>
                                </tr>
                                <tr  class="text-black border-t border-b font-bold text-xl">
                                    <td class="py-4">Totals</td>
                                    <td class="font-mono py-4">{{ money(cart.getTotalPrice() + 60) }}</td>
                                </tr>
                            </table>
                            <div class="text-black/60 my-10">
                                <h2 class="text-xl font-bold">Direct Bank Transfer..</h2>
                                <p class="my-4">
                                    Make your payment directly into our bank account. Please use your Order 
                                    ID as the payment reference. Your order won’t be shipped until the funds
                                     have cleared in our account.
                                </p>
                                <h2 class="text-xl font-bold mb-2">Cheque Payment</h2>
                                <h2 class="text-xl font-bold">Paypal</h2>
                            </div>
                            <button class="py-4 w-full my-6 hover:ring-2 bg-slate-200 text-black/60 text-center font-semibold" id="paypal-checkout">Place Order</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useApi } from '@/stores/url'
import {useCart} from '@/stores/cart'

const cart = useCart()
const countries = ["Nigeria", "Ghana", "Cameroon", "Niger", "Togo", "South Africa"]
const id = useCookie('profileId')
const user = reactive({
    name: '',
    email: ''
})

if (id.value == undefined) {
    useApi().previous = '/checkout'
    useRouter().push("/auth/signin")
}



function money(amount) {
    const formmater = new Intl.NumberFormat('en-US', {
        style: "currency", currency: 'USD', maximumFractionDigits: 2
    })
    return formmater.format(amount)
}

</script>

<style lang="scss" scoped></style>