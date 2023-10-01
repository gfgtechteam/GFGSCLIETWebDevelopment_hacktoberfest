btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(function(quote){
        let output = '';
                    output += `
                    <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                    <p class="Anime">Anime : ${quote.anime}</p>
                                        <p class="quote">Quote: "${quote.quote}"</p>
                                        <p class="character">Character: ${quote.character}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                document.querySelector('.output').innerHTML = output;
    }) 
})

document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      const $notification = $delete.parentNode;
  
      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

  $(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });
