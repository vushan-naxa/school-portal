<script>
    import {createEventDispatcher} from 'svelte';
    export let buttonName;
    export let buttonClass;
    const dispatch = createEventDispatcher();

    const buttonClick = () => {
        dispatch('buttonClicked');
    }
    
</script>

<button class={buttonClass} type='button' on:click={buttonClick}>{buttonName}</button>