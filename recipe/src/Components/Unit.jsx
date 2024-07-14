import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Unit() {

  const [data, setData] = useState({
    name: ""
  });
  const [newData, setNewData] = useState([]);
  const [id, setId] = useState(undefined);
  const [error, setError] = useState("unable to fetch Unit Data ")

  // https://661e956016358961cd924628.mockapi.io/unit
  // http://localhost:8081/units/

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  function handleSave(e) {
    e.preventDefault();

    if (id === undefined) {
      axios.post("http://localhost:8081/units/", data)
        .then((res) => {
          console.log(res.data.data);
          loadData();
        })

      setData({
        name: ""
      })
    }
    else {
      axios.put("http://localhost:8081/units/" + id, data)
        .then((res) => {
          console.log(res.data.data);
          loadData();
          setId(undefined)
        })
      setData({
        name: ""
      });
    }
  }

  function loadData() {
    axios.get("http://localhost:8081/units/")
      .then((res) => {
        console.log(res.data.data)
        setNewData(res.data.data)
      })
    // .catch((err) => {
    //   setError("unable to fetch Unit Data : " + err)
    // })
    console.log(newData);
  };

  useEffect(() => {
    loadData();
  }, [])

  function handleUpdate(e, id) {
    e.preventDefault();

    setId(id);
    axios.get("http://localhost:8081/units/" + id)
      .then((res) => {
        console.log(res.data.data);
        setData({
          name: res.data.data.name
        })
      })
  }

  function handleDelete(e, id) {
    e.preventDefault();
    axios.delete("http://localhost:8081/units/" + id)
      .then((res) => {
        console.log(res.data.data);
        loadData();
      })
  }

  return (
    <div style={{ textAlign: 'left' }} className='unit'>
      <div className="pagetitle mt-5">
        {/* <h1>Units</h1> */}
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Unit</li>
          </ol>
        </nav>
      </div>
      <div className='card-body mb-5'>
        <form >
          <label className='form-label'>Unit</label>
          <input type='text' value={data.name} id='name' className='w-100 form-control' onChange={(e) => handleChange(e)} /><br />
          <button type='button' className='btn btn-primary' onClick={(e) => handleSave(e)}>Save</button>
        </form>
      </div>
      <div className='card-body'>
        <table className='table table-striped w-100'>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Unit</th>
              <th>Actions</th>
            </tr>

          </thead>
          {/* <hr className='w-100'/> */}
          <tbody>
            {
              newData
                ?

                newData.map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <th scope='row'>{i + 1}</th>
                      <td>{eachData.name}</td>
                      <td>
                        <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary me-2'><i className="bi bi-pencil-fill"></i></button>
                        <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'><i className="bi bi-trash3-fill"></i></button>
                      </td>
                    </tr>
                  )
                })

                :
                <div className="alert alert-danger">{error}</div>
            }

          </tbody>
        </table>
      </div>
    </div>

  )
}
