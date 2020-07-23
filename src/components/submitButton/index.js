import React from "react"
import styled from "styled-components"

const Button = styled.button 
    `height: 1.3rem;
    width: 3.5rem`


const SubmitButton = ({onClick})=>{
    return <Button onClick = {onClick}>Submit</Button>
}

export default SubmitButton