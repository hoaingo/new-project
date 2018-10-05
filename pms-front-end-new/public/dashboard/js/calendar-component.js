import './fullcalendar.min.js';
// import './material-dashboard.js';

export default class CalendarComponent {
    static createCalendar = (elementId, shifts, needRenderCalendar) =>{
        var id= '#'+elementId;
            var calendar = $(id);

            //Calendar just render for the first time that we need check create calendar when data exist
            if(shifts.length != 0 || needRenderCalendar){
            calendar.fullCalendar({
                viewRender: function(view, element) {
                    // We make sure that we activate the perfect scrollbar when the view isn't on Month
                    if (view.name != 'month') {
                        // const diffMonth = document.querySelector(element).find('.fc-scroller');
                        // const diffPS = new PerfectScrollbar(diffMonth);
                        // diffPS.update();
                        // $(element).find('.fc-scroller').perfectScrollbar();
                    }
                },
                header: {
                    left: 'title',
                    center: 'month,agendaWeek,agendaDay',
                    right: 'prev,next,today',
                },
                buttonText: {
                    today:    'Today',
                    month:    'Month',
                    week:     'Week',
                    day:      'Day',
                    list:     'List'
                  },
                firstDay: 1,//Sun: 0, Mon: 1,...
                // locale: 'vn',
                defaultDate: new Date(),
                selectable: true,
                selectHelper: true,
                views: {
                    month: { // name of view
                        titleFormat: 'MMMM YYYY'
                        // other view-specific options here
                    },
                    week: {
                        titleFormat: " MMMM D YYYY"
                    },
                    day: {
                        titleFormat: 'D MMM, YYYY'
                    }
                },

                //Event trigger click action on empty calendar's cell
                // select: function(start, end) {
                //     // on select we show the Sweet Alert modal with an input
                //     swal({
                //         title: 'Create an Event',
                //         html: '<div class="form-group">' +
                //             '<input class="form-control" placeholder="Event Title" id="input-field">' +
                //             '</div>',
                //         showCancelButton: true,
                //         confirmButtonClass: 'btn btn-success',
                //         cancelButtonClass: 'btn btn-danger',
                //         buttonsStyling: false
                //     }).then(function(result) {
                //         var eventData;
                //        var event_title = $('#input-field').val();
    
                //         if (event_title) {
                //             eventData = {
                //                 title: event_title,
                //                 start: start,
                //                 end: end
                //             };
                //             calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                //         }
    
                //         calendar.fullCalendar('unselect');
                //     }, function(dismiss) {
                //         // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                //           if (dismiss === 'cancel') { // you might also handle 'close' or 'timer' if you used those
                //           // ignore
                //           } else {
                //             throw dismiss;
                //           }
                //         })
                //         .catch(function(err) {
                //             console.log(err);
                //             throw err;
                //         })
                // },

                //Any eventwant to invoke like: trigger hover, click, format title...
                eventRender: function(eventObj, $el) {
                    const infor = eventObj.title.split('-');
                    $el.find('.fc-title').html('<strong><p> Class: '+ infor[0] +'</p></strong> <p>Level: '+ infor[1] +'</p> <p>Room: '+ infor[2] +'</p>');
                },
                //Title click event
                eventClick: function(event, jsEvent, view) {
                    const day = view.start._d.getDay() == 0 ? "Sunday" : view.start._d.getDay() == 1 ? "Monday" : view.start._d.getDay() == 2 ? "Tuesday" : view.start._d.getDay() == 3 ? "Wednesday" : view.start._d.getDay() == 4 ? "Thusday" : view.start._d.getDay() == 5 ? "Friday" : "Saturday"
                    // on select we show the Sweet Alert modal with an input
                    swal({
                        title: day +" - "+ view.start._d.toLocaleString(),
                        html: 
                            '<div class="form-group">' +
                                '<div class="col-md-6">'+
                                    '<label class="form-control">Start: '+ view.start._d.toLocaleTimeString() + '</label>' +
                                    '<label class="form-control">End: '+ view.end._d.toLocaleTimeString() + '</label>' +
                                '</div>'+
                                '<div class="col-md-6">'+
                                    '<label class="form-control">Start: '+ view.start._d.toLocaleTimeString() + '</label>' +
                                    '<label class="form-control">Start: '+ view.start._d.toLocaleTimeString() + '</label>' +
                                    '<label class="form-control">Start: '+ view.start._d.toLocaleTimeString() + '</label>' +
                                    '<label class="form-control">Start: '+ view.start._d.toLocaleTimeString() + '</label>' +
                                '</div>'+
                            '</div>',
                        showConfirmButton: false,
                        showCancelButton: true,
                        cancelButtonClass: 'btn btn-danger',
                        buttonsStyling: false
                    }).then(function(result) {
                        var eventData;
                       var event_title = $('#input-field').val();
    
                        if (event_title) {
                            eventData = {
                                title: event_title,
                                start: start,
                                end: end
                            };
                            calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                        }
    
                        calendar.fullCalendar('unselect');
                    }, function(dismiss) {
                        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                          if (dismiss === 'cancel') { // you might also handle 'close' or 'timer' if you used those
                          // ignore
                          } else {
                            // throw dismiss;
                          }
                        })
                        .catch(function(err) {
                            console.log(err);
                            throw err;
                        })
                },
                // editable: true,
                eventLimit: true, // allow "more" link when too many events
                timeFormat: 'H(:mm)', // uppercase H for 24-hour clock
                navLinks: true,
                events: shifts
                // events: 'https://fullcalendar.io/demo-events.json?overload-day'
                // [{
                //         title: 'All Day Event',
                //         start: new Date(y, m, 1),
                //         className: 'event-default'
                //     },
                //     {
                //         id: 999,
                //         title: 'Repeating Event',
                //         start: new Date(y, m, d - 4, 6, 0),
                //         allDay: false,
                //         className: 'event-rose'
                //     },
                //     {
                //         id: 999,
                //         title: 'Repeating Event',
                //         start: new Date(y, m, d + 3, 6, 0),
                //         allDay: false,
                //         className: 'event-rose'
                //     },
                //     {
                //         title: 'Meeting',
                //         start: new Date(y, m, d - 1, 10, 30),
                //         allDay: false,
                //         className: 'event-green'
                //     },
                //     {
                //         title: 'Lunch',
                //         start: new Date(y, m, d + 7, 12, 0),
                //         end: new Date(y, m, d + 7, 14, 0),
                //         allDay: false,
                //         className: 'event-red'
                //     },
                //     {
                //         title: 'Md-pro Launch',
                //         start: new Date(y, m, d - 2, 12, 0),
                //         allDay: true,
                //         className: 'event-azure'
                //     },
                //     {
                //         title: 'Birthday Party',
                //         start: new Date(y, m, d + 1, 22, 0),
                //         end: new Date(y, m, d + 1, 22, 30),
                //         allDay: false,
                //         className: 'event-azure'
                //     },
                //     {
                //         title: 'Click for Creative Tim',
                //         start: new Date(y, m, 21),
                //         end: new Date(y, m, 22),
                //         url: 'http://www.creative-tim.com/',
                //         className: 'event-orange'
                //     },
                //     {
                //         title: 'Click for Google',
                //         start: new Date(y, m, 21),
                //         end: new Date(y, m, 22),
                //         url: 'http://www.creative-tim.com/',
                //         className: 'event-orange'
                //     }
                // ]
            });
        }
    }
}
