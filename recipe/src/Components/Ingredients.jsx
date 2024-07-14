import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Ingredients() {


  const [newData, setNewData] = useState([]);
  const [unitData, setUnitData] = useState([]);
  const [id, setId] = useState();
  // const [selectUnit, setSelectUnit] = useState("");
  const [data, setData] = useState({
    name: "",
    unitId: "",
    price: ""
  });

  function handleData(e) {
    // alert(e.target.value)
    setData({ ...data, [e.target.id]: e.target.value });
    // console.log(data);
  }


  // https://661e956016358961cd924628.mockapi.io/ingredients/
  // http://localhost:8081/ingredients/


  function handleSubmit() {

    console.log(data);
    if (id === undefined) {
      axios.post("http://localhost:8081/ingredients/", data)
        .then((res) => {
          // console.log(res.data.data);
          loadData();
        })
      setData({
        name: "",
        unitId: "",
        price: ""
      });
    } else {
      axios.put("http://localhost:8081/ingredients/" + id, data)
        .then((res) => {
          console.log(res.data.data);
          loadData();
          setId(undefined);
        })

      setData({
        name: "",
        unitId: "",
        price: ""
      });
    }
  }

  function handleUpdate(id) {
    // Implement handleUpdate if needed
    //e.preventDefault();

    setId(id);
    axios.get("http://localhost:8081/ingredients/" + id)
      .then((res) => {
        console.log(res.data.data);
        setData({
          name: res.data.data.name,
          unitId: res.data.data.unitId,
          price: res.data.data.price
        })
      })
  }

  function handleDelete(id) {
    axios.delete("http://localhost:8081/ingredients/" + id)
      .then((Remove) => {
        console.log(Remove.data.data);
        loadData();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  function loadData() {
    axios.get("http://localhost:8081/ingredients/")
      .then((res) => {
        setNewData(res.data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    axios.get("http://localhost:8081/units/") // Fetch units data
      .then((res) => {
        console.log("unitData", res.data.data);
        setUnitData(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching units:', error);
      });
  }


  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'left' }} className='ingredients'>
        <div className="pagetitle mt-5">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Ingredients</li>
            </ol>
          </nav>
        </div>
        <div className='card-body mb-5'>
          <form>
            <label className='form-label'>Ingredient</label>
            <input type='text' value={data.name} id='name' onChange={handleData} className='form-control w-100 ' /><br />
            <div className='d-flex'>
              <div className='me-3'>
                <label className='form-label'>Choose Unit</label>
                <select value={data.unitId} className='form-select' onChange={(e) => handleData(e)} id="unitId">
                  <option selected>Choose Unit</option>

                  {
                    unitData.map((eachData, i) => {
                      // console.log(eachData);
                      return (
                        <option key={eachData.id} value={eachData.id}>{eachData.name}</option>


                      );
                      console.log(data);
                    })}
                </select>
              </div>
              <div>
                <label className='form-label'>Price</label>
                <input type='text' value={data.price} onChange={handleData} id="price" className='form-control' />
              </div>
            </div>
            <br />
            <button type='button' className='btn btn-primary' onClick={handleSubmit}>Save</button>
          </form>
        </div>
        <div className='card-body'>
          <table className='table table-striped w-100'>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Ingredients</th>
                <th>Units</th>
                <th>Price</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                newData.map((eachData, i) => {

                  const unitObj = unitData.find(units => units.id === eachData.unitId)
                  const unitName = unitObj ? unitObj.name : "Unit Not Found"

                  return (
                    <tr tr key={eachData.id} className='mt-3' >
                      <th scope='row'>{i + 1}</th>
                      <td>{eachData.name}</td>
                      <td>{unitName}</td>
                      <td>{eachData.price}</td>
                      <td>
                        <button onClick={() => handleUpdate(eachData.id)} className='btn btn-primary me-1'><i className="bi bi-pencil-fill"></i></button>
                        <button onClick={() => handleDelete(eachData.id)} className='btn btn-danger'><i className="bi bi-trash3-fill"></i></button>
                      </td>
                    </tr>
                  )
                })

              }
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}
