
## index

From [`index.js`](index.js)



prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**errorCallback** | `Function` | `error => {   console.log('Error: ', error.message, error.type, error.obj); }` | :x: | Error callback (lots of errors are non-fatal and the video will continue to play)
**fadeInDuration** | `Number` | `200` | :x: | How long should the fadeIn animation for the controls run? (in milliseconds) Default value is 200.
**fadeOutDuration** | `Number` | `1000` | :x: | How long should the fadeOut animation run? (in milliseconds) Default value is 1000.
**fullscreenEnterIcon** | `Unknown` | `FullscreenEnterIcon` | :x: | 
**fullscreenExitIcon** | `Unknown` | `FullscreenExitIcon` | :x: | 
**hideControlsTimerDuration** | `Number` | `4000` | :x: | If the user has not interacted with the controls, how long should the controls stay visible? (in milliseconds) Default value is 4000.
**isPortrait** | `Boolean` |  | :x: | 
**pauseIcon** | `Unknown` | `PauseIcon` | :x: | 
**playIcon** | `Unknown` | `PlayIcon` | :x: | 
**playbackCallback** | `Function` | `() => {}` | :x: | Callback that gets passed `playbackStatus` objects for the underlying video element
**quickFadeOutDuration** | `Number` | `200` | :x: | How long should the fadeOut animation run when the screen is tapped when the controls are visible? (in milliseconds) Default value is 200.
**replayIcon** | `Unknown` | `ReplayIcon` | :x: | 
**spinner** | `Unknown` | `Spinner` | :x: | 
**switchToLandscape** | `Function` |  | :x: | 
**switchToPortrait** | `Function` |  | :x: | 
**textStyle** | `Object` | `{   color: '#FFFFFF',   fontFamily: 'roboto-regular',   fontSize: 12, }` | :x: | Style to use for the all the text in the videoplayer including seek bar times and error messages
**thumbImage** | `Unknown` | `require('./assets/thumb.png')` | :x: | 
**trackImage** | `Unknown` | `require('./assets/track.png')` | :x: | 
**videoProps** | `Object` |  | :x: | Props to use into the underlying <Video>. Useful for configuring autoplay, playback speed, and other Video properties. See Expo documentation on <Video>.



