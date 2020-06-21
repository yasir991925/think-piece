import React, { useContext } from "react";
import { firestore } from "../firebase";
import moment from "moment";
import { AuthContext } from "../Providers/AuthProvider";

const belongsToCurrentUser = (currentUser, postAuthUser) => {
  if (!currentUser) return false;
  return currentUser.uid === postAuthUser.uid;
};

const Post = ({ post }) => {
  const currentUser = useContext(AuthContext);
  const postRef = firestore.doc(`posts/${post.id}`);
  const deletePost = async () => postRef.delete();
  const star = () => postRef.update({ stars: post.stars + 1 });
  return (
    <div className="ui card">
      <div className="content">
        <img className="right floated mini ui image" src={post.user.photoURL} alt="user img" />
        <div className="header">{post.title}</div>
        <div className="description">{post.content}</div>
        <div className="meta">{moment(post.createdAt.toDate()).calendar()}</div>
      </div>
      <div className="content">
        <div className="left floated">
          <i className="star icon yellow" />
          {post.stars}
        </div>
        <div className="right floated">
          <div className="header">Posted By {post.user.displayName} </div>
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <button className="ui basic button blue" onClick={star}>
            Star
          </button>
          {belongsToCurrentUser(currentUser, post.user) && (
            <button className="ui basic button red" onClick={deletePost}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
