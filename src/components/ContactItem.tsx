import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeContact } from '../store/contactsSlice'

type ContactItemProps = {
  contact: {
    id: number
    name: string
    email: string
    phone: string
  }
}

const ItemContainer = styled.div`
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const Button = styled.button`
  background: #f44336;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useDispatch()

  return (
    <ItemContainer>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <Button onClick={() => dispatch(removeContact(contact.id))}>Remove</Button>
    </ItemContainer>
  )
}

export default ContactItem
