import { animate, splitText, stagger } from "https://esm.sh/animejs";

splitText('h1', {
  lines: { wrap: 'clip' },
})
.addEffect(({ lines }) => animate(lines, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 750, ease: 'in(3)' }
  ],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(200),
  loop: true,
  loopDelay: 500,
}));