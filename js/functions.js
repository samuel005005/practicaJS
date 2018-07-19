function setMessage(obj,Message){
    obj.value = Message;
}

function validate(value){
    if(value==null){
        return false;
    }else if(value ==''){
        return false;
    }
    return true;
}