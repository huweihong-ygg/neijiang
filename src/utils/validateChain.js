/** 自定义链式验证工具 */

/**
 *是否是手机号码
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function isMobilePhone(rule, value, callback) {
  if (!value) {
    return callback(new Error('手机号码不能为空!'))
  }
  if (!/^1[0-9]{10}$/.test(value)) {
    return callback(new Error('手机号码格式错误!'))
  } else {
    return callback()
  }
}

/**
 *是否是固定电话
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function isTelephone(rule, value, callback) {
  if (!value) {
    return callback(new Error('固定电话不能为空!'))
  }
  // /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
  // /^([0-9]{3,4}-)?[0-9]{7,8}$/
  if (!/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value)) {
    return callback(new Error('固定电话格式错误!'))
  } else {
    return callback()
  }
}

/**
 *是否是邮箱
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function isEmail(rule, value, callback) {
  if (!value) {
    return callback(new Error('邮箱不能为空!'))
  }
  if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value)) {
    return callback(new Error('邮箱格式错误!'))
  } else {
    return callback()
  }
}

/**
 * 是否是身份证
 * @param {Object} rule
 * @param {Object} value
 * @param {Object} callback
 */
export function isIdCard(rule, value, callback) {
  if (!value) {
    return callback(new Error('身份证不能为空!'))
  }
  let regex = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/
  if (!regex.test(value)) {
    return callback(new Error('身份证格式错误!'))
  } else {
    return callback()
  }
}

/**
 * 是否是体温
 * @param {Object} rule
 * @param {Object} value
 * @param {Object} callback
 */
export function isTemperature(rule, value, callback) {
  if (!value) {
    return callback(new Error('体温不能为空!'))
  }
  let regex =/((3[5-9])|40).\d/
  if (!regex.test(value)) {
    return callback(new Error('体温值错误!'))
  } else {
    return callback()
  }
}
