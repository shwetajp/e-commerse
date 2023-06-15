import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, removeItem } from "../redux/cartSlice";
import { addFav, removeFav } from "../redux/favouriteSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavouritePage = () => {
  const dispatch = useDispatch();
  const myFavouritePage = useSelector(state => state.myFavouritePage);
  const myCart = useSelector(state => state.myCart);

  const isFavorite = (productId) => {
    return myFavouritePage.some(product => product.id === productId);
  };

  const isAddedToCartList = (productId) => {
    return myCart.some(product => product.id === productId);
  };

  const addCartHandler = (item) => {
    if (isAddedToCartList(item.id)) {
      dispatch(removeItem(item));
    } else {
      dispatch(addItem(item));
    }
  };

  const addHeartHandler = (item) => {
    if (isFavorite(item.id)) {
      dispatch(removeFav(item));
    } else {
      dispatch(addFav(item));
    }
  };

  if (myFavouritePage.length === 0) {
    return "Your Favourite Page is empty!!";
  } else {
    return (
      <div className="row">
        {myFavouritePage.map(item => (
          <div className="col-sm-3" key={item.id}>
            <div className="card">
              <div className="card-img-container">
                <button htmlFor='image' onClick={() => addHeartHandler(item)} style={{ border: 'none', backgroundColor: 'transparent' }}>
                  {isFavorite(item.id) ? (
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'black' }} />
                  )}
                </button>
              </div>
              <div>
                <Link to={'/products/' + item.id}>
                  <img src={item.image} className="card-img-top" alt="..." height={260} style={{ padding: '20px' }} />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title" id="card-title">Brand: {item.title}</h5>
                <p>${item.price}</p>
                <button
                  onClick={() => addCartHandler(item)}
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: isAddedToCartList(item.id) ? "red" : "" }}
                >
                  {isAddedToCartList(item.id) ? "Remove from cart" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FavouritePage;
