import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = () => {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        console.log("---->",)
      });
  }, []);
  return (
    <>{products.map((product)=>(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cnet.com/a/img/resize/2a4908544fc722ad20b47e22204894a5c09887d7/hub/2022/12/16/eb02a6aa-f331-4fbe-9e5f-35efd2198f8d/p1002240-1.jpg?auto=webp&fit=crop&height=675&width=1200" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card> 
    ))}
    </>
  )
}

export default ProductCard
