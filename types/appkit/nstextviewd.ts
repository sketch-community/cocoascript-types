declare namespace cocoascript {
/**
 * A view that draws text and handles user interactions with that text. 
 * doc://com.apple.documentation/documentation/appkit/nstextview
 */
interface NSTextView extends NSText {
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449347-initwithframe
  initWithFrame_textContainer(frameRect: cocoascript.NSRect, container: cocoascript.NSTextContainer):cocoascript.NSTextView;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449262-initwithframe
  initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSTextView;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449521-delegate
  delegate(): cocoascript.NSTextViewDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449364-textcontainer
  textContainer(): cocoascript.NSTextContainer;
  setTextContainer(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449479-replacetextcontainer
  replaceTextContainer(newContainer: cocoascript.NSTextContainer):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449168-textcontainerinset
  textContainerInset(): cocoascript.NSSize;
  setTextContainerInset(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449477-textcontainerorigin
  textContainerOrigin(): cocoascript.NSPoint;
  setTextContainerOrigin(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449546-invalidatetextcontainerorigin
  invalidateTextContainerOrigin():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449148-layoutmanager
  layoutManager(): cocoascript.NSLayoutManager;
  setLayoutManager(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449196-textstorage
  textStorage(): cocoascript.NSTextStorage;
  setTextStorage(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449501-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449530-drawsbackground
  drawsBackground(): cocoascript.BOOL;
  setDrawsBackground(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449397-allowsdocumentbackgroundcolorcha
  allowsDocumentBackgroundColorChange(): cocoascript.BOOL;
  setAllowsDocumentBackgroundColorChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449475-changedocumentbackgroundcolor
  changeDocumentBackgroundColor(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449279-setneedsdisplayinrect
  setNeedsDisplayInRect_avoidAdditionalLayout(rect: cocoascript.NSRect, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449152-shoulddrawinsertionpoint
  shouldDrawInsertionPoint(): cocoascript.BOOL;
  setShouldDrawInsertionPoint(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449232-drawinsertionpointinrect
  drawInsertionPointInRect_color_turnedOn(rect: cocoascript.NSRect, color: cocoascript.NSColor, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449135-drawviewbackgroundinrect
  drawViewBackgroundInRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449230-setconstrainedframesize
  setConstrainedFrameSize(desiredSize: cocoascript.NSSize):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449202-cleanupafterdragoperation
  cleanUpAfterDragOperation():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449540-showfindindicatorforrange
  showFindIndicatorForRange(charRange: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449174-inserttext
  insertText(insertString: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449370-allowedinputsourcelocales
  allowedInputSourceLocales(): cocoascript.NSString;
  setAllowedInputSourceLocales(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449450-allowsundo
  allowsUndo(): cocoascript.BOOL;
  setAllowsUndo(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449345-editable
  editable(): cocoascript.BOOL;
  setEditable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449297-selectable
  selectable(): cocoascript.BOOL;
  setSelectable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449156-fieldeditor
  fieldEditor(): cocoascript.BOOL;
  setFieldEditor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449538-richtext
  richText(): cocoascript.BOOL;
  setRichText(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449266-importsgraphics
  importsGraphics(): cocoascript.BOOL;
  setImportsGraphics(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449146-setbasewritingdirection
  setBaseWritingDirection_range(writingDirection: cocoascript.NSWritingDirection, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449465-togglebasewritingdirection
  toggleBaseWritingDirection(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449271-defaultparagraphstyle
  defaultParagraphStyle(): cocoascript.NSParagraphStyle;
  setDefaultParagraphStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449386-outline
  outline(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449425-allowsimageediting
  allowsImageEditing(): cocoascript.BOOL;
  setAllowsImageEditing(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449258-automaticquotesubstitutionenable
  automaticQuoteSubstitutionEnabled(): cocoascript.BOOL;
  setAutomaticQuoteSubstitutionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449444-toggleautomaticquotesubstitution
  toggleAutomaticQuoteSubstitution(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449170-automaticlinkdetectionenabled
  automaticLinkDetectionEnabled(): cocoascript.BOOL;
  setAutomaticLinkDetectionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449353-toggleautomaticlinkdetection
  toggleAutomaticLinkDetection(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449204-displayslinktooltips
  displaysLinkToolTips(): cocoascript.BOOL;
  setDisplaysLinkToolTips(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449218-usesruler
  usesRuler(): cocoascript.BOOL;
  setUsesRuler(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449406-rulervisible
  rulerVisible(): cocoascript.BOOL;
  setRulerVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449407-usesinspectorbar
  usesInspectorBar(): cocoascript.BOOL;
  setUsesInspectorBar(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449129-selectedranges
  selectedRanges(): cocoascript.NSValue;
  setSelectedRanges(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449256-setselectedrange
  setSelectedRange(charRange: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449462-setselectedrange
  setSelectedRange_affinity_stillSelecting(charRange: cocoascript.NSRange, affinity: cocoascript.NSSelectionAffinity, stillSelectingFlag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449208-setselectedranges
  setSelectedRanges_affinity_stillSelecting(ranges: cocoascript.NSValue, affinity: cocoascript.NSSelectionAffinity, stillSelectingFlag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449291-selectionaffinity
  selectionAffinity(): cocoascript.NSSelectionAffinity;
  setSelectionAffinity(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449165-selectiongranularity
  selectionGranularity(): cocoascript.NSSelectionGranularity;
  setSelectionGranularity(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449309-insertionpointcolor
  insertionPointColor(): cocoascript.NSColor;
  setInsertionPointColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449268-updateinsertionpointstateandrest
  updateInsertionPointStateAndRestartTimer(restartFlag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449270-selectedtextattributes
  selectedTextAttributes(): cocoascript.id;
  setSelectedTextAttributes(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449179-markedtextattributes
  markedTextAttributes(): cocoascript.id;
  setMarkedTextAttributes(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449452-linktextattributes
  linkTextAttributes(): cocoascript.id;
  setLinkTextAttributes(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449505-characterindexforinsertionatpoin
  characterIndexForInsertionAtPoint(point: cocoascript.NSPoint):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449131-preferredpasteboardtypefromarray
  preferredPasteboardTypeFromArray_restrictedToTypesFromArray(availableTypes: cocoascript.NSPasteboardType, allowedTypes: cocoascript.NSPasteboardType):cocoascript.NSPasteboardType;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449469-readselectionfrompasteboard
  readSelectionFromPasteboard(pboard: cocoascript.NSPasteboard):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449190-readselectionfrompasteboard
  readSelectionFromPasteboard_type(pboard: cocoascript.NSPasteboard, type: cocoascript.NSPasteboardType):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449361-readablepasteboardtypes
  readablePasteboardTypes(): cocoascript.NSPasteboardType;
  setReadablePasteboardTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449222-writablepasteboardtypes
  writablePasteboardTypes(): cocoascript.NSPasteboardType;
  setWritablePasteboardTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449187-writeselectiontopasteboard
  writeSelectionToPasteboard_type(pboard: cocoascript.NSPasteboard, type: cocoascript.NSPasteboardType):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449277-writeselectiontopasteboard
  writeSelectionToPasteboard_types(pboard: cocoascript.NSPasteboard, types: cocoascript.NSPasteboardType):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449301-validrequestorforsendtype
  validRequestorForSendType_returnType(sendType: cocoascript.NSPasteboardType, returnType: cocoascript.NSPasteboardType):cocoascript.NSTextView;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449515-alignjustified
  alignJustified(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449216-changeattributes
  changeAttributes(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449282-changecolor
  changeColor(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449536-setalignment
  setAlignment_range(alignment: cocoascript.NSTextAlignment, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449487-typingattributes
  typingAttributes(): cocoascript.id;
  setTypingAttributes(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449491-usestandardkerning
  useStandardKerning(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449289-lowerbaseline
  lowerBaseline(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449198-raisebaseline
  raiseBaseline(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449464-turnoffkerning
  turnOffKerning(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449183-loosenkerning
  loosenKerning(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449137-tightenkerning
  tightenKerning(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449144-usestandardligatures
  useStandardLigatures(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449436-turnoffligatures
  turnOffLigatures(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449213-useallligatures
  useAllLigatures(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449292-toggletraditionalcharactershape
  toggleTraditionalCharacterShape(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449497-clickedonlink
  clickedOnLink_atIndex(link: cocoascript.NSTextView, charIndex: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449250-pasteasplaintext
  pasteAsPlainText(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449395-pasteasrichtext
  pasteAsRichText(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449384-breakundocoalescing
  breakUndoCoalescing():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449368-coalescingundo
  coalescingUndo(): cocoascript.BOOL;
  setCoalescingUndo(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449401-updatefontpanel
  updateFontPanel():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449323-updateruler
  updateRuler():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449234-acceptabledragtypes
  acceptableDragTypes(): cocoascript.NSPasteboardType;
  setAcceptableDragTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449181-updatedragtyperegistration
  updateDragTypeRegistration():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449188-selectionrangeforproposedrange
  selectionRangeForProposedRange_granularity(proposedCharRange: cocoascript.NSRange, granularity: cocoascript.NSSelectionGranularity):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449392-rangeforusercharacterattributech
  rangeForUserCharacterAttributeChange(): cocoascript.NSRange;
  setRangeForUserCharacterAttributeChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449503-rangesforusercharacterattributec
  rangesForUserCharacterAttributeChange(): cocoascript.NSValue;
  setRangesForUserCharacterAttributeChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449252-rangeforuserparagraphattributech
  rangeForUserParagraphAttributeChange(): cocoascript.NSRange;
  setRangeForUserParagraphAttributeChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449161-rangesforuserparagraphattributec
  rangesForUserParagraphAttributeChange(): cocoascript.NSValue;
  setRangesForUserParagraphAttributeChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449315-rangeforusertextchange
  rangeForUserTextChange(): cocoascript.NSRange;
  setRangeForUserTextChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449434-rangesforusertextchange
  rangesForUserTextChange(): cocoascript.NSValue;
  setRangesForUserTextChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449532-shouldchangetextinrange
  shouldChangeTextInRange_replacementString(affectedCharRange: cocoascript.NSRange, replacementString: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449311-shouldchangetextinranges
  shouldChangeTextInRanges_replacementStrings(affectedRanges: cocoascript.NSValue, replacementStrings: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449296-didchangetext
  didChangeText():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449236-smartinsertdeleteenabled
  smartInsertDeleteEnabled(): cocoascript.BOOL;
  setSmartInsertDeleteEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449428-smartdeleterangeforproposedrange
  smartDeleteRangeForProposedRange(proposedCharRange: cocoascript.NSRange):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449467-smartinsertafterstringforstring
  smartInsertAfterStringForString_replacingRange(pasteString: cocoascript.NSString, charRangeToReplace: cocoascript.NSRange):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449242-smartinsertbeforestringforstring
  smartInsertBeforeStringForString_replacingRange(pasteString: cocoascript.NSString, charRangeToReplace: cocoascript.NSRange):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449544-smartinsertforstring
  smartInsertForString_replacingRange_beforeString_afterString(pasteString: cocoascript.NSString, charRangeToReplace: cocoascript.NSRange, beforeString: cocoascript._Nullable, afterString: cocoascript._Nullable):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449273-togglesmartinsertdelete
  toggleSmartInsertDelete(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449430-continuousspellcheckingenabled
  continuousSpellCheckingEnabled(): cocoascript.BOOL;
  setContinuousSpellCheckingEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449513-spellcheckerdocumenttag
  spellCheckerDocumentTag(): cocoascript.NSInteger;
  setSpellCheckerDocumentTag(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449471-togglecontinuousspellchecking
  toggleContinuousSpellChecking(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449166-grammarcheckingenabled
  grammarCheckingEnabled(): cocoascript.BOOL;
  setGrammarCheckingEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449393-togglegrammarchecking
  toggleGrammarChecking(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449493-setspellingstate
  setSpellingState_range(value: cocoascript.NSInteger, charRange: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449150-orderfrontsharingservicepicker
  orderFrontSharingServicePicker(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449159-rulerview
  rulerView_didMoveMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449287-rulerview
  rulerView_willMoveMarker_toLocation(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker, location: cocoascript.CGFloat):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449390-rulerview
  rulerView_shouldMoveMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449299-rulerview
  rulerView_didRemoveMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449366-rulerview
  rulerView_shouldRemoveMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449523-rulerview
  rulerView_didAddMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449446-rulerview
  rulerView_shouldAddMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449351-rulerview
  rulerView_willAddMarker_atLocation(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker, location: cocoascript.CGFloat):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449399-rulerview
  rulerView_handleMouseDown(ruler: cocoascript.NSRulerView, event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449423-dragimageforselectionwithevent
  dragImageForSelectionWithEvent_origin(event: cocoascript.NSEvent, origin: cocoascript.NSPointPointer):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449176-dragoperationfordragginginfo
  dragOperationForDraggingInfo_type(dragInfo: cocoascript.NSDraggingInfo, type: cocoascript.NSPasteboardType):cocoascript.NSDragOperation;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449413-dragselectionwithevent
  dragSelectionWithEvent_offset_slideBack(event: cocoascript.NSEvent, mouseOffset: cocoascript.NSSize, slideBack: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449163-acceptsglyphinfo
  acceptsGlyphInfo(): cocoascript.BOOL;
  setAcceptsGlyphInfo(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449519-startspeaking
  startSpeaking(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449172-stopspeaking
  stopSpeaking(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449534-usesfontpanel
  usesFontPanel(): cocoascript.BOOL;
  setUsesFontPanel(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449293-usesfindpanel
  usesFindPanel(): cocoascript.BOOL;
  setUsesFindPanel(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449525-performfindpanelaction
  performFindPanelAction(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449238-orderfrontlinkpanel
  orderFrontLinkPanel(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449349-orderfrontlistpanel
  orderFrontListPanel(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449438-orderfrontspacingpanel
  orderFrontSpacingPanel(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449442-orderfronttablepanel
  orderFrontTablePanel(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449327-orderfrontsubstitutionspanel
  orderFrontSubstitutionsPanel(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449359-complete
  complete(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449405-completionsforpartialwordrange
  completionsForPartialWordRange_indexOfSelectedItem(charRange: cocoascript.NSRange, index: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449448-insertcompletion
  insertCompletion_forPartialWordRange_movement_isFinal(word: cocoascript.NSString, charRange: cocoascript.NSRange, movement: cocoascript.NSInteger, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449329-rangeforusercompletion
  rangeForUserCompletion(): cocoascript.NSRange;
  setRangeForUserCompletion(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449440-checktextindocument
  checkTextInDocument(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449382-checktextinselection
  checkTextInSelection(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449240-checktextinrange
  checkTextInRange_types_options(range: cocoascript.NSRange, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449473-handletextcheckingresults
  handleTextCheckingResults_forRange_types_options_orthography_wordCount(results: cocoascript.NSTextCheckingResult, range: cocoascript.NSRange, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSTextView, orthography: cocoascript.NSOrthography, wordCount: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449529-enabledtextcheckingtypes
  enabledTextCheckingTypes(): cocoascript.NSTextCheckingTypes;
  setEnabledTextCheckingTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449403-automaticdashsubstitutionenabled
  automaticDashSubstitutionEnabled(): cocoascript.BOOL;
  setAutomaticDashSubstitutionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449305-toggleautomaticdashsubstitution
  toggleAutomaticDashSubstitution(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449192-automaticdatadetectionenabled
  automaticDataDetectionEnabled(): cocoascript.BOOL;
  setAutomaticDataDetectionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449499-toggleautomaticdatadetection
  toggleAutomaticDataDetection(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449254-automaticspellingcorrectionenabl
  automaticSpellingCorrectionEnabled(): cocoascript.BOOL;
  setAutomaticSpellingCorrectionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449178-toggleautomaticspellingcorrectio
  toggleAutomaticSpellingCorrection(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449210-automatictextreplacementenabled
  automaticTextReplacementEnabled(): cocoascript.BOOL;
  setAutomaticTextReplacementEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449200-toggleautomatictextreplacement
  toggleAutomaticTextReplacement(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449409-updatequicklookpreviewpanel
  updateQuickLookPreviewPanel():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449415-togglequicklookpreviewpanel
  toggleQuickLookPreviewPanel(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449426-quicklookpreviewableitemsinrange
  quickLookPreviewableItemsInRanges(ranges: cocoascript.NSValue):cocoascript.QLPreviewItem;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449286-changelayoutorientation
  changeLayoutOrientation(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449483-setlayoutorientation
  setLayoutOrientation(orientation: cocoascript.NSTextLayoutOrientation):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449456-usesfindbar
  usesFindBar(): cocoascript.BOOL;
  setUsesFindBar(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449458-incrementalsearchingenabled
  incrementalSearchingEnabled(): cocoascript.BOOL;
  setIncrementalSearchingEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextviewdidchangeselectionnotification
  NSTextViewDidChangeSelectionNotification(): cocoascript.NSNotificationName;
  setNSTextViewDidChangeSelectionNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextviewwillchangenotifyingtextviewnotification
  NSTextViewWillChangeNotifyingTextViewNotification(): cocoascript.NSNotificationName;
  setNSTextViewWillChangeNotifyingTextViewNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextviewdidchangetypingattributesnotification
  NSTextViewDidChangeTypingAttributesNotification(): cocoascript.NSNotificationName;
  setNSTextViewDidChangeTypingAttributesNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449489-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSTextView;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2544680-allowscharacterpickertouchbarite
  allowsCharacterPickerTouchBarItem(): cocoascript.BOOL;
  setAllowsCharacterPickerTouchBarItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2544750-candidatelisttouchbaritem
  candidateListTouchBarItem(): cocoascript.NSCandidateListTouchBarItem;
  setCandidateListTouchBarItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2544655-automatictextcompletionenabled
  automaticTextCompletionEnabled(): cocoascript.BOOL;
  setAutomaticTextCompletionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/3237223-usesadaptivecolormappingfordarka
  usesAdaptiveColorMappingForDarkAppearance(): cocoascript.BOOL;
  setUsesAdaptiveColorMappingForDarkAppearance(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/1449357-usesrolloverbuttonforselection
  usesRolloverButtonForSelection(): cocoascript.BOOL;
  setUsesRolloverButtonForSelection(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2269433-stronglyreferencestextstorage
  stronglyReferencesTextStorage(): cocoascript.BOOL;
  setStronglyReferencesTextStorage(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2990526-performvalidatedreplacementinran
  performValidatedReplacementInRange_withAttributedString(range: cocoascript.NSRange, attributedString: cocoascript.NSAttributedString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2544841-toggleautomatictextcompletion
  toggleAutomaticTextCompletion(sender: cocoascript.NSTextView):void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2544833-updatecandidates
  updateCandidates():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2544676-updatetexttouchbaritems
  updateTextTouchBarItems():void;
  // doc://com.apple.documentation/documentation/appkit/nstextview/2544834-updatetouchbaritemidentifiers
  updateTouchBarItemIdentifiers():void;
  // 
  alloc():cocoascript.NSTextView;
  // 
  init():cocoascript.NSTextView;
}
}
declare const NSTextView: cocoascript.NSTextView;

