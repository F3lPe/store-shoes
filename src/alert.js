import { Notify } from "notiflix";

export default function handleAlert({type, message}){
    /* tipos de mensagem: success, failure, info, warning, custom */
    Notify.init({
        clickToClose: true,
        showOnlyTheLastOne: true,
        success: {background: 'rgb(50, 205, 50)'},
    })
    Notify[type](message)
}