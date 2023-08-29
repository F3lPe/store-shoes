import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`


body{
    background: #282c34;
}

div, p, a{
    color: #eee;
    text-decoration: none;
    list-style: none;
}

header{
    width: 100%;
    height:60px;
    margin-bottom: 40px;
    display:flex;
    justify-content:space-between;  
    align-items: center;
    text-decoration: none !important;
}

li{
    height: 300px;
    display: grid;
}

.ant-button{
color:#eee;
width: 100px;
}

.ant-button:hover {
    color: #eee !important;
}
`;
