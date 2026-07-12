// Animated favicon: draws the profile photo in a circle with a rotating
// burlywood sweep ring and swaps the tab icon each frame. Browsers don't
// animate a static favicon file, so this JS frame-swap is the reliable
// cross-browser approach. setInterval stays smooth when the tab is visible and
// is auto-throttled to ~1 fps in background tabs, so the cost is negligible.

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

  const img = new Image();
  img.src = `${process.env.PUBLIC_URL || ''}/profile_picture.jpeg`;

  const cx = 32;
  const cy = 32;
  const r = 29;
  let angle = 0;

  const frame = () => {
    ctx.clearRect(0, 0, size, size);

    // Circular-cropped profile photo (dark fill until it loads)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r - 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    if (img.complete && img.naturalWidth) {
      ctx.drawImage(img, 0, 0, size, size);
    } else {
      ctx.fillStyle = '#0b0c10';
      ctx.fillRect(0, 0, size, size);
    }
    ctx.restore();

    // Faint full ring
    ctx.strokeStyle = 'rgba(222, 184, 135, 0.35)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // Rotating burlywood sweep
    ctx.strokeStyle = '#deb887';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx, cy, r, angle, angle + Math.PI * 0.5);
    ctx.stroke();

    angle += 0.2;
    link.href = canvas.toDataURL('image/png');
  };

  frame();
  setInterval(frame, 90);
}
