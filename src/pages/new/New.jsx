import React from 'react'
import './new.scss'
import { useState } from 'react'
import Sidebar from '../../components/siddebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
const New = ({ inputs, title }) => {

  const [file, setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className='title'>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://tse1.mm.bing.net/th/id/OIP.9mwmbJKmCve8zx7vkhOX2QHaHa?pid=Api&P=0&h=220"} alt="" />
          </div>
          <div className='right'>
            <form className="userForm">
              <div className="formInput">
                <label htmlFor="file">Image :
                <CreateNewFolderIcon className='icon' /></label>
                <input
                  onChange={(e)=>setFile(e.target.files[0])}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label >{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </div>
              ))}
              <button className='send'>Send</button>
            </form>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default New
