let mobileMode;
window.innerWidth < 600 ? (mobileMode = true) : (mobileMode = false);

const senatorData = [
  {
    name: "Elizabeth Warren",
    id: "elizabeth_warren",
    img: "https://voteview.com/static/img/bios/041301.jpg",
    party: "Democrat",
    state: "Massachusetts",
    value: -0.745
  },
  {
    name: "Kamala Harris",
    id: "kamala_harris",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Senator_Harris_official_senate_portrait.jpg/440px-Senator_Harris_official_senate_portrait.jpg",
    party: "Democrat",
    state: "California",
    value: -0.677
  },
  {
    name: "Cory Booker",
    id: "cory_booker",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg",
    party: "Democrat",
    state: "New Jersey",
    value: -0.626
  },
  {
    name: "Tammy Baldwin",
    id: "tammy_baldwin",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tammy_Baldwin%2C_official_portrait%2C_113th_Congress.jpg/1200px-Tammy_Baldwin%2C_official_portrait%2C_113th_Congress.jpg",
    party: "Democrat",
    state: "Wisconsin",
    value: -0.537
  },
  {
    name: "Bernard Sanders",
    id: "bernard_sanders",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Bernie_Sanders_in_March_2020.jpg",
    party: "Independent",
    state: "Vermont",
    value: -0.514
  },
  {
    name: "Edward Markey",
    id: "edwards_markey",
    img: "https://www.gstatic.com/tv/thumb/persons/395967/395967_v9_ba.jpg",
    party: "Democrat",
    state: "Massachusetts",
    value: -0.501
  },
  {
    name: "Mazie Hirono",
    id: "mazie_hirono",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Mazie_Hirono%2C_official_portrait%2C_112th_Congress.jpg",
    party: "Democrat",
    state: "Hawaii",
    value: -0.491
  },
  {
    name: "Jeff Merkley",
    id: "jeff_merkley",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jeff_Merkley%2C_115th_official_photo.jpg/1200px-Jeff_Merkley%2C_115th_official_photo.jpg",
    party: "Democrat",
    state: "Oregon",
    value: -0.457
  },
  {
    name: "Tom Udall",
    id: "tom_udall",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Tom_Udall_official_photo.jpg",
    party: "Democrat",
    state: "New Mexico",
    value: -0.454
  },
  {
    name: "Sherrod Brown",
    id: "sherrod_brown",
    img: "https://www.congress.gov/img/member/115_sr_oh_brown_sherrod.jpg",
    party: "Democrat",
    state: "Ohio",
    value: -0.439
  },
  {
    name: "Sheldon Whitehouse",
    id: "sheldon_whitehouse",
    img: "https://voteview.com/static/img/bios/040704.jpg",
    party: "Democrat",
    state: "Rhode Island",
    value: -0.417
  },
  {
    name: "Brian Schatz",
    id: "brian_schatz",
    img: "https://voteview.com/static/img/bios/041112.jpg",
    party: "Democrat",
    state: "Hawaii",
    value: -0.414
  },
  {
    name: "Richard Blumenthal",
    id: "richard_blumenthal",
    img: "https://voteview.com/static/img/bios/041101.jpg",
    party: "Democrat",
    state: "Connecticut",
    value: -0.411
  },
  {
    name: "Christopher Van Hollen",
    id: "christopher_van_hollen",
    img: "https://voteview.com/static/img/bios/020330.jpg",
    party: "Democrat",
    state: "Maryland",
    value: -0.399
  },
  {
    name: "Al Franken",
    id: "al_franken",
    img: "https://voteview.com/static/img/bios/040904.jpg",
    party: "Democrat",
    state: "Minnesota",
    value: -0.398
  },
  {
    name: "Jack Reed",
    id: "jack_reed",
    img: "https://voteview.com/static/img/bios/029142.jpg",
    party: "Democrat",
    state: "Rhode Island",
    value: -0.388
  },
  {
    name: "Patrick Leahy",
    id: "patrick_leahy",
    img: "https://voteview.com/static/img/bios/014307.jpg",
    party: "Democrat",
    state: "Vermont",
    value: -0.374
  },
  {
    name: "Kirsten Gillibrand",
    id: "kirsten_gillibrand",
    img: "https://voteview.com/static/img/bios/020735.jpg",
    party: "Democrat",
    state: "New York",
    value: -0.366
  },
  {
    name: "Richard Durbin",
    id: "richard_durbin",
    img: "https://voteview.com/static/img/bios/015021.jpg",
    party: "Democrat",
    state: "Illinois",
    value: -0.363
  },
  {
    name: "Robert Menendez",
    id: "robert_menendez",
    img: "https://voteview.com/static/img/bios/029373.jpg",
    party: "Democrat",
    state: "New Jersey",
    value: -0.36
  },
  {
    name: "Chuck Schumer",
    id: "chuck_schumer",
    img: "https://voteview.com/static/img/bios/014858.jpg",
    party: "Democrat",
    state: "New York",
    value: -0.35
  },
  {
    name: "Patty Murray",
    id: "patty_murray",
    img: "https://voteview.com/static/img/bios/049308.jpg",
    party: "Democrat",
    state: "Washington",
    value: -0.341
  },
  {
    name: "Catherine Cortez Masto",
    id: "catharine_cortez_masto",
    img: "https://voteview.com/static/img/bios/041700.jpg",
    party: "Democrat",
    state: "Nevada",
    value: -0.339
  },
  {
    name: "Deborah Stabenow",
    id: "deborah_stabenow",
    img: "https://voteview.com/static/img/bios/029732.jpg",
    party: "Democrat",
    state: "Michigan",
    value: -0.328
  },
  {
    name: "Benjamin Cardin",
    id: "benjamin_cardin",
    img: "https://voteview.com/static/img/bios/015408.jpg",
    party: "Democrat",
    state: "Maryland",
    value: -0.328
  },
  {
    name: "Ronald Wyden",
    id: "ronald_wyden",
    img: "https://voteview.com/static/img/bios/014871.jpg",
    party: "Democrat",
    state: "Oregon",
    value: -0.316
  },
  {
    name: "Christopher Murphy",
    id: "christopher_murphy",
    img: "https://voteview.com/static/img/bios/020707.jpg",
    party: "Democrat",
    state: "Connecticut",
    value: -0.311
  },
  {
    name: "Tammy Duckworth",
    id: "tammy_duckworth",
    img: "https://voteview.com/static/img/bios/021325.jpg",
    party: "Democrat",
    state: "Illinois",
    value: -0.308
  },
  {
    name: "Robert Casey Jr.",
    id: "robert_casey_jr",
    img: "https://voteview.com/static/img/bios/040703.jpg",
    party: "Democrat",
    state: "Pennsylvania",
    value: -0.293
  },
  {
    name: "Maria E. Cantwell",
    id: "maria_e_cantwell",
    img: "https://voteview.com/static/img/bios/039310.jpg",
    party: "Democrat",
    state: "Washington",
    value: -0.289
  },
  {
    name: "Martin Heinrich",
    id: "martin_heinrich",
    img: "https://voteview.com/static/img/bios/020930.jpg",
    party: "Democrat",
    state: "New Mexico",
    value: -0.289
  },
  {
    name: "Maggie Hassan",
    id: "maggie_hassan",
    img: "https://voteview.com/static/img/bios/041702.jpg",
    party: "Democrat",
    state: "New Hampshire",
    value: -0.284
  },
  {
    name: "Jeanne Shaheen",
    id: "jeanne_shaheen",
    img: "https://voteview.com/static/img/bios/040906.jpg",
    party: "Democrat",
    state: "New Hampshire",
    value: -0.267
  },
  {
    name: "Christopher A. Coons",
    id: "christopher_a_coons",
    img: "https://voteview.com/static/img/bios/040916.jpg",
    party: "Democrat",
    state: "Delaware",
    value: -0.266
  },
  {
    name: "Dianne Feinstein",
    id: "dianne_feinstein",
    img: "https://voteview.com/static/img/bios/049300.jpg",
    party: "Democrat",
    state: "California",
    value: -0.263
  },
  {
    name: "Amy Klobuchar",
    id: "amy_klobuchar",
    img: "https://voteview.com/static/img/bios/040700.jpg",
    party: "Democrat",
    state: "Minnesota",
    value: -0.241
  },
  {
    name: "Tim Kaine",
    id: "tim_kaine",
    img: "https://voteview.com/static/img/bios/041305.jpg",
    party: "Democrat",
    state: "Virginia",
    value: -0.235
  },
  {
    name: "Gary C. Peters",
    id: "gary_c_peters",
    img: "https://voteview.com/static/img/bios/020923.jpg",
    party: "Democrat",
    state: "Michigan",
    value: -0.232
  },
  {
    name: "Jon Tester",
    id: "jon_tester",
    img: "https://voteview.com/static/img/bios/040702.jpg",
    party: "Democrat",
    state: "Montana",
    value: -0.214
  },
  {
    name: "Michael F. Bennet",
    id: "michael_f_bennet",
    img: "https://voteview.com/static/img/bios/040910.jpg",
    party: "Democrat",
    state: "Colorado",
    value: -0.208
  },
  {
    name: "Mark Warner",
    id: "mark_warner",
    img: "https://voteview.com/static/img/bios/040909.jpg",
    party: "Democrat",
    state: "Virginia",
    value: -0.196
  },
  {
    name: "Bill Nelson",
    id: "bill_nelson",
    img: "https://voteview.com/static/img/bios/014651.jpg",
    party: "Democrat",
    state: "Florida",
    value: -0.193
  },
  {
    name: "Thomas Carper",
    id: "thomas_carper",
    img: "https://voteview.com/static/img/bios/015015.jpg",
    party: "Democrat",
    state: "Delaware",
    value: -0.174
  },
  {
    name: "Angus King Jr.",
    id: "angus_king_jr",
    img: "https://voteview.com/static/img/bios/041300.jpg",
    party: "Independent",
    state: "Maine",
    value: -0.148
  },
  {
    name: "Claire McCaskill",
    id: "claire_mccaskill",
    img: "https://voteview.com/static/img/bios/040701.jpg",
    party: "Democrat",
    state: "Missouri",
    value: -0.145
  },
  {
    name: "Heidi Heitkamp",
    id: "heidi_heitkamp",
    img: "https://voteview.com/static/img/bios/041303.jpg",
    party: "Democrat",
    state: "North Dakota",
    value: -0.125
  },
  {
    name: "Joe Donnelly",
    id: "joe_donnelly",
    img: "https://voteview.com/static/img/bios/020717.jpg",
    party: "Democrat",
    state: "Indiana",
    value: -0.119
  },
  {
    name: "Joe Manchin",
    id: "joe_manchin",
    img: "https://voteview.com/static/img/bios/040915.jpg",
    party: "Democrat",
    state: "West Virginia",
    value: -0.063
  },
  {
    name: "Susan Collins",
    id: "susan_collins",
    img: "https://voteview.com/static/img/bios/049703.jpg",
    party: "Republican",
    state: "Maine",
    value: 0.108
  },
  {
    name: "Lisa Murkowski",
    id: "lisa_murkowski",
    img: "https://voteview.com/static/img/bios/040300.jpg",
    party: "Republican",
    state: "Alaska",
    value: 0.208
  },
  {
    name: "Shelley Capito",
    id: "shelley_capito",
    img: "https://voteview.com/static/img/bios/020146.jpg",
    party: "Republican",
    state: "West Virginia",
    value: 0.258
  },
  {
    name: "William Cochran",
    id: "william_cochran",
    img: "https://voteview.com/static/img/bios/014009.jpg",
    party: "Republican",
    state: "Mississippi",
    value: 0.286
  },
  {
    name: "Lamar Alexander",
    id: "lamar_alexander",
    img: "https://voteview.com/static/img/bios/040304.jpg",
    party: "Republican",
    state: "Tennessee",
    value: 0.323
  },
  {
    name: "John Hoeven",
    id: "john_hoeven",
    img: "https://voteview.com/static/img/bios/041107.jpg",
    party: "Republican",
    state: "North Dakota",
    value: 0.339
  },
  {
    name: "Charles Grassley",
    id: "charles_grassley",
    img: "https://voteview.com/static/img/bios/014226.jpg",
    party: "Republican",
    state: "Iowa",
    value: 0.342
  },
  {
    name: "Mike Rounds",
    id: "mike_rounds",
    img: "https://voteview.com/static/img/bios/041505.jpg",
    party: "Republican",
    state: "South Dakota",
    value: 0.375
  },
  {
    name: "Rob Portman",
    id: "rob_portman",
    img: "https://voteview.com/static/img/bios/029386.jpg",
    party: "Republican",
    state: "Ohio",
    value: 0.375
  },
  {
    name: "Roger Wicker",
    id: "roger_wicker",
    img: "https://voteview.com/static/img/bios/029534.jpg",
    party: "Republican",
    state: "Mississippi",
    value: 0.376
  },
  {
    name: "John McCain",
    id: "john_mccain",
    img: "https://voteview.com/static/img/bios/015039.jpg",
    party: "Republican",
    state: "Arizona",
    value: 0.381
  },
  {
    name: "Orrin Hatch",
    id: "orrin_hatch",
    img: "https://voteview.com/static/img/bios/014503.jpg",
    party: "Republican",
    state: "Utah",
    value: 0.382
  },
  {
    name: "Bob Corker",
    id: "bob_corker",
    img: "https://voteview.com/static/img/bios/040705.jpg",
    party: "Republican",
    state: "Tennessee",
    value: 0.393
  },
  {
    name: "John Boozman",
    id: "john_boozman",
    img: "https://voteview.com/static/img/bios/020101.jpg",
    party: "Republican",
    state: "Arkansas",
    value: 0.402
  },
  {
    name: "Johnny Isakson",
    id: "johnny_isakson",
    img: "https://voteview.com/static/img/bios/029909.jpg",
    party: "Republican",
    state: "Georgia",
    value: 0.403
  },
  {
    name: "Mitch McConnell",
    id: "mitch_mcconnell",
    img: "https://voteview.com/static/img/bios/014921.jpg",
    party: "Republican",
    state: "Kentucky",
    value: 0.404
  },
  {
    name: "Lindsey Graham",
    id: "lindsey_graham",
    img: "https://voteview.com/static/img/bios/029566.jpg",
    party: "Republican",
    state: "South Carolina",
    value: 0.409
  },
  {
    name: "John Thune",
    id: "john_thune",
    img: "https://voteview.com/static/img/bios/029754.jpg",
    party: "Republican",
    state: "South Dakota",
    value: 0.409
  },
  {
    name: "Jerry Moran",
    id: "jerry_moran",
    img: "https://voteview.com/static/img/bios/029722.jpg",
    party: "Republican",
    state: "Kansas",
    value: 0.413
  },
  {
    name: "Pat Roberts",
    id: "pat_roberts",
    img: "https://voteview.com/static/img/bios/014852.jpg",
    party: "Republican",
    state: "Kansas",
    value: 0.415
  },
  {
    name: "Thom Tillis",
    id: "thom_tillis",
    img: "https://voteview.com/static/img/bios/041504.jpg",
    party: "Republican",
    state: "North Carolina",
    value: 0.427
  },
  {
    name: "Roy Blunt",
    id: "roy_blunt",
    img: "https://voteview.com/static/img/bios/029735.jpg",
    party: "Republican",
    state: "Missouri",
    value: 0.43
  },
  {
    name: "Richard Shelby",
    id: "richard_shelby",
    img: "https://voteview.com/static/img/bios/094659.jpg",
    party: "Republican",
    state: "Alabama",
    value: 0.434
  },
  {
    name: "Bill Cassidy",
    id: "bill_cassidy",
    img: "https://voteview.com/static/img/bios/020919.jpg",
    party: "Republican",
    state: "Louisiana",
    value: 0.451
  },
  {
    name: "Richard Burr",
    id: "richard_burr",
    img: "https://voteview.com/static/img/bios/029548.jpg",
    party: "Republican",
    state: "North Carolina",
    value: 0.453
  },
  {
    name: "Cory Gardner",
    id: "cory_gardner",
    img: "https://voteview.com/static/img/bios/021112.jpg",
    party: "Republican",
    state: "Colorado",
    value: 0.454
  },
  {
    name: "Daniel Sullivan",
    id: "daniel_sullivan",
    img: "https://voteview.com/static/img/bios/041500.jpg",
    party: "Republican",
    state: "Alaska",
    value: 0.463
  },
  {
    name: "Dean Heller",
    id: "dean_heller",
    img: "https://voteview.com/static/img/bios/020730.jpg",
    party: "Republican",
    state: "Nevada",
    value: 0.464
  },
  {
    name: "Deb Fischer",
    id: "deb_fischer",
    img: "https://voteview.com/static/img/bios/041302.jpg",
    party: "Republican",
    state: "Nebraska",
    value: 0.473
  },
  {
    name: "Todd Young",
    id: "todd_young",
    img: "https://voteview.com/static/img/bios/021133.jpg",
    party: "Republican",
    state: "Indiana",
    value: 0.487
  },
  {
    name: "John Cornyn",
    id: "john_cornyn",
    img: "https://voteview.com/static/img/bios/040305.jpg",
    party: "Republican",
    state: "Texas",
    value: 0.496
  },
  {
    name: "Michael Crapo",
    id: "michael_crapo",
    img: "https://voteview.com/static/img/bios/029345.jpg",
    party: "Republican",
    state: "Idaho",
    value: 0.508
  },
  {
    name: "Joni Ernst",
    id: "joni_ernst",
    img: "https://voteview.com/static/img/bios/041502.jpg",
    party: "Republican",
    state: "Iowa",
    value: 0.51
  },
  {
    name: "John Kennedy",
    id: "john_kennedy",
    img: "https://voteview.com/static/img/bios/041703.jpg",
    party: "Republican",
    state: "Louisiana",
    value: 0.513
  },
  {
    name: "John Barrasso",
    id: "john_barrasso",
    img: "https://voteview.com/static/img/bios/040707.jpg",
    party: "Republican",
    state: "Wyoming",
    value: 0.529
  },
  {
    name: "Steve Daines",
    id: "steve_daines",
    img: "https://voteview.com/static/img/bios/021338.jpg",
    party: "Republican",
    state: "Montana",
    value: 0.537
  },
  {
    name: "Michael Enzi",
    id: "michael_enzi",
    img: "https://voteview.com/static/img/bios/049706.jpg",
    party: "Republican",
    state: "Wyoming",
    value: 0.538
  },
  {
    name: "Jeff Sessions",
    id: "jeff_sessions",
    img: "https://voteview.com/static/img/bios/049700.jpg",
    party: "Republican",
    state: "Alabama",
    value: 0.549
  },
  {
    name: "James Inhofe",
    id: "james_inhofe",
    img: "https://voteview.com/static/img/bios/015424.jpg",
    party: "Republican",
    state: "Oklahoma",
    value: 0.552
  },
  {
    name: "Luther Strange",
    id: "luther_strange",
    img: "https://voteview.com/static/img/bios/041704.jpg",
    party: "Republican",
    state: "Alabama",
    value: 0.569
  },
  {
    name: "James Lankford",
    id: "james_lankford",
    img: "https://voteview.com/static/img/bios/021166.jpg",
    party: "Republican",
    state: "Oklahoma",
    value: 0.57
  },
  {
    name: "Marco Rubio",
    id: "marco_rubio",
    img: "https://voteview.com/static/img/bios/041102.jpg",
    party: "Republican",
    state: "Florida",
    value: 0.586
  },
  {
    name: "Ron Johnson",
    id: "ron_johnson",
    img: "https://voteview.com/static/img/bios/041111.jpg",
    party: "Republican",
    state: "Wisconsin",
    value: 0.597
  },
  {
    name: "Tom Cotton",
    id: "tom_cotton",
    img: "https://voteview.com/static/img/bios/021301.jpg",
    party: "Republican",
    state: "Arkansas",
    value: 0.616
  },
  {
    name: "Patrick Toomey",
    id: "patrick_toomey",
    img: "https://voteview.com/static/img/bios/029935.jpg",
    party: "Republican",
    state: "Pennsylvania",
    value: 0.631
  },
  {
    name: "James Risch",
    id: "james_risch",
    img: "https://voteview.com/static/img/bios/040902.jpg",
    party: "Republican",
    state: "Idaho",
    value: 0.633
  },
  {
    name: "David Perdue",
    id: "david_perdue",
    img: "https://voteview.com/static/img/bios/041501.jpg",
    party: "Republican",
    state: "Georgia",
    value: 0.648
  },
  {
    name: "Tim Scott",
    id: "tim_scott",
    img: "https://voteview.com/static/img/bios/021173.jpg",
    party: "Republican",
    state: "South Carolina",
    value: 0.661
  },
  {
    name: "Benjamin Sasse",
    id: "benjamin_sasse",
    img: "https://voteview.com/static/img/bios/041503.jpg",
    party: "Republican",
    state: "Nebraska",
    value: 0.82
  },
  {
    name: "Ted Cruz",
    id: "ted_cruz",
    img: "https://voteview.com/static/img/bios/041304.jpg",
    party: "Republican",
    state: "Texas",
    value: 0.841
  },
  {
    name: "Jeff Flake",
    id: "jeff_flake",
    img: "https://voteview.com/static/img/bios/020100.jpg",
    party: "Republican",
    state: "Arizona",
    value: 0.855
  },
  {
    name: "Rand Paul",
    id: "rand_paul",
    img: "https://voteview.com/static/img/bios/041104.jpg",
    party: "Republican",
    state: "Kentucky",
    value: 0.875
  },
  {
    name: "Mike Lee",
    id: "mike_lee",
    img: "https://voteview.com/static/img/bios/041110.jpg",
    party: "Republican",
    state: "Utah",
    value: 0.919
  }
];

function renderChart(data, mobileMode) {
  let w, h;
  if (mobileMode) {
    w = 400;
    h = 1200;
  } else {
    w = 960;
    h = 400;
  }

  const svg = d3
    .select(".hiveChart_container")
    .html(null)
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", `0 0 ${w} ${h}`)
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  const svgContainer = d3.select(".hiveChart_container"),
    margin = {
      top: mobileMode ? 60 : 40,
      right: mobileMode ? 0 : 40,
      bottom: 40,
      left: mobileMode ? 30 : 40
    },
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom,
    tooltip = d3.select("body").append("div").attr("class", "tooltip"),
    formatValue = d3.format(",d"),
    colors = d3
      .scaleOrdinal()
      .domain(["Democrat", "Republican", "Independent"])
      .range(["blue", "red", "yellow"]);

  const g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let y, x;
  mobileMode
    ? (y = d3.scaleLinear().rangeRound([height, 0]).domain([-0.9, 0.9]))
    : (x = d3.scaleLinear().rangeRound([0, width]).domain([-0.9, 0.9]));

  let simulation = d3
    .forceSimulation(data)
    .force(
      "y",
      mobileMode
        ? d3.forceY((d) => y(d.value)).strength(0.5)
        : d3.forceY(height / 2)
    )
    .force(
      "x",
      mobileMode
        ? d3.forceX(width / 2)
        : d3.forceX((d) => x(d.value)).strength(0.5)
    )
    .force("collide", d3.forceCollide(19))
    .stop();
  for (var i = 0; i < 100; ++i) simulation.tick();

  const axisData = [-0.9, -0.5, 0, 0.5, 0.9];

  g.selectAll("g")
    .data(axisData)
    .enter()
    .append("line")
    .attr("class", (d) => (d ? "dashed" : "solid"))
    .attr("x1", (d) => (mobileMode ? 0 : x(d)))
    .attr("y1", (d) => (mobileMode ? y(d) : 5))
    .attr("x2", (d) => (mobileMode ? width : x(d)))
    .attr("y2", (d) => (mobileMode ? y(d) : height))
    .style("stroke-width", 1)
    .style("stroke", "#333");

  g.selectAll("g")
    .data(axisData)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", (d) => (mobileMode ? -5 : x(d)))
    .attr("y", (d) => (mobileMode ? y(d) : -5))
    .attr("dy", ".35em")
    .attr("text-anchor", mobileMode ? "end" : "middle")
    .text((d) => (d > 0 ? `+${d}` : d));

  g.append("text")
    .attr("class", "liberal marker")
    .attr("x", mobileMode ? width / 2 : 0)
    .attr("y", height + 30)
    .attr("dy", ".35em")
    .attr("text-anchor", mobileMode ? "middle" : "start")
    .text("More Liberal");

  g.append("text")
    .attr("class", "conservative marker")
    .attr("x", mobileMode ? width / 2 : width)
    .attr("y", mobileMode ? 0 - margin.top + 10 : height + 30)
    .attr("dy", ".35em")
    .attr("text-anchor", mobileMode ? "middle" : "end")
    .text("More Conservative");

  var cell = g
    .append("g")
    .attr("class", "cells  focus voronoi")
    .selectAll("g")
    .data(
      d3
        .voronoi()
        .extent([
          [-margin.left, -margin.top],
          [width + margin.right, height + margin.top]
        ])
        .x((d) => d.x)
        .y((d) => d.y)
        .polygons(data)
    )
    .enter()
    .append("g");

  cell
    .append("defs")
    .attr("class", "bg-image")
    .append("pattern")
    .attr("id", (d) => d.data.id)
    .attr("x", -0.25)
    .attr("y", 0)
    .attr("width", 15)
    .attr("height", 15)
    .append("image")
    .attr("width", 45)
    .attr("height", 45)
    .attr("xlink:href", (d) => d.data.img);

  cell
    .append("circle")
    .attr("r", 15)
    .style("fill", (d) => `url(#${d.data.id})` || "#efefef")
    .attr("class", (d) => d.data.party + " senator " + d.data.id)
    .style("stroke-width", 0)
    .style("stroke", "#333")
    .attr("cx", (d) => d.data.x)
    .attr("cy", (d) => d.data.y)
    .on("mousemove", function (d) {
      d3.select(this).style("stroke-width", 1);
      const w = window.innerWidth,
        h = window.innerHeight;
      tooltip
        .style("display", "inline-block")
        .style("top", "auto")
        .style("bottom", "auto");
      tooltip.html(
        `<div class="tooltip-inner"><div><strong>${d.data.name}</strong><br>${
          d.data.state
        }</div><div class="value ${
          d.data.value > 0 ? "conservative" : "liberal"
        }"><p>${d.data.value > 0 ? "+" : ""}${d.data.value}</p></div></div>`
      );
      if (w > 600) {
        if (d3.event.pageX < w / 2) {
          tooltip.style("left", d3.event.pageX + 20 + "px");
        } else {
          tooltip.style("left", d3.event.pageX - 160 + "px");
        }
        if (d3.event.pageY < h / 3) {
          tooltip.style("top", d3.event.pageY + 10 + "px");
        } else {
          tooltip.style("top", d3.event.pageY - 50 + "px");
        }
      } else {
        tooltip.style("bottom", 0).style("left", 0);
      }
    })
    .on("mouseleave", function (d) {
      d3.select(this).style("stroke-width", 0);
      tooltip.style("display", "none");
    });
}

let prevEventTarget = document.querySelector(`.all`);
function filterParty(party) {
  if (prevEventTarget) prevEventTarget.classList.remove("active");

  const senators = document.querySelectorAll(`.senator`);
  senators.forEach((senator) => (senator.style.opacity = 0.1));
  const selectedParty = document.querySelectorAll(`.${party}`);
  if (party === "All")
    senators.forEach((senator) => (senator.style.opacity = 1));

  selectedParty.forEach((member) => (member.style.opacity = 1));
  var currentEventTarget = event.currentTarget;
  prevEventTarget = currentEventTarget;
  currentEventTarget.classList.add("active");
}

function filterSenator() {
  d3.selectAll(`.btn`).classed("active", false);
  d3.select(`.all`).classed("active", true);
  const senatorSearch = document
    .getElementById("senatorSearch")
    .value.toLowerCase()
    .split(" ")
    .join("_");
  const senators = document.querySelectorAll(`.senator`);
  if (senatorSearch === "") {
    senators.forEach((senator) => (senator.style.opacity = 1));
  } else {
    var matchedEle = document.querySelectorAll(`[class*=${senatorSearch}]`);
    senators.forEach((senator) => (senator.style.opacity = 0.1));
    matchedEle.forEach((el) => (el.style.opacity = 1));
  }
}
renderChart(senatorData, mobileMode);

window.addEventListener("resize", () => {
  const w = window.innerWidth;
  if (w < 600 && !mobileMode) {
    mobileMode = true;
    renderChart(senatorData, mobileMode);
  }
  if (w >= 600 && mobileMode) {
    mobileMode = false;
    renderChart(senatorData, mobileMode);
  }
});
