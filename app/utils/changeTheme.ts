import useThemeData from "../lib/store/themeStore";


const icons = document.querySelector('.iconsTheme');


function setDarkMode(){
    document.body.classList.add('.darkMode')
}

function setLightMode(){
    document.body.classList.remove('.darkMode')
}

icons?.addEventListener('click', () =>{
    const {theme} = useThemeData();
    if(theme === true){
        setDarkMode();
    }else{
        setLightMode()
    }
})