// Original procedural brushwork, not a reproduction of a historical painting.
// White pigment is tinted by the scene's environmental palette.
type Point = [number, number];
const random = (n: number) => {
  const r = Math.sin(n * 127.1 + 8.73) * 43758.5453;
  return r - Math.floor(r);
};

export function shorePainting(kind: 'bank' | 'reeds' | 'water') {
  const canvas = document.createElement('canvas');
  canvas.width = 1800;
  canvas.height = 640;
  const ctx = canvas.getContext('2d')!;
  let counter = 0;
  function stroke(points: Point[], width: number, opacity: number, dry = false) {
    const id = counter++ * 43;
    // A bundle of slightly separated hairs leaves air within the stroke.
    for (let hair = 0; hair < 5; hair++) {
      ctx.beginPath();
      points.forEach(([x, y], i) => {
        const drift = (random(id + hair * 20 + i) - 0.5) * width;
        if (i === 0) ctx.moveTo(x, y + drift);
        else ctx.lineTo(x, y + drift);
      });
      ctx.lineWidth = width * (0.11 + random(id + hair) * 0.14);
      ctx.lineCap = 'round';
      ctx.strokeStyle = `rgba(255,255,255,${opacity * (0.24 + random(id + hair + 8) * 0.3)})`;
      ctx.setLineDash(dry ? [8 + random(id + hair) * 19, 3 + random(id + hair + 1) * 9] : []);
      ctx.stroke();
    }
    ctx.setLineDash([]);
  }
  function wash(x: number, y: number, rx: number, ry: number, alpha: number) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(rx, ry);
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    gradient.addColorStop(0, `rgba(255,255,255,${alpha})`);
    gradient.addColorStop(0.6, `rgba(255,255,255,${alpha * 0.3})`);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(-1, -1, 2, 2);
    ctx.restore();
  }
  if (kind === 'bank') {
    // Two unequal banks, separated by an unpainted passage of water.
    wash(1300, 398, 460, 54, 0.28);
    wash(1490, 410, 220, 31, 0.22);
    stroke(
      [
        [780, 423],
        [902, 402],
        [972, 405],
        [1045, 391],
        [1150, 398],
        [1248, 383],
        [1388, 382],
        [1560, 409],
        [1700, 415],
      ],
      7,
      0.66,
      true,
    );
    stroke(
      [
        [820, 430],
        [940, 425],
        [1100, 411],
        [1190, 415],
      ],
      3,
      0.45,
      true,
    );
    stroke(
      [
        [1368, 428],
        [1510, 432],
        [1650, 421],
      ],
      3,
      0.38,
      true,
    );
    wash(224, 495, 215, 26, 0.23);
    stroke(
      [
        [25, 493],
        [129, 481],
        [208, 479],
        [299, 488],
        [376, 493],
        [447, 491],
      ],
      8,
      0.65,
      true,
    );
    stroke(
      [
        [58, 507],
        [174, 510],
        [235, 508],
      ],
      3,
      0.4,
      true,
    );
    // A distant dwelling is a few interrupted roof and wall gestures.
    for (const [x, y, size] of [
      [1270, 364, 1],
      [1370, 378, 0.66],
    ]) {
      stroke(
        [
          [x - 43 * size, y],
          [x - 8 * size, y - 21 * size],
          [x + 41 * size, y - 2 * size],
        ],
        6 * size,
        0.94,
      );
      stroke(
        [
          [x - 30 * size, y + 2],
          [x - 28 * size, y + 25 * size],
        ],
        2 * size,
        0.64,
        true,
      );
      stroke(
        [
          [x + 27 * size, y + 1],
          [x + 25 * size, y + 24 * size],
        ],
        2 * size,
        0.52,
        true,
      );
      stroke(
        [
          [x - 7 * size, y + 23 * size],
          [x - 7 * size, y + 11 * size],
        ],
        5 * size,
        0.6,
      );
    }
    // Broken field marks follow the bank instead of drawing a terrace diagram.
    for (let i = 0; i < 4; i++) {
      const x = 950 + i * 34;
      stroke(
        [
          [x, 412 + i * 3],
          [x + 43, 407 + i * 3],
          [x + 99, 410 + i * 3],
        ],
        1.8,
        0.35,
        true,
      );
    }
    for (let i = 0; i < 35; i++) {
      const x = 1110 + random(i + 90) * 430,
        y = 377 + random(i + 230) * 12;
      wash(x, y, 2 + random(i) * 6, 1 + random(i + 2) * 3, 0.35);
    }
  } else if (kind === 'reeds') {
    // Off-axis, uneven grasses. No repeated curtain of hanging willow.
    for (let i = 0; i < 13; i++) {
      const x = 150 + random(i + 40) * 250;
      const y = 500 + random(i + 70) * 15;
      const height = 22 + random(i + 12) * 86;
      const lean = (random(i + 80) - 0.65) * 55;
      stroke(
        [
          [x, y],
          [x + lean * 0.36, y - height * 0.55],
          [x + lean, y - height],
        ],
        1.8,
        0.75,
      );
      if (i % 3 === 0)
        stroke(
          [
            [x + lean * 0.35, y - height * 0.4],
            [x + lean + 20, y - height * 0.75],
          ],
          3.5,
          0.5,
        );
    }
  } else {
    for (const [x, y, length] of [
      [420, 475, 82],
      [540, 505, 105],
      [710, 460, 64],
      [1040, 550, 110],
      [1100, 563, 52],
      [320, 568, 130],
    ]) {
      stroke(
        [
          [x, y],
          [x + length * 0.4, y - 1.5],
          [x + length, y],
        ],
        1.5,
        0.5,
        true,
      );
    }
  }
  return canvas;
}
