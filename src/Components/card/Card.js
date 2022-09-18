import "./Card.css";
import {Link} from 'react-router-dom';

function Card({ name, price, image, category, description, stock, addToCart, id }) {
  return (
    <>
    
      {/*<!-- Card --> */}
      <div className='card f col-4'>
      <Link className="link"to={`/detalle/${id}`}>
        {/*<!-- Card image --> */}
        <div className='view overlay'>
          <img src={image} className='img-fluid img-car' alt={description} />
          <a>
            <div className='mask rgba-white-slight waves-effect waves-light'></div>
          </a>
        </div>
        {/*<!-- Card image --> */}
        {/* <!-- Card content --> */}
        
        <div className='card-body'>
          {/*<!-- Category & Title --> */}
          <h5 className='card-title mb-1'>
            <strong>
              <p href='' className='dark-grey-text'>
                {name}
              </p>
            </strong>
          </h5>
          <p>Category: {category}</p>
          <p>Stock: {stock}</p>
          
          
          
          {/* <!-- Card footer --> */}
          <div className='card-footer pb-0 '>
            <div className='row mb-0 text-center'>
              <span className='float-left mb-1'>
                Price: <strong>{price}$</strong>
              </span>
              
            </div>
          </div>
        </div>
        
        </Link>
        {/* <!-- Card content --> */}
      </div>
      {/*<!-- Card --> */}
    </>
  );
}

export default Card;
