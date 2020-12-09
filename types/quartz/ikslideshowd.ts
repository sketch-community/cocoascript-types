declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikslideshow
 */
interface IKSlideshow extends NSObject {
  // doc://com.apple.documentation/documentation/quartz/ikslideshow/1504036-runslideshowwithdatasource
  runSlideshowWithDataSource_inMode_options(dataSource: cocoascript.IKSlideshowDataSource, slideshowMode: cocoascript.NSString, slideshowOptions: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/quartz/ikslideshow/1503801-stopslideshow
  stopSlideshow(sender: cocoascript.IKSlideshow):void;
  // doc://com.apple.documentation/documentation/quartz/ikslideshow/1504967-autoplaydelay
  autoPlayDelay(): cocoascript.NSTimeInterval;
  setAutoPlayDelay(): void;
  // doc://com.apple.documentation/documentation/quartz/ikslideshow/1503700-indexofcurrentslideshowitem
  indexOfCurrentSlideshowItem():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/quartz/ikslideshow/1504298-reloaddata
  reloadData():void;
  // doc://com.apple.documentation/documentation/quartz/ikslideshow/1504713-reloadslideshowitematindex
  reloadSlideshowItemAtIndex(index: cocoascript.NSUInteger):void;
  // 
  alloc():cocoascript.IKSlideshow;
  // 
  init():cocoascript.IKSlideshow;
}
}
declare const IKSlideshow: cocoascript.IKSlideshow;

