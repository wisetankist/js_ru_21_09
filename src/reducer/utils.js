import {Map} from 'immutable'

export function arrToMap(arr, ItemRecord) {
    return arr.reduce((acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item), new Map({}))
}

export function mapToArr(obj) {
    return Object.values(obj)
}