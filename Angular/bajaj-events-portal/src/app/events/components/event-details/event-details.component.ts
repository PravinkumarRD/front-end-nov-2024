import { Component, input, Input } from '@angular/core';

import { Event } from "../../models/event";

import { EVENT_DETAILS_TITLE } from "../../../statics/event-statics";

@Component({
  selector: 'bajaj-event-details',
  standalone: false,
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {
  pageTitle: string = EVENT_DETAILS_TITLE;
  @Input() event: Event;
}
