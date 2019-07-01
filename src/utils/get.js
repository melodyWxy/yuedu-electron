
/**
 * @description: lodash的get方法
 * @param {type}: 需要取值的对象，路径，默认值
 * @return: 对象的取值，如果找不到返回默认值
 */
export default (object, path, defaultValue) => {
    return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path)
            .reduce((o, k) => (o || {})[k], object) || defaultValue;
}