# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon


### Links

- Solution URL: [GitHub repository](https://github.com/valerii-tarasenko/article-preview-component)
- Live Site URL: [Article preview component](https://valerii-tarasenko.github.io/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

While building this project I practiced how to toggle several UI states with one click using `classList.toggle()`:

```js
shareBtn.addEventListener("click", function () {
  shareBtn.classList.toggle("active");
  cardName.classList.toggle("hidden");
  cardSocial.classList.toggle("active");
});
```

### Continued development

I want to improve my JavaScript skills: working with the DOM, events and, later, fetching data from APIs. In future projects I also want to practice building layouts faster and cleaner with flexbox and positioning.

### AI Collaboration

I used Claude to understand how my JavaScript and CSS work and to debug issues (the disappearing share button and the desktop tooltip). I wrote the base code myself and tuned the final values by hand to match the design.

## Author

- GitHub - [valerii-tarasenko](https://github.com/valerii-tarasenko)
