import './ProductCard.css';
import NoImage from "../assets/no_image_available.jpg";
import ShoppingCart from "../assets/shopping-cart.svg";

//@ts-ignore
function ProductCard({product}) {

  return (
      <div className='card'>
        <img className='card-image' src={getImage(product.images)} alt={product.title}/>
        <div className='card-right'>
          <h5 className='card-truncate'>{product.title}</h5>
          <div className='card-price-button'>
            <strong className={product.priceBeforeBonus !== undefined ? "card-price" : "card-bonus-price"}>€{product.priceBeforeBonus !== undefined ? product.priceBeforeBonus : product.currentPrice}</strong>
            <button><img src={ShoppingCart} alt="shopping cart"/></button>
          </div>
        </div>
        
      </div>      
    ); 

    function getImage(images: any) {
      if (images.length > 0) {
        return images[images.length - 3].url
      } else {
        return NoImage
      }
    }
}

export default ProductCard;
