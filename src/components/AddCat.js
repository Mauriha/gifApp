import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCat = ({setCats}) => {
    const placeholder = 'Add Category'
    const [inputValue, setInputValue] = useState(placeholder)

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setCats(c => [inputValue, ...c])
        }
        setInputValue('')
    }

    const handleFocus = (e) => {
        if(inputValue === placeholder){
            setInputValue('')
        }
    }

    const handleBlur = (e) => {
        if(inputValue === ""){
            setInputValue(placeholder)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type = "text"
                value = {inputValue}
                onChange = {handleInput}
                onFocus = {handleFocus}
                onBlur = {handleBlur}
            />
        </form>
        </>
    )
}

AddCat.protoTypes = {
    value: PropTypes.func.isRequired
}