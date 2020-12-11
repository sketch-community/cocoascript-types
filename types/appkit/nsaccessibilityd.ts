declare namespace cocoascript {
  /**
   * The complete list of properties and methods implemented by accessible elements.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibility
   */
  interface NSAccessibility extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535002-accessibilityelement
    accessibilityElement(): cocoascript.BOOL;
    setAccessibilityElement(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535024-accessibilityenabled
    accessibilityEnabled(): cocoascript.BOOL;
    setAccessibilityEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534939-accessibilityframe
    accessibilityFrame(): cocoascript.NSRect;
    setAccessibilityFrame(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534974-accessibilityhelp
    accessibilityHelp(): cocoascript.NSString;
    setAccessibilityHelp(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534976-accessibilitylabel
    accessibilityLabel(): cocoascript.NSString;
    setAccessibilityLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535033-accessibilitytitle
    accessibilityTitle(): cocoascript.NSString;
    setAccessibilityTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535103-accessibilityvalue
    accessibilityValue(): cocoascript.id;
    setAccessibilityValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535026-accessibilitycontents
    accessibilityContents(): cocoascript.NSArray;
    setAccessibilityContents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534973-accessibilitycriticalvalue
    accessibilityCriticalValue(): cocoascript.id;
    setAccessibilityCriticalValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535023-accessibilityidentifier
    accessibilityIdentifier(): cocoascript.NSString;
    setAccessibilityIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535078-accessibilitymaxvalue
    accessibilityMaxValue(): cocoascript.id;
    setAccessibilityMaxValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534995-accessibilityminvalue
    accessibilityMinValue(): cocoascript.id;
    setAccessibilityMinValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535106-accessibilityorientation
    accessibilityOrientation(): cocoascript.NSAccessibilityOrientation;
    setAccessibilityOrientation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535083-accessibilityprotectedcontent
    accessibilityProtectedContent(): cocoascript.BOOL;
    setAccessibilityProtectedContent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534981-accessibilityselected
    accessibilitySelected(): cocoascript.BOOL;
    setAccessibilitySelected(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535157-accessibilityurl
    accessibilityURL(): cocoascript.NSURL;
    setAccessibilityURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535113-accessibilityvaluedescription
    accessibilityValueDescription(): cocoascript.NSString;
    setAccessibilityValueDescription(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535032-accessibilitywarningvalue
    accessibilityWarningValue(): cocoascript.id;
    setAccessibilityWarningValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535018-accessibilitychildren
    accessibilityChildren(): cocoascript.NSArray;
    setAccessibilityChildren(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/2869552-accessibilitychildreninnavigatio
    accessibilityChildrenInNavigationOrder(): cocoascript.NSAccessibilityElement;
    setAccessibilityChildrenInNavigationOrder(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535040-accessibilityparent
    accessibilityParent(): cocoascript.id;
    setAccessibilityParent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534970-accessibilityselectedchildren
    accessibilitySelectedChildren(): cocoascript.NSArray;
    setAccessibilitySelectedChildren(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535092-accessibilitytopleveluielement
    accessibilityTopLevelUIElement(): cocoascript.id;
    setAccessibilityTopLevelUIElement(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534964-accessibilityvisiblechildren
    accessibilityVisibleChildren(): cocoascript.NSArray;
    setAccessibilityVisibleChildren(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535139-accessibilityapplicationfocusedu
    accessibilityApplicationFocusedUIElement(): cocoascript.id;
    setAccessibilityApplicationFocusedUIElement(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534994-accessibilityfocused
    accessibilityFocused(): cocoascript.BOOL;
    setAccessibilityFocused(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534986-accessibilityfocusedwindow
    accessibilityFocusedWindow(): cocoascript.id;
    setAccessibilityFocusedWindow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534990-accessibilitysharedfocuselements
    accessibilitySharedFocusElements(): cocoascript.NSArray;
    setAccessibilitySharedFocusElements(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/2869551-accessibilitycustomactions
    accessibilityCustomActions(): cocoascript.NSAccessibilityCustomAction;
    setAccessibilityCustomActions(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/2876053-accessibilitycustomrotors
    accessibilityCustomRotors(): cocoascript.NSAccessibilityCustomRotor;
    setAccessibilityCustomRotors(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1646618-accessibilityrequired
    accessibilityRequired(): cocoascript.BOOL;
    setAccessibilityRequired(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535005-accessibilityrole
    accessibilityRole(): cocoascript.NSAccessibilityRole;
    setAccessibilityRole(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535144-accessibilityroledescription
    accessibilityRoleDescription(): cocoascript.NSString;
    setAccessibilityRoleDescription(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535070-accessibilitysubrole
    accessibilitySubrole(): cocoascript.NSAccessibilitySubrole;
    setAccessibilitySubrole(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535050-accessibilityinsertionpointlinen
    accessibilityInsertionPointLineNumber(): cocoascript.NSInteger;
    setAccessibilityInsertionPointLineNumber(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534982-accessibilitynumberofcharacters
    accessibilityNumberOfCharacters(): cocoascript.NSInteger;
    setAccessibilityNumberOfCharacters(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535063-accessibilityplaceholdervalue
    accessibilityPlaceholderValue(): cocoascript.NSString;
    setAccessibilityPlaceholderValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535038-accessibilityselectedtext
    accessibilitySelectedText(): cocoascript.NSString;
    setAccessibilitySelectedText(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534989-accessibilityselectedtextrange
    accessibilitySelectedTextRange(): cocoascript.NSRange;
    setAccessibilitySelectedTextRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535133-accessibilityselectedtextranges
    accessibilitySelectedTextRanges(): cocoascript.NSValue;
    setAccessibilitySelectedTextRanges(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535069-accessibilitysharedcharacterrang
    accessibilitySharedCharacterRange(): cocoascript.NSRange;
    setAccessibilitySharedCharacterRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534991-accessibilitysharedtextuielement
    accessibilitySharedTextUIElements(): cocoascript.NSArray;
    setAccessibilitySharedTextUIElements(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535058-accessibilityvisiblecharacterran
    accessibilityVisibleCharacterRange(): cocoascript.NSRange;
    setAccessibilityVisibleCharacterRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534940-accessibilitystringforrange
    accessibilityStringForRange(range: cocoascript.NSRange):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1532250-accessibilityattributedstringfor
    accessibilityAttributedStringForRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1529273-accessibilityrtfforrange
    accessibilityRTFForRange(range: cocoascript.NSRange):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1526088-accessibilityframeforrange
    accessibilityFrameForRange(range: cocoascript.NSRange):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1525305-accessibilitylineforindex
    accessibilityLineForIndex(index: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1525329-accessibilityrangeforindex
    accessibilityRangeForIndex(index: cocoascript.NSInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1530474-accessibilitystylerangeforindex
    accessibilityStyleRangeForIndex(index: cocoascript.NSInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1528813-accessibilityrangeforline
    accessibilityRangeForLine(line: cocoascript.NSInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1531615-accessibilityrangeforposition
    accessibilityRangeForPosition(point: cocoascript.NSPoint):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535149-accessibilityactivationpoint
    accessibilityActivationPoint(): cocoascript.NSPoint;
    setAccessibilityActivationPoint(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535035-accessibilityalternateuivisible
    accessibilityAlternateUIVisible(): cocoascript.BOOL;
    setAccessibilityAlternateUIVisible(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535060-accessibilitycancelbutton
    accessibilityCancelButton(): cocoascript.id;
    setAccessibilityCancelButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535022-accessibilityclosebutton
    accessibilityCloseButton(): cocoascript.id;
    setAccessibilityCloseButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534957-accessibilitydefaultbutton
    accessibilityDefaultButton(): cocoascript.id;
    setAccessibilityDefaultButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534999-accessibilityfullscreenbutton
    accessibilityFullScreenButton(): cocoascript.id;
    setAccessibilityFullScreenButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535074-accessibilitygrowarea
    accessibilityGrowArea(): cocoascript.id;
    setAccessibilityGrowArea(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534936-accessibilitymain
    accessibilityMain(): cocoascript.BOOL;
    setAccessibilityMain(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535052-accessibilityminimizebutton
    accessibilityMinimizeButton(): cocoascript.id;
    setAccessibilityMinimizeButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535028-accessibilityminimized
    accessibilityMinimized(): cocoascript.BOOL;
    setAccessibilityMinimized(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535140-accessibilitymodal
    accessibilityModal(): cocoascript.BOOL;
    setAccessibilityModal(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535143-accessibilityproxy
    accessibilityProxy(): cocoascript.id;
    setAccessibilityProxy(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534983-accessibilityshownmenu
    accessibilityShownMenu(): cocoascript.id;
    setAccessibilityShownMenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535075-accessibilitytoolbarbutton
    accessibilityToolbarButton(): cocoascript.id;
    setAccessibilityToolbarButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535030-accessibilitywindow
    accessibilityWindow(): cocoascript.id;
    setAccessibilityWindow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535090-accessibilityzoombutton
    accessibilityZoomButton(): cocoascript.id;
    setAccessibilityZoomButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534996-accessibilityextrasmenubar
    accessibilityExtrasMenuBar(): cocoascript.id;
    setAccessibilityExtrasMenuBar(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535073-accessibilityfrontmost
    accessibilityFrontmost(): cocoascript.BOOL;
    setAccessibilityFrontmost(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534961-accessibilityhidden
    accessibilityHidden(): cocoascript.BOOL;
    setAccessibilityHidden(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535138-accessibilitymainwindow
    accessibilityMainWindow(): cocoascript.id;
    setAccessibilityMainWindow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535055-accessibilitymenubar
    accessibilityMenuBar(): cocoascript.id;
    setAccessibilityMenuBar(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535117-accessibilitywindows
    accessibilityWindows(): cocoascript.NSArray;
    setAccessibilityWindows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534966-accessibilitycolumncount
    accessibilityColumnCount(): cocoascript.NSInteger;
    setAccessibilityColumnCount(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535061-accessibilityorderedbyrow
    accessibilityOrderedByRow(): cocoascript.BOOL;
    setAccessibilityOrderedByRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535013-accessibilityrowcount
    accessibilityRowCount(): cocoascript.NSInteger;
    setAccessibilityRowCount(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534942-accessibilityhorizontalscrollbar
    accessibilityHorizontalScrollBar(): cocoascript.id;
    setAccessibilityHorizontalScrollBar(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535053-accessibilityverticalscrollbar
    accessibilityVerticalScrollBar(): cocoascript.id;
    setAccessibilityVerticalScrollBar(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534988-accessibilitycolumnheaderuieleme
    accessibilityColumnHeaderUIElements(): cocoascript.NSArray;
    setAccessibilityColumnHeaderUIElements(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535115-accessibilitycolumns
    accessibilityColumns(): cocoascript.NSArray;
    setAccessibilityColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535148-accessibilitycolumntitles
    accessibilityColumnTitles(): cocoascript.NSArray;
    setAccessibilityColumnTitles(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535045-accessibilityexpanded
    accessibilityExpanded(): cocoascript.BOOL;
    setAccessibilityExpanded(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534938-accessibilityheader
    accessibilityHeader(): cocoascript.id;
    setAccessibilityHeader(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535067-accessibilityindex
    accessibilityIndex(): cocoascript.NSInteger;
    setAccessibilityIndex(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535014-accessibilityrowheaderuielements
    accessibilityRowHeaderUIElements(): cocoascript.NSArray;
    setAccessibilityRowHeaderUIElements(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534945-accessibilityrows
    accessibilityRows(): cocoascript.NSArray;
    setAccessibilityRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534978-accessibilityselectedcolumns
    accessibilitySelectedColumns(): cocoascript.NSArray;
    setAccessibilitySelectedColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535125-accessibilityselectedrows
    accessibilitySelectedRows(): cocoascript.NSArray;
    setAccessibilitySelectedRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534962-accessibilitysortdirection
    accessibilitySortDirection(): cocoascript.NSAccessibilitySortDirection;
    setAccessibilitySortDirection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535150-accessibilityvisiblecolumns
    accessibilityVisibleColumns(): cocoascript.NSArray;
    setAccessibilityVisibleColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535004-accessibilityvisiblerows
    accessibilityVisibleRows(): cocoascript.NSArray;
    setAccessibilityVisibleRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535124-accessibilitydisclosed
    accessibilityDisclosed(): cocoascript.BOOL;
    setAccessibilityDisclosed(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535146-accessibilitydisclosedbyrow
    accessibilityDisclosedByRow(): cocoascript.id;
    setAccessibilityDisclosedByRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535008-accessibilitydisclosedrows
    accessibilityDisclosedRows(): cocoascript.id;
    setAccessibilityDisclosedRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535111-accessibilitydisclosurelevel
    accessibilityDisclosureLevel(): cocoascript.NSInteger;
    setAccessibilityDisclosureLevel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534979-accessibilitycolumnindexrange
    accessibilityColumnIndexRange(): cocoascript.NSRange;
    setAccessibilityColumnIndexRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535153-accessibilityrowindexrange
    accessibilityRowIndexRange(): cocoascript.NSRange;
    setAccessibilityRowIndexRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535101-accessibilityselectedcells
    accessibilitySelectedCells(): cocoascript.NSArray;
    setAccessibilitySelectedCells(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535042-accessibilityvisiblecells
    accessibilityVisibleCells(): cocoascript.NSArray;
    setAccessibilityVisibleCells(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1532709-accessibilitycellforcolumn
    accessibilityCellForColumn_row(column: cocoascript.NSInteger, row: cocoascript.NSInteger):cocoascript.NSAccessibility;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535085-accessibilityhandles
    accessibilityHandles(): cocoascript.NSArray;
    setAccessibilityHandles(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535154-accessibilityhorizontalunits
    accessibilityHorizontalUnits(): cocoascript.NSAccessibilityUnits;
    setAccessibilityHorizontalUnits(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535095-accessibilityhorizontalunitdescr
    accessibilityHorizontalUnitDescription(): cocoascript.NSString;
    setAccessibilityHorizontalUnitDescription(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535011-accessibilityverticalunits
    accessibilityVerticalUnits(): cocoascript.NSAccessibilityUnits;
    setAccessibilityVerticalUnits(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535065-accessibilityverticalunitdescrip
    accessibilityVerticalUnitDescription(): cocoascript.NSString;
    setAccessibilityVerticalUnitDescription(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1526401-accessibilitylayoutpointforscree
    accessibilityLayoutPointForScreenPoint(point: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535016-accessibilitylayoutsizeforscreen
    accessibilityLayoutSizeForScreenSize(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1524668-accessibilityscreenpointforlayou
    accessibilityScreenPointForLayoutPoint(point: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1526114-accessibilityscreensizeforlayout
    accessibilityScreenSizeForLayoutSize(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534941-accessibilityallowedvalues
    accessibilityAllowedValues(): cocoascript.NSNumber;
    setAccessibilityAllowedValues(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534954-accessibilitylabeluielements
    accessibilityLabelUIElements(): cocoascript.NSArray;
    setAccessibilityLabelUIElements(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535108-accessibilitylabelvalue
    accessibilityLabelValue(): number;
    setAccessibilityLabelValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535034-accessibilitynextcontents
    accessibilityNextContents(): cocoascript.NSArray;
    setAccessibilityNextContents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534950-accessibilitypreviouscontents
    accessibilityPreviousContents(): cocoascript.NSArray;
    setAccessibilityPreviousContents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535088-accessibilitysplitters
    accessibilitySplitters(): cocoascript.NSArray;
    setAccessibilitySplitters(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534943-accessibilityoverflowbutton
    accessibilityOverflowButton(): cocoascript.id;
    setAccessibilityOverflowButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535044-accessibilitytabs
    accessibilityTabs(): cocoascript.NSArray;
    setAccessibilityTabs(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535081-accessibilitymarkergroupuielemen
    accessibilityMarkerGroupUIElement(): cocoascript.id;
    setAccessibilityMarkerGroupUIElement(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534968-accessibilitymarkertypedescripti
    accessibilityMarkerTypeDescription(): cocoascript.NSString;
    setAccessibilityMarkerTypeDescription(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535037-accessibilitymarkeruielements
    accessibilityMarkerUIElements(): cocoascript.NSArray;
    setAccessibilityMarkerUIElements(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535076-accessibilitymarkervalues
    accessibilityMarkerValues(): cocoascript.id;
    setAccessibilityMarkerValues(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535099-accessibilityrulermarkertype
    accessibilityRulerMarkerType(): cocoascript.NSAccessibilityRulerMarkerType;
    setAccessibilityRulerMarkerType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535029-accessibilityunits
    accessibilityUnits(): cocoascript.NSAccessibilityUnits;
    setAccessibilityUnits(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535094-accessibilityunitdescription
    accessibilityUnitDescription(): cocoascript.NSString;
    setAccessibilityUnitDescription(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534993-accessibilitydocument
    accessibilityDocument(): cocoascript.NSString;
    setAccessibilityDocument(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535077-accessibilityedited
    accessibilityEdited(): cocoascript.BOOL;
    setAccessibilityEdited(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535068-accessibilityfilename
    accessibilityFilename(): cocoascript.NSString;
    setAccessibilityFilename(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534972-accessibilitylinkeduielements
    accessibilityLinkedUIElements(): cocoascript.NSArray;
    setAccessibilityLinkedUIElements(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535122-accessibilityservesastitleforuie
    accessibilityServesAsTitleForUIElements(): cocoascript.NSArray;
    setAccessibilityServesAsTitleForUIElements(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535155-accessibilitytitleuielement
    accessibilityTitleUIElement(): cocoascript.id;
    setAccessibilityTitleUIElement(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534949-accessibilityclearbutton
    accessibilityClearButton(): cocoascript.id;
    setAccessibilityClearButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535097-accessibilitydecrementbutton
    accessibilityDecrementButton(): cocoascript.id;
    setAccessibilityDecrementButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535007-accessibilityincrementbutton
    accessibilityIncrementButton(): cocoascript.id;
    setAccessibilityIncrementButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535105-accessibilitysearchbutton
    accessibilitySearchButton(): cocoascript.id;
    setAccessibilitySearchButton(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535015-accessibilitysearchmenu
    accessibilitySearchMenu(): cocoascript.id;
    setAccessibilitySearchMenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1528679-accessibilityperformcancel
    accessibilityPerformCancel():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1534952-accessibilityperformconfirm
    accessibilityPerformConfirm():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1526626-accessibilityperformdecrement
    accessibilityPerformDecrement():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1524609-accessibilityperformdelete
    accessibilityPerformDelete():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1525705-accessibilityperformincrement
    accessibilityPerformIncrement():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1535130-accessibilityperformpick
    accessibilityPerformPick():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1526358-accessibilityperformpress
    accessibilityPerformPress():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1530545-accessibilityperformraise
    accessibilityPerformRaise():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1533983-accessibilityperformshowalternat
    accessibilityPerformShowAlternateUI():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1531207-accessibilityperformshowdefaultu
    accessibilityPerformShowDefaultUI():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1532774-accessibilityperformshowmenu
    accessibilityPerformShowMenu():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibility/1524956-isaccessibilityselectorallowed
    isAccessibilitySelectorAllowed(selector: cocoascript.SEL):cocoascript.BOOL;
  }
}
