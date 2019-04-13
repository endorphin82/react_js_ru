import { normalizedComments as defaultComments } from "../fixtures";
// import {  } from "../constants";

export default (commentState = defaultComments, action) => {
  const { type, payload } = action;

  switch (type) {
  }

  return commentState;
}