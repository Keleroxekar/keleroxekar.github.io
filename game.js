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

//счет
var score = 0;
// hp
var hp=3;
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
alien.push({ 
    x : cvs.width+200, 
    y : Math.random()*(650-invader.height)
    })
    alien.push({ 
        x : cvs.width+150, 
        y : Math.random()*(650-invader.height) 
        })

        alien.push({ 
            x : cvs.width+170, 
            y : Math.random()*(650-invader.height) 
            })

            alien.push({ 
                x : cvs.width+400, 
                y : Math.random()*(650-invader.height) 
                })
            
                alien.push({ 
                    x : cvs.width+50, 
                    y : Math.random()*(650-invader.height) 
                    })
                    alien.push({ 
                        x : cvs.width+300, 
                        y : Math.random()*(650-invader.height) 
                        })
                
                        alien.push({ 
                            x : cvs.width+475, 
                            y : Math.random()*(650-invader.height) 
                            })
                
                            alien.push({ 
                                x : cvs.width+560, 
                                y : Math.random()*(650-invader.height) 
                                })
                                alien.push({ 
                                    x : cvs.width+200, 
                                    y : Math.random()*(650-invader.height) 
                                    })
                                    alien.push({ 
                                        x : cvs.width+150, 
                                        y : Math.random()*(650-invader.height) 
                                        })
                                
                                        alien.push({ 
                                            x : cvs.width+170, 
                                            y : Math.random()*(650-invader.height) 
                                            })
                                
                                            alien.push({ 
                                                x : cvs.width+400, 
                                                y : Math.random()*(650-invader.height) 
                                                })
                                            
                                                alien.push({ 
                                                    x : cvs.width+50, 
                                                    y : Math.random()*(650-invader.height) 
                                                    })
                                                    alien.push({ 
                                                        x : cvs.width+300, 
                                                        y : Math.random()*(650-invader.height) 
                                                        })
                                                
                                                        alien.push({ 
                                                            x : cvs.width+475, 
                                                            y : Math.random()*(650-invader.height) 
                                                            })
                                                
                                                            alien.push({ 
                                                                x : cvs.width+560, 
                                                                y : Math.random()*(650-invader.height) 
                                                                })
                                                                alien.push({ 
                                                                    x : cvs.width+200, 
                                                                    y : Math.random()*(650-invader.height) 
                                                                    })
                                                                    alien.push({ 
                                                                        x : cvs.width+150, 
                                                                        y : Math.random()*(650-invader.height) 
                                                                        })
                                                                
                                                                        alien.push({ 
                                                                            x : cvs.width+170, 
                                                                            y : Math.random()*(650-invader.height) 
                                                                            })
                                                                
                                                                            alien.push({ 
                                                                                x : cvs.width+400, 
                                                                                y : Math.random()*(650-invader.height) 
                                                                                })
                                                                            
                                                                                alien.push({ 
                                                                                    x : cvs.width+50, 
                                                                                    y : Math.random()*(650-invader.height) 
                                                                                    })
                                                                                    alien.push({ 
                                                                                        x : cvs.width+300, 
                                                                                        y : Math.random()*(650-invader.height) 
                                                                                        })
                                                                                
                                                                                        alien.push({ 
                                                                                            x : cvs.width+475, 
                                                                                            y : Math.random()*(650-invader.height) 
                                                                                            })
                                                                                
                                                                                            alien.push({ 
                                                                                                x : cvs.width+860, 
                                                                                                y : Math.random()*(650-invader.height) 
                                                                                                })
                                                                                                alien.push({ 
                                                                                                    x : cvs.width+700, 
                                                                                                    y : Math.random()*(650-invader.height) 
                                                                                                    })
                                                                                                    alien.push({ 
                                                                                                        x : cvs.width+650, 
                                                                                                        y : Math.random()*(650-invader.height) 
                                                                                                        })
                                                                                                
                                                                                                        alien.push({ 
                                                                                                            x : cvs.width+870, 
                                                                                                            y : Math.random()*(650-invader.height) 
                                                                                                            })
                                                                                                
                                                                                                            alien.push({ 
                                                                                                                x : cvs.width+900, 
                                                                                                                y : Math.random()*(650-invader.height) 
                                                                                                                })
                                                                                                            
                                                                                                                alien.push({ 
                                                                                                                    x : cvs.width+650, 
                                                                                                                    y : Math.random()*(650-invader.height) 
                                                                                                                    })
                                                                                                                    alien.push({ 
                                                                                                                        x : cvs.width+700, 
                                                                                                                        y : Math.random()*(650-invader.height) 
                                                                                                                        })
                                                                                                                
                                                                                                                        alien.push({ 
                                                                                                                            x : cvs.width+875, 
                                                                                                                            y : Math.random()*(650-invader.height) 
                                                                                                                            })
                                                                                                                
                                                                                                                            alien.push({ 
                                                                                                                                x : cvs.width+560, 
                                                                                                                                y : Math.random()*(650-invader.height) 
                                                                                                                                })
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
    

    
    //Здоровье
    if(hp==3){
        ctx.drawImage(hp3, 50, 50);
    }
    else if(hp==2){
        ctx.drawImage(hp2, 50, 50);
    }
    else if(hp==1){
        ctx.drawImage(hp1, 50, 50);
    }
    else if(hp<1){
        alert('Ты ВМЕР! СЧЕТ: '+score);
        location.reload();
    }
    //передвижение планетян
    for(var i = 0; i < alien.length; i++) { 
        ctx.drawImage(invader, alien[i].x, alien[i].y); 
        
        alien[i].x--; 
        
        if(alien[i].x < 0) { 
            alien[i].x = cvs.width - 10;
            hp-=1;
        }
        if(alien[i].x<cvs.width){
            if(xPos + ship.width > alien[i].x &&
                xPos + ship.width < alien[i].x+invader.width &&
                yPos > alien[i].y &&
                yPos < alien[i].y+invader.height){
                    ctx.drawImage(boom, xPos, yPos);
                }

                if(xPos + ship.width > alien[i].x &&
                    xPos + ship.width < alien[i].x+invader.width &&
                    yPos > alien[i].y &&
                    yPos < alien[i].y+invader.height){
                alert('Ты ВМЕР! СЧЕТ: '+score);
                    location.reload();
                    }



            for(b in shoot){
                if(shoot[b].x + bullet.width > alien[i].x &&
                shoot[b].x + bullet.width < alien[i].x+invader.width &&
                shoot[b].y > alien[i].y &&
                shoot[b].y < alien[i].y+invader.height) {
                        console.log('yes!');
                        score  +=1;
                        shoot[b].x = cvs.width*2;
                        alien[i].x = cvs.width+100;
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
    

    ctx.fillStyle = "white";
	ctx.font = "bold 30pt courier";
	ctx.fillText('Ваш счет: '+score+'',50,40);


    
    requestAnimationFrame(draw);
}


hp1.onload = draw;