function replaceImageSrc(el) {
  const choices = ["meow", "miaou", "miau", "meowww", "mew", "nya", "nyan", "", "", ""];
  let choice = choices[Math.floor(Math.random() * choices.length)];

  if (el.width < 100 || el.height < 100) {
    choice = '';
  }

  el.src =
    'https://cataas.com/cat' +
    (choice ? `/says/${choice}` : '') +
    `?width=${el.width}&height=${el.height}`;
}




// Initial image replacement
document.querySelectorAll('img').forEach(img => {
  if (img.src && !(img.src.includes('cataas.com'))) {
    setTimeout(() => {
      replaceImageSrc(img);
    }, 150);
  }
});

// Periodic image replacement
const intervalId = setInterval(() => {
  document.querySelectorAll('img').forEach(img => {
    if (img.src && !(img.src.includes('cataas.com'))) {
      setTimeout(() => {
        replaceImageSrc(img);
      }, 150);
    }
  });
}, 1000);