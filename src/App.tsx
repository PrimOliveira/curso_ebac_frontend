import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import GlobalStyle from './styles/GlobalStyles'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div style={{ maxWidth: '600px', margin: '20px auto' }}>
        <h2>Contact List</h2>
        <ContactForm />
        <ContactList />
      </div>
    </Provider>
  )
}

export default App
