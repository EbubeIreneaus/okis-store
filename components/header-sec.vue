<template>
  <div class="bg-slate-900/90 text-white w-screen border border-transparent">
    <div class="nav h-16 w-screen lg:flex relative z-20 hidden transition-all duration-500 ease-in-out">
      <nav class="font-sans h-full flex items-center w-full">
        <ul role="list" class="flex justify-between w-full px-5">
          <nuxt-link to="/">
            <li>HOME</li>
          </nuxt-link>
          <!-- shop -->
          <div class="group h-100 nav-drop-down">
            <nuxt-link to="">SHOP &nbsp;<i class="fa-solid fa-caret-down"></i></nuxt-link>
            <div class="absolute shadow-sm shadow-black/30 top-full bg-white text-black drop-content">
              <div class="grid grid-cols-3 min-w-[900px] w-full px-5 py-7">
                <div class="">
                  <h2 class="text-lg font-extrabold uppercase mb-3 text-black/50">
                    Category one
                  </h2>
                  <ul class="ms-5">
                    <nuxt-link to="/shop" class="font-bold text-black/50 leading-4">
                      <li class="py-1">Game</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Console</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Audio</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Backware</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Body parts</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Body parts</li>
                    </nuxt-link>
                  </ul>
                </div>

                <div>
                  <h2 class="text-lg font-extrabold uppercase mb-4 text-black/50">
                    Category two
                  </h2>
                  <ul class="ms-1">
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Cameras &amp; Carmcoder</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Car Parts</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Cookie &amp; Crackers</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Interiors</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Bake &amp; Rotors</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Bicycles</li>
                    </nuxt-link>
                  </ul>
                </div>

                <div>
                  <h2 class="text-lg font-extrabold uppercase mb-4 text-black/50">
                    Category Three
                  </h2>
                  <ul class="ms-1">
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Lightening</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Performance</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Machines</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Jewelries</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Shoes &amp; Clothes</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="font-bold text-black/50">
                      <li class="py-1">Gadgets</li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link to="">SPECIALS</nuxt-link>

          <div class="group nav-drop-down">
            <nuxt-link to="" class="inline">PAGES &nbsp;<i class="fa-solid fa-caret-down"></i></nuxt-link>
            <div class="absolute shadow-sm shadow-black/30 top-full bg-white text-black drop-content">
              <div class="min-w-[250px] w-full py-7">
                <div class="">
                  <ul class="ms-5 font-serif">
                    <nuxt-link to="/account" class="text-black/50">
                      <li class="py-3">My Account</li>
                    </nuxt-link>
                    <nuxt-link to="/auth/signin" class="text-black/50">
                      <li class="py-2">Login | Regiser</li>
                    </nuxt-link>
                    <nuxt-link to="/wishlist" class="text-black/50">
                      <li class="py-3">Wishlist</li>
                    </nuxt-link>
                    <nuxt-link to="/cart" class="text-black/50">
                      <li class="py-2">Cart</li>
                    </nuxt-link>
                    <nuxt-link to="/checkout" class="text-black/50">
                      <li class="py-3">Checkout</li>
                    </nuxt-link>
                    <nuxt-link to="" class="text-black/50">
                      <li class="py-2">Compare</li>
                    </nuxt-link><nuxt-link to="" class="text-black/50">
                      <li class="py-3">FAQ</li>
                    </nuxt-link>
                    <nuxt-link to="/error" class="text-black/50">
                      <li class="py-2">404 Error</li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link to="/about">ABOUT</nuxt-link>
          <nuxt-link to="/contact">CONTACT</nuxt-link>
          <nuxt-link to="">BLOG</nuxt-link>
        </ul>
      </nav>

      <div class="w-full flex justify-end pe-10">
        <ul class="flex items-center gap-6">
          <div class="group h-100 currency-drop-down">
            <nuxt-link to="" class="inline">Currency &nbsp;<i class="fa-solid fa-caret-down"></i></nuxt-link>
            <div class="absolute shadow-sm shadow-black/30 top-full bg-white text-black drop-content">
              <div class="min-w-[250px] w-full py-7">
                <div class="">
                  <ul class="ms-5 font-serif">
                    <nuxt-link to="/shop" class="text-black/50">
                      <li class="py-3">USD</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="text-black/50">
                      <li class="py-2">NGN</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="text-black/50">
                      <li class="py-2">Pounds</li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="group h-100 currency-drop-down">
            <nuxt-link to="" class="inline">Language &nbsp;<i class="fa-solid fa-caret-down"></i></nuxt-link>
            <div class="absolute shadow-sm shadow-black/30 top-full bg-white text-black drop-content">
              <div class="min-w-[250px] w-full py-7">
                <div class="">
                  <ul class="ms-5 font-serif">
                    <nuxt-link to="/shop" class="text-black/50">
                      <li class="py-3">English</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="text-black/50">
                      <li class="py-2">French</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="text-black/50">
                      <li class="py-2">Chinese</li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="group h-100 currency-drop-down">
            <nuxt-link to="" class="inline">Account &nbsp;<i class="fa-solid fa-caret-down"></i></nuxt-link>
            <div class="absolute shadow-sm shadow-black/30 top-full bg-white text-black drop-content -ms-20">
              <div class="min-w-[250px] w-full py-7">
                <div class="">
                  <ul class="ms-5 font-serif">
                    <nuxt-link to="/auth/signin" class="text-black/50">
                      <li class="py-3">Login</li>
                    </nuxt-link>
                    <nuxt-link to="/shop" class="text-black/50">
                      <li class="py-2">Settings</li>
                    </nuxt-link>
                    <nuxt-link to="/auth/signup" class="text-black/50">
                      <li class="py-2">Register</li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>

    <!-- middle header content -->
    <div class="">
      <nuxt-link to="/" class="w-full lg:hidden block my-5">
        <div
          class="logo text-3xl italic text-center font-extrabold bg-gradient-to-r from-orange-300 to-orange-900 bg-clip-text text-transparent">
          OKIS STORE
        </div>
      </nuxt-link>

      <div class="flex lg:h-28 h-20 items-center justify-between lg:px-10 px-5 gap-7">
        <nuxt-link to="/" class="lg:block hidden">
          <div
            class="w-48 text-3xl font-extrabold bg-gradient-to-r from-orange-300 to-orange-900 bg-clip-text text-transparent">
            OKIS STORE
          </div>
        </nuxt-link>

        <div class="flex lg:justify-end justify-between items-center lg:gap-5 w-full flex-grow">
          <button class="px-3 py-1 text-2xl font-bold lg:hidden block me-10" @click="sidebar.memu = !sidebar.memu">
            <i class="fa fa-bars"></i>
          </button>
          <nuxt-link to="" class="" @click="sidebar.cartbar = !sidebar.cartbar">
            <button class="border lg:px-16 px-10 lg:py-4 py-2 rounded-lg hover:bg-[#ffc400] bg-white text-black">
              <i class="fa-solid fa-cart-shopping"></i>
              <sup class="py-0.5 px-1.5 border font-semibold rounded-full bg-slate-200">{{ cart.items.length }}</sup>
              <span class="ms-2 font-semibold">Cart</span>
            </button>
          </nuxt-link>

          <button class="border px-24 py-4 rounded-2xl md:block hidden">
            <i class="fa-solid fa-phone"></i>
            <span class="ms-2">+234 808 541 9653</span>
          </button>
        </div>
      </div>
    </div>

    <!-- bottom header content -->
    <div class="py-5 flex items-center justify-center">
      <div class="px-5 relative w-fit">
        <div class="border flex gap-7 justify-between py-3.5 px-5 w-[250px] cursor-default"
          @click="sbc_content = !sbc_content">
          <i class="fa fa-bars font-bold text-2xl"></i>
          <small>Shop by Categories</small>
          <i class="fa fa-caret-down"></i>
        </div>

        <div
          class="sbc-content w-full block absolute top-full left-0 px-5 h-0 opacity-0 overflow-hidden z-50 transition-all duration-700 ease-in-out"
          :class="{ '!h-[380px] opacity-100': sbc_content == true }">
          <ul class="text-black border px-3 shadow-md bg-white font-semibold text-black/50">
            <nuxt-link to="" v-for="x in 10" class="hover:text-orange-600">
              <li class="py-1.5 border-b cursor-pointer">Category {{ x }}</li>
            </nuxt-link>
          </ul>
        </div>
      </div>

      <div class="searchbar lg:flex hidden w-full items-center me-10 border rounded-md">
        <div class="w-32 mx-3">
          <small>All category </small> &nbsp;<i class="fa fa-caret-down"></i>
        </div>
        <div class="flex-grow w-full">
          <input type="search" placeholder="Enter search key" class="w-full py-3.5 outline-none text-black/70 ps-5" />
        </div>
        <div>
          <button class="px-10 py-3.5 bg-orange-600 rounded-e-md">
            Search
          </button>
        </div>
      </div>
    </div>

    <!-- cart side bar -->
    <div
      class="fixed h-screen max-w-md w-full bg-white/95 text-black/80 top-0 -right-[100vw] opacity-0 z-30 ring-1 shadow-md transition-all duration-500"
      :class="{ '!right-0 !opacity-100': sidebar.cartbar }">
      <button class="float-right px-3 py-1.5 me-3 mt-3 block" @click="sidebar.cartbar = false">
        <i class="fa fa-close"></i>
      </button>
      <div class="mt-16 px-8">
        <h3 class="font-bold text-2xl">Shooping Cart</h3>
        <!-- Cart Items Grid -->
        <ul class="flex flex-col gap-y-5 my-7 ms-2" v-auto-animate>
          <!-- cart item -->
          <li class="grid grid-cols-6 w-full" v-for="(product, index) in cart.items.slice(0, 3)" :key="index">
            <div class="p-1 bg-white w-fit">
              <NuxtImg :src="product.image" quality="80" format="webp" width="70" height="70" fit="cover" />
            </div>
            <div class="col-span-4 text-black/50 font-semibold px-7 text-sm">
              <P class="mt-0.5 mb-2.5 line-clamp-1">{{ product.title }}</P>
              <p class="font-mono">
                {{ product.quantity }} x {{ formatNumber(product.price) }}
              </p>
            </div>
            <div @click="cart.removeItem(index)" class="border px-2.5 py-1.5 group h-fit w-fit">
              <i class="fa fa-close text-black/50 transition-all ease-in-out duration-300 group-hover:rotate-180"></i>
            </div>
          </li>
          <!-- xx cart item xx -->
          <p v-if="cart.items.length > 3">.............</p>
        </ul>

        <!-- xx art Item Grid -->
        <div class="text-black/50 font-semibold px-2 text-sm">
          <p class="float-left">SubTotal</p>
          <p class="float-right font-mono">
            {{ formatNumber(cart.getTotalPrice()) }}
          </p>
        </div>

        <div class="mt-20 text-white/50 font-semibold">
          <nuxt-link to="/cart" @click="sidebar.cartbar = false">
            <button class="block border w-full py-2 rounded-lg bg-slate-900 hover:bg-orange-600 mb-3">
              minicart
            </button>
          </nuxt-link>

          <nuxt-link to="/checkout" @click="sidebar.cartbar = false">
            <button class="block border w-full py-2 rounded-lg bg-slate-900 hover:bg-orange-600">
              Checkout
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- side menu offcanvas -->
    <div
      class="md:max-w-sm max-w-[80%] w-full h-screen overflow-y-auto bg-white border shadow-md fixed top-0 -right-[100vw] text-black/50 font-semibold transition-all duration-300 z-30"
      :class="{ '!right-0 opacity-100': sidebar.memu }">
      <div class="flex items-center border bg-slate-100">
        <input type="search" placeholder="Enter search key"
          class="w-full outline-none py-2 bg-transparent ps-3 text-black/30" />
        <i class="fa fa-search px-3 text-black/30"></i>
      </div>
      <div class="mt-10 me-7">
        <ul>
          <nuxt-link to="/">
            <li class="py-2.5 px-5 flex items-center justify-between">
              <span>Home</span>
            </li>
          </nuxt-link>
          <div>
            <li id="shop" class="py-2.5 px-5 flex items-center justify-between drop-down-btn">
              <nuxt-link to="/shop"><span>Shop</span></nuxt-link>
              <i class="fa fa-angle-right"></i>
            </li>
            <div class="dropdown-cont">
              <ul class="px-1">
                <!-- CATEGORY ONE -->
                <div>
                  <li id="" class="py-2.5 px-5 flex items-center justify-between drop-down-btn">
                    <nuxt-link to=""><span class="capitalize text-md">Category One</span></nuxt-link>
                    <i class="fa fa-angle-right"></i>
                  </li>
                  <div class="dropdown-cont">
                    <ul class="px-3">
                      <nuxt-link to="/shop">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Game</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="/shop">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Console</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Audio</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Back Ware</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Body Parts</span>
                        </li>
                      </nuxt-link>
                    </ul>
                  </div>
                </div>

                <!-- CATEGORY TWO -->
                <div>
                  <li id="" class="py-2.5 px-5 flex items-center justify-between drop-down-btn">
                    <nuxt-link to="/shop"><span class="capitalize text-md">Category Two</span></nuxt-link>
                    <i class="fa fa-angle-right"></i>
                  </li>
                  <div class="dropdown-cont">
                    <ul class="px-3">
                      <nuxt-link to="/shop">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Camera &amp; Camcoder</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="/shop">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Car parts</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Cookies &amp; Crackers</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Interiors</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Brake &amp; Rotors</span>
                        </li>
                      </nuxt-link>
                    </ul>
                  </div>
                </div>

                <!-- CATEGORY THREE -->
                <div>
                  <li id="" class="py-2.5 px-5 flex items-center justify-between drop-down-btn">
                    <nuxt-link to=""><span class="capitalize text-md">Category Three</span></nuxt-link>
                    <i class="fa fa-angle-right"></i>
                  </li>
                  <div class="dropdown-cont">
                    <ul class="px-3">
                      <nuxt-link to="/shop">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Lightening</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>performance</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Machines</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Jewelries</span>
                        </li>
                      </nuxt-link>
                      <nuxt-link to="">
                        <li class="py-2.5 px-5 flex items-center justify-between">
                          <span>Shoes &amp; Clothes</span>
                        </li>
                      </nuxt-link>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <nuxt-link to="">
            <li class="py-2.5 px-5 flex items-center justify-between">
              <span>Specials</span>
            </li>
          </nuxt-link>
          <div>
            <li class="py-2.5 px-5 flex items-center justify-between drop-down-btn">
              <nuxt-link to=""><span>Pages</span></nuxt-link>
              <i class="fa fa-angle-right"></i>
            </li>
            <div class="dropdown-cont">
              <ul class="px-2">
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>My Account</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="/auth/signin">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>Login | Register</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="/wishlist">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>Wishlist</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="/cart">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>Cart</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>Checkout</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>Compare</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>FAQ</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="/error">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>404 Error</span>
                  </li>
                </nuxt-link>
              </ul>
            </div>
          </div>
          <nuxt-link to="">
            <li class="py-2.5 px-5 flex items-center justify-between">
              <span>About</span>
            </li>
          </nuxt-link>
          <nuxt-link to="/contact">
            <li class="py-2.5 px-5 flex items-center justify-between">
              <span>Contact</span>
            </li>
          </nuxt-link>
          <br />
          <div>
            <li class="py-2.5 px-5 flex items-center justify-between drop-down-btn">
              <nuxt-link to=""><span>Currency</span></nuxt-link>
              <i class="fa fa-angle-right"></i>
            </li>
            <div class="dropdown-cont">
              <ul class="px-2">
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>USD</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>NGN</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>Pounds</span>
                  </li>
                </nuxt-link>
              </ul>
            </div>
          </div>
          <div>
            <li class="py-2.5 px-5 flex items-center justify-between drop-down-btn">
              <nuxt-link to=""><span>Language</span></nuxt-link>
              <i class="fa fa-angle-right"></i>
            </li>
            <div class="dropdown-cont">
              <ul class="px-2">
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>English</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>French</span>
                  </li>
                </nuxt-link>
                <nuxt-link to="">
                  <li class="py-2.5 px-5 flex items-center justify-between">
                    <span>Igbo</span>
                  </li>
                </nuxt-link>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/stores/cart";
const cart = useCart();
const sbc_content = ref(false); // serach by category
const mobile = ref(false);
const sidebar = reactive({
  cartbar: false,
  memu: false,
});

if (process.client) {
  const dpd = document.getElementsByClassName("drop-down-btn");
  const dp = document.getElementsByClassName("dropdown-cont");
  for (let index = 0; index < dpd.length; index++) {
    dpd[index].addEventListener("click", () => {
      dpd[index].nextElementSibling.classList.toggle("drop-open");
      dpd[index].lastChild.classList.toggle("fa-angle-down");
    });
  }
}
const nav_scroll = () => {
  if (window.scrollY > 100) {
    document.getElementsByClassName("nav")[0].classList.add("nav-slide");
  } else {
    document.getElementsByClassName("nav")[0].classList.remove("nav-slide");
  }
};
/** @param {number} amount */
function formatNumber(amount) {
  const formater = new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 2,
    style: "currency",
  });
  return formater.format(amount);
}
onMounted(() => {
  window.addEventListener("scroll", nav_scroll);
});
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;

  &:hover {
    color: #ffc400;
    // cursor: pointer;
  }
}

.nav-slide {
  position: fixed;
  top: 0 !important;
  background-color: rgb(15 23 42);
}

nav {
  a {
    font-size: small;

    &:hover {
      color: #ffc400;
      cursor: pointer;
    }
  }
}

.router-link-active {
  color: #ffc400;
}

.drop-content,
.dropdown-cont {
  max-height: 0px;
  height: auto !important;
  opacity: 0;
  z-index: 99;
  overflow: hidden;
  transition: all 0.5s ease-in-out !important;

  a {
    font-size: 16px;
  }
}

.drop-open {
  max-height: 1000px;
  opacity: 1 !important;
}

.nav-drop-down {
  &:hover {
    .drop-content {
      max-height: 500px !important;
      opacity: 1;
    }
  }
}

.pages-drop-down {
  &:hover {
    .drop-content {
      max-height: 400px !important;
      opacity: 1;
    }
  }
}

.currency-drop-down {
  &:hover {
    .drop-content {
      height: 170px !important;
      opacity: 1;
    }
  }
}
</style>
