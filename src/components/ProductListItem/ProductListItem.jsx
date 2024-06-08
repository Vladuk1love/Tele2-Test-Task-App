import styles from './ProductListItem.module.css'

function ProductListItem(props) {
  return (
    <li className={styles.list_item_container} onClick={props.onClick}>

      <img src={props.image} alt=""/>
      <p className={styles.list_item_title}>{props.title}</p>
      <p className={styles.list_item_price}>{props.price} $</p>
    </li>
  );
}


export default ProductListItem;