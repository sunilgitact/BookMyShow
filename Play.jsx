import React from 'react'

const Play = () => {

    var circle1 = document.getElementById('circle1')
var img1 = document.getElementById('img1')
var circle2 = document.getElementById('circle2')
var img2 = document.getElementById('img2')
var circle3 = document.getElementById('circle3')
var img3 = document.getElementById('img3')
var circle4 = document.getElementById('circle4')
var img4 = document.getElementById('img4')

function Circle1() {
    circle1.style.transition = '6s'
    circle1.style.background = 'silver'
    img1.style.transition = '2s'
    img1.style.marginLeft = '-0px';
    img1.style.marginTop = '20px'
}

function Circle2() {
    circle2.style.transition = '6s'
    circle2.style.background = 'darkorange'

    img2.style.transition = '2s'
    img2.style.marginLeft = '-0px';
    img2.style.marginTop = '20px'
}

function Circle3() {
    circle3.style.transition = '6s'
    circle3.style.background = 'violet'
    img3.style.transition = '2s'
    img3.style.marginLeft = '-0px';
    img3.style.marginTop = '20px'
}

function Circle4() {
    circle4.style.transition = '6s'
    circle4.style.background = 'red'

    img4.style.transition = '2s'
    img4.style.marginLeft = '-0px';
    img4.style.marginTop = '20px'
}


function reset() {
    circle1.style = 'none'
    img1.style.marginLeft = '600px'

    circle2.style = 'none'
    img2.style.marginLeft = '600px'
    circle3.style = 'none'
    img3.style.marginLeft = '600px'
    circle4.style = 'none'
    img4.style.marginLeft = '600px'

}


  return (
    <>
           <h1>Bubbles App</h1>
    <div className="container">
        <div id="mini-container">
            <div className="circle1" onClick={Circle1} id="circle1">
            </div>
            <div id="arrow">
                <img src="./left-arrow.png" id="img1" style="margin-left:600px;" alt=""/>
            </div>
        </div>

        <div id="mini-container">
            <div className="circle2" onClick={Circle2}id="circle2">
            </div>
            <div id="arrow">
                <img src="./left-arrow.png" id="img2" style="margin-left:600px;" alt=""/>
            </div>
        </div>
        <div id="mini-container">
            <div className="circle3" onClick={Circle3} id="circle3">
            </div>

            <div id="arrow">
                <img src="./left-arrow.png" id="img3" style="margin-left:600px;" alt=""/>
            </div>
        </div>
        <div id="mini-container">
            <div className="circle4" onClick={Circle4} id="circle4">
            </div>

            <div id="arrow">
                <img src="./left-arrow.png" id="img4" style="margin-left:600px;" alt=""/>
            </div>
        </div>

    <br/>

    <button onClick={reset} id="reset">Reset</button>
    </div>
    </>
  )
}

export default Play