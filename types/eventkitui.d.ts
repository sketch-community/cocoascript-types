declare namespace cocoascript {
  /**
   * Methods a calendar chooser's delegate may use to receive notifications.
   * doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdelegate
   */
  interface EKCalendarChooserDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdelegate/1613979-calendarchooserdidfinish
    calendarChooserDidFinish(calendarChooser: cocoascript.EKCalendarChooser):void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdelegate/1613924-calendarchooserselectiondidchang
    calendarChooserSelectionDidChange(calendarChooser: cocoascript.EKCalendarChooser):void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdelegate/1613941-calendarchooserdidcancel
    calendarChooserDidCancel(calendarChooser: cocoascript.EKCalendarChooser):void;
  }
}
declare namespace cocoascript {
  /**
   * Delegates used to display details for calendar events.
   * doc://com.apple.documentation/documentation/eventkitui/ekeventviewdelegate
   */
  interface EKEventViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewdelegate/1613925-eventviewcontroller
    eventViewController_didCompleteWithAction(controller: cocoascript.EKEventViewController, action: cocoascript.EKEventViewAction):void;
  }
}
declare namespace cocoascript {
  /**
   * A notification sent to the delegate when the user finishes editing an event.
   * doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewdelegate
   */
  interface EKEventEditViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewdelegate/1613932-eventeditviewcontrollerdefaultca
    eventEditViewControllerDefaultCalendarForNewEvents(controller: cocoascript.EKEventEditViewController):cocoascript.EKCalendar;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewdelegate/1613928-eventeditviewcontroller
    eventEditViewController_didCompleteWithAction(controller: cocoascript.EKEventEditViewController, action: cocoascript.EKEventEditViewAction):void;
  }
}
declare namespace cocoascript {
  /**
   * A view controller for determining whether a user may select one or more calendars.
   * doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser
   */
  interface EKCalendarChooser extends UIViewController {
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613974-initwithselectionstyle
    initWithSelectionStyle_displayStyle_eventStore(selectionStyle: cocoascript.EKCalendarChooserSelectionStyle, displayStyle: cocoascript.EKCalendarChooserDisplayStyle, eventStore: cocoascript.EKEventStore):cocoascript.EKCalendarChooser;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613977-initwithselectionstyle
    initWithSelectionStyle_displayStyle_entityType_eventStore(style: cocoascript.EKCalendarChooserSelectionStyle, displayStyle: cocoascript.EKCalendarChooserDisplayStyle, entityType: cocoascript.EKEntityType, eventStore: cocoascript.EKEventStore):cocoascript.EKCalendarChooser;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613949-delegate
    delegate(): cocoascript.EKCalendarChooserDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613926-selectedcalendars
    selectedCalendars(): cocoascript.EKCalendar;
    setSelectedCalendars(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613923-selectionstyle
    selectionStyle(): cocoascript.EKCalendarChooserSelectionStyle;
    setSelectionStyle(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613935-showscancelbutton
    showsCancelButton(): cocoascript.BOOL;
    setShowsCancelButton(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613958-showsdonebutton
    showsDoneButton(): cocoascript.BOOL;
    setShowsDoneButton(): void;
    //
    alloc():cocoascript.EKCalendarChooser;
    //
    init():cocoascript.EKCalendarChooser;
  }
}

declare const EKCalendarChooser: cocoascript.EKCalendarChooser;
declare namespace cocoascript {
  /**
   * A view controller for displaying existing calendar and reminder events, and for optionally editing those events.
   * doc://com.apple.documentation/documentation/eventkitui/ekeventviewcontroller
   */
  interface EKEventViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewcontroller/1613939-delegate
    delegate(): cocoascript.EKEventViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewcontroller/1613929-event
    event(): cocoascript.EKEvent;
    setEvent(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewcontroller/1613956-allowscalendarpreview
    allowsCalendarPreview(): cocoascript.BOOL;
    setAllowsCalendarPreview(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewcontroller/1613964-allowsediting
    allowsEditing(): cocoascript.BOOL;
    setAllowsEditing(): void;
    //
    alloc():cocoascript.EKEventViewController;
    //
    init():cocoascript.EKEventViewController;
  }
}

declare const EKEventViewController: cocoascript.EKEventViewController;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkitui/ekeventviewaction
  type EKEventViewAction = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A view controller for creating, editing, and deleting calendar events.
   * doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewcontroller
   */
  interface EKEventEditViewController extends UINavigationController {
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewcontroller/1613954-editviewdelegate
    editViewDelegate(): cocoascript.EKEventEditViewDelegate;
    setEditViewDelegate(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewcontroller/1613936-event
    event(): cocoascript.EKEvent;
    setEvent(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewcontroller/1613981-eventstore
    eventStore(): cocoascript.EKEventStore;
    setEventStore(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewcontroller/1613937-cancelediting
    cancelEditing():void;
    //
    alloc():cocoascript.EKEventEditViewController;
    //
    init():cocoascript.EKEventEditViewController;
  }
}

declare const EKEventEditViewController: cocoascript.EKEventEditViewController;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewaction
  type EKEventEditViewAction = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserselectionstyle
  type EKCalendarChooserSelectionStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdisplaystyle
  type EKCalendarChooserDisplayStyle = cocoascript.NSInteger;
}
