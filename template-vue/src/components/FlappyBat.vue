<template>
    <canvas ref="canvas" id="gameCanvas" width="512px" height ="512px"></canvas>
</template>
<script>
export default {
    data: () => ({
    }),
    mounted() {
            /** @type {HTMLCanvasElement} */
        var canv = this.$refs.canvas;
        var ctx = canv.getContext("2d");

        var bat = {
                imageUp: new Image(),
                imageDown: new Image(),
                velocity: 0,
                velocityJump: -15,
                velocityMax: -3,
                x: 10,
                y: 150,
                lasty: 150,
                batUp: true,
                scale: 1, 
                rotation: 0
            };

        var bg = {
            far1: new Image(),
            far1x: 0,
            middle1: new Image(),
            middle1x: 0,
            close1: new Image(),
            close1x: 0,
            far2: new Image(),
            far2x: 512,
            middle2: new Image(),
            middle2x: 512,
            close2: new Image(),
            close2x: 512
        };

        var ground = {
            one: new Image(),
            onex: 0,
            two: new Image(),
            twox: 512
        };

        var pipeNorth = new Image();
        var pipeSouth = new Image();

        var gap = 90;
        var constant = 0;
        var gravity = 1.5;
        var score = 0;
        var gameInProgress = true;    
        var fly = new Audio();
        var scor = new Audio();    
        var pipe = [];

        function moveUp(){
            if(this.gameInProgress){
                this.bat.velocity = this.bat.velocityJump;
                this.fly.currentTime = 0;
                this.fly.play(); 
            }
            else {
                this.gameInProgress = true;
                this.bat.velocity = this.bat.velocityJump;
                this.fly.currentTime = 0;
                this.fly.play(); 
            }
        }
        function GameLoop() {
            this.Update();
            this.Draw(); 
        }
        function Update(){
            this.UpdateBG();
            this.UpdateFG();
            this.UpdateBatRotation();
            this.UpdateBatAnimation();
            this.UpdatePipes();
            this.UpdateCollision();
            this.UpdateBat();
            Draw();
        }

        function Draw(){
            this.DrawBG();
            this.DrawPipes();
            this.DrawBat();
            this.DrawFG();
            this.DrawScore();
        }

        //Update Functions
        function UpdateBG(){
            this.bg.far1x -= .2;
            this.bg.far2x -= .2;
            this.bg.middle1x -= .4;
            this.bg.middle2x -= .4;
            this.bg.close1x --;
            this.bg.close2x --;
            if(this.bg.far1x <= -512)       this.bg.far1x = 511;
            if(this.bg.far2x <= -512)       this.bg.far2x = 511;
            if(this.bg.middle1x <= -512)    this.bg.middle1x = 511;
            if(this.bg.middle2x <= -512)    this.bg.middle2x = 511;
            if(this.bg.close1x <= -512)     this.bg.close1x = 511;
            if(this.bg.close2x <= -512)     this.bg.close2x = 511;
        }

        function UpdateFG(){
            this.ground.onex--;
            this.ground.twox--;
            if(this.ground.onex <= -512) this.ground.onex = 511;
            if(this.ground.twox <= -512) this.ground.twox = 511;
        }

        function UpdateBatRotation(){
            
        }

        function UpdateBatAnimation(){
            if(this.bat.lasty > this.bat.y) this.bat.batUp = false;
            else this.bat.batUp = true;
            this.bat.lasty = this.bat.y;
        }

        function UpdatePipes(){
            for(var i = 0; i< this.pipe.length; i++)
            {
                this.constant = this.pipeNorth.height + this.gap;
                this.pipe[i].x--;

                if(this.pipe[i].x==100)
                {
                    this.pipe.push({
                        x : this.cnvs.width,
                        y : Math.floor(Math.random() * this.pipeNorth.height) - this.pipeNorth.height
                        });
                }

                if(this.pipe[i].x == 5)
                {
                    this.score++;
                    this.scor.play();
                }
            }
        }

        function UpdateCollision(){
            for(var i = 0; i< this.pipe.length; i++)
            {
                //Checks For Fail Status
                if( this.bat.x + 40 >= this.pipe[i].x && this.bat.x <= this.pipe[i].x + this.pipeNorth.width && (this.bat.y <= this.pipe[i].y + this.pipeNorth.height || this.bat.y + 40 >= this.pipe[i].y+this.constant) || this.bat.y + 40 >=  this.cnvs.height - this.ground.one.height){
                        //gameInProgress = false;
                        location.reload();
                }
            }
        }

        function UpdateBat(){
            this.bat.velocity *= .7;
            this.bat.y += this.bat.velocity;
            this.bat.y += this.gravity;
            if(this.bat.velocity < 0) this.batUp= false;
            else this.batUp = true;
        }

        function DrawScore(){
            this.contx.fillStyle = "#000";
            this.contx.font = "20px Veranda";
            this.contx.fillText("Score: " + this.score, 10, this.cnvs.height - 20);
        }


        //Draw Functions
        function DrawBG(){
            this.contx.drawImage(this.bg.far1,      this.bg.far1x, 0);
            this.contx.drawImage(this.bg.far2,      this.bg.far2x, 0);
            this.contx.drawImage(this.bg.middle1,   this.bg.middle1x, 0);
            this.contx.drawImage(this.bg.middle2,   this.bg.middle2x, 0);
            this.contx.drawImage(this.bg.close1,    this.bg.close1x, 0);
            this.contx.drawImage(this.bg.close2,    this.bg.close2x, 0);
        }

        function DrawPipes(){
            for(var i = 0; i < this.pipe.length; i++)
            {
                this.constant = this.pipeNorth.height + this.gap;
                this.contx.drawImage(this.pipeNorth, this.pipe[i].x, this.pipe[i].y);
                this.contx.drawImage(this.pipeSouth, this.pipe[i].x, this.pipe[i].y + this.constant);
            }
        }

        function DrawBat(){
            if(!this.bat.batUp) this.contx.drawImage(this.bat.imageDown, this.bat.x, this.bat.y);
            else this.contx.drawImage(this.bat.imageUp, this.bat.x, this.bat.y);
            // contx.drawImage(bat.imageUp, bat.x, bat.y);
        }

        function DrawFG(){
            this.contx.drawImage(this.ground.one, this.ground.onex, this.cnvs.height - this.ground.one.height);
            this.contx.drawImage(this.ground.two, this.ground.twox, this.cnvs.height - this.ground.two.height);
        }

        //Useability Functions

        //x and y are the top corner of the image
        function drawSprite(image, x, y, scale, rotation){
            this.contx.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
            this.contx.rotate(rotation);
            this.contx.drawImage(image, -image.width / 2, -image.height / 2);
        } 
        this.pipe[0] = {
            x:this.cnvs.width,
            y:0
        };

        this.bat.velocity = 0;
        this.bat.x = 10;
        this.bat.y = 150;

        this.score = 0;

        //Load Images
        this.bat.imageUp.src = "assets/FlappyBat/images/batUp.png";
        this.bat.imageDown.src = "assets/FlappyBat/images/batDown.png";

        this.bg.far1.src = "assets/FlappyBat/images/bgFar.png";
        this.bg.middle1.src = "assets/FlappyBat/images/bgMiddle.png";
        this.bg.close1.src = "assets/FlappyBat/images/bgClose.png";
        this.bg.far2.src = "assets/FlappyBat/images/bgFar.png";
        this.bg.middle2.src = "assets/FlappyBat/images/bgMiddle.png";
        this.bg.close2.src = "assets/FlappyBat/images/bgClose.png";

        this.ground.one.src = "assets/FlappyBat/images/ground.png";
        this.ground.two.src = "assets/FlappyBat/images/ground.png";

        this.pipeNorth.src = "assets/FlappyBat/images/pipeNorth.png";
        this.pipeSouth.src = "assets/FlappyBat/images/pipeSouth.png";

        // Load Audio Files
        this.fly.src = "assets/FlappyBat/audio/fly.mp3";
        this.scor.src = "assets/FlappyBat/audio/score.wav";

        this.document.addEventListener("keydown", this.moveUp);

        setInterval(GameLoop, 1000 / 30);
    },
    methods :{
        
    },
}
</script>
<style scoped>
</style>