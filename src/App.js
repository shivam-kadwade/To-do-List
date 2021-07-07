import React from 'react';
import './App.css';
import {useState} from 'react';
import List from './List'

function App() {
  const [currentItem, setCurrentItem]= useState(null);
  const [itemList,updateItemList] = useState([]);
  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value)
   };
  const addItemstoList = () => {
     updateItemList([...itemList,{item:currentItem,key:Date.now()}]);
     console.log("list", itemList);
     setCurrentItem("");
   };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} onChange={onChangeHandler}/>
            <button onClick={addItemstoList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
