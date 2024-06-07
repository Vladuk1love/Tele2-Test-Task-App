import styles from './ProductPagination.module.css'
function ProductPagination( {productsPerPage, totalProducts, onClick, currPage} ) {
  const pages = []
  for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
    pages.push(i)
  }
  return (
    <nav className={styles.pagination_container}>
      {pages.map((number, index)=>(
       <button onClick={()=>{onClick(index+1)}} key={index} disabled={currPage === index+1} >{number}</button>
      ))}
    </nav>
  );
}

export default ProductPagination;