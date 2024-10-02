import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_Products = [
  {
    id: "p1",
    price: 6,
    title: "My book 1",
    description: "description"
  },
  {
    id: "p2",
    price: 2,
    title: "My book 2",
    description: "description"
  },
  {
    id: "p3",
    price: 8,
    title: "My book 3",
    description: "description"
  },
  {
    id: "p4",
    price: 5,
    title: "My book 4",
    description: "description"
  }
];
const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_Products.map(product => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
