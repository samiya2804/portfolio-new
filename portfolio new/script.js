const sideMenu = document.querySelector("#sideMenu");
const navbar = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform =  'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform =  'translateX(16rem)';
}


window.addEventListener('scroll' , ()=>{
    if(scrollY > 50){
       navbar.classList.add('bg-white' , 'bg-opacity-50' , 'backdrop-blur-lg' , 'shadow-sm' , 'dark:bg-darkTheme','dark:shadow:shadow-white/20');
       navlinks.classList.remove('bg-white' ,  'shadow-sm' , 'bg-opacity-50', 'dark:border',
            'dark:shadow-white/50' ,'dark:bg-transparent');
    }else{
        navbar.classList.remove('bg-white' , 'bg-opacity-50' , 'backdrop-blur-lg' , 'shadow-sm' , 
            'dark:bg-darkTheme','dark:shadow:shadow-white/20')
        navlinks.classList.add('bg-white' ,  'shadow-sm' , 'bg-opacity-50', 'dark:border',
            'dark:shadow-white/50' ,'dark:bg-transparent'
        );
    }
})

// light mode and dark mode

   if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
   document.documentElement.classList.add('dark')
   }else{
    document.documentElement.classList.remove('dark')
   }

   function toggleTheme(){
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        document.documentElement.classList.toggle('dark')

    if( document.documentElement.classList.contains('dark')){
        // Whenever the user explicitly chooses dark mode
          localStorage.theme = 'dark'
    }else{
        // Whenever the user explicitly chooses light mode
          localStorage.theme = 'light'
    }
   }