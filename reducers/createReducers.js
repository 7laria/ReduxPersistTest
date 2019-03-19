/**
 * Ti crea il reducer. Serve per visualizzare in modo più semplice le varie azioni piuttosto che con lo switch 
 * @param {*} initialState 
 * @param {*} handlers (un oggetto con tutte le possibili action)
 */

export default function createReducers(initialState,handlers){
    return function reducer(state=initialState){
        if(handlers.hasOwnProperty(action.type))
            return handlers[action.type](state,action)
        else
            return state;
    }
}