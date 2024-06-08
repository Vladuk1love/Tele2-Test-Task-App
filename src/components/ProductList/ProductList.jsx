import styles from './ProductList.module.css'
import ProductListItem from "../ProductListItem/ProductListItem";
import {useEffect, useRef, useState} from "react";
import ProductItemModal from "../ProductItemModal/ProductItemModal";

function ProductList(props) {
  const dialogRef = useRef();
  const [open, setOpen] = useState(false)
  const [currentCard, setCurrentCard] = useState()
  function setModal(){
    setOpen(!open)
  }

  return (
    <>
      {open && <ProductItemModal open={open} setOpen={setModal} currentCard={currentCard}/> /* убираем лишние рендры, вызывающие ошибку */}
      <ul className={styles.product_list}>
      {props.products && props.products.map((item) => {
        return (
          <ProductListItem
            key={item.id}
            image={item.images[0]}
            title={item.title}
            price={item.price}
            onClick={() => {
              setModal()
              setCurrentCard(item)
            }}
          />
        )})}
    </ul>
    </>

  );
}

export default ProductList;