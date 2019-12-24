const defaultState = {
    sort:''
  }
  export default(state=defaultState,action)=>{
    switch(action.type){
      case 'loadDate':
        return {
          sort : action.dir
        }
        default:
          return state
    }
  }