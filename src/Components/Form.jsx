import React, { useContext, useState } from 'react'
import ContactContext from '../Context/ContactContext'

const Form = () => {

  const { dispatch } = useContext(ContactContext)

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [relation, setRelation] = useState("")


  const handleSave = (e) => {
    e.preventDefault()

    dispatch({
      type: "SAVE",
      payload:{
        id:crypto.randomUUID(),
        name,
        number,
        relation
      }
    })

    setName("")
    setNumber("")
    setRelation("")
  }
  return (
    <>

      <form action="" onSubmit={handleSave} >
        <input type="text"
          className='form-control my-2'
          placeholder='Enter Name' required
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <input type="number" className='form-control'
          placeholder='Mobile number' required
          value={number}
          onChange={(e) => setNumber(e.target.value)} />
        <input type="text" className='form-control my-2'
          placeholder='Relation' required
          value={relation}
          onChange={(e) => setRelation(e.target.value)} />

        <button className="btn btn-success w-100">Save</button>
      </form>
    </>
  )
}

export default Form