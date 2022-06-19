
const initialState = {
    visibleModal:false,
    ComponentContenModal:<p>Modal default</p>,
    title:'',
    heightModal:''
}


const modalLibraryReducers= (state = initialState, action) => {
  switch (action.type) {


  case 'OPEN_MODAL': {
    state.visibleModal = true;
    state.ComponentContenModal = action.Component;
    state.title = action.title;
    return { ...state }

}
  case 'CLOSE_MODAL':{
    state.visibleModal=false;
    return { ...state}
  }
  default:
    return { ...state}
  }
}


export default modalLibraryReducers