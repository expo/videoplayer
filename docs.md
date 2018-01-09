
## index

From [`index.js`](index.js)



prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**debug** | `Boolean` | `false` | :x: | Write internal logs to console
**errorCallback** | `Function` | `error => {   console.log('Error: ', error.message, error.type, error.obj); }` | :x: | Error callback (lots of errors are non-fatal and the video will continue to play)
**fadeInDuration** | `Number` | `200` | :x: | How long should the fadeIn animation for the controls run? (in milliseconds) Default value is 200.
**fadeOutDuration** | `Number` | `1000` | :x: | How long should the fadeOut animation run? (in milliseconds) Default value is 1000.
**fullscreenEnterIcon** | `Function` | `FullscreenEnterIcon` | :x: | 
**fullscreenExitIcon** | `Function` | `FullscreenExitIcon` | :x: | 
**hideControlsTimerDuration** | `Number` | `4000` | :x: | If the user has not interacted with the controls, how long should the controls stay visible? (in milliseconds) Default value is 4000.
**isPortrait** | `Boolean` |  | :x: | 
**pauseIcon** | `Function` | `PauseIcon` | :x: | 
**playIcon** | `Function` | `PlayIcon` | :x: | 
**playbackCallback** | `Function` | `() => {}` | :x: | Callback that gets passed `playbackStatus` objects for the underlying video element
**quickFadeOutDuration** | `Number` | `200` | :x: | How long should the fadeOut animation run when the screen is tapped when the controls are visible? (in milliseconds) Default value is 200.
**replayIcon** | `Unknown` | `ReplayIcon` | :x: | 
**showControlsOnLoad** | `Boolean` | `false` | :x: | 
**showFullscreenButton** | `Boolean` | `true` | :x: | 
**spinner** | `Function` | `Spinner` | :x: | 
**switchToLandscape** | `Function` | `() => {   console.warn(     'Pass in this function `switchToLandscape` in props to enable fullscreening'   ); }` | :x: | 
**switchToPortrait** | `Function` | `() => {   console.warn(     'Pass in this function `switchToLandscape` in props to enable fullscreening'   ); }` | :x: | 
**textStyle** | `Object` | `{   color: '#FFFFFF',   fontSize: 12, }` | :x: | Style to use for the all the text in the videoplayer including seek bar times and error messages
**thumbImage** | `Unknown` | `require('./assets/thumb.png')` | :x: | 
**trackImage** | `Unknown` | `require('./assets/track.png')` | :x: | 
**videoProps** | `Object` |  | :x: | Props to use into the underlying <Video>. Useful for configuring autoplay, playback speed, and other Video properties. See Expo documentation on <Video>. `source` is required.



