import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <>



      <div className="header_img">
        <div className="header_css ">


          <div className="header_css_left">
            <h1 className="mb-5 header_css_left_heading"  >Pakistan <span className="text-danger">No.1</span>  IT Training Institute</h1>
            <p className="header_css_left_para"> Empowering Yourself with Practical Skills that Open Doors to Lucrative Opportunities </p>
            <button  className="btn btn-info text-white header_css_left_btn">Join Now</button>
          </div>



          <div className="header_css_right">
            <div>


              <div className="card_head_one d-flex" style={{ backgroundColor: "white", opacity: "0.8", borderRadius: "10px", }} >

                <div className="calender_left">
                  <i
                    className="cal fa-regular fa-calendar-days"
                    style={{ color: "#ffffff" }}
                  />
                </div>

                <div className="calender_right ">
                  <h6>250k</h6>
                  <p className="calender_right_para" >Assisted Student</p>
                </div>
              </div>




              <div className="card_head_two d-flex" style={{ backgroundColor: "white", opacity: "0.8", borderRadius: "10px" }} >

                <div>
                  <img src="./images/my.png" alt="" />
                </div>

                <div className="head_para">
                  <h6 className="card_head_two_head">
                    User Experience Class
                  </h6>
                  <p className="card_head_two_para">Today at 12.00 PM</p>
                  <button className="btn btn-info card_head_two_button" style={{  color: "white", fontWeight: 'bold', borderRadius: '50px' }}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>


            <div>
              <div className="card_head_three d-flex" style={{ backgroundColor: "white", opacity: "0.8", borderRadius: "10px", }} >
                <div className="calender1">
                  <i
                    className="card_head_three_cal1 fa-solid fa-envelope"
                    style={{ color: "#ffffff" }}
                  />
                </div>

                <div className="card_head_three_cal2">
                  <h6 className="card_head_three_head">Congratulations</h6>
                  <p className="card_head_three_para" >
                    Your admission completed
                  </p>
                </div>

              </div>




            </div>



          </div>

        </div>
      </div>




    </>
  );
};

export default Header;
