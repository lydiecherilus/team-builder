
import React, { useState } from 'react'

export default function Member(props) {
  const [addingMember, setAddingMember] = useState(false);

  const [adding, setAdding] = useState({
    name: props.member.name,
    email: props.member.email,
    role: props.member.role
  })

  const updateHandler = event => {
    event.preventDefault()
    props.updateMember(adding)
    setAddingMember(!addingMember)
  }

  const handleChanges = event => {
    setAdding({ ...adding, [event.target.name]: event.target.value })
  }

  if (addingMember) {
    return (
      <form onSubmit={updateHandler}>
        <input 
          type="text"
          name="name"
          value={adding.name}
          onChange={handleChanges}
        />
        <input 
          type="text"
          name="email"
          value={adding.email}
          onChange={handleChanges}
        />
        <input 
          type="text"
          name="role"
          value={adding.role}
          onChange={handleChanges}
        />
        <button type="submit">Update Member</button>
      </form>
    )
  }

  return (
    <div>
      <div>{props.member.name}</div>
      <div>{props.member.email}</div>
      <div>{props.member.role}</div>
   
      <button onClick={() => setAddingMember(!addingMember)}>Edit Member</button>
    </div>
  )
}