import styles from './ProductItemModal.module.css'
import closeButton from '../../public/close.png'
import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";

function ProductItemModal(props) {
  const dialogRef = useRef();
  useEffect(() => {
    if (props.open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
    document.addEventListener("keydown", e => {
      if (e.keyCode === 27 && props.open) {
        props.setOpen();
      }
    })
  }, [props.open]);
  console.log(props.currentCard)

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.modal_container}
    >
      <img src={closeButton} className={styles.close_button} onClick={props.setOpen} alt="x"/>
      <div className={styles.info_image_container}>
        <img src={props.currentCard.images[0]} className={styles.info_image} alt=""/>
      </div>

      <div className={styles.info_container}>
        <p className={styles.info_title}>{props.currentCard.title} </p>
        <p className={styles.info_price}>{props.currentCard.price} $</p>
        <p className={styles.info_description}>{props.currentCard.description} </p>
        <p className={styles.shipping_information}>{props.currentCard.shippingInformation}</p>
        <button className={styles.shop_button} onClick={() => alert('Success')}>
          <span className={styles.hover_underline_animation}>Купить сейчас</span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}


export default ProductItemModal;

