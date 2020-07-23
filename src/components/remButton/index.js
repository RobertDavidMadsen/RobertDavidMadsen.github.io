import React from "react"
import styled from "styled-components"

const Button = styled.button 
    `height: 1.3rem;
    width: 4rem`


const RemButton = ({onClick}) =>{
    return <Button onClick={onClick}>Remove</Button>
}


export default RemButton