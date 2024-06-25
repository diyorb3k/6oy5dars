import React, { useState } from "react";
import "./Tudulist.css";
import PropsImg from "./PropsImg/PropsImg";
import Notificiatrion from "./Notificiatrion";
import { toast } from "react-toastify";
import { PatternFormat } from 'react-number-format';


function Tudulist() {
  const [name, setName] = useState("");
  const [sade, setTata] = useState("");
  const [dade, setDatu] = useState("");
  const [das, setDas] = useState("");
  const [dal, setDat] = useState("");
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const sab = (e) => {
    e.preventDefault();
    if (name && sade && dade && das && dal) {
        let user = { name, sade, dade, das, dal };
        setData([...data, user]);
        setName("");
        setTata("");
        setDatu("");
        setDas("");
        setDat("");
        toast.success("Student qushildi");
      } else {
        toast.error("User qushilmadi");
      }
  };

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    toast.success("Talaba uchirildi")
  };

  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
  );


  let user = filteredData.map((el, index) => (
    <div className="data" key={index}>
      <div className="name_frist">
        <h4 className="firist">FirstName</h4>
        <p className="name">{el.name}</p>
      </div>
      <div className="name_frist">
        <h4>LastName</h4>
        <p>{el.sade}</p>
      </div>
      <div className="name_frist">
        <h4>Group</h4>
        <p className="dos">{el.dade}</p>
      </div>
      <div className="name_frist">
        <h4 className="">Does work?</h4>
        <p className="dos">{el.das}</p>
      </div>
      <div className="name_frist">
        <h4 className="">phone number</h4>
        <p className="dos">{el.dal}</p>
      </div>
      {<PropsImg files={file} />}
      <button className="daletT" >edit</button>
      <button className="dalet" onClick={() => deleteData(index) && toast.success("Malumot uchirildi")}>
        Delete
      </button>
    </div>
  ));

  return (
    <div className="container">
      
      <form>    
        <div className="sear">
        <input
          className="search"
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      <button className="addd">Add</button>  
        </div>
      </form>

      <div className="using">
      <form prom onSubmit={sab}>
        <input
          className="input_tap"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="FirstName"
        />
        <input
          className="input_tap"
          required
          value={sade}
          onChange={(e) => setTata(e.target.value)}
          type="text"
          placeholder="LastName"
        />
        <input
          className="input_tap"
          required
          value={dade}
          onChange={(e) => setDatu(e.target.value)}
          type="text"
          placeholder="Group"
        />
        <input
          className="input_tap"
          type="text"
          required
          value={das}
          onChange={(e) => setDas(e.target.value)}
          placeholder="Does work?"
        />
        <PatternFormat 
         className="input_tap"
        format="+998 (##) ### ## ##"
         allowEmptyFormatting mask="_"
         value={dal}
         onChange={(e) => setDat(e.target.value)}
          />;
       
        <select className="input_tap" name="" id="">
          <option value="">Qizbola</option>
          <option value="">O'g'il bola</option>
        </select>

        <button className="qushish">add</button>
      </form>
      </div>

      {user}
    </div>
  );
}

export default Tudulist;
