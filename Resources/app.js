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

const members = [
    {
        name: "John",
        imgUrl : "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        position: "Founder and CEO",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus libero cum quaerat architecto iste delectus dolores ex blanditiis iure expedita?",
    },{
        name: "Milan",
        imgUrl : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80",
        position: "Lead Developer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus libero cum quaerat architecto iste delectus dolores ex blanditiis iure expedita?",
    },{
        name: "Smith",
        imgUrl : "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
        position: "Marketing Executive",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus libero cum quaerat architecto iste delectus dolores ex blanditiis iure expedita?",
    },{
        name: "Natasha",
        imgUrl : "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg",
        position: "Senior Developer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus libero cum quaerat architecto iste delectus dolores ex blanditiis iure expedita?",
    }
]

const textContainer = document.querySelector('.people')

document.addEventListener('DOMContentLoaded', () =>{
    let text = '';
    for(let i =0 ; i < members.length ; i ++){
        text += `
        <div class="main-card">
            <div class="photo">
                <img src="${members[i].imgUrl}">
            </div>
            <div class="name">
                <h1 class="thin no-border">Hi, I'm <b>${members[i].name}</b><br><small>${members[i].position}</small></h1>
            </div>
            <div class="description">
                ${members[i].description}
            </div>
            <div class="socials">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </div>
        `
    }
    textContainer.innerHTML = text;
})

const review = [
    {
        imgUrl: "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"
    },{
        imgUrl: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png"
    },{
        imgUrl: "https://www.sony.co.uk/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg"
    },{
        imgUrl: "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg"
    }
]

document.addEventListener('DOMContentLoaded', () =>{
    const reviewTab = document.querySelector('.reviews')
    let str = `<div class="pics">
    <img src="${review[0].imgUrl}" alt="">
</div>`

    for(let i =1; i< review.length; i++){
        str += `<div class="pics">
        <img src="${review[i].imgUrl}" alt="">
    </div>`
    }
    str += `<div class = "rating">
    <div class = "text">⭐️⭐️⭐️⭐️⭐️</div>
    </div>`
    reviewTab.innerHTML = str;
})