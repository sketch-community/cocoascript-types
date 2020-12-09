declare namespace cocoascript {
/**
 * A protocol that describes how a UI control should redisplay when space is restricted. 
 * doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompression
 */
interface NSUserInterfaceCompression {
  // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompression/2909978-compresswithprioritizedcompressi
  compressWithPrioritizedCompressionOptions(prioritizedOptions: cocoascript.NSUserInterfaceCompressionOptions):void;
  // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompression/2909973-minimumsizewithprioritizedcompre
  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: cocoascript.NSUserInterfaceCompressionOptions):cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompression/2909984-activecompressionoptions
  activeCompressionOptions(): cocoascript.NSUserInterfaceCompressionOptions;
  setActiveCompressionOptions(): void;
}
}

