/**
 * Created by bpeng on 7/27/16.
 */

export function isUndefOrNullOrEmpty(obj) {
    return typeof obj === 'undefined'
        || obj == null
        || (Object.keys(obj).length === 0 && obj.constructor === Object);
}
