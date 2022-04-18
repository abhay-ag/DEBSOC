const footer = document.querySelector('.footer')

document.addEventListener('DOMContentLoaded', () =>{
    let date = new Date;
    let getYear = date.getFullYear();
    footer.innerHTML = `Copyright &copy; ${getYear} DEBSOC. All rights reserved.`
})

$(document).ready(() => {
    $(document).on('submit', '#contact-form', function() {
        return false;
       });
})