

const ctx = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
const pageLocation = location.href.substring(0, location.href.indexOf(ctx))


function nextPage(){
	console.log("hello");
	window.location = pageLocation + ctx + "/menu1"
}


















