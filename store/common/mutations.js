export default {
  setGithubUserInfo(state, data) {
    state.githubUser = Object.assign(state.githubUser,data);
  },
}
