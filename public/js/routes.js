const noAutenticado = (to, from, next)=>{
    if(vm.id=='')  return next('/');
    return next();
}

const autenticado = (to, from, next)=>{
    if(vm.id!='') return next('/dashboard');
    return next();
}


const routes = [
    {
        path:'/',
        component: home,
        beforeEnter: autenticado
    },
    {
        path:'/registro',
        component: registro,
        beforeEnter: autenticado
    },
    {
        path:'/dashboard',
        component:dashboard,
        beforeEnter:noAutenticado,
    }
];

