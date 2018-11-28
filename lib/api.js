import http from './http'
/**  -----  article  ----- **/
export const login = (data) => http("/login", data, "POST");                                             // 登录
export const githubLoginInfo = (data) => http("/githubLoginInfo", data, "GET");                          // github登录

/**  -----  article  ----- **/
export const getArticleList = (data) => http("/article/list", data);                                     // 列表
export const getArticleDetail = (data) => http(`/articleDetail/${data.id}`);                             // 详情
export const addArticle = (data) => http("/article/add", data, "POST");                                  // 新增
export const delArticle = (data) => http(`/article/delete/${data.id}`,{}, "DELETE");                     // 删除
export const updateArticle = (data) => http("/article/update", data, "PUT");                             // 更新


/**  -----  mood  ----- **/
export const moodList = (data) => http("/mood/list", data);                                              // 列表
export const addMood = (data) => http("/mood/add", data, "POST");                                        // 新增
export const delMood = (data) => http(`/mood/delete/${data.id}`,{}, "DELETE");                           // 删除


/**  -----  brand  ----- **/
export const brandList = (data) => http("/brand/list", data);                                            // 列表
export const addBrand = (data) => http("/brand/add", data, "POST");                                      // 新增
export const delBrand = (data) => http(`/brand/delete/${data.id}`,{}, "DELETE");                         // 删除
export const updateBrand = (data) => http("/brand/update", data, "PUT");                                 // 更新
export const disabledBrand = (data) => http(`/brand/disabled/${data.id}`,data , "DELETE");               // 禁用启用


/**  -----  message board  ----- **/
export const messageList = (data) => http("/message/list", data);                                          // 列表
export const addMessage = (data) => http("/message/add", data, "POST");                                  // 新增


/**  -----  about  ----- **/
export const aboutInfo = () => http("/about/info");                                                      // 关于
export const updateAbout = (data) => http("/about/update",data, 'PUT');                                  // 更新关于
