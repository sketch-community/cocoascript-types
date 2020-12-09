declare namespace cocoascript {
/**
 * A control that displays a horizontal series of dots, each of which corresponds to a page in the app’s document or other data-model entity. 
 * doc://com.apple.documentation/documentation/uikit/uipagecontrol
 */
interface UIPageControl extends UIControl {
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/1621234-currentpage
  currentPage(): cocoascript.NSInteger;
  setCurrentPage(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/1621232-numberofpages
  numberOfPages(): cocoascript.NSInteger;
  setNumberOfPages(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/1621238-hidesforsinglepage
  hidesForSinglePage(): cocoascript.BOOL;
  setHidesForSinglePage(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/1621239-pageindicatortintcolor
  pageIndicatorTintColor(): cocoascript.UIColor;
  setPageIndicatorTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/1621233-currentpageindicatortintcolor
  currentPageIndicatorTintColor(): cocoascript.UIColor;
  setCurrentPageIndicatorTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/1621230-deferscurrentpagedisplay
  defersCurrentPageDisplay(): cocoascript.BOOL;
  setDefersCurrentPageDisplay(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/1621235-updatecurrentpagedisplay
  updateCurrentPageDisplay():void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/1621237-sizefornumberofpages
  sizeForNumberOfPages(pageCount: cocoascript.NSInteger):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/3577676-backgroundstyle
  backgroundStyle(): cocoascript.UIPageControlBackgroundStyle;
  setBackgroundStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/3577675-allowscontinuousinteraction
  allowsContinuousInteraction(): cocoascript.BOOL;
  setAllowsContinuousInteraction(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/3577678-interactionstate
  interactionState(): cocoascript.UIPageControlInteractionState;
  setInteractionState(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/3577679-preferredindicatorimage
  preferredIndicatorImage(): cocoascript.UIImage;
  setPreferredIndicatorImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/3577680-setindicatorimage
  setIndicatorImage_forPage(image: cocoascript.UIImage, page: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uipagecontrol/3577677-indicatorimageforpage
  indicatorImageForPage(page: cocoascript.NSInteger):cocoascript.UIImage;
  // 
  alloc():cocoascript.UIPageControl;
  // 
  init():cocoascript.UIPageControl;
}
}
declare const UIPageControl: cocoascript.UIPageControl;

