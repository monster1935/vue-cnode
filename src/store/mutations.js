export const SET_ARTICLE = (state, data) => {
  state.articleInfo = data;
};
export const SET_ARTICLE_CATEGORIES = (state, data) => {
  state.categories = data;
}
export const SET_ARTICLE_LIST = (state, data) => {
  state.articleList = data;
  if (data && data.length) {
    state.articleInfo = data[0];
  }
}