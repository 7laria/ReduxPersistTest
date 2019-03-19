import {
    INCREMENT,
    DECREMENT
  } from "../actions/types.js";
  
  import initialState from "../initialState.js";
import createReducers from "./createReducers.js";
  

/**
 * create reducer ti crea le varie funzioni che prima mettevi nello switch
 * la sintassi per il secondo argomento è un oggetto dive ogni attributo è un'azione:
 * [nomeAzione](state,action){
 * return nuovo stato
 * }
 */
  export default pippoReducer = createReducers(initialState.pippo, {
      [INCREMENT](state,action){
          return {
              ...state,
              pippo:state.pippo+1
          }
      },
      [DECREMENT](state,action){
          return {
              ...state,
              pippo:state.pippo-1
          }

      }
    
  })
  