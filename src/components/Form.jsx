import {React, useState }from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const submitForm = () => {};


  return (
    <div className='Form'>Form
    <form>

    <input type="text"
    value={name}
    onChange={(e) => setName(e.target.value)} 
    placeholder="Name"
    />
    <input type="text"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    />
    <input type="text"
    value={number}
    onChange={(e) => setNumber(e.target.value)}
    placeholder="Phone"

    />
    <input type="file" 
    value={selectedFile}
    onChange={(e) => setSelectedFile(e.target.value)} 

    />

    </form>
    </div>
  )
}

export default Form