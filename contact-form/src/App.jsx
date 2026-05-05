import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/content'
import Container from './components/common/container'
import ContactForm from './components/contactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Content/>
      <ContactForm />
    </Container>
    </>
  )
}

export default App
