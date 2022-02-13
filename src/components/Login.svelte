<script>
	import { user, userLogin } from '../stores';
	import Button from './UI/Button.svelte'
	import Input from './UI/Input.svelte'
	let username = '', password = '', inputComponent, defaultClass;
    $: defaultClass = 'defaultInput';
	const login = () => {
		if (username.length > 0 && password.length > 0) {
			for (let i = 0; i < $user.length; i++) {
				if (username === $user[i].username && password === $user[i].password) {
                    $userLogin = true;
					alert('Logged in successfully');
					username = password = '';
					return;
				} 
			}
			alert('Invalid username or password');
            $userLogin = false;
		} else {
			inputComponent.checkValidation('username');
			inputComponent.checkValidation('password');
		} 
	} 

</script>


<form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 ">
    <div class="mb-4">
        <Input bind:this={inputComponent} bind:valueName={username} id='username' inputType='text' bind:defaultClass/>
    </div>
    <div class="mb-6">
        <Input bind:this={inputComponent} bind:valueName={password} id='password' inputType='password' bind:defaultClass/>
    </div>
    <div class="flex items-center justify-between">
        <Button btnClass='primaryBtn' on:buttonClicked={login}>LogIn</Button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
        </a>
    </div>
</form>
			
