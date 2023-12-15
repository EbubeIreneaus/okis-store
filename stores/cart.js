import  {defineStore} from 'pinia'

export const useCart = defineStore('cart', {
    state: ()=>({
        /** @type {{title:string, price:number, desc:string, image:string, id:number, quantity: number}}*/ 
        items: []
    }),
    actions: {
        addCart(title, price, desc, image, id){
          for (let index = 0; index < this.items.length; index++) {
            if(this.items[index].id == id){
                this.items[index].quantity++
                return
            }
          }
          let cartItems = {title, price, desc, image, id, quantity:1}
          this.items.push(cartItems)
        },
        /**
         * @param {number} index - index number of the item
         * */ 
        removeItem(index){
            this.items.splice(index, 1)
        },
        getTotalPrice(){
            let total = 0
            let num;
            for (let index = 0; index < this.items.length; index++) {
                num = this.items[index].price * this.items[index].quantity
                total += num
            }
            return total
        }

    }
})