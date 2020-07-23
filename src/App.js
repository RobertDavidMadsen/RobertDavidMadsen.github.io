import React, {useState} from 'react';
import IngInput from "./components/IngInput"
import IngCurrent from "./components/IngCurrent"
import RecipeResults from "./components/RecipeResults"
import './App.css';

function App() {
  const [ing, setIng]=useState(["banana", "Ice Cream"])
  const [displayResults, setDisplayResults]=useState(null)
  const [pageNum, setPageNum]=useState(1)
  const [kw, setKeyWord]=useState(null)
  return (
    <div className="App">
       <IngInput className="App-header" ingList={ing} setIng={setIng} setDisplayResults={setDisplayResults} setPageNum={setPageNum} setKeyWord={setKeyWord}/>
  
       <IngCurrent inglist={ing} setIng={setIng}/>

       <RecipeResults displayResults={displayResults} pageNum={pageNum} setPageNum={setPageNum} kw={kw} ingList={ing} setDisplayResults={setDisplayResults}/>

      
    </div>
    
  );
}

export default App;
