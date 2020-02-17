// 引入mutation-types
import { REQUEST, REQ_SUCCESS, REQ_ERROR } from './mutation-types.js'
// 包含多个直接修改状态数据的方法的对象
export default {
  [REQUEST] (state) {
    state.firstView = false
    state.loading = true
  },
  [REQ_SUCCESS] (state, users) {
    state.loading = false
    state.users = users
  },
  [REQ_ERROR] (state, error) {
    state.loading = false
    state.errorMsg = error
  }
}
