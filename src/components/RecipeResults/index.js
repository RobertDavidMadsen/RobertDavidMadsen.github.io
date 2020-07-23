import React, { useEffect } from "react"
import {ToastsStore} from 'react-toasts';
import NextButton from "../nextButton"
import PrevButton from "../prevButton"
import {ResultWrapper} from "../Styles"
const RecipeResults = ({displayResults, pageNum, setPageNum, kw, ingList, setDisplayResults}) => {
useEffect(() => {apiUpdate()},[pageNum])

  const PrevPage = () => {
    
    if (pageNum <= 1)
    {
      ToastsStore.error("No Previous Pages")
    }
    else 
    {
      ToastsStore.success("Rewinding Page")
      setPageNum(pageNum - 1)
    }
  }
  const NextPage = () => {
    if (displayResults.results.length)
    {
      ToastsStore.success("Advancing Page")
      setPageNum(pageNum + 1)
    }
    else 
    {
      ToastsStore.error("No Additional Pages")
    }
  }

  const apiUpdate = async() => {
        
    if(kw)
    {
        const URL = encodeURI(`http://www.recipepuppy.com/api/?i=${ingList.join(',')}&q=${kw}&p=${pageNum}`)
        ToastsStore.success("Gathering Recipes")
        {/*const results = await axios.get(URL);*/}
        const results = {"title":"Recipe Puppy","version":0.1,"href":"http:\/\/www.recipepuppy.com\/","results":[]}
        setDisplayResults(results)
        ToastsStore.success(pageNum)

    }
    else {ToastsStore.error("Not a valid Keyword")
    
    }
}

return (       <ResultWrapper>
  
    {console.log(displayResults)}
    {displayResults?.results.map(RecipeNumber=>{
      return(
        <div key={RecipeNumber.href}>
          {RecipeNumber.thumbnail && <img src={RecipeNumber.thumbnail} alt={RecipeNumber.title} width="100" height="100"></img>}
          <a href={RecipeNumber.href} target="_blank">{RecipeNumber.title}</a>
          <br></br>
          {RecipeNumber.ingredients}
          
          
        </div>
      )
    })}

  <PrevButton onClick={PrevPage}>Prev</PrevButton>
    <NextButton onClick={NextPage}>Next</NextButton>
  </ResultWrapper>)
}

export default RecipeResults
