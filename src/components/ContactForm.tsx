import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addContact, editContact } from '../store/contactsSlice'

type ContactFormProps = {
  contact?: {
    id: number
    name: string
    email: string
    phone: string
  }
}

const FormContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
  const [name, setName] = useState(contact?.name || '')
  const [email, setEmail] = useState(contact?.email || '')
  const [phone, setPhone] = useState(contact?.phone || '')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    const id = contact ? contact.id : Math.random()
    dispatch(contact ? editContact({ id, name, email, phone }) : addContact({ id, name, email, phone }))
  }

  return (
    <FormContainer>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <Button onClick={handleSubmit}>{contact ? 'Edit' : 'Add'} Contact</Button>
    </FormContainer>
  )
}

export default ContactForm
