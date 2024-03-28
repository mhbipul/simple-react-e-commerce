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

    useEffect(
      ()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
      }
      
      ,[])

    const handleAddToCart = (product)=>{
      const newCart = [...cart,product];
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