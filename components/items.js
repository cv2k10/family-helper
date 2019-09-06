const services = {
  hourStart: 7,
  hourEnd: 20,
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
      service: 'WelcomeRelativeorFriend',
      title: 'Welcome Relative or Friend',
      main: 'Welcome relative , friend from outstation or oversea,no transport and children\'s busy work job,no worry ,call us. We can send you to arrival hall,wait and welcome your lovely guests ,and send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'airplane-landing-100.png',
          text: 'Drives you to arrival hall'
        },
        {
          icon: 'conference-100.png',
          text: 'Wait, welcome your relative or friend'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // WelcomeRelativeorFriend

    {
      service: 'SingingorDancingTraining',
      title: 'Singing or Dancing Training',
      main: 'You or your senior having regular singing or dancing training,no body drives,call us. We pick you from your home ,drives you to training centre,wait until your training finished,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'choir-100.png',
          text: 'Drives you to training centre'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until you training finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // SingingorDancingTraining


    {
      service: 'Saloon',
      title: 'Saloon',
      main: 'You or your loved one want have haircut ,contact us,we can drives you to the saloon centre,accompany you until your haircut finished ,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'barbershop-100.png',
          text: 'Drives you to saloon centre'
        },
        {
          icon: 'barber-chair-100.png',
          text: 'Wait until haircut finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // Saloon

    {
      service: 'AttendWeddingCeremony',
      title: 'Attend wedding  ceremony',
      main: 'You received wedding invitation,and like to attend the ceremony,but nobody drives,contact us,we can assist you. We pick you from home,drives you to the ballroom ,wait until you finished enjoyed delicious food,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'wedding-100.png',
          text: 'Drives you to the balloom'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until you unitl wedding ceremony finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // AttendWeddingCeremony

    {
      service: 'VisitFriendRelativeatHospital',
      title: 'Visit Friend/Relative at Hospital',
      main: 'You like visit patient friend/relative at hospital,but children\'s not allow drives yourself ,contact us. We pick you from home,drives you to hospital,wait and accompany until your time visit finished ,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'hospital-3-100.png',
          text: 'Drives you to hospital'
        },
        {
          icon: 'being-sick-100.png',
          text: 'Meet patient relative or friend'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // VisitFriendRelativeatHospital

    {
      service: 'HavingMealatRestaurant',
      title: 'Having meal at restaurant',
      main: 'You or your loved one accept invitation having meal at restaurant,children\'s busy with job work,no worry ,give us a call. We pick you from home,drives you to restaurant ,wait until you finished meal, send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'restaurant-100.png',
          text: 'Drives you to restaurant'
        },
        {
          icon: 'restaurant-table-100.png',
          text: 'Wait until you finished meal'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // HavingMealatRestaurant

    {
      service: 'LakeMorningWalk',
      title: 'Lake/morning walk',
      main: 'You or your senior like have morning walk at Park or lake,fear of safety ,call us,we can dispatch someone to accompany you. Pick you from your home,drives you to destination lake or park,accompany until you finished morning walk,send you back home. ',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'lake-100.png',
          text: 'Drives you to lake park'
        },
        {
          icon: 'walking-100.png',
          text: 'Accompany until your morning walk finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // LakeMorningWalk

    {
      service: 'WatchMovie',
      title: 'Watch Movie',
      main: 'You or your senior want have a movie,fear of loneliness and no transport ,contact us,our companion person can assist you. Pick you from your home,send you to cinema , queued for ticket,food and beverage ,accompany you enjoyed movie show,drives you back home. ',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'star-wars-100.png',
          text: 'Drives you to cinema'
        },
        {
          icon: 'occupied-theatre-seat-100.png',
          text: 'Accompany enjoy the movie show'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // WatchMovie

    {
      service: 'ReligiousCharityActivities',
      title: 'Religious/charity activities',
      main: 'You or your senior participate in religious or charity activities,children\'s not free, no worry, contact us.We pick you from home, drives you to worship place or event charity, wait until your activities finished, send you back home. ',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'welfare-100.png',
          text: 'Drives you attend charity activities or worship place'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until you activities finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // ReligiousCharityActivities

    {
      service: 'MassageCentre',
      title: 'Massage Centre',
      main: 'You or your loved book for body massage,fear of lost way home and risk driving alone,no problem,contact us. Our companion person pick you from home,drives you to massage centre,accompany you until appointment finished ,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'massage-100.png',
          text: 'Drive you to massage centre'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until appointment finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // MassageCentre




    {
      service: 'MarketWalk',
      title: 'Market Walk',
      main: 'You or your loved one like to buy some food items for daily living at market, contact us. We pick you from home,drives you to market,carry basket for you,accompany until you finished doing purchases, send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'fish-100.png',
          text: 'Drives you to market'
        },
        {
          icon: 'shopping-bag-100.png',
          text: 'Carry basket for you'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // MarketWalk

    {
      service: 'AttendFuneralFunction',
      title: 'Attend Funeral Function',
      main: 'You or your senior like to attend funeral function relative or friend,children\'s are outstation of business or busy, no worry, call us.Pick you from your home, drives you to decease house, wait until you finished condolence respect of decease, send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'pray-100.png',
          text: 'Drives you to decease house'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until condolence time finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // AttendFuneralFunction

    {
      service: 'ReunionwithFriendRelative',
      title: 'Reunion with Friend/Relative',
      main: 'You or your loved one accept invitation having gathering reunion ,children\'s busy with work job, contact us.We drives you to meet your relatives or friends, wait until your reunion time finished, send you back home. ',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'user-groups-100.png',
          text: 'Drives you to re-union with relative or friend'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until your appointment finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // ReunionwithFriendRelative

    {
      service: 'VisitOldFolksHouse',
      title: 'Visit Old Folks House',
      main: 'You or your senior like visit old folks house meet old friend or relative ,contact us ,our companion person can helps you. We pick you from home,drives you to old folks house,wait  and accompany until your appointment time  finished,send you back home. ',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'grandfather-100.png',
          text: 'Drives you to old folk house'
        },
        {
          icon: 'people-working-together-100.png',
          text: 'Wait until you chatting finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // VisitOldFolksHouse

    {
      service: 'AcupunctureTreatment',
      title: 'Acupuncture Treatment',
      main: 'You or your loved one have regular acupuncture treatment,contact us,we can assist you. We pick you from home ,drives you to treatment  centre,wait and accompany until your appointment finished,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'neck-and-shoulder-massage-area-100.png',
          text: 'Drives you to acupuncture centre'
        },
        {
          icon: 'machine-100.png',
          text: 'Wait until your appointment finished'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // AcupunctureTreatment

    {
      service: 'OutdoorHiking',
      title: 'Outdoor Hiking',
      main: 'You or loved one like doing outdoor hiking,fear  loneliness and risk of life,contact us,we can assist you. Pick you from home,drives you to destination hiking,doing hiking together with you,send you back home.',
      details: [
        {
          icon: 'people-in-car-side.png',
          text: 'Pick you from home'
        },
        {
          icon: 'trekking-100.png',
          text: 'Drives you to hiking'
        },
        {
          icon: 'machine-100.png',
          text: 'Accompany you together'
        },
        {
          icon: 'home-100.png',
          text: 'Send you back home'
        },
      ]
    }, // OutdoorHiking

    {
      service: 'OtherService',
      title: 'Other Service',
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