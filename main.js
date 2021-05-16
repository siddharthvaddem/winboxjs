const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const projects = document.querySelector('#projects')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectsContent = document.querySelector('#projects-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
      title:'about me',
      width:'80%',
      height:'80%',
      top:30,
      left:10,
      right:5,
      bottom:20,
      mount:aboutContent,
     
      
      onfocus: function () {
        this.setBackground("#ff005d")
      },
      onblur: function () {
        this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title:'contact',
      width:'80%',
      height:'80%',
      top:30,
      left:10,
      right:5,
      bottom:20,
      mount:contactContent,
      onfocus: function () {
        this.setBackground('limegreen')
      },
      onblur: function () {
        this.setBackground('#777')
    },
  })
})



