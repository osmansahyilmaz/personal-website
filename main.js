const balls = [];
/* Sets the number of balls to generate */
const numBalls = 70;
/* Sets the colors chosen randomly for the balls */
const colors = ["#673ab7", "#00897b", "#d81b60", "#ff9800", "#4caf50"];

for (let i = 0; i < numBalls; i++) {
    /* Create a new ball element and set its style */
    let ball = document.createElement("div");  
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()*2.4}em`;
    ball.style.height = ball.style.width;  
    ball.style.position = 'absolute';
    ball.style.borderRadius = "100%";
    ball.style.opacity = 0.1;    
    balls.push(ball);
    document.body.append(ball);
}
for (let i = 0; i < numBalls; i++) {
    /* Create a new ball element and set its style */
    let ball = document.createElement("div");  
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()*2.4}em`;
    ball.style.height = ball.style.width;  
    ball.style.position = 'absolute';
    ball.style.borderRadius = "80%";
    ball.style.opacity = 0.1;    
    balls.push(ball);
    document.body.append(ball);
}
for (let i = 0; i < numBalls; i++) {
    /* Create a new ball element and set its style */
    let ball = document.createElement("div");  
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()*2.4}em`;
    ball.style.height = ball.style.width;  
    ball.style.position = 'absolute';
    ball.style.borderRadius = "30%";
    ball.style.opacity = 0.1;    
    balls.push(ball);
    document.body.append(ball);
}
balls.forEach((el, index) => {
    /* Generate random position values that will be used to move the balls around */
    let pos = { 
        x: Math.random() * (index % 2 === 0 ? -2 : 2),
        y: Math.random() * 1
    };
    
    /* 
    ** Move each ball on their X and Y axis with the random values generated previously 
    ** and have it alternate and iterate ifinetely
    */
    let animation = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${pos.x}rem, ${pos.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 800, // random duration
            direction: "alternate",
            iterations: Infinity,
            easing: "ease-in-out",
            fill: "both"   
        }
    );
});




function shadeRGBColor(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}