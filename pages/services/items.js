const services = {
  items: [ // setting all the services contents
    {
      service: 'DoctorAppointment',
      title: 'Doctor Appointment',
      main: 'You or your senior have a doctor appointment, children are busy with job works, no worry, contact us, our companion people will pick you from your house, send you to destination hospital or clinic, accompany you in doctor room until appointment finished, send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'stethoscope-100.png',
          text: 'Drives you to clinic or hospital'
        },
        {
          icon: 'machine-100.png',
          text: 'Accompany you in doctor room'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // DoctorAppointment

    {
      service: 'GroceryShopping',
      title: 'Grocery Shopping',
      main: 'You or your loved one want to buy some grocery items for daily living, no transport, call us, we can assit you. We pick you from your home, drives you to shopping store, carry your plastic bag, accompany you do purchasing, drives you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'ingredients-100.png',
          text: 'Drives you to grocery store'
        },
        {
          icon: 'shopping-bag-100.png',
          text: 'Carry bag for you'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // GroceryShopping    

    {
      service: 'RehabilationCenter',
      title: 'Rehabilation Center',
      main: 'You or your senior have regular treatment at rehabilation centre, fear of trouble working children, no problem, contact us, we deliver you ti the destination centre. We pick you to from your home, drive you to the rehabilation center, accompany you until treatment finished, send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'physical-therapy-100.png',
          text: 'Drives you to rehabilation centre'
        },
        {
          icon: 'machine-100.png',
          text: 'Accompany at rehabilation centre'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // RehabilationCenter 

    {
      service: 'VisitRelativeorFriend',
      title: 'Visit Relative or Friend',
      main: 'You or your loved one want to meet relative or friend having chatting,children\'s are busy,contact us. We pick you from home ,drives you to destination appointment,wait and accompany you  until chatting finished,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'meeting-100.png',
          text: 'Drives you to destination house'
        },
        {
          icon: 'machine-100.png',
          text: 'Accompany you until chatting finish'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // VisitRelativeorFriend  

    {
      service: 'DialysisCentre',
      title: 'Dialysis Centre',
      main: 'You or your senior having regular treatment at dialsyse centre,nobody drives,contact us. Our companion person pick you  from your home,drives your to dialsyse centre,accompany you in centre room until appointment finished,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'dialysis-100.png',
          text: 'Drives you to dialysis centre'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait and accompany at dialysis centre'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // DialysisCentre   

    {
      service: 'CityTour',
      title: 'City Tour',
      main: 'You or your senior want have a trip tour at k.L centre attraction destination,call us,we can assist and drives you ,no worry. We pick you from your home,drives you to the destination,accompany you enjoyed city beautiful scene,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'city-100.png',
          text: 'Drives you to destination'
        },
        {
          icon: 'guardian-100.png',
          text: 'Accompany you walk around city'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // CityTour     

    {
      service: 'TachiPractising',
      title: 'Tachi Practising',
      main: 'You or your senior having regular practising tachi  with friend at Park garden,children\'s are busy,contact us. We pick you from home,drives you to garden park or centre,wait until your training finished,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'warm-up-100.png',
          text: 'Drives you to garden park'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until training finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // TachiPractising 

    {
      service: 'RunErrandsWork',
      title: 'Run Errands Work',
      main: 'Doing errands work in bank or government department are lackadaisical and headache ,let our companion person helps you or your senior ,contact us. We pick you from hi home,drives you to destination,assists you solved your work,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'front-desk-100.png',
          text: 'Drives you to destination'
        },
        {
          icon: 'ticket-purchase-100.png',
          text: 'Handling errand work for you'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // RunErrandsWork     

    {
      service: 'common',
      title: 'Family Helper Service',
      main: 'You and your senior want to go some place, children are busy with job works, no problem, call us, our companion people will pick you from your house, send you to the destination and wait until your appointment finished, send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'city-100.png',
          text: 'Drives you to the place'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until you finished the task'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // common
  ]
};

export default services;