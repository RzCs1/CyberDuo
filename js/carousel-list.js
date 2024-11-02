const game_list = [{
    name: `GameName`,
    full_gamename: `full game name`,
    img_src: `img/home/backgorund-img-cover.jpg`,
    link_src: `link.html`
  }, {
    name: `GameName`,
    full_gamename: `full game name`,
    img_src: `img/home/backgorund-img-cover.jpg`,
    link_src: `link.html`
  },{
    name: `GameName`,
    full_gamename: `full game name`,
    img_src: `img/home/backgorund-img-cover.jpg`,
    link_src: `link.html`
  },{
    name: `GameName`,
    full_gamename: `full game name`,
    img_src: `img/home/backgorund-img-cover.jpg`,
    link_src: `link.html`
  },{
    name: `GameName`,
    full_gamename: `full game name`,
    img_src: `img/home/backgorund-img-cover.jpg`,
    link_src: `link.html`
  }];

let gamelist = ``;
let gamethumbnails = ``;

game_list.forEach((game_list) => {
  gamelist += `
  <li class="splide__slide style-carou-list border-rad-1">
    <h3>${game_list.full_gamename}</h3>
    <img src="${game_list.img_src}" alt=""/>
    <a href="${game_list.link_src}">Go</a>
  </li>
  `;

  gamethumbnails += `
  <li class="thumbnail border-rad-1">
    <img src="${game_list.img_src}" alt="" />
    <h3>${game_list.name}</h3>
  </li>
  `;
});

document.querySelector('#game-list').innerHTML = gamelist;
document.querySelector('#thumbnails').innerHTML = gamethumbnails;

