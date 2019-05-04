const opinionList = document.querySelectorAll('.opinion');
const opinionsNumber = opinionList.length;
const arrowUp = document.querySelector('.fa-chevron-up');
const arrowDown = document.querySelector('.fa-chevron-down');

const showOpinion = (opinionToShow, opinionToHide) => {
  if (opinionToShow < 0 || opinionToShow >= opinionsNumber) return;

  opinionList[opinionToShow].classList.add('show-opinion');
  opinionList[opinionToHide].classList.remove('show-opinion');

  if (opinionToShow === 0) {
    arrowUp.classList.add('blocked-arrow')
  } else {
    arrowUp.classList.remove('blocked-arrow');
  }

  if (opinionToShow === opinionsNumber - 1) {
    arrowDown.classList.add('blocked-arrow')
  } else {
    arrowDown.classList.remove('blocked-arrow');
  }

}

const arrowUpFunc = () => {
  const index = Array.from(opinionList).findIndex(el => {
    return el.classList.contains('show-opinion')
  })
  showOpinion(index - 1, index);
}

const arrowDownFunc = () => {
  const index = Array.from(opinionList).findIndex(el => {
    return el.classList.contains('show-opinion')
  })
  showOpinion(index + 1, index);
}

arrowUp.addEventListener('click', arrowUpFunc);
arrowDown.addEventListener('click', arrowDownFunc);