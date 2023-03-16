fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then(data => {
    return {
      author: data.author,
      content: data.content,
    };
  })
  .catch(() => {
    return {
      author: 'confucius',
      content: 'Ability will never catch up with the demand for it.',
    };
  })
  .then(data => {
    const contentEle = document.getElementById('content');
    const authorEle = document.getElementById('author');

    contentEle.innerText = data.content;
    authorEle.innerHTML = `<i>- ${data.author}</i>`
  })
