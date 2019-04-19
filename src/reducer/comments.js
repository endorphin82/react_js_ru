import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS } from "../constants";
import { arrToMap } from "../helpers";
import { OrderedMap, Record, Map } from "immutable";

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
});

const ReducerState = Record({
  entities: new OrderedMap({}),
  pagination: new Map({}),
  total: null
});

const defaultState = new ReducerState();

export default (commentState = defaultState, action) => {
  const { response, type, payload, randomId } = action;

  switch (type) {
    case ADD_COMMENT:
      return commentState.updateIn(["entities", randomId], new CommentRecord({ ...payload.comment, id, randomId }));

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentState.update("entities", entities => entities.merge(arrToMap(response, CommentRecord)));

    case LOAD_COMMENTS_FOR_PAGE + START:
      return commentState.setIn(["pagination", payload.page, "loading"], true);

    case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
      return commentState
        .set("total", response.total)
        .mergeIn(["entities"], arrToMap(response.records, CommentRecord))
        .setIn(["pagination", payload.page, "ids"], response.records.map(comment => comment.id))
        .setIn(["pagination", payload.page, "loading"], false);
  }

  return commentState;
}