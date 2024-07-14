import React from 'react'
//import Image from 'react-dom'
import veg from './assets/img/veg.jpg'
import nonveg from './assets/img/nonveg.jpg'
import south from './assets/img/southdish.jpg'
import chinese from './assets/img/chinese.jpg'

export default function Maindashboard() {
  return (
    <div>
    
    <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    
    
    <section className="section dashboard">
      <div className="row">
    
        <div className="col-lg-12">
          <div className="row">
    
            <div className="col-xxl-3 col-md-6">
              <div className="card info-card sales-card">
    
                <div className="card-body">
                  {/* <img src={"./assets/img/veg.jpeg"}/> */}
                  <img src={veg}  width={200} height={200} style={{maxWidth:"100%"}} className='mt-4' />
                  <h5 className="card-title">Veg</h5>
    
                  {/* <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart"></i>
                    </div>
                    <div className="ps-3">
                      <h6>145</h6>
                      <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
    
                    </div>
                  </div> */}
                </div>
    
              </div>
            </div>
            
            <div className="col-xxl-3 col-md-6">
              <div className="card info-card revenue-card">
    
             
    
                <div className="card-body">
                <img src={nonveg}  width={200} height={200} style={{maxWidth:"100%"}} className='mt-4' />
                  <h5 className="card-title">Non-Veg</h5>
    
                  {/* <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <div className="ps-3">
                      <h6>$3,264</h6>
                      <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
    
                    </div>
                  </div> */}
                </div>
    
              </div>
            </div>
            
            <div className="col-xxl-3 col-xl-12">
    
              <div className="card info-card customers-card">
    
               
    
                <div className="card-body">
                <img src={south}  width={200} height={200} style={{maxWidth:"100%"}} className='mt-4' />
                  <h5 className="card-title">South Indian</h5>
    
                  {/* <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="ps-3">
                      <h6>1244</h6>
                      <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
    
                    </div>
                  </div> */}
    
                </div>
              </div>
    
            </div>

            <div className="col-xxl-3 col-xl-12">
    
    <div className="card info-card customers-card">

    

      <div className="card-body">
      <img src={chinese}  width={200} height={200} style={{maxWidth:"100%"}} className='mt-4' />
        <h5 className="card-title">Chinese</h5>

        {/* <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-people"></i>
          </div>
          <div className="ps-3">
            <h6>1244</h6>
            <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

          </div>
        </div> */}

      </div>
    </div>

  </div>
            
            
            <div className="col-12">
              <div className="card">
    
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
    
                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>
    
                <div className="card-body">
                  <h5 className="card-title">Reports <span>/Today</span></h5>
    
                  <div id="reportsChart"></div>
    
                  {/* <script>
                    document.addEventListener("DOMContentLoaded", () => {
                      new ApexCharts(document.querySelector("#reportsChart"), {
                        series: [{
                          name: 'Sales',
                          data: [31, 40, 28, 51, 42, 82, 56],
                        }, {
                          name: 'Revenue',
                          data: [11, 32, 45, 32, 34, 52, 41]
                        }, {
                          name: 'Customers',
                          data: [15, 11, 32, 18, 9, 24, 11]
                        }],
                        chart: {
                          height: 350,
                          type: 'area',
                          toolbar: {
                            show: false
                          },
                        },
                        markers: {
                          size: 4
                        },
                        colors: ['#4154f1', '#2eca6a', '#ff771d'],
                        fill: {
                          type: "gradient",
                          gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0.3,
                            opacityTo: 0.4,
                            stops: [0, 90, 100]
                          }
                        },
                        dataLabels: {
                          enabled: false
                        },
                        stroke: {
                          curve: 'smooth',
                          width: 2
                        },
                        xaxis: {
                          type: 'datetime',
                          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                        },
                        tooltip: {
                          x: {
                            format: 'dd/MM/yy HH:mm'
                          },
                        }
                      }).render();
                    });
                  </script> */}
                 
                </div>
    
              </div>
            </div>
    
                
             <div className="col-12">
              <div className="card">
    
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
    
                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>
    
                <div className="card-body">
                  <h5 className="card-title">Charts <span>/Today</span></h5>
    
                  <div id="reportsChart"></div>
    
                  {/* <script>
                    document.addEventListener("DOMContentLoaded", () => {
                      new ApexCharts(document.querySelector("#reportsChart"), {
                        series: [{
                          name: 'Sales',
                          data: [31, 40, 28, 51, 42, 82, 56],
                        }, {
                          name: 'Revenue',
                          data: [11, 32, 45, 32, 34, 52, 41]
                        }, {
                          name: 'Customers',
                          data: [15, 11, 32, 18, 9, 24, 11]
                        }],
                        chart: {
                          height: 350,
                          type: 'area',
                          toolbar: {
                            show: false
                          },
                        },
                        markers: {
                          size: 4
                        },
                        colors: ['#4154f1', '#2eca6a', '#ff771d'],
                        fill: {
                          type: "gradient",
                          gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0.3,
                            opacityTo: 0.4,
                            stops: [0, 90, 100]
                          }
                        },
                        dataLabels: {
                          enabled: false
                        },
                        stroke: {
                          curve: 'smooth',
                          width: 2
                        },
                        xaxis: {
                          type: 'datetime',
                          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                        },
                        tooltip: {
                          x: {
                            format: 'dd/MM/yy HH:mm'
                          },
                        }
                      }).render();
                    });
                  </script>*/} 
                 
                </div>
    
              </div>
            </div>
             
    
            
          </div>
        </div>
    
    
      </div>
    
    </section>
 
    </div>
  )
}
