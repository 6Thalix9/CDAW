import{createStore} from "vuex";

const store = createStore({
    state:{
        user:{
            data:{name: "Berkehan"},
            token: 1,
        }
    },
    getters:{},
    actions:{},
    mutations:{},
    modules:{},
})

export default store;