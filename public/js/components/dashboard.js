
const dashboard ={
    template:`
    <div>
        Hola {{username}}!
        <a href='#' @click.prevent='logout'>Cerrar sesion</a>
    </div>
    `,
    data(){
        return {
            username:"",
            contactos:[],
        };
    },
    mounted(){
        this.username=vm.username;
    },
    methods:{
        logout(){
            vm.id       = '';
            vm.username = '';
            
            localStorage.removeItem('session');

            router.push('/');
        }
    }
}