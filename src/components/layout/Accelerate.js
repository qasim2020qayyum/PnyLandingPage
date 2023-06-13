import React from 'react'

const Accelerate = () => {
  return (
    <>
      <div className="container text-center m-5 ">
        <div className="row">
          <div className="col-lg-12">
            <h2>Accelerate Your Career with PNY Training Institute s</h2>
            <p
              className="lead mt-4"
              style={{ fontSize: "15px", fontWeight: "600" }}
            >
              PNY Trainings Pakistan is the leading IT training institute,
              offering 100+ courses through online and physical classes. We
              provide internship opportunities and have a dedicated job cell to
              help you jumpstart your career
            </p>
            <div className="row mt-5 d-flex justify-content-center">
              <div className="Card col-lg-5 col-md-5 m-5  ">
                <div className=" d-flex">
                  <div className="circleicon text-center">
                    <i class="fa-solid fa-binoculars fa-2xl mt-4"></i>
                  </div>
                  <h2 className="ms-3 mt-3">Vision</h2>
                </div>
                <div className="">
                  <p
                    className=" mt-2"
                    style={{
                      fontSize: "15px",
                      textAlign: "justify",
                      fontWeight: "500",
                    }}
                  >
                    PNY Trainings: Empowering growth and success through cutting
                    edge education, fostering a future driven by knowledge and
                    innovation.
                  </p>
                </div>
              </div>
              <div className="Card col-lg-5 col-md-5 m-5 ms-1">
                <div className=" d-flex">
                  <div className="circleicon text-center">
                    <i class="fa-solid fa-binoculars fa-2xl mt-4"></i>
                  </div>
                  <h2 className="ms-3 mt-3">Mission</h2>
                </div>
                <div className="">
                  <p
                    className=" mt-2"
                    style={{
                      fontSize: "15px",
                      textAlign: "justify",
                      fontWeight: "500",
                    }}
                  >
                    Our mission is to offer world class IT skills training to
                    students, empowering them to build successful careers and
                    contribute to the creation of a digital Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accelerate
