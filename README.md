
Videoplayer controls builds on top of the Expo Video component. All of the colors, timing, images and types are customizable. The behavior generally follows YouTube (examples of where this is relevant: controls fading in/out, what shows over the player when seeking, etc.).

![](/images/default.png)
![](/images/custom.png)
![](/images/fullscreen.png)

You can try the [example app on Expo here](https://exp.host/@abiraja/expo-videoplayer-examples).

## Install

`npm install @expo/videoplayer`

## Examples

See the examples directory for a full example.

```
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

<VideoPlayer
  videoProps={{
    shouldPlay: true,
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    source: {
      uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    },
  }}
  isPortrait={true}
  playFromPositionMillis={0}
/>
```

## Props

The props are [documented here](docs.md).
