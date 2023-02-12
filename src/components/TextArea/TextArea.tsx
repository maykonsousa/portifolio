import React from 'react'
import { TextAreaContainer } from './TextArea.styles'

interface IChangeValue {
  name: string
  value: string
}

interface ITextAreaProps {
  value: string
  name: string
  label: string
  changeValue: ({name, value}:IChangeValue) => void
}

export const TextArea = ({value, name, label, changeValue}:ITextAreaProps) => {

  const [isFocused, setIsFocused] = React.useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    !value && setIsFocused(false)
  }
  return (
    <TextAreaContainer>
        <div className={isFocused? "focused":""}>
            <label htmlFor={name}>{label}</label>
            <textarea 
                name={name}
                id={name}
                value={value}
                onChange={(e) => changeValue({name, value: e.target.value})}
                onFocus={handleFocus}
                onBlur={handleBlur}
                
               
            
            />
        </div>
    </TextAreaContainer>
  )
}
