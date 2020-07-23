import React from "react"
import styled from "styled-components"

const Button = styled.button 
    `height: 1.3rem;
    width: 1.5rem`


const NextButton  = ({onClick})=>{
    return <Button onClick = {onClick}>{`>`}</Button>
}


export default NextButton