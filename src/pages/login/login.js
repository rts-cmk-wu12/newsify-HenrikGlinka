const logo = require('../../assets/images/layout/newsify-logo.svg');


const logoContainer = document.createElement('div');
const logoImage = document.createElement('img');
const title = document.createElement('h1');


logoImage.src = logo;
title.textContent = 'Newsify';

logoContainer.append(logoImage, title);

document.body.append(logoContainer);