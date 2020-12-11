declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartz/quartzfilter
   */
  interface QuartzFilter extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433684-applytocontext
    applyToContext(aContext: cocoascript.CGContextRef):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433682-localizedname
    localizedName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433686-properties
    properties():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433679-removefromcontext
    removeFromContext(aContext: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433677-url
    url():cocoascript.NSURL;
    //
    alloc():cocoascript.QuartzFilter;
    //
    init():cocoascript.QuartzFilter;
  }
}

declare const QuartzFilter: cocoascript.QuartzFilter;
