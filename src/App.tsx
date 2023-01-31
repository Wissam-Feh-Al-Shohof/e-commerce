import React, {useState, useEffect, useMemo} from 'react';
import Aux from './components/auxiliery';
import Header from './containers/header';
import './App.css';
import "@fontsource/merriweather";
import { ProductsContainer } from './products/productsContainer';
import { Product } from './products/product';
import { ProductAPI } from './products/pruductAPI';
import { Loader } from './components/loader';



function App() {
  const [products, setProducts]  = useState<any[]>([]);
  const [search,setSearch] = useState('');

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      setSearch(event.target.value);
    }
  }
  const handleSort = (mes:'asc' | 'desc' | 'default') => {
    setProducts([]);
    new ProductAPI().getProductsSorted(mes).then(
      (products:any[]) => {
        setProducts(products.map(product => (<Product id={product.id} info={product} />)));
      }).catch(err => setProducts(['{}']))
  }
  const handleFilter = (category:string) =>{
    setProducts([]);
    new ProductAPI().getProductsByCategory(category).then(
      (products:any[]) => {
        console.log(products);
        setProducts(products.map(product => (<Product id={product.id} info={product} />)));
      }).catch(err => setProducts(['{}']));

  }
  
  useEffect(() => {
    new ProductAPI().getProducts()
    .then((products:any[]) => {

      setProducts(search ?
        products.filter(product => product.category.includes(search) || product.title.includes(search)).map(product => (<Product id={product.id} info={product} />))
         : products.map(product => (<Product id={product.id} info={product} />)));
    }).catch(err => setProducts(['{}']))
  },[search]);
  return (
  <Aux style={{ display:"flex", height:"100%"}}>
    <Header></Header>
    <ProductsContainer onSearch={handleKeyDown} onSort={handleSort} onFilter={handleFilter}>
      { products.length ?  products: <Loader />}
    </ProductsContainer>
  </Aux>);
}

export default App;
