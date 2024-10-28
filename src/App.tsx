import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle from './global'
import { Botao } from './global'

import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState, useEffect } from 'react'

function App() {
  // Função para recuperar o tema do localStorage
  const getStoredTheme = () => {
    const storedTheme = localStorage.getItem('temaDark')
    return storedTheme === 'true' // Convertendo string para boolean
  }

  const [estadousandoTemaDark, setEstadoUsandoTemaDark] =
    useState(getStoredTheme)

  function trocatema() {
    setEstadoUsandoTemaDark(!estadousandoTemaDark)
  }

  // Salvando o tema no localStorage sempre que ele for trocado
  useEffect(() => {
    localStorage.setItem('temaDark', estadousandoTemaDark.toString())
  }, [estadousandoTemaDark])

  return (
    <ThemeProvider theme={estadousandoTemaDark ? temaDark : temaLight}>
      <GlobalStyle />
      <Header />
      <Hero trocaTema={trocatema} />
      <div className="container">
        <Botao onClick={trocatema}> Trocar Tema </Botao>
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
