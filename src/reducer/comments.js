import { normalizedComments as defaultComments } from "../fixtures";
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from "../constants";
import { arrToMap } from "../helpers";
import { OrderedMap, Record } from "immutable";

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
});

const ReducerState = Record({
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (commentState = defaultState, action) => {
  const { response, type, payload, randomId } = action;

  switch (type) {
    case ADD_COMMENT:
      return commentState.updateIn(["entities", randomId], new CommentRecord({ ...payload.comment, id, randomId }));

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentState.update("entities", entities => entities.merge(arrToMap(response, CommentRecord)));
  }

  return commentState;
}