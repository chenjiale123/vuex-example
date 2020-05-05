export const showUsers = ({ commit }) => commit('showUsers')

export const addUsers = ({ commit }, payload) => {
  commit('addUsers', payload)
}
export const addPassword = ({ commit }, payload) => {
  commit('addPassword', payload)
}
export const getaddContent=(text,num)=>{
   text.commit('add',num)
 }
