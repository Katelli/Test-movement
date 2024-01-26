window.addEventListener("keydown", (event) => {
      

      let ball = document.getElementById("ball")
      let compStyle = window.getComputedStyle(ball)
      let ballTop = compStyle.getPropertyValue("top")
      let ballLeft = compStyle.getPropertyValue("left")
      

    switch (event.key) {
        case "ArrowRight":
            if (ball.style.left ==="1150px"){
                ball.style.left = `${Number.parseInt(ballLeft) + 0}px`
            } else{ 
                ball.style.left = `${Number.parseInt(ballLeft) + 50}px`
            }
            break;

        case "ArrowLeft":
            if (ball.style.left >"1"){ 
                ball.style.left = `${Number.parseInt(ballLeft) - 50}px`
            }
            break;

        case "ArrowDown":
            if (ball.style.top <"650"){
            ball.style.top = `${Number.parseInt(ballTop) + 50}px`
            }
            break;

        case "ArrowUp":
            if (ball.style.top >"1"){
            ball.style.top = `${Number.parseInt(ballTop) - 50}px`
            }
            break;
    }
  });
