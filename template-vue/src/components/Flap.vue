<template>
    <canvas ref="flappy" id="gameCanvas" width="760" height="570"></canvas>
</template>
<script>
export default{
    data: () => ({

    }),
    mounted(){
        //VARIABLES *************************************************************************************************
        //var testImage = new Image();
        var score = 0;
        
        /** @type {HTMLCanvasElement} */
        var cnvs = this.$refs.flappy;
        var contx = cnvs.getContext("2d");

        //GAME LOOP *************************************************************************************************
        function GameLoop(){
            Update();
            Draw();
        }
        setInterval(GameLoop, 33);
        //FUNCTIONS *************************************************************************************************
        function Update(){

        }
        function Draw(){
            this.contx.fillStyle = "#000";
            this.contx.font = "20px Veranda";
            this.contx.fillText("Score: " + this.score, 10, this.cnvs.height - 20);
        }
    }
}
</script>