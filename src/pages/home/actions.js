import { ADD, LESS, CATEGORIES } from "./action_type"
import request from '../../utils/request'

export const handleAdd = dispatch => {
    dispatch({
        type: ADD
    })
}

export const handleLess = dispatch => {
    dispatch({
        type: LESS
    })
}

export const getData = dispatch => {
    let categories = request('https://novel.juhe.im/categories');
    categories.then(res=>{
        dispatch({
            type: CATEGORIES,
            data: res
        })
    })
}