var totalCarNumbers = 0;
var teslaCarNumbers = 0;
var fordCarNumbers = 0;
var nissanCarNumbers = 0;
var kiaCarNumbers = 0;
var bmwCarNumbers = 0;
var audiCarNumbers = 0;
var chevroletCarNumbers = 0;
var smartCarNumbers = 0;
var volkswagenCarNumbers = 0;
var toyotaCarNumbers = 0;
var rivianCarNumbers = 0;
var jeepCarNumbers = 0;
var hyundaiCarNumbers = 0;
var others = 0
var dataFinal = []

var car2010 = 0;
var car2011 = 0;
var car2012 = 0;
var car2013 = 0;
var car2014 = 0;
var car2015 = 0;
var car2016 = 0;
var car2017 = 0;
var car2018 = 0;
var car2019 = 0;
var car2020 = 0;
var car2021 = 0;
var car2022 = 0;
var car2023 = 0;
var yearWiseData = []

var kingCountyCars = 0
var snohomishCountyCars = 0
var kitsapCountyCars = 0
var thurstonCountyCars = 0
var yakimaCountyCars = 0
var islandCountyCars = 0
var chelanCountyCars = 0
var skagitCountyCars = 0
var spokaneCountyCars = 0
var wallawallaCountyCars = 0
var grantCountyCars = 0
var stevensCountyCars = 0
var whitmanCountyCars = 0
var kittitasCountyCars = 0
var pendoreilleCountyCars = 0
var clarkCountyCars = 0
var cowlitzCountyCars = 0
var jeffersonCountyCars = 0
var clallamCountyCars = 0
var klickitatCountyCars = 0
var countyWiseCars = []


var bevCount = 0;
var phveCount = 0;
var vehicleType = []

var eligibleVehicle = 0
var nonEligibleVehicle = 0
var unknownEligibleVehicle = 0
var eligiblity = []



fetch('./Electric_Vehicle_Population_Data.csv').then(res => {
  return res.text()
}).then(data => {

  let result = data.split(/\n/).map(res => {
    return (res.split(','))
  })
  for (i = 0; i < result.length; i++) {
    if (result[i][9] == 'Clean Alternative Fuel Vehicle Eligible') {
      eligibleVehicle++;
    }
    else if (result[i][9] == 'Eligibility unknown as battery range has not been researched') {
      unknownEligibleVehicle++;
    }
    else if (result[i][9] == 'Not eligible due to low battery range') {
      nonEligibleVehicle++;
    }
  }
  eligiblity.push(eligibleVehicle, unknownEligibleVehicle, nonEligibleVehicle)

  for (i = 0; i < result.length; i++) {
    if (result[i][8] == 'Battery Electric Vehicle (BEV)') {
      bevCount++;
    }
    else if (result[i][8] == 'Plug-in Hybrid Electric Vehicle (PHEV)') {
      phveCount++;
    }
  }
  vehicleType.push(bevCount, phveCount)

  for (i = 0; i < result.length; i++) {
    if (result[i][1] == 'King') {
      kingCountyCars++
    }
    else if (result[i][1] == 'Snohomish') {
      snohomishCountyCars++
    }
    else if (result[i][1] == 'Kitsap') {
      kitsapCountyCars++
    }
    else if (result[i][1] == 'Thurston') {
      thurstonCountyCars++
    }
    else if (result[i][1] == 'Yakima') {
      yakimaCountyCars++
    }
    else if (result[i][1] == 'Island') {
      islandCountyCars++
    }
    else if (result[i][1] == 'Chelan') {
      chelanCountyCars++
    }
    else if (result[i][1] == 'Skagit') {
      skagitCountyCars++
    }
    else if (result[i][1] == 'Spokane') {
      spokaneCountyCars++
    }
    else if (result[i][1] == 'Walla Walla') {
      wallawallaCountyCars++
    }
    else if (result[i][1] == 'Grant') {
      grantCountyCars++
    }
    else if (result[i][1] == 'Stevens') {
      stevensCountyCars++
    }
    else if (result[i][1] == 'Whitman') {
      whitmanCountyCars++
    }
    else if (result[i][1] == 'Kittitas') {
      kittitasCountyCars++
    }
    else if (result[i][1] == 'Pend Oreille') {
      pendoreilleCountyCars++
    }
    else if (result[i][1] == 'Clark') {
      clarkCountyCars++
    }
    else if (result[i][1] == 'Cowlitz') {
      cowlitzCountyCars++
    }
    else if (result[i][1] == 'Jefferson') {
      jeffersonCountyCars++
    }
    else if (result[i][1] == 'Clallam') {
      clallamCountyCars++
    }
    else if (result[i][1] == 'Klickitat') {
      klickitatCountyCars++
    }

  }
  countyWiseCars.push(kingCountyCars, snohomishCountyCars, kitsapCountyCars, thurstonCountyCars, yakimaCountyCars, islandCountyCars, chelanCountyCars, skagitCountyCars, spokaneCountyCars, wallawallaCountyCars, grantCountyCars, stevensCountyCars, whitmanCountyCars, kittitasCountyCars, pendoreilleCountyCars, clarkCountyCars, cowlitzCountyCars, jeffersonCountyCars, clallamCountyCars, klickitatCountyCars)

  for (i = 0; i < result.length; i++) {
    if (result[i][5] == '2010') {
      car2010++
    }
    else if (result[i][5] == '2011') {
      car2011++
    }
    else if (result[i][5] == '2012') {
      car2012++
    }
    else if (result[i][5] == '2013') {
      car2013++
    }
    else if (result[i][5] == '2014') {
      car2014++
    }
    else if (result[i][5] == '2015') {
      car2015++
    }
    else if (result[i][5] == '2016') {
      car2016++
    }
    else if (result[i][5] == '2017') {
      car2017++
    }
    else if (result[i][5] == '2018') {
      car2018++
    }
    else if (result[i][5] == '2019') {
      car2019++
    }
    else if (result[i][5] == '2020') {
      car2020++
    }
    else if (result[i][5] == '2021') {
      car2021++
    }
    else if (result[i][5] == '2022') {
      car2022++
    }
    else if (result[i][5] == '2023') {
      car2023++
    }
  }
  yearWiseData.push(car2010, car2011, car2012, car2013, car2014, car2015, car2016, car2017, car2018, car2019, car2020, car2021, car2022, car2023)


  for (i = 0; i < result.length; i++) {
    if (result[i][6] == 'TESLA') {
      teslaCarNumbers++;
    }
    else if (result[i][6] == 'FORD') {
      fordCarNumbers++;
    }
    else if (result[i][6] == 'NISSAN') {
      nissanCarNumbers++;
    }
    else if (result[i][6] == 'KIA') {
      kiaCarNumbers++;
    }
    else if (result[i][6] == 'BMW') {
      bmwCarNumbers++;
    }
    else if (result[i][6] == 'AUDI') {
      audiCarNumbers++;
    }
    else if (result[i][6] == 'CHEVROLET') {
      chevroletCarNumbers++
    }
    else if (result[i][6] == 'SMART') {
      smartCarNumbers++;
    }
    else if (result[i][6] == 'VOLKSWAGEN') {
      volkswagenCarNumbers++;
    }
    else if (result[i][6] == 'TOYOTA') {
      toyotaCarNumbers++
    }
    else if (result[i][6] == 'RIVIAN') {
      rivianCarNumbers++
    }
    else if (result[i][6] == 'JEEP') {
      jeepCarNumbers++;
    }
    else if (result[i][6] == 'HYUNDAI') {
      hyundaiCarNumbers++;
    }

  }
  totalCarNumbers = result.length
  others = (totalCarNumbers - (teslaCarNumbers + fordCarNumbers + nissanCarNumbers + kiaCarNumbers + bmwCarNumbers + audiCarNumbers + chevroletCarNumbers + smartCarNumbers + volkswagenCarNumbers + toyotaCarNumbers + rivianCarNumbers + jeepCarNumbers + hyundaiCarNumbers))


  dataFinal.push(teslaCarNumbers, fordCarNumbers, nissanCarNumbers, kiaCarNumbers, bmwCarNumbers, chevroletCarNumbers, audiCarNumbers, smartCarNumbers, volkswagenCarNumbers, toyotaCarNumbers, rivianCarNumbers, jeepCarNumbers, hyundaiCarNumbers, others)
  render_charts();
})


var render_charts = () => {
  //config bar1
  const config = {
    type: 'bar',
    data: {
      labels: ['King', 'Snohomish', 'Kitsap', 'Thurston', 'Yakima', 'Island', 'Chelan', 'Skagit', 'Spokane', 'Walla Walla', 'Grant', 'Stevens', 'Whitman', 'Kittitas', 'Pend Oreille', 'Clark', 'Cowlitz', 'Jefferson', 'Clallam', 'Klickitat'],
      datasets: [{
        label: 'electric vehicles population in a county',
        data: countyWiseCars,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
  //Rendar init block
  const myChart = new Chart(document.getElementById('myChart'), config)

  //config bar2
  const config4 = {
    type: 'bar',
    data: {
      labels: ['Battery Electric Vehicle (BEV)', 'Plug-in Hybrid Electric Vehicle (PHEV)'],
      datasets: [{
        label: 'Electric vehicles type',
        data: vehicleType,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
  //Rendar init block
  const myChart1 = new Chart(document.getElementById('myChart1'), config4)

  //config line
  const config2 = {
    type: 'line',
    data: {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        label: 'Year wise electric vehicle population',
        data: yearWiseData,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }

  //render line chatr
  const lineChart = new Chart(document.getElementById('lineChart'), config2)
  //config line
  const config3 = {
    type: 'pie',
    data: {
      labels: [
        'Tesla',
        'Ford',
        'Nissan',
        'KIA',
        'BMW',
        'Chevrolet',
        'AUDI',
        'SMART',
        'Volkswagen',
        'Toyota',
        'Rivian',
        'Jeep',
        'Hyundai',
        'Others'
      ],
      datasets: [{
        label: 'Company wise vehicle population distribution',
        data: dataFinal,
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(0, 163, 51)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(255, 105, 0)',
          'rgb(200, 10, 64)',
          'rgb(25, 105, 186)',
          'rgb(121, 13, 151)',
          'rgb(540, 262, 335)',
          'rgb(453, 12, 55)',
          'rgb(21, 23, 27)'
        ],
        hoverOffset: 4
      }]
    },

  }

  //render line chatr
  const pieChart = new Chart(document.getElementById('pieChart'), config3)
  //pie chart eligiblity
  const config5 = {
    type: 'pie',
    data: {
      labels: [
        'Clean Alternative Fuel Vehicle Eligible',
        'Eligibility unknown',
        'Not eligible due to low battery range'
      ],
      datasets: [{
        label: 'Clean Alternative Fuel Vehicle Eligiblity',
        data: eligiblity,
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(153, 102, 255)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
      }]
    },

  }

  //render line chatr
  const pieChart1 = new Chart(document.getElementById('pieChart1'), config5)
}





