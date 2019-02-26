const home = {
    template:`
    <form @submit.prevent='iniciar'>
        <h1>Iniciar sesion</h1>
        <div>
            <input type='text' v-model='user' placeholder='Nombre de usuario' ref='username'>
            <input type='password' v-model='pass' placeholder='Contraseña'>
            <input type='submit' value='Iniciar' :disabled='datos' >
        </div>
        ¿No tienes cuenta? <router-link to="/registro">Registrate aqui</router-link>
    </form>
    `,
    data(){
        return {
            user:'',
            pass:''
        }    
    },
    computed:{
        datos(){
            return this.user.length==0 || this.pass.length==0;
        }
    },
    mounted(){
        this.$refs.username.focus();
    },
    methods:{
        iniciar(){
            socket.emit('iniciar',{user:this.user,pass:this.pass});
        }
    }
}