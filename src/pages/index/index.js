require('./_index.scss');

const Slider = require('../../components/slider/slider.js');
const Scrollbar = require('../../components/scrollbar/scrollbar.js');
const navigateTo = require('../../utilities/navigate-to.js');

const onboardingImage1 = require('../../assets/images/layout/onboarding1.png');
const onboardingImage2 = require('../../assets/images/layout/onboarding2.png');
const onboardingImage3 = require('../../assets/images/layout/onboarding3.png');

const slider = new Slider();
const scrollbar = new Scrollbar(3);

const buttonContainer = document.createElement('div');
const skipButton = document.createElement('button');
const continueButton = document.createElement('button');

slider.add(onboardingImage1, 'Stay Connected,<br>Everywhere, Anytime', 'Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.');
slider.add(onboardingImage2, 'Become a Savvy<br>Global Citizen.', 'Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!');
slider.add(onboardingImage3, 'Enhance your News<br>Journey Now!', 'Be part of our dynamic community and contribute your insights and participate in enriching conversations.');

buttonContainer.classList.add('button-container');

skipButton.textContent = 'Skip';
continueButton.textContent = 'Continue';

skipButton.addEventListener('click', () => navigateTo('/login.html'));

continueButton.addEventListener('click', () => {
    if (!slider.next()) navigateTo('/login.html');

});

buttonContainer.append(skipButton, continueButton);

document.body.append(slider.element, scrollbar.element, buttonContainer);

slider.addEventListener('change', (event) => scrollbar.goto(event.detail));
scrollbar.addEventListener('change', (event) => slider.goto(event.detail));




