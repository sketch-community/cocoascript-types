declare namespace cocoascript {
/**
 * A set of methods you use to respond to a stack view detaching and reattaching views. 
 * doc://com.apple.documentation/documentation/appkit/nsstackviewdelegate
 */
interface NSStackViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsstackviewdelegate/1488921-stackview
  stackView_didReattachViews(stackView: cocoascript.NSStackView, views: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nsstackviewdelegate/1488953-stackview
  stackView_willDetachViews(stackView: cocoascript.NSStackView, views: cocoascript.NSView):void;
}
}

