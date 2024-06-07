import styles from './App.module.css';
import Search from "../Search/Search";
import ProductList from "../ProductList/ProductList";
import ProductPagination from "../ProductPagination/ProductPagination";
import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currPage, setCurrPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [value, setValue] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  // const [currentProducts, setCurrentProducts] = useState()
  const productsPerPage = 8

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      await axios.get('https://dummyjson.com/products').then(
        (res) => {
          setProducts(res.data)
          setTotalCount(res.data.products.length)
        }
      ).catch((err) => {
        console.log(err)
      })
      setLoading(false)
    }
    getProducts()
  }, [])

  const lastProductIndex = currPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage

  function setFind(bool) {
    if (bool) {
      setFilteredProducts(products.products.filter(
      (item) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
      }
    ))
    setCurrPage(1)
    }else{
      setFilteredProducts([])
      setCurrPage(1)
    }

  }

  const currentProducts = products.products ? products.products.slice(firstProductIndex, lastProductIndex) : products.products
  return (
    <div className={styles.app_container}>
      <p>Tele2 Test Task <span> by Yurtaev</span></p>
      <Search value={value} setValue={setValue} setFind={setFind}/>

      {loading ?
        <div>
          <p>Loading...</p>
        </div> :
        (filteredProducts.length !== 0 ?
            (<div className={styles.main_info_block}>
              <ProductList
                products={filteredProducts.slice(firstProductIndex,lastProductIndex)}
                lastProductIndex={lastProductIndex}
                firstProductIndex={firstProductIndex}
              />
              <ProductPagination
                totalProducts={filteredProducts.length}
                productsPerPage={productsPerPage}
                onClick={setCurrPage}
                currPage={currPage}/>
            </div>)
            :
            (<div className={styles.main_info_block}>
              <ProductList
                products={currentProducts}
                lastProductIndex={lastProductIndex}
                firstProductIndex={firstProductIndex}
              />
              <ProductPagination
                totalProducts={totalCount}
                productsPerPage={productsPerPage}
                onClick={setCurrPage}
                currPage={currPage}/>
            </div>)
        )
      }
    </div>
  );
}