document.addEventListener('DOMContentLoaded', function () {
  renderMathInElement(document.querySelector('article'), {
    delimiters: [{left: '\\[', right: '\\]', display: true}, {left: '\\(', right: '\\)', display: false}],
    throwOnError: true
  });
});
