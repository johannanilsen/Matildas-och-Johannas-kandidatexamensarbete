// REDUCER 
const idReducer = (action) =>{
        return   Math.floor(Math.random() * Date.now()).toString()
    }
  
  export default idReducer;
