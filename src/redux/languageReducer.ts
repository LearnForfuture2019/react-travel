export interface LanguageState {
    language:'en'|'zh'
    languageList:{name:string;code:string}[]
}
const defaultState:LanguageState = {
    language:'zh',
    languageList:[
        {name:'中文',code:'zh'},
        {name:'English',code:'en'}
    ]
}
export default (state = defaultState,action)=>{
    console.log(state,action)
    switch (action.type) {
        case 'change_language':
            const newState = {...state,language:action.payload}
            return newState
        case 'add_language':
            return {
                ...state,
                languageList:[...state.languageList,action.payload]
            }
        default:
            return state
    }

}
