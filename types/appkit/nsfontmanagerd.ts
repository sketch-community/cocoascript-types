declare namespace cocoascript {
/**
 * The center of activity for the font-conversion system. 
 * doc://com.apple.documentation/documentation/appkit/nsfontmanager
 */
interface NSFontManager extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462360-sharedfontmanager
  sharedFontManager(): cocoascript.NSFontManager;
  setSharedFontManager(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462372-availablefonts
  availableFonts(): cocoascript.NSString;
  setAvailableFonts(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462323-availablefontfamilies
  availableFontFamilies(): cocoascript.NSString;
  setAvailableFontFamilies(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462329-availablefontnameswithtraits
  availableFontNamesWithTraits(someTraits: cocoascript.NSFontTraitMask):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462316-availablemembersoffontfamily
  availableMembersOfFontFamily(fam: cocoascript.NSString):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462398-setselectedfont
  setSelectedFont_isMultiple(fontObj: cocoascript.NSFont, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462268-selectedfont
  selectedFont(): cocoascript.NSFont;
  setSelectedFont(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462376-multiple
  multiple(): cocoascript.BOOL;
  setMultiple(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462386-sendaction
  sendAction():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462277-localizednameforfamily
  localizedNameForFamily_face(family: cocoascript.NSString, faceKey: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462320-addfonttrait
  addFontTrait(sender: cocoascript.NSFontManager):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462276-removefonttrait
  removeFontTrait(sender: cocoascript.NSFontManager):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462353-modifyfont
  modifyFont(sender: cocoascript.NSFontManager):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462355-modifyfontviapanel
  modifyFontViaPanel(sender: cocoascript.NSFontManager):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462392-orderfrontstylespanel
  orderFrontStylesPanel(sender: cocoascript.NSFontManager):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462384-orderfrontfontpanel
  orderFrontFontPanel(sender: cocoascript.NSFontManager):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462293-convertfont
  convertFont(fontObj: cocoascript.NSFont):cocoascript.NSFont;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1462311-changefont
  changeFont(sender: cocoascript.NSFontManager):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462309-convertfont
  convertFont_toFace(fontObj: cocoascript.NSFont, typeface: cocoascript.NSString):cocoascript.NSFont;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462318-convertfont
  convertFont_toFamily(fontObj: cocoascript.NSFont, family: cocoascript.NSString):cocoascript.NSFont;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462345-convertfont
  convertFont_toHaveTrait(fontObj: cocoascript.NSFont, trait: cocoascript.NSFontTraitMask):cocoascript.NSFont;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462364-convertfont
  convertFont_toNotHaveTrait(fontObj: cocoascript.NSFont, trait: cocoascript.NSFontTraitMask):cocoascript.NSFont;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462378-convertfont
  convertFont_toSize(fontObj: cocoascript.NSFont, size: cocoascript.CGFloat):cocoascript.NSFont;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462321-convertweight
  convertWeight_ofFont(upFlag: cocoascript.BOOL, fontObj: cocoascript.NSFont):cocoascript.NSFont;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462362-currentfontaction
  currentFontAction(): cocoascript.NSFontAction;
  setCurrentFontAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462274-convertfonttraits
  convertFontTraits(traits: cocoascript.NSFontTraitMask):cocoascript.NSFontTraitMask;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462332-fontwithfamily
  fontWithFamily_traits_weight_size(family: cocoascript.NSString, traits: cocoascript.NSFontTraitMask, weight: cocoascript.NSInteger, size: cocoascript.CGFloat):cocoascript.NSFont;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462374-traitsoffont
  traitsOfFont(fontObj: cocoascript.NSFont):cocoascript.NSFontTraitMask;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462327-fontnamed
  fontNamed_hasTraits(fName: cocoascript.NSString, someTraits: cocoascript.NSFontTraitMask):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462351-weightoffont
  weightOfFont(fontObj: cocoascript.NSFont):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462341-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462283-fontpanel
  fontPanel(create: cocoascript.BOOL):cocoascript.NSFontPanel;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462381-setfontmenu
  setFontMenu(newMenu: cocoascript.NSMenu):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462337-fontmenu
  fontMenu(create: cocoascript.BOOL):cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462349-action
  action(): cocoascript.SEL;
  setAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462380-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462270-setselectedattributes
  setSelectedAttributes_isMultiple(attributes: cocoascript.NSFontManager, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsfontmanager/1462295-convertattributes
  convertAttributes(attributes: cocoascript.NSFontManager):cocoascript.NSFontManager;
  // 
  alloc():cocoascript.NSFontManager;
  // 
  init():cocoascript.NSFontManager;
}
}
declare const NSFontManager: cocoascript.NSFontManager;

