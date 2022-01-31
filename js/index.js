let darkTheme = localStorage.getItem('theme')
const switchBtn = document.querySelector('#chk')
const themableElements = document.querySelectorAll('.themable');

// if dark mode disabled
const enableDarkTheme = () => {
      themableElements.forEach(element => {
        element.classList.contains('themable')
        {
            element.classList.add('dark-theme')
        }
        localStorage.setItem('theme','enabled')
    } )
}

// if dark mode enabled 
const disableDarkTheme = () =>{
    themableElements.forEach(element => {
        element.classList.contains('themable')
        {
            element.classList.remove('dark-theme')
        }
        localStorage.setItem('theme','disabled')
    } )
}

// on load check local storage Theme value 
if(darkTheme == "enabled"){
    enableDarkTheme();
}

// check dark mode enable or disable on local storage

switchBtn.addEventListener('click', () => {
    darkTheme = localStorage.getItem('theme');
   if(darkTheme !== 'enabled'){
         enableDarkTheme();
    //    console.log(darkTheme);
   }else{
    disableDarkTheme();
    // console.log(darkTheme);
   }
})







