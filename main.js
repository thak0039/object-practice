var myCards = [{
        img: './img/Pinki-profesional.png',
        name: 'Pinki Thakor',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ea'
    },

    {
        img: 'https://cdn.shopify.com/s/files/1/1964/8565/articles/lawyer-portrait_2048x2048.jpg?v=1597348134',
        name: 'Andrada Defoi',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ea'
    },
    {
        img: 'https://image.shutterstock.com/image-photo/headshot-cute-asian-woman-professional-260nw-518624602.jpg',
        name: 'Rupal Patel',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ea'
    }

];

let section = document.createElement("section");
document.body.appendChild(section);
for (let i = 0; i < myCards.length; i++) {

    let cards = document.createElement("div");
    let img1 = document.createElement('img');
    img1.setAttribute('src', myCards[i].img);
    img1.setAttribute('class', 'myimg');
    cards.appendChild(img1);
    let name1 = document.createElement('p');
    name1.innerHTML = myCards[i].name;
    cards.appendChild(name1);
    let des1 = document.createElement('p');
    des1.innerHTML = myCards[i].des;
    cards.appendChild(des1);
    let btn1 = document.createElement("button");
    btn1.innerHTML = "Check More";
    cards.appendChild(btn1);
    section.appendChild(cards);

}