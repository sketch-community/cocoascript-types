declare namespace cocoascript {
/**
 * A protocol that an object adopts to create a bar object in your app.
 * doc://com.apple.documentation/documentation/appkit/nstouchbarprovider
 */
interface NSTouchBarProvider extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstouchbarprovider/2544662-touchbar
  touchBar(): cocoascript.NSTouchBar;
  setTouchBar(): void;
}
}

