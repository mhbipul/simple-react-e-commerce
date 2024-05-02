import  { useEffect, useState  } from 'react'
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDb, getShoppingCart} from '../../utilities/fakedb.js'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);
    

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
      const storedCart = getShoppingCart();
      const savedCart = [];
      //step 1: get id of the addedProduct
      for (const id in storedCart){
        //step 2: get product from products states by using id
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
          //step 3: add quantity
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          //step 4 : add the added product to the saved cart
          savedCart.push(addedProduct);

        }
        //console.log("Added Product",addedProduct)
      }
      //step 5: set the cart
      setCart(savedCart)
    },
    [products])

    


    const handleAddToCart = (product)=>{
      // const newCart = [...cart,product];
      let newCart = [];
      //if product doesn't exist in the cart, then set quantity = 1
      //if exist update the qunatity by 1
      const exists = cart.find(pd => pd.id === product.id);
      if(!exists){
        product.quantity = 1;
        newCart = [...cart,product]
      }
      else{
        exists.quantity = exists.quantity + 1;
        const remaining  = cart.filter(pd => pd.id !== product.id)
        newCart = [...remaining,exists];

      }





      setCart(newCart);
      addToDb(product.id);
    }



  return (
    <div className='shop-container'>
      <div className="products-container">
         {
          products.map(product => <Product   
            key={product.id}
            product={product}
            handleAddToCart = {handleAddToCart}
          />)
         }

      </div>
      <div className="cart-container">
        <Cart cart={cart} />
        
      </div>
    </div>
  )
}

export default Shop