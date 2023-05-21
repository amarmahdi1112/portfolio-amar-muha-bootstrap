let jobSec = document.getElementById('job-container')
let job = document.getElementById('job')

fetch("./data.json").then(e => {
  e.json().then(({ data }) => {
    data.forEach((element, index) => {
      let clone = job.cloneNode(true)

      let title = clone.querySelectorAll('[id=title]')
      let subtitle = clone.querySelectorAll('[id=subtitle]')
      let description = clone.querySelectorAll('[id=desc]')
      let img = clone.querySelectorAll('[id=img]')
      let techStack = clone.querySelectorAll('[id=techStack]')
      let stackElement = document.getElementById('stackElement')

      if (index % 2 !== 0) {
        clone.childNodes[1].childNodes[1].classList.add('d-flex')
        clone.childNodes[1].childNodes[1].classList.add('flex-row-reverse')
      }

      let jobtitle = subtitle[0].childNodes[1]
      let position = subtitle[0].childNodes[5]
      let year = subtitle[0].childNodes[9]

      title[0].innerText = element.title
      jobtitle.innerText = element.subtitle.jobtitle
      position.innerText = element.subtitle.position
      year.innerText = element.subtitle.year
      description[0].innerText = element.description

      element.techStack.forEach(e => {
        let stackClone = stackElement.cloneNode(true)
        stackClone.innerText = e
        techStack[0].appendChild(stackClone)
      })

      img[0].src = element.image
      jobSec.appendChild(clone)
    });

  })

})
