export class Router {

  routes = {}
  
  add(routeName, page){
    this.routes[routeName] = page
  }
  

   route(event){
    event = event || window.event
    event.preventDefault() 
  
    window.history.pushState({},"",event.target.href)
  
    this.handle()
  }
  
   handle(){
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['/404']
    fetch(route) 
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
      this.changeBackground(pathname)
    })
  }

   changeBackground(pathname) {
    const body = document.body;
    
    switch (pathname) {
      case '/':
        body.style.backgroundImage = "url('./assets/01.png')";
        break;
      case '/explorer':
        body.style.backgroundImage = "url('./assets/02.png')";
        break;
      case '/universo':
        body.style.backgroundImage = "url('./assets/03.png')";
        break;
      default:
        body.style.backgroundImage = "url('./assets/01.png')";
    }
  }
}


