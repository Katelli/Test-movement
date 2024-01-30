window.addEventListener("keydown", (event) => {
      

    let ball = document.getElementById("ball")
    let compStyleB = window.getComputedStyle(ball)
    let ballTop = compStyleB.getPropertyValue("top")
    let ballLeft = compStyleB.getPropertyValue("left")
    let obst = document.getElementById("obst")
    let compStyleO = window.getComputedStyle(obst)
    let obstTop = compStyleO.getPropertyValue("top")
    let obstLeft = compStyleO.getPropertyValue("left")
      

    switch (event.key) {
        case "ArrowRight":
            if (ball.style.left ==="1150px" || `${Number.parseInt(ballTop) - Number.parseInt(obstTop)}px` >= "50px" && `${Number.parseInt(obstLeft) - Number.parseInt(ballLeft)}px` === "50px"){
                ball.style.left = `${Number.parseInt(ballLeft) + 0}px`
            } else{ 
                ball.style.left = `${Number.parseInt(ballLeft) + 10}px`
            }
            break;

        case "ArrowLeft":
            if (`${Number.parseInt(ballTop) - Number.parseInt(obstTop)}px` > "100px" && `${Number.parseInt(ballLeft) - Number.parseInt(obstLeft)}px` === "10px") {
                ball.style.left = `${Number.parseInt(ballLeft) + 0}px`
            } else if (ball.style.left >"1"){ 
                ball.style.left = `${Number.parseInt(ballLeft) - 10}px`
            }
            break;

        case "ArrowDown":
            if (ball.style.top === "650px" ||
            `${Number.parseInt(ballLeft) - Number.parseInt(obstLeft)}px` < "10" &&
            `${Number.parseInt(obstLeft) - Number.parseInt(ballLeft)}px` < "50" &&
            `${Number.parseInt(ballTop) - Number.parseInt(obstTop)}px` > "0" &&
            `${Number.parseInt(ballTop) - Number.parseInt(obstTop)}px` < "100"){
                ball.style.top = `${Number.parseInt(ballTop) + 0}px`
            } else{
                ball.style.top = `${Number.parseInt(ballTop) + 10}px`
            }
            break;

        case "ArrowUp":
            if (ball.style.top >"1"){
            ball.style.top = `${Number.parseInt(ballTop) - 10}px`
            }
            break;
    }
  });
