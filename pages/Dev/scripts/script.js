const txtAnim= document.querySelector('h1');
new Typewriter (txtAnim,{
    loop: true,
    deleteSpeed:20
    
    
})
.changeDelay(50)
.typeString('My name is Thomas.')
.pauseFor(300)
.deleteChars(18)
.typeString('<strong>I am a passionate developer.</strong>')
.pauseFor(2000)
.deleteChars(28)
.typeString('<span style="color:#9b4923">HTML<span>/<span style="color:#41798d">CSS</span>/<span style="color:#a39e3f">JS</span> <span style="color:#ffffff">enjoyer!</span>')
.pauseFor(2000)
.deleteChars(20)
.typeString('Let see what i can do !')
.pauseFor(2000)
.deleteChars(23)
.typeString('Scroll down !!')
.pauseFor(2000)
.deleteChars(15)
.typeString(' Welcome to my website  !')
.pauseFor(2000)
.deleteChars(8)

.start()


