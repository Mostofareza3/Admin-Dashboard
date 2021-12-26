import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Steve Jobs</span>
              <span className="userShowUserTitle">Web Developer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">jobs998</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.11.2000</span>
            </div>

            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">0188888</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">jobs998@email.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <from className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="jobs999" 
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="Steve Jobs" 
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder="jobs999@gmail.com" 
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder="New Work" 
                        className="userUpdateInput"
                        />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img className="userUpdateImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        <label htmlFor="file">
                            <Publish className="userUpdateIcon"/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                <button className="userUpdateButton">
                    Update
                </button>
                </div>
            </from>
        </div>
      </div>
    </div>
  );
}
