const print = input => console.log(input)

const appendToBody = html => {
	const body = document.body;
	let wrap = document.createElement('div');
	wrap.innerHTML = html;
	body.appendChild(wrap);
}