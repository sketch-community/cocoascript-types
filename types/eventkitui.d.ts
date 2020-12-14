declare namespace cocoascript {
  /**
   * Methods a calendar chooser's delegate may use to receive notifications.
   * doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdelegate
   */
  interface EKCalendarChooserDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdelegate/1613979-calendarchooserdidfinish
    calendarChooserDidFinish(calendarChooser: EKCalendarChooser):void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdelegate/1613924-calendarchooserselectiondidchang
    calendarChooserSelectionDidChange(calendarChooser: EKCalendarChooser):void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooserdelegate/1613941-calendarchooserdidcancel
    calendarChooserDidCancel(calendarChooser: EKCalendarChooser):void;
  }
}
declare namespace cocoascript {
  /**
   * Delegates used to display details for calendar events.
   * doc://com.apple.documentation/documentation/eventkitui/ekeventviewdelegate
   */
  interface EKEventViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewdelegate/1613925-eventviewcontroller
    eventViewController_didCompleteWithAction(controller: EKEventViewController, action: EKEventViewAction):void;
  }
}
declare namespace cocoascript {
  /**
   * A notification sent to the delegate when the user finishes editing an event.
   * doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewdelegate
   */
  interface EKEventEditViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewdelegate/1613932-eventeditviewcontrollerdefaultca
    eventEditViewControllerDefaultCalendarForNewEvents(controller: EKEventEditViewController):EKCalendar;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewdelegate/1613928-eventeditviewcontroller
    eventEditViewController_didCompleteWithAction(controller: EKEventEditViewController, action: EKEventEditViewAction):void;
  }
}
declare namespace cocoascript {
  /**
   * A view controller for determining whether a user may select one or more calendars.
   * doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser
   */
  interface EKCalendarChooser extends UIViewController {
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613974-initwithselectionstyle
    initWithSelectionStyle_displayStyle_eventStore(selectionStyle: EKCalendarChooserSelectionStyle, displayStyle: EKCalendarChooserDisplayStyle, eventStore: EKEventStore):EKCalendarChooser;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613977-initwithselectionstyle
    initWithSelectionStyle_displayStyle_entityType_eventStore(style: EKCalendarChooserSelectionStyle, displayStyle: EKCalendarChooserDisplayStyle, entityType: EKEntityType, eventStore: EKEventStore):EKCalendarChooser;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613949-delegate
    delegate(): EKCalendarChooserDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613926-selectedcalendars
    selectedCalendars(): EKCalendar;
    setSelectedCalendars(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613923-selectionstyle
    selectionStyle(): EKCalendarChooserSelectionStyle;
    setSelectionStyle(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613935-showscancelbutton
    showsCancelButton(): BOOL;
    setShowsCancelButton(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekcalendarchooser/1613958-showsdonebutton
    showsDoneButton(): BOOL;
    setShowsDoneButton(): void;
    //
    alloc():EKCalendarChooser;
    //
    init():EKCalendarChooser;
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
    delegate(): EKEventViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewcontroller/1613929-event
    event(): EKEvent;
    setEvent(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewcontroller/1613956-allowscalendarpreview
    allowsCalendarPreview(): BOOL;
    setAllowsCalendarPreview(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventviewcontroller/1613964-allowsediting
    allowsEditing(): BOOL;
    setAllowsEditing(): void;
    //
    alloc():EKEventViewController;
    //
    init():EKEventViewController;
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
    editViewDelegate(): EKEventEditViewDelegate;
    setEditViewDelegate(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewcontroller/1613936-event
    event(): EKEvent;
    setEvent(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewcontroller/1613981-eventstore
    eventStore(): EKEventStore;
    setEventStore(): void;
    // doc://com.apple.documentation/documentation/eventkitui/ekeventeditviewcontroller/1613937-cancelediting
    cancelEditing():void;
    //
    alloc():EKEventEditViewController;
    //
    init():EKEventEditViewController;
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
