const template = `
<nav class="nav-container">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        <img src="images/logo_on.svg" style="width: 180px; margin-top: 10px;">
      </a>
     
     <i class="fas fa-bars"></i>
    </div>
  </nav>
`

export default class NavbarView {
	setView = () => {
		const navbar_view = document.getElementById("nav-bar");
		navbar_view.innerHTML = template;
	}
	
}





