declare namespace cocoascript {
/**
 * An object that describes the destination for a media item.
 * doc://com.apple.documentation/documentation/sirikit/inmediadestination
 */
interface INMediaDestination extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inmediadestination/3074218-playlistname
  playlistName(): cocoascript.NSString;
  setPlaylistName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmediadestination/3074216-mediadestinationtype
  mediaDestinationType(): cocoascript.INMediaDestinationType;
  setMediaDestinationType(): void;
  // 
  alloc():cocoascript.INMediaDestination;
  // 
  init():cocoascript.INMediaDestination;
}
}
declare const INMediaDestination: cocoascript.INMediaDestination;

