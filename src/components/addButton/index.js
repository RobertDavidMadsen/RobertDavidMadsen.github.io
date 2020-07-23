import React from "react"
import styled from "styled-components"

const Button = styled.button 
    `height: 1.3rem;
    width: 2.5rem`


const AddButton = ({onClick})=>{
    return <Button onClick = {onClick}>Add</Button>
}


export default AddButton