declare namespace cocoascript {
/**
 * The visual representation of your app’s miniaturized windows and app icon as they appear in the Dock. 
 * doc://com.apple.documentation/documentation/appkit/nsdocktile
 */
interface NSDockTile extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsdocktile/1525995-contentview
  contentView(): cocoascript.NSView;
  setContentView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocktile/1534239-size
  size(): cocoascript.NSSize;
  setSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocktile/1533723-owner
  owner(): cocoascript.id;
  setOwner(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocktile/1528057-showsapplicationbadge
  showsApplicationBadge(): cocoascript.BOOL;
  setShowsApplicationBadge(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocktile/1524433-badgelabel
  badgeLabel(): cocoascript.NSString;
  setBadgeLabel(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocktile/1527292-display
  display():void;
  // 
  alloc():cocoascript.NSDockTile;
  // 
  init():cocoascript.NSDockTile;
}
}
declare const NSDockTile: cocoascript.NSDockTile;

