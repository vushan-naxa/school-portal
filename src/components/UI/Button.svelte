<script>
    import {createEventDispatcher} from 'svelte';
    export let btnClass;
    const dispatch = createEventDispatcher();

    const buttonClick = () => {
        dispatch('buttonClicked');  //dispatch event
    }
    
</script>

<button class={btnClass} type='submit' on:click|preventDefault={buttonClick}><slot></slot></button>

<style>
    .primaryBtn {
        @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
    }
    .primaryBtn:hover {
        @apply bg-blue-700;
    }
</style>