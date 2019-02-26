const socket = io.connect();

socket.on('Error',data=>{
    alert(data);
});

socket.on('iniciado', data=>{
    vm.id       = data._id;
    vm.username = data.nombre;
    
    router.push('/dashboard');

    datos = {
        id      : data._id,
        username: data.nombre,
    };
    localStorage.setItem('session',JSON.stringify(datos));
});