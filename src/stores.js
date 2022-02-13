import { writable } from "svelte/store";

export const user = writable([
    {
        username: 'hello',
        password: 'world'
    }
])

export const userLogin = writable(false)