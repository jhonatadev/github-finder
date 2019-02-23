(function() {
	const search = document.getElementById('search');
	const profile = document.getElementById('profile');
	const url = "https://api.github.com/users";
	const client_id = "e53febbd554644d70b00";
	const client_secret = "0eabb5d3af6d3ae419c42913f660f0523a19140e";

	async function getUser(user){
		const profileResponse = await fetch(
			`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
			);

		const profile = profileResponse.json();

		return profile;
	}

	search.addEventListener("keyup", e => {
		const user = e.target.value;

		getUser(user).then(res => console.log(res));
	});
})();