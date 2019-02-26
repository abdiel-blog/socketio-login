let datos={};
if(localStorage.getItem('session'))
    datos = JSON.parse(localStorage.getItem('session'));

var vm = {
    id: (localStorage.getItem('session'))? datos.id: '',
    username:(localStorage.getItem('session'))? datos.username: ''
};

const router = new VueRouter({
    routes,
});

vm = new Vue({
    el:'#app',
    router,
    data:{
        id: (localStorage.getItem('session'))? datos.id: '',
        username:(localStorage.getItem('session'))? datos.username: ''
    }
});

