import assert from 'node:assert/strict';
import { getLaunchFrame } from '../src/launchMotion.ts';

for (const [width, height, rocketWidth] of [[1440, 900, 83], [1920, 1080, 83], [390, 844, 63], [360, 640, 63], [844, 390, 83]]) {
  const rocketHeight = rocketWidth * 213 / 109;
  assert.ok(getLaunchFrame(0, width, height, rocketHeight).rocketY > height, "Rocket must start entirely below the viewport");
  assert.ok(getLaunchFrame(0.67, width, height, rocketHeight).revealEdge < height, "Second section must begin revealing earlier");
  let previousY = Infinity;
  for (let step = 0; step <= 100; step++) {
    const progress = step / 100;
    const frame = getLaunchFrame(progress, width, height, rocketHeight);
    assert.ok(frame.rocketY <= previousY, 'Rocket must move upward as scrolling advances');
    previousY = frame.rocketY;
    assert.ok(frame.paths.every(path => !/NaN|Infinity/.test(path)), 'All paths must have finite coordinates');
    for (const trackHeight of [height * 1.25, 680 + height * 0.25]) {
      const nextSectionTop = trackHeight * (1 - progress);
      const handoff = getLaunchFrame(progress, width, height, rocketHeight, nextSectionTop);
      if (nextSectionTop > 0) {
        assert.ok(handoff.revealEdge >= nextSectionTop, 'Closing smoke must never expose the hero above the next section');
      }
    }
    if (progress >= 0.36 && progress <= 0.40) {
      assert.ok(frame.outerEdge < 0, 'All three sweep layers must cover the top corners before handoff');
      assert.ok(frame.revealEdge > height, 'Reveal must stay below the viewport during full coverage');
    }
  }
  assert.ok(getLaunchFrame(0.72, width, height, rocketHeight).revealEdge + 130 < 0, 'Smoke must clear by 72% of the transition');
  assert.deepEqual(getLaunchFrame(0.2, width, height, rocketHeight), getLaunchFrame(0.2, width, height, rocketHeight), 'Reverse scrolling must reproduce identical geometry');
}
console.log('Launch geometry checks passed at five desktop, mobile and landscape sizes.');



