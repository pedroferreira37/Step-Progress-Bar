const progressBar = document.querySelector('.progress-bar')
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')



const circlesElements = document.querySelectorAll('.progress-bar ~ div')


const pos = {
  currentPos: 1
}

function increaseBar() {
  pos.currentPos++

    pos.currentPos > circlesElements.length ? pos.currentPos = circlesElements.length : null

    updateValues()
}


function decreaseBar() {
  pos.currentPos--

     pos.currentPos < 1 ? pos.currentPos = 1 : null

  updateValues()
}

function updateValues() {
  circlesElements.forEach((circle, index) => {
    if(index < pos.currentPos) {
      
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  const active = document.querySelectorAll('.active')
  updateBarSize(active)

}

function updateBarSize(attr) {
  
  progressBar.style.width = `${((attr.length - 1 ) / (circlesElements.length -1) * 100)}%` 
}




nextButton.addEventListener('click', increaseBar)
prevButton.addEventListener('click', decreaseBar)