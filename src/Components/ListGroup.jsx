import { ListItem } from '@mui/material'
import React, { useContext } from 'react'
import ListItems from './ListItems'
import ContactContext from '../Context/ContactContext'

const ListGroup = () => {

  const { contacts, dispatch } = useContext(ContactContext)

  return (
    <ul className='list-group my-4'>

      {
        contacts.map((contact) => <ListItems key={contact.id} contact={contact} />)
      }
    </ul>
  )
}

export default ListGroup