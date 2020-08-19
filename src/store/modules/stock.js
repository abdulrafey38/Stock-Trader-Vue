import stocks from '../../data/stocks';

const state = 
{
    stocks:[]
};
const mutations =
{
    'SET_STOCKS' (state,payload){
        state.stocks=payload;
    },
    'RAND_STOCK'(state){
        state.stocks.forEach(stock => {
            stock.price = Math.round (stock.price * (1 + Math.random() - 0.5));
            
        });

    }
   
};

const actions = {
    buy: ({commit},order) => {
        commit('BUY_STOCK',order);
    },
    initStocks:({commit}) => {
        commit('SET_STOCKS',stocks);
    },
    randomizeStocks:({commit}) =>{
        commit("RAND_STOCK");
    }
}

const getters = {
    stocks:state =>{
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}