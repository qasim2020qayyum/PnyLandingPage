import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";


const OurStrength = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
     <div className="col-lg-12 blue pb-5 pt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-6 mt-5">
              <h1>Our Strength</h1>
              <br />
              <i class="fa-sharp fa-solid fa-circle-check fa-lg  iconc "></i>
              <span className="ml-3 inter">International Collaborations</span>
              <br />
              <br />
              <i class="fa-sharp fa-solid  fa-circle-check fa-lg iconc "></i>
              <span className="ml-3 inter ">Awarded by USA Education 2.0</span>
              <br />
              <br />
              <i class="fa-sharp fa-solid fa-circle-check fa-lg iconc "></i>
              <span className="ml-3 inter">Multiple Branches in Pakistan</span>
              <br />
              <br />
              <i class="fa-sharp fa-solid fa-circle-check fa-lg iconc "></i>
              <span className="ml-3 inter">
                Affiliated with Govt. (PSDA & PBTE)
              </span>
              <br />
            </div>
            <div className="col-lg-4 mt-5">
              <div className="col-lg-12">
                <div className="fbox row no-gutters">
                  <div
                    className="col-lg-5 back1"
                    style={{ border: "1px solid gray", borderRadius: "15px" }}
                  >
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <h2 className="mt-4 ml-2 num">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={75000}
                            duration={2}
                            delay={0}
                          />
                        )}
                        +
                      </h2>
                    </ScrollTrigger>
                    <p
                      className="alum"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Alumni
                    </p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div
                    className="col-lg-5 mt-col-sm-3 back1 mt-3"
                    style={{ border: "1px solid gray", borderRadius: "15px" }}
                  >
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <h2 className="mt-3 ml-4 num">
                        {counterOn && (
                          <CountUp start={0} end={100} duration={2} delay={0} />
                        )}
                        +
                      </h2>
                    </ScrollTrigger>
                    <p
                      className="alum1"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Professional Programs
                    </p>
                  </div>
                  <br />
                  <div
                    className="col-lg-5 mt-3 back1"
                    style={{ border: "1px solid gray", borderRadius: "15px" }}
                  >
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <h2 className="mt-3 ml-4 num">
                        {counterOn && (
                          <CountUp start={0} end={150} duration={2} delay={0} />
                        )}
                      </h2>
                    </ScrollTrigger>
                    <p
                      className="alum"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Instructur
                    </p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div
                    className="col-lg-5  mt-3 back1"
                    style={{ border: "1px solid gray", borderRadius: "15px" }}
                  >
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <h2 className="mt-3 ml-4 num">
                        +
                        {counterOn && (
                          <CountUp start={0} end={80} duration={2} delay={0} />
                        )}
                      </h2>
                    </ScrollTrigger>
                    <p
                      className="alum1"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      Mou's Sign
                    </p>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStrength
