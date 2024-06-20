/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', handleClick);
  })
  
  function handleClick(e) {
    e.preventDefault();

    const userImgSrc = e.currentTarget.querySelector('img').src;
    const userCho = e.currentTarget.querySelector('img').alt;
    const computerCho = computerChoice(); 

    //display img
    displayImg(userImgSrc, computerCho);

    //choose winner
    chooseWinner(userCho, computerCho)

  }

  function computerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let computerIndex = Math.floor(Math.random()*choice.length);
    return choice[computerIndex];
  }

  function displayImg(userImgSrc, computerCho){

    const ul = document.getElementById('res-img');
    ul.innerHTML = '';
    //display user img
    //e.target refers to the element that was clicked, which in this case is the button element. However, when you use e.target.querySelector('img'), it will not find the image because the img element is a child of the button element, not the target element.
    // const imgSrc = e.target.querySelector('img').src;
    // const imgSrc = e.currentTarget.querySelector('img').src;
    // const userImgSrc = './images/${user}'
    
    const UserLi = document.createElement('li');
    const UserImg = document.createElement('img');
    UserImg.src = userImgSrc;
    UserImg.style.objectFit = "cover";
    UserImg.style.width = "60px";
    UserImg.style.height = "60px";
    UserLi.appendChild(UserImg);
    


    //display computer img
    const computerLi = document.createElement('li');
    const computerImg = document.createElement('img');
    computerImg.src = `./images/${computerCho}.png`;
    computerImg.style.objectFit = "cover";
    computerImg.style.width = "60px";
    computerImg.style.height = "60px";
    computerLi.appendChild(computerImg);


    ul.appendChild(UserLi);
    ul.appendChild(computerLi);
  }

  function chooseWinner(userCho, computerCho) {
    const timesEl = document.getElementById('times');
    const winTimesEl = document.getElementById('wins');
    const winner = document.getElementById('winner');

     // Parse the current values from the elements
     let times = parseInt(timesEl.value);
     let winTimes = parseInt(winTimesEl.value);

    //  times = `NaN` ? 0: times;
    //  winTimes = `NaN` ? 0: winTimes;
    times = isNaN(times) ? 0 : times;
    winTimes = isNaN(winTimes) ? 0 : winTimes;

    if(userCho === computerCho) {
      winner.textContent = "This round is a tie!";
    }else if((userCho === 'rock'&& computerCho === 'scissors') || (userCho === 'scissors' && computerCho === 'paper') || (userCho === 'paper' && computerCho === 'rock')) {
      winner.textContent = "You won!"
      winTimes++;
    }else {
      winner.textContent = "Computer won!";
    }

    times++;

    timesEl.value = times;
    winTimesEl.value = winTimes;
  }

});



  // const button = document.getElementById('rock-btn');
  // const img = document.getElementById('rock');
  // const rock = document.getElementById('rock').src;

  // function handleClick(e) {
  //   e.preventDefault();
  //   const ul = document.getElementById('res-img');
  //   const li = document.createElement('li');
  //   const img = document.createElement('img');
  //   img.src = rock;
  //   img.style.objectFit = "cover";
  //   img.style.width = "60px";
  //   img.style.height = "60px";
  //   li.appendChild(img);
  //   ul.appendChild(li);

  // }

  // button.addEventListener('click', handleClick);
  