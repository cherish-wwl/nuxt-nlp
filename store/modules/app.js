import { getCommonData } from '@/api/localData'
const app = {
  state: {
    userManageBaseUrL:"",
    consoleBaseUrl:"",
    footerText:'',
    techDocmentGlobalDesrc:"",
    MbHeaderTopValue:"0"
  },
  mutations: {
    SET_userManageBaseUrL: (state, userManageBaseUrL) => {
      state.userManageBaseUrL = userManageBaseUrL
    },
    SET_consoleBaseUrl: (state, consoleBaseUrl) => {
      state.consoleBaseUrl = consoleBaseUrl
    }, 
    SET_footerText: (state, footerText) => {
      state.footerText = footerText
    },
    SET_techDocmentGlobalDesrc:(state,techDocmentGlobalDesrc) =>{
      state.techDocmentGlobalDesrc = techDocmentGlobalDesrc
    },
    SET_MbHeaderTopValue: (state, MbHeaderTopValue) =>{
      state.MbHeaderTopValue = MbHeaderTopValue
    }
  },
  actions: {
    initCommonData:({commit}) => {
      commonData.init()
      getCommonData().then(res => {
        cosnole.log(res)
      })
      // console.log(commonData)
      commit('SET_userManageBaseUrL', commonData.userManageBaseUrL)
      commit('SET_consoleBaseUrl', commonData.consoleBaseUrl)
      commit('SET_footerText', commonData.footerText) 
      commit('SET_techDocmentGlobalDesrc',commonData.techDocmentGlobalDesrc)
    },
    setMbHeaderTopValue:({commit},value) => {
      // console.log("---------------------")
      // console.log(value)
      commit("SET_MbHeaderTopValue",value+'px')
    }
  }
}

export default app
