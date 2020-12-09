declare namespace cocoascript {
/**
 * Methods to implement on an object that represents content that is intended to be read by users, such as a book or an article. 
 * doc://com.apple.documentation/documentation/uikit/uiaccessibilityreadingcontent
 */
interface UIAccessibilityReadingContent {
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilityreadingcontent/1615107-accessibilitylinenumberforpoint
  accessibilityLineNumberForPoint(point: cocoascript.CGPoint):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilityreadingcontent/2866114-accessibilityattributedcontentfo
  accessibilityAttributedContentForLineNumber(lineNumber: cocoascript.NSInteger):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilityreadingcontent/1615163-accessibilitycontentforlinenumbe
  accessibilityContentForLineNumber(lineNumber: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilityreadingcontent/1615171-accessibilityframeforlinenumber
  accessibilityFrameForLineNumber(lineNumber: cocoascript.NSInteger):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilityreadingcontent/2865881-accessibilityattributedpageconte
  accessibilityAttributedPageContent():cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilityreadingcontent/1615157-accessibilitypagecontent
  accessibilityPageContent():cocoascript.NSString;
}
}

