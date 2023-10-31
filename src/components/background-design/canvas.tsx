import React, { useRef, useEffect } from 'react';

function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas: any = canvasRef.current;
        const ctx = canvas.getContext('2d');
        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Ball properties
        const balls: any = [];
        const ballCount = 200;
        const minRadius = 2;
        const maxRadius = 5;

        // Create random balls
        for (let i = 0; i < ballCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * (maxRadius - minRadius) + minRadius;
            //   const color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
            const color = `hsl(180, 100%, 100%)`;
            const initialLightness = 30;
            const initialHue = 180;
            const initialSaturation = 100;
            balls.push({
                x,
                y,
                radius,
                color: `hsl(${initialHue}, ${initialSaturation}%, ${initialLightness}%)`,
            });
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            balls.forEach((ball: any) => {
                ctx.beginPath();
                ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
                ctx.fillStyle = ball.color;
                ctx.fill();

                ball.x += 0.4; // Adjust the speed and direction of animation here

                if (ball.x > canvas.width + ball.radius) {
                    ball.x = -ball.radius; // Reset ball's position when it goes off-screen
                }
            });
        }

        animate();
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -2 }} />;
}

export default BackgroundAnimation;
