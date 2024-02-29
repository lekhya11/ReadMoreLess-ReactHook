import {useState} from 'react'

import {
  ImageElement,
  Heading,
  DivContainer,
  Para1,
  Para2,
  ButtonEle,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [para, setPara] = useState(reactHooksDescription)

  const onChangePara = () => {
    const value = `${reactHooksDescription} 'hello'`
    setPara(value)
  }

  return (
    <DivContainer>
      <Heading>React Hooks</Heading>
      <Para1>Hooks are a new addition to React</Para1>
      <ImageElement
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para2>{para}</Para2>
      <ButtonEle onClick={onChangePara}>Read More</ButtonEle>
    </DivContainer>
  )
}

export default ReadMore
