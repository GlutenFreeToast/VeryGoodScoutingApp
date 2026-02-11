import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FlyingImage {
  id: number;
  src: string;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  depth: number;
}

interface SpaceFlyingImagesProps {
  /** Array of image URLs to use */
  images: string[];
  /** How many images fly at once (default: 12) */
  count?: number;
  /** Speed multiplier — 1 is default, 2 is twice as fast */
  speed?: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createFlyingImage(
  id: number,
  images: string[],
  cw: number,
  ch: number,
): FlyingImage {
  const depth = randomBetween(0.2, 1.0);
  const baseSpeed = randomBetween(0.5, 2.5) * depth;

  const edge = Math.floor(Math.random() * 4);
  let x: number, y: number;
  if (edge === 0) {
    x = randomBetween(-200, cw + 200);
    y = -150;
  } else if (edge === 1) {
    x = cw + 150;
    y = randomBetween(-150, ch + 150);
  } else if (edge === 2) {
    x = randomBetween(-200, cw + 200);
    y = ch + 150;
  } else {
    x = -150;
    y = randomBetween(-150, ch + 150);
  }

  const tx = randomBetween(cw * 0.1, cw * 0.9);
  const ty = randomBetween(ch * 0.1, ch * 0.9);
  const dx = tx - x,
    dy = ty - y;
  const len = Math.sqrt(dx * dx + dy * dy);

  return {
    id,
    src: pickRandom(images),
    x,
    y,
    size: randomBetween(60, 160) * depth,
    speedX: (dx / len) * baseSpeed,
    speedY: (dy / len) * baseSpeed,
    rotation: randomBetween(0, 360),
    rotationSpeed: randomBetween(-1.5, 1.5),
    opacity: randomBetween(0.55, 1) * depth,
    depth,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SpaceFlyingImages({
  images,
  count = 12,
  speed = 1,
}: SpaceFlyingImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 800, h: 600 });
  const [items, setItems] = useState<FlyingImage[]>([]);
  const counterRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Measure parent so the overlay covers it exactly
  useEffect(() => {
    const measure = () => {
      if (containerRef.current?.parentElement) {
        const { clientWidth: w, clientHeight: h } =
          containerRef.current.parentElement;
        setDims({ w, h });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Seed images
  useEffect(() => {
    if (!dims.w || images.length === 0) return;
    const initial = Array.from({ length: count }, () => {
      const img = createFlyingImage(
        counterRef.current++,
        images,
        dims.w,
        dims.h,
      );
      // Start scattered across canvas instead of all at the edges
      img.x = randomBetween(0, dims.w);
      img.y = randomBetween(0, dims.h);
      return img;
    });
    setItems(initial);
  }, [dims, images, count]);

  // Animation loop
  useEffect(() => {
    if (items.length === 0) return;
    const tick = () => {
      setItems((prev) =>
        prev.map((img) => {
          let { x, y, speedX, speedY, rotation, rotationSpeed } = img;
          x += speedX * speed;
          y += speedY * speed;
          rotation += rotationSpeed * speed;

          const margin = 200;
          if (
            x < -margin ||
            x > dims.w + margin ||
            y < -margin ||
            y > dims.h + margin
          ) {
            return createFlyingImage(
              counterRef.current++,
              images,
              dims.w,
              dims.h,
            );
          }
          return { ...img, x, y, rotation };
        }),
      );
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [items.length > 0, dims, speed, images]);

  return (
    <div
      ref={containerRef}
      style={{
        // Sits on top of siblings, covers the parent, never blocks clicks
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -5,
        background: "transparent",
      }}
    >
      {items.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt=""
          style={{
            position: "absolute",
            left: img.x,
            top: img.y,
            width: img.size,
            height: img.size,
            objectFit: "cover",
            borderRadius: 8,
            opacity: img.opacity,
            transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`,
            pointerEvents: "none",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

// ─── Usage ────────────────────────────────────────────────────────────────────
//
// Wrap your content in a relatively-positioned container, then drop
// <SpaceFlyingImages> as a sibling — it'll float above everything.
//
//   <div style={{ position: "relative" }}>
//     <YourPageContent />
//     <SpaceFlyingImages images={MY_IMAGES} count={12} speed={1} />
//   </div>
//
// The parent MUST have `position: relative` (or absolute/fixed/sticky).
