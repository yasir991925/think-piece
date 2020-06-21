import React from "react";
import { auth } from "../firebase";
import moment from "moment";
import { Link } from "react-router-dom";

const CurrentUser = (props) => {
  const { user } = props;
  return (
    <div style={{ margin: "20px 0px" }}>
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={user.photoURL} alt="use iamge" />
          </div>
          <div className="content">
            <Link to="/profile" className="header">
              {user.displayName}
            </Link>
            <div className="description">Email - {user.email}</div>
            <div className="description">Joined - {moment(user.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
        <button className="ui button fluid" onClick={() => auth.signOut()}>
          <i className="google icon" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default CurrentUser;
