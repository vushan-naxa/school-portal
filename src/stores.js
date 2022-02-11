import { writable } from "svelte/store";

export const user = writable([
    {
        username: 'hello',
        password: 'world'
    }
])