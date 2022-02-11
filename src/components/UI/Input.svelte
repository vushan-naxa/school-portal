<script>
    import {createEventDispatcher} from 'svelte';
    export let defaultInput, inputType, labelClass, pClass, valueName, id;
    let capId = id.charAt(0).toUpperCase() + id.slice(1);
    const dispatch = createEventDispatcher();

    const handleValidation = (e) => {
        dispatch('handleValidation', e);
    }
</script>

<label class={labelClass} for="{id}">
{capId}
</label>
{#if inputType === 'password'}
<input class={defaultInput} id="{id}" type="password" placeholder="{capId}" bind:value={valueName} on:input={handleValidation}>
{:else}
<input class={defaultInput} id="{id}" type="text" placeholder="{capId}" bind:value={valueName} on:input={handleValidation}>
{/if}
<p class={pClass} id='{id}-message'></p>