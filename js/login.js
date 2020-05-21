function validar(){
    var correo1, clave1;
    correo1= document.getElementById("correo").value;
    clave1= document.getElementById("clave").value;
    if (correo1=="usuario05@gmail.com" && clave1=="paginaweb123"){
        alert("Bienvenido al Software Shop");
        direccionar();
        }else{
            alert("Correo o contraseña incorrecta, vuelva a ingresar");
        }  
    }
function direccionar(){
    document.location.href="https://jramirez05-del.github.io/software/";
}