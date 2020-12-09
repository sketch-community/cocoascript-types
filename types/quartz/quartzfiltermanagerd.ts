declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/quartz/quartzfiltermanager
 */
interface QuartzFilterManager extends NSObject {
  // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1503409-delegate
  delegate():cocoascript.QuartzFilterManager;
  // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1505297-filterpanel
  filterPanel():cocoascript.NSPanel;
  // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1505290-filterview
  filterView():cocoascript.QuartzFilterView;
  // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1503784-importfilter
  importFilter(filterProperties: cocoascript.NSDictionary):cocoascript.QuartzFilter;
  // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1503913-selectfilter
  selectFilter(filter: cocoascript.QuartzFilter):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1504816-selectedfilter
  selectedFilter():cocoascript.QuartzFilter;
  // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1505098-setdelegate
  setDelegate(aDelegate: cocoascript.QuartzFilterManager):void;
  // 
  alloc():cocoascript.QuartzFilterManager;
  // 
  init():cocoascript.QuartzFilterManager;
}
}
declare const QuartzFilterManager: cocoascript.QuartzFilterManager;

