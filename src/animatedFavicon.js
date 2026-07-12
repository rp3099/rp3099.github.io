// Animated favicon: draws an "RP" monogram with a rotating radar sweep to a
// canvas and swaps the tab icon each frame. Browsers don't animate a static
// favicon file, so this JS frame-swap is the reliable cross-browser approach.
// setInterval keeps it running smoothly when the tab is visible; browsers
// auto-throttle background tabs to ~1 fps, so the cost stays negligible.

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export function startAnimatedFavicon() {
  if (typeof document === 'undefined') return;

  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }

  const cx = 32;
  const cy = 32;
  const rad = 27;
  let angle = 0;

  const frame = () => {
    ctx.clearRect(0, 0, size, size);

    // Dark rounded background
    ctx.fillStyle = '#0b0c10';
    roundRect(ctx, 0, 0, size, size, 14);
    ctx.fill();

    // Faint full ring
    ctx.strokeStyle = 'rgba(222, 184, 135, 0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.stroke();

    // Rotating burlywood sweep
    ctx.strokeStyle = 'rgba(222, 184, 135, 0.95)';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx, cy, rad, angle, angle + Math.PI * 0.5);
    ctx.stroke();

    // RP monogram
    ctx.fillStyle = '#deb887';
    ctx.font = '800 30px "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('RP', cx, cy + 1);

    angle += 0.2;
    link.href = canvas.toDataURL('image/png');
  };

  frame();
  setInterval(frame, 90);
}
