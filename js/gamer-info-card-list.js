const gamerlist = [
{
    perinfo: {
    img: `img/home/cover-img.jpg`,
    name: `Censon, Renz M.`,
    gquote: `"Lorem ipsum dolor sit amet consectetur adipisicing elit."`,
    about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quae saepe minus suscipit doloribus dolor consectetur culpa ducimus. Pariatur soluta corrupti ut qui ad adipisci accusamus. Quam mollitia quia voluptates.`,
    },
    ingame: {
    game1: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game2: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game3: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game4: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game5: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game6: {
        gamename: `MLBB`,        
        ign: `Gamer Name`,
    },
    game7: {
        gamename: `MLBB`,        
        ign: `Gamer Name`,
    },
    },
    socialmedia: {
    socialmedia1: {
        socialmediaplatform: `Youtube`,
        socialmedialink: `youtube.com`,
    },
    socialmedia2: {
        socialmediaplatform: `Facebook`,
        socialmedialink: `facebook.com`,
    },
    socialmedia3: {
        socialmediaplatform: `Twitter`,
        socialmedialink: `twitter.com`,
    },
    socialmedia4: {
        socialmediaplatform: `Instagram`,
        socialmedialink: `instagram.com`,
    },
    socialmedia5: {
        socialmediaplatform: `Email Address`,
        socialmedialink: `email@email.com`,
    },
    },
},
{
    perinfo: {
    img: `img/home/cover-img.jpg`,
    name: `Censon, Renz M.`,
    gquote: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quae saepe minus suscipit doloribus dolor consectetur culpa ducimus. Pariatur soluta corrupti ut qui ad adipisci accusamus. Quam mollitia quia voluptates.`,
    about: `"Lorem ipsum dolor sit amet consectetur adipisicing elit."`,
    },
    ingame: {
    game1: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game2: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game3: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game4: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    game5: {
        gamename: `MLBB`,
        ign: `Gamer Name`,
    },
    },
    socialmedia: {
    socialmedia1: {
        socialmediaplatform: `Email Address`,
        socialmedialink: `email@email.com`,
    },
    socialmedia2: {
        socialmediaplatform: `Facebook`,
        socialmedialink: `facebook.com`,
    },
    socialmedia3: {
        socialmediaplatform: `Twitter`,
        socialmedialink: `twitter.com`,
    },
    socialmedia4: {
        socialmediaplatform: `Instagram`,
        socialmedialink: `instagram.com`,
    },
    socialmedia5: {
        socialmediaplatform: `Youtube`,
        socialmedialink: `youtube.com`,
    },
    },
},
];

let gamerlists = ``;

gamerlist.forEach((gamer) => {
    let gameInfos = ``;

    Object.keys(gamer.ingame).forEach((key) => {
        const game = gamer.ingame[key];
        gameInfos += `
            <div class="game-info">
                <h4>${game.gamename}</h4>
                <p>${game.ign}</p>
            </div>
        `;
    });

    let socialInfos = ``;

    Object.keys(gamer.socialmedia).forEach((key) => {
        const social = gamer.socialmedia[key];
        socialInfos += `
            <li>
                <span>${social.socialmediaplatform}</span>
                <a href="${social.socialmedialink}" target="_blank">${social.socialmedialink}</a>
            </li>
        `;
    });

    gamerlists += `
        <div class="gamer-card">
            <div class="gamer-card-img">
                <img src="${gamer.perinfo.img}" alt="">
            </div>
            <div class="gamer-infos">
                <div class="personal-info">
                    <h3>Who?</h3>
                    <h4>${gamer.perinfo.name}</h4>
                    <p>${gamer.perinfo.gquote}</p>
                    <p>${gamer.perinfo.about}</p>
                </div>
                <div class="gameinfos display-none">
                    <h3>IGNs</h3>
                    <div class="game-iformation">
                        ${gameInfos}
                    </div>
                </div>
                <div class="contact display-none">
                    <h3>Contacts</h3>
                    <ul>
                        ${socialInfos}
                    </ul>
                </div>
            </div>
            <div class="buttons">
                <button class="personalbut unselected btn-selected">Personal</button>
                <button class="gameinfosbut unselected">In Game</button>
                <button class="socialmediabut unselected">Social Media</button>
            </div>
        </div>`;
});

document.querySelector("#gamer-list").innerHTML = gamerlists;