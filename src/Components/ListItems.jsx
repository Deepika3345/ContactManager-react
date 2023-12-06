import React, { useContext } from 'react'
import ContactContext from '../Context/ContactContext'

const ListItems = ({ contact }) => {

  const { dispatch } = useContext(ContactContext)

  const HandleDelete = (id) => {

    dispatch({
      type: "DELETE",
      payload: id
    })


  }


return (
  <li className="list-group-item">
    <h1 className="display-1">{contact.name}</h1>
    <h1 className="display-4">{contact.number}</h1>
    <h1 className="display-6">{contact.relation}</h1>
    <button className="btn btn-sm btn-danger float-end " onClick={() => HandleDelete(contact.id)}>Delete</button>
    <button className=" btn btn-sm btn-primary float-end mx-2">Call</button>
  </li>

)

}
export default ListItems