import React from 'react'

const CeoMessage = () => {
  return (
    <div>
      <div className="container text-center my-3">
        <div className="row">
          <div className="col">
            <h1>Our CEO Message</h1>
          </div>
        </div>
      </div>
      <div
        className="container d-flex"
        style={{
          backgroundColor: "#0D2732",
          color: "white",
          borderRadius: "14px",
          flexWrap: "wrap-reverse",
        }}
      >
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h1>Prospective your career to be prepared</h1>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              PNY Trainings support you assess where your interests and skills
              overlap and give you reasons to focus on the positive track. Get
              the opportunity to prepare yourself for the next interview and
              highlight your skills that will lead you down a new path of
              success. We trained you to connect the dots between what you have
              been doing and why you are making your career in new roles.
            </p>
          </div>
          <div className="imgceo col-lg-6">
            <img
              src="./images/a.10.png"
              alt=""
              style={{ marginTop: "-50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CeoMessage
