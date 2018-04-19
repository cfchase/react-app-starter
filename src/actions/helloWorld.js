export const TYPE_GET_POST = 'GET_POST';
export const getPost = (id) => ({
  type: TYPE_GET_POST,
  payload: {id}
});

export const TYPE_GET_POST_SUCCEEDED = 'GET_POST_SUCCEEDED';
export const getPostSucceeded = (post) => ({
  type: TYPE_GET_POST_SUCCEEDED,
  payload: {
    post
  }
});

export const TYPE_GET_POST_FAILED = 'GET_POST_FAILED';
export const getPostFailed = (error) => ({
  type: TYPE_GET_POST_FAILED,
  payload: {
    error
  }
});