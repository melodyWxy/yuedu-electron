export default (...agrs) => {
    return dispatch => {
        const propsMethods = {};
        agrs.forEach(item=>{
            propsMethods[item.name] = () => item(dispatch)
        })
        return propsMethods
    }
}