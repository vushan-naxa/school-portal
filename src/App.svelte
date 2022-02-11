<script>
	import { user } from './stores';
	import Button from './components/UI/Button.svelte'
	import Input from './components/UI/Input.svelte'
	let buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
	let defaultInput = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
	let errorInput = 'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
	let labelClass = 'block text-gray-700 text-sm font-bold mb-2';
	let pClass = 'text-red-500 text-xs italic';
	let username, password;
	let nullList = ['', undefined, null, 'null', 'undefined'];
	const login = () => {
		username = document.getElementById('username').value; 
		password = document.getElementById('password').value;
		if (nullList.includes(username) && nullList.includes(password)) {
			checkValidation('username');
			checkValidation('password');
		} else {
			for (let i = 0; i < $user.length; i++) {
				if (username === $user[i].username && password === $user[i].password) {
					alert('Logged in successfully');
					username = password = '';
					return;
				} 
			}
			alert('Invalid username or password');
		} 
	} 

	const checkValidation = (dataName) => {
		let dat = document.getElementById(dataName);
		console.log(dat.value)
		if (dat.value == '') {
			dat.className = errorInput;
			document.getElementById(`${dataName}-message`).innerHTML = `${dataName} is required`;
		} else {
			dat.className = defaultInput;
			document.getElementById(`${dataName}-message`).innerHTML = '';
		}
	}

	const handleValidation = (e) => {
		checkValidation(e.detail.target.id)
	}
	
</script>

<main class='container'>
	
	<div class='flex h-screen justify-center items-center'>
		<div class="w-full max-w-xs ">
			<form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 ">
			<div class="mb-4">
				<Input valueName={username} id='username' {defaultInput} on:handleValidation={handleValidation} inputType='text' {labelClass} {pClass}/>
			</div>
			<div class="mb-6">
				<Input valueName={password} id='password' {defaultInput} on:handleValidation={handleValidation} inputType='password' {labelClass} {pClass}/>
			</div>
			<div class="flex items-center justify-between">
				<Button {buttonClass} on:buttonClicked={login} buttonName="LogIn"/>
				<a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
				Forgot Password?
				</a>
			</div>
			</form>
			
		</div>
	</div>
</main>

<style>
</style>