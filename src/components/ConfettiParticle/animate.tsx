import { RefObject } from "react";
import { config } from "./config";

const fps = 30;
const fpsInterval = 1000 / fps;

export const animateParticle = (ref: RefObject<HTMLDivElement>, angle: number, speed: number, reverse: boolean) => {
  return new Promise<void>((resolve) => {
    let t: number = 0;
    let opacity: number = 1;
    let rotateAngle: number = 0;

    const modifierX = reverse ? -1 : 1;

    let then = Date.now();
    let now: number, elapsed: number;

    const animate = () => {
      if (t > 6) {
        return resolve();
      }

      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        ref.current?.style.setProperty("opacity", opacity.toString());
  
        let newRotateAngle = angle * rotateAngle;
        let newAngle = (angle * (config.maxAngle - config.minAngle) + config.minAngle) / 1000;
        let newSpeed = (angle * (config.maxSpeed - config.minSpeed) + config.minSpeed) / 1000;
        let x = newSpeed * t * Math.cos(newAngle) + (50 * speed * t);
        let y = newSpeed * t * Math.sin(newAngle) - (0.5 * config.gravity * Math.pow(t, 2))  + (50 * speed * t);
  
        ref.current?.style.setProperty("transform", `translateX(${x * modifierX}px) translateY(${y * -1 * 1}px) rotateY(${newRotateAngle}deg) scale(${1})`);
  
        t += 0.1;
        opacity -= 0.02;
        rotateAngle += 3;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  })
};