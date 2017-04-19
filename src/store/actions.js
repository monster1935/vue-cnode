import axios from 'axios';

export const getArticleList = ({commit},data) => {
  let url = 'https://cnodejs.org/api/v1/topics' + (data || '');
  axios.get(url).then(res => {
    commit('SET_ARTICLE_LIST',res.data.data);
  }).catch(error => {
    console.log(error);
  });
}