declare namespace cocoascript {
/**
 * An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.
 * doc://com.apple.documentation/documentation/sirikit/inmediaitem
 */
interface INMediaItem extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962985-initwithidentifier
  initWithIdentifier_title_type_artwork(identifier: cocoascript.NSString, title: cocoascript.NSString, type: cocoascript.INMediaItemType, artwork: cocoascript.INImage):cocoascript.INMediaItem;
  // doc://com.apple.documentation/documentation/sirikit/inmediaitem/3074229-initwithidentifier
  initWithIdentifier_title_type_artwork_artist(identifier: cocoascript.NSString, title: cocoascript.NSString, type: cocoascript.INMediaItemType, artwork: cocoascript.INImage, artist: cocoascript.NSString):cocoascript.INMediaItem;
  // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962983-artwork
  artwork(): cocoascript.INImage;
  setArtwork(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962984-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962986-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmediaitem/3074228-artist
  artist(): cocoascript.NSString;
  setArtist(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962987-type
  type(): cocoascript.INMediaItemType;
  setType(): void;
  // 
  alloc():cocoascript.INMediaItem;
  // 
  init():cocoascript.INMediaItem;
}
}
declare const INMediaItem: cocoascript.INMediaItem;

