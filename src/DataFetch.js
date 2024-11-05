export const getProduct = () => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((result) => {
        return result
      });
}