// 定义基础 URL
const BASE_URL = 'http://localhost:8890/api';

// 定义各个接口路径
const API_USER = {
  register:`${BASE_URL}/user/register`,
  login:`${BASE_URL}/user/login`,
  getMessage:`${BASE_URL}/user`,
  update:`${BASE_URL}/user/update`,
  serachAllUser:`${BASE_URL}/user/search`,

};
const API_ANNOUNCEMENT = {
  page: `${BASE_URL}/anno/page`,
  create: `${BASE_URL}/anno/create`,
  delete: `${BASE_URL}/anno/delete`,
};
const API_FORUM = {
  getUserForum: `${BASE_URL}/forum`,
  delete: `${BASE_URL}/forum/delete`,
  page: `${BASE_URL}/forum/page`,
  create: `${BASE_URL}/forum/create`
};
const API_COMMENT = {
  create: `${BASE_URL}/comm/create`,
  getPosts: `${BASE_URL}/posts`,
  login: `${BASE_URL}/auth/login`,
  logout: `${BASE_URL}/auth/logout`
};
const API_RENTAL = {
  page: `${BASE_URL}/rental/page`,
  getPosts: `${BASE_URL}/rental/create`
};

// 导出常量和对象
// export { BASE_URL, API_USER ,API_ANNOUNCEMENT};
