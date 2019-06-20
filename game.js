var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Переменные
var ship = new Image();
var invader = new Image();
var bullet = new Image();
var boom = new Image();
var bg = new Image();
var hp3 = new Image();
var hp2 = new Image();
var hp1 = new Image();

// Их расположение в файлах
ship.src = "image/ship.png";
invader.src = "image/invader.png";
bullet.src = "image/bullet.png";
boom.src = "image/boom.png";
bg.src = "image/bg.png";
hp3.src = "image/3hp.png";
hp2.src = "image/2hp.png";
hp1.src = "image/1hp.png";

// Положение звездолета
var xPos = 100;
var yPos = 400;

// Управление звездолетом
//document.addEventListener('keypress', moveUp)

//Нажатые клавиши
var keys = {}

document.addEventListener('keydown',function(e){
    keys[e.code] = true;
})
document.addEventListener('keyup',function(e){
    keys[e.code] = undefined;
})

// Смэртельная пуля
    shoot =[];
    var magazine = 10;
//злыдни
 var alien = [];

alien[0] = {
 x : cvs.width,
 y : 0
}

// Пошло поехало
function draw() {
    
    // Фон
    ctx.drawImage(bg, 0, 0);

    //Обработка клавиш
    if(keys.ArrowLeft){
        xPos -=8;
    } else if(keys.ArrowRight){
        xPos +=8;
    }
    if(keys.ArrowUp){
        yPos -=8;
    } else if(keys.ArrowDown){
        yPos +=8;
    }
    if((keys.Space) && (magazine > 0)){
        var tmp = {
            x: xPos + ship.width,
            y: yPos + ship.height/2
        };
        magazine -=1;
        shoot.push(tmp);
        

    }
    if (magazine < 10){
        magazine += 0.05;
    }
    

    for(var i = 0; i < alien.length; i++) { 
        ctx.drawImage(invader, alien[i].x, alien[i].y); 
        
        alien[i].x--; 
        
        if(alien[i].x < 0) { 
        alien[i].x = cvs.width - 10; 

        for(b in shoot){
            if(shoot[b].x + bullet.width  == alien[i].x) {
            shoot[b].x = cvs.width*2;
            alien[i].x = cvs.width*2;
            }
            }
        } 
        }
    

    // Полет пули
    var keep_shoot = [];
    for(i in shoot){
        //console.log(i,shoot[i]);
        var b = shoot[i];
        b.x+=10;
        if(b.x<=1236){
            keep_shoot.push(b);
        }
        ctx.drawImage(bullet,b.x,b.y);
    }
    shoot = keep_shoot;
    //прикосновения
    

    // Истребитель
    ctx.drawImage(ship, xPos, yPos);

    // Инопланетяни-злыдни
    

    //Здоровье
    ctx.drawImage(hp1, 50, 50);
    ctx.drawImage(hp2, 50, 50);
    ctx.drawImage(hp3, 50, 50);


    requestAnimationFrame(draw);
}


hp1.onload = draw;