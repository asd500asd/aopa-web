// TODO 可以认为是 store 的计算属性

export default {
  userInfoName(state) {
    return state.userInfo ? state.userInfo.userName : '';
  },
};
