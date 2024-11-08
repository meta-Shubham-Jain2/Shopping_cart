import React ,{useEffect,useState}from 'react'
import NavbarHeader from './NavbarHeader'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from "../features/cartSlice";
// import ProductCard from './ProductCard'

const Body = () => {

  const items = useSelector((state) => state.allCart.items);
  

  const dispatch = useDispatch();
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  return (
    <>
      <NavbarHeader />
      <div className='productCard'>
      {products.map((product)=>(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cnet.com/a/img/resize/2a4908544fc722ad20b47e22204894a5c09887d7/hub/2022/12/16/eb02a6aa-f331-4fbe-9e5f-35efd2198f8d/p1002240-1.jpg?auto=webp&fit=crop&height=675&width=1200" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Card.Text style={{textDecoration:'bold'}}>Rs.
        {product.price}
        </Card.Text>
        <Button onClick={() => dispatch(addToCart(product))} variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card> 
    ))}
        
      {/* <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul> */}
        {/* {products.map((product)=>(
          <ProductCard product={product}/>
        ))} */}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
        {/* {products.map((product)=>(
          <h1>{product.title}</h1>
        ))} */}

      </div>
    </>
  )
}

export default Body
