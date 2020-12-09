declare namespace cocoascript {
/**
 * A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons. 
 * doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell
 */
interface NSTextAttachmentCell extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508396-attachment
  attachment(): cocoascript.NSTextAttachment;
  setAttachment(): void;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508392-drawwithframe
  drawWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508412-drawwithframe
  drawWithFrame_inView_characterIndex(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView, charIndex: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508385-drawwithframe
  drawWithFrame_inView_characterIndex_layoutManager(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView, charIndex: cocoascript.NSUInteger, layoutManager: cocoascript.NSLayoutManager):void;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508384-highlight
  highlight_withFrame_inView(flag: cocoascript.BOOL, cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508405-cellsize
  cellSize():cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508420-cellbaselineoffset
  cellBaselineOffset():cocoascript.NSPoint;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508402-cellframefortextcontainer
  cellFrameForTextContainer_proposedLineFragment_glyphPosition_characterIndex(textContainer: cocoascript.NSTextContainer, lineFrag: cocoascript.NSRect, position: cocoascript.NSPoint, charIndex: cocoascript.NSUInteger):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508415-wantstotrackmouse
  wantsToTrackMouse():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508399-wantstotrackmouseforevent
  wantsToTrackMouseForEvent_inRect_ofView_atCharacterIndex(theEvent: cocoascript.NSEvent, cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView, charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508418-trackmouse
  trackMouse_inRect_ofView_untilMouseUp(theEvent: cocoascript.NSEvent, cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView, flag: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/1508388-nstextattachmentcell/1508380-trackmouse
  trackMouse_inRect_ofView_atCharacterIndex_untilMouseUp(theEvent: cocoascript.NSEvent, cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView, charIndex: cocoascript.NSUInteger, flag: cocoascript.BOOL):cocoascript.BOOL;
}
}

