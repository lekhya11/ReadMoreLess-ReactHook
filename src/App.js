import ReadMore from './components/ReadMore'

import {GlobalStyle} from './styledComponents'

const reactHooksDescription =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'

const App = () => (
  <>
    <GlobalStyle />
    <ReadMore reactHooksDescription={reactHooksDescription} />
  </>
)

export default App
