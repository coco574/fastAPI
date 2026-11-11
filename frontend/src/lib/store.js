import { writable } from 'svelte/store' 
const persist_storage = (key, initValue) => {
    const storeValueStr = localStorage.getItem(key)
    const store = writable(storeValueStr != null ? JSON.parse(storeValueStr) : initValue)
    store.subscribe((val) => {
        localStorage.setItem(key, JSON.stringify(val))
    })
    return store
}
export const page = persist_storage("page",0)