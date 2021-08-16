import NavbarView from "./view/navbar.js";

const ctx = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
const pageLocation = location.href.substring(0, location.href.indexOf(ctx))


export function nextPage(){
	console.log("hello");
	window.location = pageLocation + ctx + "/menu1"
}

export function initJs(){
	const navbarView = new NavbarView();
	console.log("htllllllllll");
	navbarView.setView();
}

window.onload = function(){initJs()};


document.getElementById("login-button").onclick = () => nextPage();










