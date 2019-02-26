const registro = {
    template:`
    <form @submit.prevent='registrar'>
        <h1>Registrar usuario</h1>
        <div>
            <input type='text' v-model='user' placeholder='Nombre de usuario' ref='username'>
            <input type='password' v-model='pass' placeholder='Contraseña'>
            <input type='password' v-model='repass' placeholder='Repetir contraseña'>
            <input type='submit' value='Registrarse' :disabled='contraIdentica' >
            {{pass.lenght}}
        </div>
        ¿Ya tienes cuenta? <router-link to='/'>Inicia sesion</router-link>        
    </form>
    `,
    data(){
        return {
            user  : '',
            pass  : '',
            repass: ''
        }    
    },
    mounted(){
        this.$refs.username.focus();
    },
    computed:{
        contraIdentica(){
            return this.pass!==this.repass || (this.pass.length==0) || (this.repass.length==0) || (this.user.length==0)
        }
    },
    methods:{
        registrar(){
            socket.emit('registrar',{user:this.user,pass:this.pass});
        }
    }
}