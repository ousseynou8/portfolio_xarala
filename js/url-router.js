const urlPageTitle = "JS SPA PORTFOLIO"


document.addEventListener("click", (e) => {
    const { target} = e;

    if(!target.matches("nav a")){
        return;
    }
    e.preventDefault();
    urlRoute();
})


const urlRoutes= {
    404: {
        template : "/templates/404.html",
      title: "404 | " + urlPageTitle,
      description:""
    },
    "/":{
        template : "/templates/index.html",
        title: "Home | " + urlPageTitle,
        description:""
    },
    "/about":{
        template : "/templates/about.html",
        title: "Qui suis-je | " + urlPageTitle,
        description:""

    },
    "/portfolio":{
        template : "/templates/portfolio.html",
        title: "Réalisation | " + urlPageTitle,
        description:""

    },
    "/contact" :{
        template : "/templates/contact.html",
        title: "Contact | " + urlPageTitle,
        description:""
    }
}



const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
}

const urlLocationHandler =  async () => {
const location = window.location.pathname;
if(location.length == 0){
    location = "/";
}

const route = urlRoutes[location] || urlRoutes[404];
const html = await fetch(route.template).then((response) => response.text());
document.getElementById("content").innerHTML = html;
document.title = route.title;
}

window.onpopstate = urlLocationHandler();
window.route = urlRoute;

urlLocationHandler();