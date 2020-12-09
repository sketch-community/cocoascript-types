declare namespace cocoascript {
/**
 * A Core Animation layer that Metal can render into, typically to be displayed onscreen.
 * doc://com.apple.documentation/documentation/quartzcore/cametallayer
 */
interface CAMetalLayer extends CALayer {
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478163-device
  device(): cocoascript.MTLDevice;
  setDevice(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/3175021-preferreddevice
  preferredDevice(): cocoascript.MTLDevice;
  setPreferredDevice(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478155-pixelformat
  pixelFormat(): cocoascript.MTLPixelFormat;
  setPixelFormat(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478170-colorspace
  colorspace(): cocoascript.CGColorSpaceRef;
  setColorspace(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478168-framebufferonly
  framebufferOnly(): cocoascript.BOOL;
  setFramebufferOnly(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478174-drawablesize
  drawableSize(): cocoascript.CGSize;
  setDrawableSize(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478157-presentswithtransaction
  presentsWithTransaction(): cocoascript.BOOL;
  setPresentsWithTransaction(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2887087-displaysyncenabled
  displaySyncEnabled(): cocoascript.BOOL;
  setDisplaySyncEnabled(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478161-wantsextendeddynamicrangecontent
  wantsExtendedDynamicRangeContent(): cocoascript.BOOL;
  setWantsExtendedDynamicRangeContent(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/3182052-edrmetadata
  EDRMetadata(): cocoascript.CAEDRMetadata;
  setEDRMetadata(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478172-nextdrawable
  nextDrawable():cocoascript.CAMetalDrawable;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2938720-maximumdrawablecount
  maximumDrawableCount(): cocoascript.NSUInteger;
  setMaximumDrawableCount(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2887086-allowsnextdrawabletimeout
  allowsNextDrawableTimeout(): cocoascript.BOOL;
  setAllowsNextDrawableTimeout(): void;
  // 
  alloc():cocoascript.CAMetalLayer;
  // 
  init():cocoascript.CAMetalLayer;
}
}
declare const CAMetalLayer: cocoascript.CAMetalLayer;

