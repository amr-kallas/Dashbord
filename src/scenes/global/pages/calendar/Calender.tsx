import { useState } from "react";
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";

let eventGuid = 0;
function createEventId() {
  return String(eventGuid++);
}

// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

// const INITIAL_EVENTS: EventInput[] = [
//   {
//     id: createEventId(),
//     title: 'All-day event',
//     start: todayStr
//   },
//   {
//     id: createEventId(),
//     title: 'Timed event',
//     start: todayStr + 'T12:00:00'
//   }
// ]

const Calender = () => {
  const [weekendsVisible] = useState(true);
  const [currentEvents, setcurrentEvents] = useState<EventApi[]>([]);
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  // const handleWeekendsToggle = () => {
  //   setweekendsVisible(pre=>!pre)
  // }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setcurrentEvents(events);
  };

  function renderSidebarEvent(event: EventApi) {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start!, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  }

  function renderEventContent(eventContent: EventContentArg) {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    );
  }

  function renderSidebar() {
    return (
      <div
        className="demo-app-sidebar"
        style={{ marginTop: "2.5rem", marginRight: 16 }}
      >
        <div className="demo-app-sidebar-section">
          <h2 style={{ textAlign: "center" }}>
            All Events ({currentEvents.length})
          </h2>
          <ul style={{ padding: 0, listStyle: "none" }}>
            {currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <Stack direction={isSmallScreen ? "column" : "row"}>
      {renderSidebar()}
      <div className="demo-app-main" style={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </div>
    </Stack>
  );
};

export default Calender;
