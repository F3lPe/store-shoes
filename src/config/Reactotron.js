import Reactotron from 'reactotron-react-js';
import { reactotronRedux} from 'reactotron-redux';

//verificando se o usuário está em ambiente de dev
if(process.env.NODE_ENV === 'development'){
    const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();
    tron.clear();
    console.tron = tron

}