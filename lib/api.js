import http from './http'
/**  -----  article  ----- **/
export const login = (data) => http("/login", data, "POST");                                             // 登录
export const githubLoginInfo = (data) => http("/githubLoginInfo", data, "GET");                          // github登录

/**  -----  article  ----- **/
export const getArticleList = (data) => http("/article/list", data);                                     // 列表
export const getArticleDetail = (data) => http(`/articleDetail/${data.id}`);                             // 详情

/**  -----  mood  ----- **/
export const moodList = (data) => http("/mood/list", data);                                              // 列表

/**  -----  brand  ----- **/
export const brandList = (data) => http("/brand/list", data);                                            // 列表

/**  -----  message board  ----- **/
export const messageList = (data) => http("/message/list", data);                                        // 列表
export const addMessage = (data) => http("/message/add", data, "POST");                                  // 新增


/**  -----  about  ----- **/
export const aboutInfo = () => http("/about/info");                                                      // 关于

/**  ------  百度统计  -------  **/
export const baiduStatistics = () => http("/baiduStatistics");                                           // 站点数据
