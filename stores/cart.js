import  {defineStore} from 'pinia'

export const useCart = defineStore('cart', {
    state: ()=>({
        /** @type {{title:string, price:number, desc:string, image:string, id:number}}*/ 
        items: []
    }),
    actions: {
        addCart(title, price, desc, image, id){
            let cartItems = {title, price, desc, image, id}
            this.items.push(cartItems)
        }
    }
})