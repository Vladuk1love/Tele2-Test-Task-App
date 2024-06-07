import styles from './ProductList.module.css'
import ProductListItem from "../ProductListItem/ProductListItem";

function ProductList(props) {


  return (
    <ul className={styles.product_list}>
      {props.products && props.products.map((user) => {
        return (
          <ProductListItem
            key = {user.id}
            image={user.images[0]}
            title={user.title}
            price = {user.price}
          />
        )
      })}
    </ul>
  );
}

export default ProductList;