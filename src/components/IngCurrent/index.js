import React from "react"
import styled from "styled-components"
import {ToastsContainer, ToastsStore} from 'react-toasts';
import RemButton from "../remButton"
import {IngWrapper} from "../Styles"

const IngCurrent = ({inglist, setIng}) => {
const ingDelete = () => {
    const y = document.getElementById("ingreds");
    const selectedList = [...y.options].filter((x) => !x.selected);
    if (!selectedList.length)
    {
        setIng(selectedList.map((newIngList) => {return newIngList.value}))
        ToastsStore.success("Ingredient(s) Removed")
    }
    else{
        ToastsStore.success("No Ingredients Selected")
    }
}


return (      <IngWrapper>
    <div>Current Ingredients</div>
    <div><select id = "ingreds" multiple = "multiple" size = "5">
        {inglist.map( (theingredient) => {return <option value = {theingredient}> {theingredient} </option>}
        )}
        </select>
        </div>
        <RemButton onClick= {ingDelete} >Remove</RemButton>
        <br/><br/>
        <ToastsContainer store={ToastsStore}/>
    </IngWrapper>)
}



export default IngCurrent