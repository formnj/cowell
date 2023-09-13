<template>
    <div class="join_complete">
        <div class="inner">
            <strong>회원가입완료</strong>
            <div class="complete_img">
                <img src="@/assets/images/mo/sub/img_join_complete.png" />
            </div>
            <p>반가워요, <span>김나나</span> 님<br/> 코웰패션몰 에서 즐거운 쇼핑하세요!</p>
            <div class="btnSection">
                <button class="btn_big btn_default"><em>혜택보기</em></button>
            </div>
        </div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
    export default {
        props: {
        },
    mounted(){
        $('.join_complete .btn_big').click(DeactivateConfetti, function(){
            $(this).closest('#modal').find('.overlay').trigger('click');
        });
        SetGlobals();
        
        RestartConfetti();

        // (function () {
        // globals
        var canvas;
        var ctx;
        var W;
        var H;
        var mp = 50; //max particles
        var particles = [];
        var angle = 0;
        var tiltAngle = 0;
        var confettiActive = true;
        var animationComplete = true;
        var deactivationTimerHandler;
        var reactivationTimerHandler;
        var animationHandler;

        // objects

        var particleColors = {
            colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
            colorIndex: 0,
            colorIncrementer: 0,
            colorThreshold: 10,
            getColor: function () {
                if (this.colorIncrementer >= 10) {
                    this.colorIncrementer = 0;
                    this.colorIndex++;
                    if (this.colorIndex >= this.colorOptions.length) {
                        this.colorIndex = 0;
                    }
                }
                this.colorIncrementer++;
                return this.colorOptions[this.colorIndex];
            }
        }

        function confettiParticle(color) {
            this.x = Math.random() * W; // x-coordinate
            this.y = (Math.random() * H) - H; //y-coordinate
            this.r = RandomFromTo(3, 8); //radius;
            this.d = (Math.random() * mp) + 1; //density;
            this.color = color;
            this.tilt = Math.floor(Math.random() * 12) - 10;
            this.tiltAngleIncremental = (Math.random() * 0.08) + .06;
            this.tiltAngle = 0;

            this.draw = function () {
                ctx.beginPath();
                ctx.lineWidth = this.r / 2;
                ctx.strokeStyle = this.color;
                ctx.moveTo(this.x + this.tilt + (this.r / 3), this.y);
                ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 3));
                return ctx.stroke();
            }
        }

        function SetGlobals() {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            W = $('#canvas').width();//window.innerWidth;
            H = $('#canvas').height();//window.innerHeight;
            canvas.width = W;
            canvas.height = H;
        }

        function InitializeConfetti() {
            particles = [];
            animationComplete = false;
            for (var i = 0; i < mp; i++) {
                var particleColor = particleColors.getColor();
                particles.push(new confettiParticle(particleColor));
            }
            StartConfetti();
        }

        function Draw() {
            ctx.clearRect(0, 0, W, H);
            var results = [];
            for (var i = 0; i < mp; i++) {
                (function (j) {
                    results.push(particles[j].draw());
                })(i);
            }
            Update();

            return results;
        }

        function RandomFromTo(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }


        function Update() {
            var remainingFlakes = 0;
            var particle;
            angle += 0.01;
            tiltAngle += 0.1;

            for (var i = 0; i < mp; i++) {
                particle = particles[i];
                if (animationComplete) return;

                if (!confettiActive && particle.y < -15) {
                    particle.y = H + 100;
                    continue;
                }

                stepParticle(particle, i);

                if (particle.y <= H) {
                    remainingFlakes++;
                }
                CheckForReposition(particle, i);
            }

            if (remainingFlakes === 0) {
                StopConfetti();
            }
        }

        function CheckForReposition(particle, index) {
            if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
                if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes
                {
                    repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 20);
                } else {
                    if (Math.sin(angle) > 0) {
                        //Enter from the left
                        repositionParticle(particle, -20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
                    } else {
                        //Enter from the right
                        repositionParticle(particle, W + 20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
                    }
                }
            }
        }
        function stepParticle(particle, particleIndex) {
            particle.tiltAngle += particle.tiltAngleIncremental;
            particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 3;
            particle.x += Math.sin(angle);
            particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;
        }

        function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
            particle.x = xCoordinate;
            particle.y = yCoordinate;
            particle.tilt = tilt;
        }

        function StartConfetti() {
            // W = window.innerWidth;
            // H = window.innerHeight;
            canvas.width = W;
            canvas.height = H;
            (function animloop() {
                if (animationComplete) return null;
                animationHandler = requestAnimFrame(animloop);
                return Draw();
            })();
        }

        function ClearTimers() {
            clearTimeout(reactivationTimerHandler);
            clearTimeout(animationHandler);
        }

        function DeactivateConfetti() {
            confettiActive = false;
            ClearTimers();
        }

        function StopConfetti() {
            animationComplete = true;
            if (ctx == undefined) return;
            ctx.clearRect(0, 0, W, H);
        }

        function RestartConfetti() {
            ClearTimers();
            StopConfetti();
            reactivationTimerHandler = setTimeout(function () {
                confettiActive = true;
                animationComplete = false;
                InitializeConfetti();
            }, 100);

        }

        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame || 
            window.oRequestAnimationFrame || 
            window.msRequestAnimationFrame || 
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
        })();
    // })();

    }
};
</script>

<style scoped>
.join_complete {text-align:center;}
.join_complete strong {margin-bottom:60px; font-size:18px; line-height:18px; display:block;}
.join_complete p {margin-top:20px; font-size:16px; font-weight:700; line-height:24px;}
.join_complete p span {color:#00C293;}
.join_complete img {width:117px;}
.join_complete .inner {position:relative; z-index:2;}

#canvas {width:100%; height:100%; position:absolute; top:0; left:0;}
</style>