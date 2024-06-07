import styles from './ProductListItem.module.css'

function ProductListItem(props) {
  return (
    <div className={styles.list_item_container}>
      <img src={props.image} alt=""/>
      <p className={styles.list_item_title}>{props.title}</p>
      <p className={styles.list_item_price}>{props.price} $</p>
    </div>
  );
}


export default ProductListItem;