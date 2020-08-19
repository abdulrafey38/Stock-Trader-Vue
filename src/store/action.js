import Api from '../api/api';
export const loadData =
({commit})=>{
    Api.get('/stock')
  .then((response) => {
            const stocks = response.data.stocks;
            const funds = response.data.funds;
            const stockPortfolio = response.data.portfolio;

            const portfolio = {
                
                stockPortfolio,
                funds,
            }
            commit('SET_STOCKS',stocks);
            commit('SET_PORTFOLIO',portfolio);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
           

        }
    

