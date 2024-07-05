fpsMeter() {
  let prevTime = Date.now(),
      frames = 0;

  requestAnimationFrame(function loop() {
    const time = Date.now();
    frames++;
    if (time > prevTime + 1000) {
      let fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
      prevTime = time;
      frames = 0;

      console.info('FPS: ', fps);
    }

    requestAnimationFrame(loop);
  });
}

fpsMeter();