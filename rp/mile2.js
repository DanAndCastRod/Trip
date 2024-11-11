(function ($, Drupal) {
    'use strict'
    let loads = 0;
    Drupal.behaviors.mile = {
      attach: function (context, settings) {
          if(context == document){

            document.querySelectorAll('.quicktabs-loaded').forEach(_el => {
                _el.addEventListener('click',function() {
                    setTimeout(function(){
                        document.querySelectorAll('.meridiano').forEach(_el => {
                            let meridiano = _el.innerText;
                            if(meridiano === 'am') {
                               _el.innerHTML = 'a.m.'
                            }
                    
                            if(meridiano === 'pm') {
                               _el.innerHTML = 'p.m.'
                            }
                    
                            if(meridiano === 'AM') {
                               _el.innerHTML = 'A.M.'
                            }
                    
                            if(meridiano === 'PM') {
                               _el.innerHTML = 'P.M.'
                            }
                          });
                    },50);
                });
            });
            

                /*
                let randomImage = Math.floor(Math.random() * settings.bgCant) + 1;
                let images =[];
                for (var i = 0; i < settings.bgUrls.length; i++) {
                    images[i] = new Image();
                    images[i].src = preload.arguments[i];
                }
            

                document.querySelector('.mile-container').style.backgroundImage = 'url('+settings.bgUrls[randomImage]+')';
                */
                let userLogin =  document.body.classList.contains('user-logged-in');
                if(userLogin) {
                    console.log("User Logged");
                }
                else {
                    /*
                    window.addEventListener('contextmenu', function(ev) {
                        ev.preventDefault();
                        console.log('block right click');
                        return false;
                    }, false);
                    */

                    document.onkeydown = function(e) {
                        if(e.keyCode == 123) {
                           return false;
                        }
                        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                           return false;
                        }
                        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                           return false;
                        }
                        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                           return false;
                        }
                        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                           return false;
                        }
                      }
                }

                document.querySelectorAll('.meridiano').forEach(_el => {
                  let meridiano = _el.innerText;
                  if(meridiano === 'am') {
                     _el.innerHTML = 'a.m.'
                  }

                  if(meridiano === 'pm') {
                     _el.innerHTML = 'p.m.'
                  }

                  if(meridiano === 'AM') {
                     _el.innerHTML = 'A.M.'
                  }

                  if(meridiano === 'PM') {
                     _el.innerHTML = 'P.M.'
                  }
                });

               
                
                // Modal
                if(settings.isFrontPage == 1){
                    $('#messageModal').modal('show');
                }
                // Events
                /** Events Main Menu */
                document.getElementById('OpenMainMenu').addEventListener('click', () => {
                    document.getElementById("MainMenu").style.width = "100%";
                    document.getElementById('OpenMainMenu').style.opacity = "0.2";
                });

                document.getElementById('CloseMainMenu').addEventListener('click', () => {
                    document.getElementById("MainMenu").style.width = "0%";
                    document.getElementById('OpenMainMenu').style.opacity = "1";
                });

                /** */
                /** Scrip modal Posters */
                let posters = document.querySelectorAll('.btn-poster');
                posters.forEach((el) => {
                    el.addEventListener('click', function(){
                        let image = this.getAttribute('data-image');
                        document.querySelector('.content-global-modal').innerHTML = "<img src='"+image+"' />";
                        document.querySelector('.global-modal').classList.add('active');
                    });
                });

                document.querySelector('.btn-close-global-modal').addEventListener('click', ()=> {
                    document.querySelector('.global-modal').classList.remove('active');
                });
            }
            loads++;
        }
    }
})(jQuery, Drupal);
