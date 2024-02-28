// useMousePosition.ts
import { ref, onUnmounted } from 'vue';

export function useMousePosition(factor = 0.5) {
  const position = ref([0, 0]);
  let animationFrameId: number;

  const updatePosition = (e: MouseEvent) => {
    const targetX = e.clientX;
    const targetY = e.clientY;

    const update = () => {
      const vx = (targetX - position.value[0]) * factor;
      const vy = (targetY - position.value[1]) * factor;

      position.value[0] += vx;
      position.value[1] += vy;

      animationFrameId = requestAnimationFrame(update);
    };

    update();
  };

  window.addEventListener('mousemove', updatePosition);

  onUnmounted(() => {
    window.removeEventListener('mousemove', updatePosition);
    cancelAnimationFrame(animationFrameId);
  });

  return position;
}