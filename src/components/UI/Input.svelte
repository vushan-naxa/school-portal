<script>
    export let defaultClass, inputType, valueName, id;
    let capId = id.charAt(0).toUpperCase() + id.slice(1);
    export const checkValidation = (dataName) => {
		let dat = document.getElementById(dataName);
		if (dat.value === '') {
			defaultClass = 'errorInput';
			document.getElementById(`${dataName}-message`).innerHTML = `* ${dataName} is required`;
		} else {
			defaultClass = 'defaultInput';
			document.getElementById(`${dataName}-message`).innerHTML = '';
		}
	}
    const handleValidation = (e) => {
        checkValidation(e.target.id);
    }
</script>

<label class='primaryLabel' for="{id}">
{capId}
</label>
{#if inputType === 'password'}
<input class={defaultClass} id="{id}" type="password" placeholder="{capId}" bind:value={valueName} on:input={handleValidation}>
{:else}
<input class={defaultClass} id="{id}" type="text" placeholder="{capId}" bind:value={valueName} on:input={handleValidation}>
{/if}
<p class='primaryP' id='{id}-message'></p>

<style>
    .primaryLabel {
        @apply block text-gray-700 text-sm font-bold mb-2;
    }
    .primaryP {
        @apply text-red-500 text-xs italic;
    }
    .defaultInput {
        @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
    }
    .defaultInput:focus {
        @apply outline-none;
    }
    .errorInput {
        @apply shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight;
    }
    .errorInput:focus {
        @apply outline-none;
    }
</style>