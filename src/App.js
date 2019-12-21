
import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Member from './components/Member'
import logo from './components/logo.svg'


function App() {
  const [members, setMembers] = useState([
    {
      name: "John Doe",
      email:"johndoe@johndoe.com",
      role: "Designer"
    }])

  const submit = (adding) => {
      const NouvoMembers = [...members]
    NouvoMembers.push(adding)
    setMembers(NouvoMembers)
  }

  const updateMember = (newMember) => {
    setMembers([...members.map(member => {
        if (member.name === newMember.name || member.email === newMember.email||member.role === newMember.role) {
          return newMember
        }
        return member
      })
    ])
   }

  return (
    <div className="App">
      <Form submit={submit} />
      {members.map((member, index) => (
        <Member key={index} member={member} updateMember={updateMember} />
      ))}

<header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
    
       <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        </a>
    </header>

    </div>
  );
}
export default App;