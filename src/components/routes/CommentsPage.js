import React from "react";
import CommentsPagination from "../CommentsPagination";

const CommentsPage = ({ match }) => {
  return <CommentsPagination page={match.params.page}/>;
};

export default CommentsPage;