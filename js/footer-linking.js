const footer_links = [{
  cyberduo: ``,
  facebook: `https://www.facebook.com/cyberduo.official/`,
  twitter: `https://twitter.com/cyber_duo`,
  instagram: `https://www.instagram.com/cyber_duo/`,
  youtube: `https://www.youtube.com/channel/UC1-3-6-5-0-0-0`,
  linkedin: `https://www.linkedin.com/company/cyber-duo/`,
  github: `https://github.com/cyber-duo `
}];

document.querySelector("footer").innerHTML = `
    <a href="">CYBERDUO</a>
      <div class="web-social-media">
        <ul>
          <li title="Facebook"><a href="${footer_links.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
          <li title="Twitter"><a href="${footer_links.twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li title="Instagram"><a href="${footer_links.instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>
          <li title="Youtube"><a href="${footer_links.youtube}" target="_blank"><i class="fab fa-youtube"></i></a></li>
          <li title="Linkedin"><a href="${footer_links.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
          <li title="Github"><a href="${footer_links.github}" target="_blank"><i class="fab fa-github"></i></a></li>
        </ul>
      </div>
      <p>copyright © 2024 CYBERDUO All rights reserved</p>
`;