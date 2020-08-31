import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import ListProduct from './components/list-products/ListProduct';
import axios from 'axios'

export const UserContext = React.createContext()


function App() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([])
  const [cate, setCate] = useState("")
  const [rate, setRate] = useState(0)

  useEffect(() => {

    axios.get('http://localhost:4000/products')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        alert(err)
      })
  }, [])

  const passRate = (value) => {
    setRate(value)
  }

  const passCate = (value) => {
    setCate(value)
  }


  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <UserContext.Provider
      >
        <Header
          search={search}
          handleSearchChange={handleSearchChange}
        />
        <Sidebar
          products={products}
          passRate={passRate}
          passCate={passCate}
          setProducts={setProducts}
        />
        <ListProduct
          products={products}
          search={search}
          cate={cate}
          rate={rate}
          setRate={setRate}
          setCate={setCate}
        />
      </UserContext.Provider>
    </div>
  );
}

export default App;
