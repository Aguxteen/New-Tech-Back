const validar = (body)=>{

var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

//validacion de nombre
    if(!body.nombre){
        return false
    }

//validacion de apellido

    if(!body.apellido){
        return false
    }
//validacion de email

    if(!body.email){
        return false
    }else{
        if(!expReg.test(body.email)){
            return false
        }
    }
//validacion de pais

    if(!body.pais){
        return false
    }
//validacion de comentario

    if(!body.comentario){
        return false
    }

    return true
}

module.exports = validar