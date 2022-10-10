//Tawk Tawk
var Tawk_API=Tawk_API||{}; 
var Tawk_LoadStart = new Date();
//Google Analytics
window.dataLayer = window.dataLayer || [];

export function init() {
  console.log('Page initiated!');

    //Tawk Tawk
    (function(){
            var s1 = document.createElement("script");
            var s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6343dd7154f06e12d8994df7/1gf0hi1pe';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1, s0);
    })();

    //Google Analytics
    (function(){
            var s1 = document.createElement("script");
            var s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://www.googletagmanager.com/gtag/js?id=G-15Y9BG0QSZ';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin','*');
            s1.onload = function(){
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-15Y9BG0QSZ');
            }
            s0.parentNode.insertBefore(s1, s0);
    })();
}