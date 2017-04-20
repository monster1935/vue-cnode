/**
 * 设置文章信息
 * @param  {Object} state 
 * @param  {Object} data  
 * @return {}       
 */
export const SET_ARTICLE = (state, data) => {
  state.articleInfo = data;
};

/**
 * 设置文章列表类别
 * @param  {Object} state 
 * @param  {Object} data  
 * @return {}       
 */
export const SET_ARTICLE_CATEGORIES = (state, data) => {
  state.categories = data;
}

/**
 * 设置文章列表，
 * @param  {Object} state 
 * @param  {Object} data  
 * @return {}       
 */
export const SET_ARTICLE_LIST = (state, data) => {
  state.articleList = data;
  if (data && data.length) {
    state.articleInfo = data[0];
  }
}