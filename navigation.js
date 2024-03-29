const mainElement = document.querySelector('main');
const posts = mainElement.getElementsByTagName('article');

document.documentElement.addEventListener('keydown', ({ currentTarget, key, target }) => {
  if (target.value !== undefined) return;

  const scrollPaddingTop = parseInt(getComputedStyle(currentTarget).getPropertyValue('scroll-padding-top'));

  switch (key) {
    case 'j': {
      const targetNode = [...posts].find(childNode => Math.floor(childNode.getBoundingClientRect().y) > scrollPaddingTop);
      targetNode?.scrollIntoView();
      targetNode?.focus();
      break;
    }
    case 'k': {
      const targetNode = [...posts].reverse().find(childNode => Math.ceil(childNode.getBoundingClientRect().y) < scrollPaddingTop);
      targetNode?.scrollIntoView();
      targetNode?.focus();
      break;
    }
    case '.': {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.activeElement?.blur();
      break;
    }
  }
});
