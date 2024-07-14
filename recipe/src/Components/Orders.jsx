// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// export default function Orders() {

//   const [data, setData] = useState({
//     name: "",
//     orderDate: "",
//     eventDate: "",
//     eventtime: "",
//     mobileNo: "",
//     quantity: 0,
//     status: "pending",
//     amount: 0,
//     billAmount: 0

//   });


//   const [newData, setNewData] = useState([]);
//   const [orderData, setOrderData] = useState([]);

//   function loadData() {
//     // axios.get("http://localhost:8081/receipes/")
//     //   .then((res) => {
//     //     console.log(res.data.data);
//     //     setNewData(res.data.map((rec) => {
//     //       console.log(res.data);
//     //       rec.amount = 0;
//     //       rec.billamount = 0;
//     //       return rec;
//     //     }))

//     //   })
//     // axios.get("http://localhost:8081/orders/")
//     //   .then((res) => {
//     //     console.log(res.data);
//     //     setOrderData(res.data);
//     //   })
//   }

//   function handledata() {
//     // setData({ ...data, [e.target.name]: e.target.value });
//   }


//   // function handleRecipeCheck(e, index) {
//   //   if (data.quantity === 0) {
//   //     alert("please Enter quantity");
//   //     return;
//   //   }
//   //   // e.preventDefault();
//   //   let recipes = [...newData];
//   //   if (e.target.checked) {
//   //     let obj = { quantity: data.quantity, recipeid: recipes[index].recipeid };
//   //     axios.post("http://localhost:8081/orders/calculaterecipeamount", obj).then((result) => {
//   //       console.log(result.data);
//   //       recipes[index].amount = result.data.amount;
//   //       recipes[index].billAmount = result.data.billAmount;
//   //       recipes[index].orderRecipeItemDTOs = result.data.orderRecipeItemDTOs;

//   //       setNewData(recipes);
//   //     }).catch((ex) => {
//   //       console.log(ex, "Exception");
//   //     });
//   //   } else {
//   //     recipes[index].amount = 0;
//   //     recipes[index].billAmount = 0;
//   //     recipes[index].orderRecipeItemDTOs = [];
//   //     setNewData(recipes);
//   //   }
//   //   calculateTotal();
//   // }


//   function handlebillAmount(e, id) {
//     // setNewData(newData.map((rec) => {
//     //   if (rec.recipeid === id) {
//     //     rec.billAmount = e.target.value;
//     //   }
//     //   return rec;
//     // }))
//     // calculateTotal();
//   }

//   function calculateTotal() {
//     // let amount = 0;
//     // let billAmount = 0;
//     // newData.map((rec) => {
//     //   amount = parseFloat(amount) + parseFloat(rec.amount);
//     //   billAmount = parseFloat(billAmount) + parseFloat(rec.billAmount);
//     // });

//     // setData({ ...data, amount: amount, billAmount: billAmount });
//   }


//   function handleSave(e) {
//     // e.preventDefault();
//     // let mydata = {
//     //   ...data, recipes: newData.filter((r) => {
//     //     if (r.amount > 0)
//     //       return true;
//     //     else
//     //       return false;
//     //   })
//     // };
//     // // console.log(mydata);
//     // axios.post("http://localhost:8081/orders/", mydata)
//     //   .then((result) => {
//     //     alert("order Saved");
//     //   })

//     // loadData();
//     // calculateTotal();
//     // // resetAll();
//     // setOrderData([]);
//   }

//   useEffect(() => {
//     loadData();
//   }, [])
//   return (
//     <div>
//       <div className="row">

//         <div>
//           <div className="breadcrumbs">
//             <div className="container">
//               <div className="row mt-2">
//                 <div className="col">
//                   <p className="bread h3">
//                     <span>Orders</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card mt-4" style={{ padding: "20px" }}>
//             <div className="card-body">

//               <div className="row">
//                 <div className="col-lg-4">
//                   <label for="orderdate" className="form-label">Order Date</label>
//                   <input name="orderDate" type="date" className="form-control" fdprocessedid="hxtyom" value={data.orderDate} onChange={(e) => { handledata(e) }} />
//                 </div>

//                 <div className="col-lg-4">
//                   <label for="eventdate" className="form-label">Event Date</label>
//                   <input name="eventDate" type="date" className="form-control" fdprocessedid="hxtyom" value={data.eventDate} onChange={(e) => { handledata(e) }} />
//                 </div>

//                 <div className="col-lg-4">
//                   <label for="eventtime" className="form-label">Event Time:</label>
//                   <input name="eventtime" type="text" className="form-control" fdprocessedid="hxtyom" value={data.eventtime} onChange={(e) => { handledata(e) }} />
//                 </div>
//               </div>
//               <br />

//               <div className="row">
//                 <div className="col-lg-4">
//                   <label for="name" className="form-label">Name</label>
//                   <input name="name" type="text" className="form-control" fdprocessedid="hxtyom" value={data.name} onChange={(e) => { handledata(e) }} />
//                 </div>

//                 <div className="col-lg-4">
//                   <label for="mobileNo" className="form-label">MobileNumber</label>
//                   <input name="mobileNo" type="text" className="form-control" fdprocessedid="hxtyom" value={data.mobileNo} onChange={(e) => { handledata(e) }} />
//                 </div>

//                 <div className="col-lg-4">
//                   <label for="quantity" className="form-label">Quantity</label>
//                   <input name="quantity" type="text" className="form-control" fdprocessedid="hxtyom" value={data.quantity} onChange={(e) => { handledata(e) }} />
//                 </div>

//               </div>
//             </div>
//           </div>


//           <div className="card " style={{ padding: "20px" }}>
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th scope="col">No</th>
//                   <th scope="col">Check</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Amount</th>
//                   <th scope="col">Bill Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* {
//                   newData.map((eachData, i) => {
//                     return (
//                       <tr key={i}>
//                         <th scope='row'>{i + 1}</th>
//                         <td> <input type="checkbox" onChange={(e) => { handleRecipeCheck(e, i) }} name="myTextEditBox" value="checked"
//                           style={{ width: '1.1rem', height: '1.1rem', marginTop: '20px' }} /></td>
//                         <td>{eachData.name}</td>
//                         <td>{eachData.amount}</td>
//                         <td>
//                           <input type="number" value={eachData.billAmount} disabled={eachData.amount > 0 ? false : true} style={{ width: "150px", marginLeft: '32%' }} onChange={(e) => { handlebillAmount(e, eachData.recipeid) }} className='form-control' />
//                         </td>

//                       </tr>
//                     )

//                   })
//                 } */}
//               </tbody>
//             </table>
//           </div>

//           <div className="card" style={{ padding: "20px" }}>
//             <div className="card-body">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <label for="amount" className="form-label">Amount</label>
//                   <input name="amount" type="text" className="form-control" readOnly value={data.amount} />
//                 </div>
//                 <div className="col-lg-6">
//                   <label for="billAmount" className="form-label">BillAmount</label>
//                   <input name="billAmount" type="number" className="form-control" readOnly value={data.billAmount} />
//                 </div>
//               </div>
//               <button className="btn btn-primary mt-3" onClick={(e) => { handleSave(e) }}>Save</button>

//             </div>
//           </div>

//           <div className='card mt-4' style={{ maxHeight: "400px", overflowY: "auto", textAlign: "center" }}>
//             <table className="table table-striped" >
//               <thead>
//                 <tr>
//                   <th scope="col">No</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">OrderDate</th>
//                   <th scope="col">EventDate</th>
//                   <th scope="col">MobileNo</th>
//                   <th scope="col">Address</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Status</th>
//                   <th scope="col">Amount</th>
//                   <th scope="col">BillAmount</th>
//                   <th scope="col">Action</th>

//                 </tr>
//               </thead>
//               {/* <tbody>
//                 {
//                   orderData.map((eachData, i) => {
//                     return (
//                       <tr key={i}>
//                         <th scope='row'>{i + 1}</th>
//                         <td>{eachData.name}</td>
//                         <td>{eachData.orderDate}</td>
//                         <td>{eachData.eventDate}</td>
//                         <td>{eachData.mobileNo}</td>
//                         <td>{eachData.eventtime}</td>
//                         <td>{eachData.quantity}</td>
//                         <td>{eachData.status}</td>
//                         <td>{eachData.amount}</td>
//                         <td>{eachData.billAmount}</td>
//                         <td>

//                           <Link to={"/order/orderlist/" + eachData.orderid}>
//                             <button className='btn btn-success'>Order List</button>
//                           </Link>

//                           <Link to={"/order/bazarlist/" + eachData.recipeid}>
//                             <button className='btn btn-success'>Bazar List</button>
//                           </Link>
//                         </td>

//                       </tr>
//                     )

//                   })
//                 }

//               </tbody> */}
//             </table></div>
//         </div>
//       </div>

//     </div>
//   )
// }
