declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource
 */
interface IKSlideshowDataSource {
  // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1503441-numberofslideshowitems
  numberOfSlideshowItems():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1503729-slideshowitematindex
  slideshowItemAtIndex(index: cocoascript.NSUInteger):cocoascript.IKSlideshowDataSource;
  // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1503638-nameofslideshowitematindex
  nameOfSlideshowItemAtIndex(index: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1505226-canexportslideshowitematindex
  canExportSlideshowItemAtIndex_toApplication(index: cocoascript.NSUInteger, applicationBundleIdentifier: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1504337-slideshowwillstart
  slideshowWillStart():void;
  // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1504870-slideshowdidstop
  slideshowDidStop():void;
  // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1504272-slideshowdidchangecurrentindex
  slideshowDidChangeCurrentIndex(newIndex: cocoascript.NSUInteger):void;
}
}

