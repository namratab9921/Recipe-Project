import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Items() {

  let { receipeId } = useParams();

  const [rows, setRows] = useState([{}])
  const [data, setData] = useState({
    receipeid: receipeId,
    ingredientId: 0,
    quantity: 0
  });

  const [itemData, setItemData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const [recipeItemData, setRecipeItemData] = useState([]);
  const [id, setId] = useState(undefined);

  function handledata(e) {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  }

  function fetchItemData() {
    axios.get("http://localhost:8081/ingredients/")
      .then((res) => {
        console.log(res.data.data, "Ingredient");
        setItemData(res.data.data)

      })
  }

  function fetchRecipeData() {
    if (receipeId != null) {

      axios.get("http://localhost:8081/receipes/" + receipeId)

        .then((res) => {
          // console.log(res.data);
          setRecipeData(res.data.data)
        })
    }
  };

  function fetchRecipeItemData() {
    axios.get("http://localhost:8081/receipeIngredients/" + receipeId)
      .then((res) => {
        console.log(res.data);
        setRecipeItemData(res.data)

      })
  }

  useEffect(() => {
    fetchItemData();
    fetchRecipeData();
    fetchRecipeItemData();
  }, [])


  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);

    // console.log(data);
    axios.post("http://localhost:8081/receipeIngredients/", data)
      .then((res) => {
        console.log(res.data);
        // fetchItemData();
        // fetchRecipeData();
        fetchRecipeItemData();
      });

    setData({
      itemid: "",
      quantity: "",
      receipeid: receipeId,
    })

  }

  function handleDelete(e, id) {
    e.preventDefault();
    // alert(id);
    axios.delete("http://localhost:8081/receipeIngredients/" + id)
      .then((res) => {
        // console.log(res.data);
        fetchRecipeItemData();
        setId(undefined)
      })

  }

  return (
    <div style={{ overflow: 'hidden' }}>

      <div className="row" style={{ backgroundColor: "#bce0db" }}>
        <div className="col-lg-2" >

        </div>
        <div className="col-lg-10" style={{ width: "1200px" }}>
          <div className="breadcrumbs">
            <div className="container">
              <div className="row mt-2">
                <div className="col">
                  <p className="bread h3">
                    <span style={{ textTransform: "uppercase" }}>{recipeData.name}(For {recipeData.quantity} People)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>


            <div className="card m-5" style={{ maxHeight: "300px", overflowY: "auto", textAlign: "center" }}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    recipeItemData.map((eachData, i) => {
                      return (
                        <tr key={i}>
                          <th scope='row'>{i + 1}</th>

                          <td>{eachData.item.name}</td>
                          <td>{eachData.quantity} {eachData.item.unit.name}</td>
                          <td>
                            <button onClick={(e) => handleDelete(e, eachData.recipeitemid)} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>
                          </td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <div className="row">
                  <table className="table">
                    <tbody style={{ textAlign: "center" }}>
                      {rows.map((i) => {
                        return (
                          <tr key={i}>
                            <div className="row">
                              <div className="col-lg-6">
                                <label for="choose unit" className="form-label">Ingredients:</label>

                                <select name='ingredientId' value={data.ingredientId} onChange={handledata} className='form-select'>
                                  <option value="">--Ingredients--</option>

                                  {
                                    itemData.map((eachData, i) => {
                                      return (
                                        <option key={i} value={eachData.ingredientId}>{eachData.name} - ({eachData.unit.name})</option>
                                      )
                                    })
                                  }

                                </select>       </div>
                              <div className="col-lg-6">
                                <label className="form-label">Quantity:</label>
                                <input name="quantity" value={data.quantity} onChange={handledata} type="text" className="form-control" />

                              </div>
                            </div>
                          </tr>

                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <button onClick={(e) => handleSubmit(e)} className="btn btn-primary mt-3" fdprocessedid="j53sie">Save</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
