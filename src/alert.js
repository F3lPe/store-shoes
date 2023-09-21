import { Notify } from "notiflix";

export default function handleAlert({type, message}){
    /* tipos de mensagem: success, failure, info, warning, custom */
    Notify.init({
        clickToClose: true,
    })
    Notify[type](message)
}