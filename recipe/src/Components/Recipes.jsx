import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Recipes() {
  const [newData, setnewData] = useState([]);
  const [id, setId] = useState(undefined);

  function handleChange(e) {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const [data, setData] = useState({
    name: "",
    quantity: "",
    description: ""

  });

  let navigate = useNavigate();

  function addItems(e, id) {
    console.log(id)
    alert(id)
    e.preventDefault();
    navigate("/recipe/items/" + id)
  }

  function handleSubmit() {
    console.log(data);

    if (id === undefined) {
      console.log(data);
      axios.post("http://localhost:8081/receipes/", data)
        .then((res) => {
          console.log(res.data.data);

          loadData();

        });

      setData({
        name: "",
        quantity: "",
        description: ""
      })

    }
    else {
      axios.put("http://localhost:8081/receipes/" + id, data)
        .then((res) => {
          console.log(res.data.data);
          loadData();
          setId(undefined)
        });
      setData({
        name: "",
        quantity: "",
        description: ""
      })

    }

  }
  function handleUpdate(e, id) {
    e.preventDefault();
    setId(id)
    // alert(id)
    axios.get("http://localhost:8081/receipes/" + id)

      .then((res) => {
        console.log(res.data.data);
        setData({
          name: res.data.data.name,
          quantity: res.data.data.quantity,
          description: res.data.data.description
        })
      })

  }
  function handleDelete(e, id) {
    e.preventDefault();

    axios.delete("http://localhost:8081/receipes/" + id)
      .then((res) => {
        console.log(res.data.data);
        loadData();
        // setId(undefined)
      })
  }
  function loadData() {
    axios.get("http://localhost:8081/receipes/")
      .then((res) => {
        console.log(res.data.data);
        setnewData(res.data.data)
      })
  };


  useEffect(() => {
    loadData();

  }, [])



  return (
    <div style={{ textAlign: 'left' }} className='recipes'>
      <div className="pagetitle mt-5">

        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Recipes</li>
          </ol>
        </nav>
      </div>
      <div className='card-body mb-5'>
        <form >
          <div className='d-flex'>
            <div className='w-100 me-2'>

              <label className='form-label'>Recipe</label>
              <input type='text' value={data.name} name='name' className='w-100 form-control' onChange={handleChange} /></div>

            <div className='w-100'> <label className="form-label">Quantity</label>
              <input name="quantity" value={data.quantity} type="text" onChange={handleChange} className="form-control" /></div>

          </div>
          <br />
          <label className="form-label">Description:</label>
          <textarea name="description" value={data.description} onChange={handleChange} className="form-control" rows="4"></textarea>
          <br />

          <button type='button' className='btn btn-primary' onClick={(e) => handleSubmit(e)}>Save</button>
        </form>
      </div>
      <div className='card-body'>
        <table className='table table-striped w-100'>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>

          </thead>
          {/* <hr className='w-100'/> */}
          <tbody>
            {
              newData.map((eachData, i) => {
                return (
                  < tr key={i}>
                    <th scope='row'>{i + 1}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.quantity}</td>
                    <td>{eachData.description}</td>
                    <td>
                      <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary me-2'><i className="bi bi-pencil-fill"></i></button>
                      <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger me-2'><i className="bi bi-trash3-fill"></i></button>
                      <Link to={"/recipe/items/" + eachData.id}>
                        <button className='btn btn-success '>Item</button>
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}
