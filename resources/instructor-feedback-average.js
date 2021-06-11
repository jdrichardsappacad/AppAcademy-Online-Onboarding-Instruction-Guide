totalScoreSum = 0;
limit = undefined; // change to a number to limit to a number of pages (x20 for scores)
determineCurrentPageAverage = () => {
  const pageScores = [
    ...document.querySelectorAll(
      '.MuiTypography-root.MuiTypography-h4.MuiTypography-colorTextPrimary'
    )
  ].map((ele) => parseInt(ele.innerHTML));
  totalScoreSum += pageScores.length;
  return pageScores.reduce((a, b) => a + b) / pageScores.length;
};
runningSum = determineCurrentPageAverage();
paginations = [...document.querySelector('.MuiPagination-ul').children];
paginationCount = limit
  ? limit
  : parseInt(paginations[paginations.length - 2].innerText);
for (i = 1; i < paginationCount; i++) {
  paginations = [...document.querySelector('.MuiPagination-ul').children];
  let page;
  if (i < 6) {
    page = paginations[i].children[0];
  } else {
    if (paginationCount - 2 <= i) {
      console.log('last two!');
      page = paginations[6 + i - (paginationCount - 2)].children[0];
    } else {
      page = paginations[5].children[0];
    }
  }
  page.click();
  runningSum += determineCurrentPageAverage();
}
console.log(
  'Your average score is:',
  runningSum / paginationCount,
  'across',
  totalScoreSum,
  'scores'
);
