import { ADD, LESS, CATEGORIES } from "./action_type"
import request from '../../utils/request'

const handleAdd = dispatch => {
    dispatch({
        type: ADD
    })
}

const handleLess = dispatch => {
    dispatch({
        type: LESS
    })
}

const getData = dispatch => {
    let categories = request('https://novel.juhe.im/categories');
    categories.then(res=>{
        dispatch({
            type: CATEGORIES,
            data: res
        })
    })
}

export default (dispatch) => ({
    handleAdd: () => handleAdd(dispatch),
    handleLess: () => handleLess(dispatch),
    getData: () => getData(dispatch),
})