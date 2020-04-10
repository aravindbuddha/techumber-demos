//a self executeing function
(function(){
	/*cacheing all nodes into varibales*/
	var nav=document.getElementById('nav-wrap'),
	main=document.getElementById('main-wrap'),
	navIcon=document.getElementById('nav-icon');
	//Events 
	nav.addEventListener('mouseover',activate);
	navIcon.addEventListener('mouseover',activate);
	nav.addEventListener('mouseout',inActivate);
	//activate funciton to add css class active to nodes
	function activate(){
		nav.classList.add('active');
		main.classList.add('active');
		navIcon.classList.add('active');
	}
	//to remove active class form nodes.
	function inActivate(){
		nav.classList.remove('active');
		main.classList.remove('active');
		navIcon.classList.remove('active');
	}
})();