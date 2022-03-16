import { Component, OnInit } from '@angular/core';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  /**
   * Apex chart
   */
  public customersChartOptions: any = {};
  public ordersChartOptions: any = {};
  public growthChartOptions: any = {};
  public goldPpiChartOptions: any = {};
  public reservesChartOptions: any = {};
  // public cloudStorageChartOptions: any = {};
  public lineChartOptions: any = {};
  public pieChartOptions: any = {};
  public radarChartOptions: any = {};

  // colors and font variables for apex chart 
  obj = {
    primary        : "#6571ff",
    secondary      : "#7987a1",
    success        : "#05a34a",
    info           : "#66d1d1",
    warning        : "#fbbc06",
    danger         : "#ff3366",
    light          : "#e9ecef",
    dark           : "#060c17",
    muted          : "#7987a1",
    gridBorder     : "rgba(77, 138, 240, .15)",
    bodyColor      : "#b8c3d9",
    cardBg         : "#0c1427",
    fontFamily     : "'Roboto', Helvetica, sans-serif"
  }

  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {
    this.currentDate = this.calendar.getToday();

    let todaysDate: Date = new Date();
    let todaysDateOutput: string;

    todaysDateOutput = todaysDate.toISOString().substring(0,10);

    // this.customersChartOptions = getCustomerseChartOptions(this.obj);
    // this.ordersChartOptions = getOrdersChartOptions(this.obj);
    // this.growthChartOptions = getGrowthChartOptions(this.obj)    
    
    // this.cloudStorageChartOptions = getCloudStorageChartOptions(this.obj);

    // this.lineChartOptions = getLineChartOptions(this.obj);
    // this.pieChartOptions = getPieChartOptions(this.obj);
    this.radarChartOptions = getRadarChartOptions(this.obj);
    

    // Some RTL fixes. (feel free to remove if you are using LTR))
    if (document.querySelector('html')?.getAttribute('dir') === 'rtl') {
      this.addRtlOptions();
    }

    let gold_array: Array<any> = [];
    let dates_array: Array<any> = [];

    let dates_bargraph_array: Array<any> = [];
    let reserves_array: Array<any> = [];
    let turkey_reserves_array: Array<any> = [];
    let germany_reserves_array: Array<any> = [];
    let uk_reserves_array: Array<any> = [];
    let india_reserves_array: Array<any> = [];

    let spVix_array: Array<any> = [];
    let russellVix_array: Array<any> = [];
    let vix_dates_array: Array<any> = [];

    let debtGDP_array: Array<any> = [];
    let debtGDP1_array: Array<any> = [];
    let ausDebtGDP_array: Array<any> = [];
    let usDebtGDP_array: Array<any> = [];
    let koreaDebtGDP_array: Array<any> = [];

    // let txn_data: Object = {};

    async function prepare_array() {

      const response = await fetch('https://https://node.algoexplorerapi.io/v2/ledger/supply');
      const body = await response.text();
      const info = JSON.parse(body);

      for(let i=0;i<info.observations.length;i++){

          gold_array.push(info.observations[i].value)
          dates_array.push(info.observations[i].date)
  
      }

      const response2 = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=TRESEGUSM052N&file_type=json&observation_end=2022-01-01');
      const body2 = await response2.text();
      const us_res_info = JSON.parse(body2);

      for(let i=us_res_info.observations.length-144;i<us_res_info.observations.length;i=i+12){

        reserves_array.push(us_res_info.observations[i].value)
        dates_bargraph_array.push((us_res_info.observations[i].date).substring(0,4))

      }

      const response3 = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=TRESEGTRM052N&file_type=json&observation_end=2022-01-01');
      const body3 = await response3.text();
      const turkey_res_info = JSON.parse(body3);

      for(let i=turkey_res_info.observations.length-144;i<turkey_res_info.observations.length;i=i+12){

        turkey_reserves_array.push(turkey_res_info.observations[i].value)

      }

      const response4 = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=TRESEGDEM052N&file_type=json&observation_end=2022-01-01');
      const body4 = await response4.text();
      const germany_res_info = JSON.parse(body4);

      for(let i=germany_res_info.observations.length-144;i<germany_res_info.observations.length;i=i+12){

        germany_reserves_array.push(germany_res_info.observations[i].value)

      }

      const response5 = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=TRESEGGBM052N&file_type=json&observation_end=2022-01-01');
      const body5 = await response5.text();
      const uk_res_info = JSON.parse(body5);

      for(let i=uk_res_info.observations.length-144;i<uk_res_info.observations.length;i=i+12){

        uk_reserves_array.push(uk_res_info.observations[i].value)

      }

      const response6 = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=TRESEGINM052N&file_type=json&observation_end=2022-01-01');
      const body6 = await response6.text();
      const india_res_info = JSON.parse(body6);

      for(let i=india_res_info.observations.length-144;i<india_res_info.observations.length;i=i+12){

        india_reserves_array.push(india_res_info.observations[i].value)

      }

      const spVixData = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=VIXCLS&file_type=json&observation_end=' + todaysDateOutput);
      const spVix = await spVixData.text();
      const spVix_res_info = JSON.parse(spVix);

      for(let i=spVix_res_info.observations.length-180;i<spVix_res_info.observations.length;i++){

        spVix_array.push(spVix_res_info.observations[i].value)
        vix_dates_array.push(spVix_res_info.observations[i].date)

      }

      const russellVixData = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=RVXCLS&file_type=json&observation_end=' + todaysDateOutput);
      const russellVix = await russellVixData.text();
      const russellVix_res_info = JSON.parse(russellVix);

      for(let i=russellVix_res_info.observations.length-180;i<russellVix_res_info.observations.length;i++){

        russellVix_array.push(russellVix_res_info.observations[i].value)
        // vix_dates_array.push(russellVix_res_info.observations[i].date)

      }

      const ausGDPData = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=HDTGPDAUQ163N&file_type=json&observation_start=2021-04-01&observation_end=2021-04-01');
      const ausDebtGDP = await ausGDPData.text();
      const ausDebtGDP_res_info = JSON.parse(ausDebtGDP);

      const usGDPData = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=HDTGPDUSQ163N&file_type=json&observation_start=2021-04-01&observation_end=2021-04-01');
      const usDebtGDP = await usGDPData.text();
      const usDebtGDP_res_info = JSON.parse(usDebtGDP);

      const koreaGDPData = await fetch('https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=HDTGPDKRQ163N&file_type=json&observation_start=2021-04-01&observation_end=2021-04-01');
      const koreaDebtGDP = await koreaGDPData.text();
      const koreaDebtGDP_res_info = JSON.parse(koreaDebtGDP);

      // for(let i=0;i<koreaDebtGDP_res_info.observations.length;i++){

      //   // russellVix_array.push(russellVix_res_info.observations[i].value)

      // }

      console.log(ausDebtGDP_res_info.observations[ausDebtGDP_res_info.observations.length-1].value)
      console.log(usDebtGDP_res_info.observations[usDebtGDP_res_info.observations.length-1].value)
      console.log(koreaDebtGDP_res_info.observations[koreaDebtGDP_res_info.observations.length-1].value)

      ausDebtGDP_array.push(parseInt(ausDebtGDP_res_info.observations[0].value));
      usDebtGDP_array.push(parseInt(usDebtGDP_res_info.observations[0].value));
      koreaDebtGDP_array.push(parseInt(koreaDebtGDP_res_info.observations[0].value));

      debtGDP1_array = ausDebtGDP_array.concat(usDebtGDP_array);
      debtGDP_array = debtGDP1_array.concat(koreaDebtGDP_array);

      console.log(debtGDP_array)

      // for(let i=ausDebtGDP_res_info.observations.length-180;i<ausDebtGDP_res_info.observations.length;i++){

      //   ausDebtGDP_array.push(ausDebtGDP_res_info.observations[i].value);
      //   gdp_dates_array.push(ausDebtGDP_res_info.observations[i].date);

      // }

      // https://api.stlouisfed.org/fred/series/observations?api_key=1160cbecd7a466e7d9b30234db259627&series_id=HDTGPDAUQ163N&file_type=json&observation_end=2022-01-01

      // console.log(spVix_array)
      // console.log(russellVix_array)
      // console.log(vix_dates_array)      

    };

    prepare_array();

    setTimeout(() => {

      this.goldPpiChartOptions = getGoldPpiChartOptions(this.obj, gold_array, dates_array);    
      // this.reservesChartOptions = getReservesChartOptions(this.obj, reserves_array, turkey_reserves_array, germany_reserves_array, uk_reserves_array, india_reserves_array, dates_bargraph_array);
      // this.lineChartOptions = getVixChartOptions(this.obj, spVix_array, russellVix_array, vix_dates_array);
      // this.pieChartOptions = getPieChartOptions(this.obj, debtGDP_array);  

    }, 6000);

   }


  /**
   * Only for RTL (feel free to remove if you are using LTR)
   */
  addRtlOptions() {
    // Gold PPI chart
    this.goldPpiChartOptions.yaxis.labels.offsetX = -25;
    this.goldPpiChartOptions.yaxis.title.offsetX = -75;

    // Total Reserves chart
    this.reservesChartOptions.yaxis.labels.offsetX = -10;
    this.reservesChartOptions.yaxis.title.offsetX = -70;
  }
}


// /**
//  * Customerse chart options
//  */
// function getCustomerseChartOptions(obj: any) {
//   return {
//     series: [{
//       name: '',
//       data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843]
//     }],
//     chart: {
//       type: "line",
//       height: 60,
//       sparkline: {
//         enabled: !0
//       }
//     },
//     colors: [obj.primary],
//     xaxis: {
//       type: 'datetime',
//       categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
//     },
//     stroke: {
//       width: 2,
//       curve: "smooth"
//     },
//     markers: {
//       size: 0
//     },
//   }
// };



// /**
//  * Orders chart options
//  */
// function getOrdersChartOptions(obj: any) {
//   return {
//     series: [{
//       name: '',
//       data: [36, 77, 52, 90, 74, 35, 55, 23, 47, 10, 63]
//     }],
//     chart: {
//       type: "bar",
//       height: 60,
//       sparkline: {
//         enabled: !0
//       }
//     },
//     colors: [obj.primary],
//     plotOptions: {
//       bar: {
//         borderRadius: 2,
//         columnWidth: "60%"
//       }
//     },
//     xaxis: {
//       type: 'datetime',
//       categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
//     }
//   }
// };



// /**
//  * Growth chart options
//  */
// function getGrowthChartOptions(obj: any) {
//   return {
//     series: [{
//       name: '',
//       data: [41, 45, 44, 46, 52, 54, 43, 74, 82, 82, 89]
//     }],
//     chart: {
//       type: "line",
//       height: 60,
//       sparkline: {
//         enabled: !0
//       }
//     },
//     colors: [obj.primary],
//     xaxis: {
//       type: 'datetime',
//       categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
//     },
//     stroke: {
//       width: 2,
//       curve: "smooth"
//     },
//     markers: {
//       size: 0
//     },
//   }
// };



/**
 * Revenue chart options
 */
function getGoldPpiChartOptions(obj: any, yArr: Array<any>, xArr: Array<any>) {
  return {
    series: [{
      name: "Gold PPI",
      data: yArr,
    }],
    chart: {
      type: "line",
      height: '400',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.primary, obj.danger, obj.warning],
    grid: {
      padding: {
        bottom: -4,
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "datetime",
      categories: xArr,
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
    },
    yaxis: {
      title: {
        text: 'Gold PPI over time',
        style:{
          size: 9,
          color: obj.muted
        }
      },
      tickAmount: 4,
      tooltip: {
        enabled: true
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
      labels: {
        offsetX: 0,
      },
    },
    markers: {
      size: 0,
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
  }
};



/**
 * Monthly sales chart options
 */
// function getReservesChartOptions(obj: any, yArr: Array<any>, xArr: Array<any>) {
//   return {
//     series: [{
//       name: 'Dollars',
//       data: yArr
//     }],
//     chart: {
//       type: 'bar',
//       height: '318',
//       parentHeightOffset: 0,
//       foreColor: obj.bodyColor,
//       background: obj.cardBg,
//       toolbar: {
//         show: false
//       },
//     },
//     colors: [obj.primary],  
//     fill: {
//       opacity: .9
//     } , 
//     grid: {
//       padding: {
//         bottom: -4
//       },
//       borderColor: obj.gridBorder,
//       xaxis: {
//         lines: {
//           show: true
//         }
//       }
//     },
//     xaxis: {
//       type: 'datetime',
//       categories: xArr, // ['01/01/2022','02/01/2022','03/01/2022','04/01/2022','05/01/2022','06/01/2022','07/01/2022', '08/01/2022','09/01/2022','10/01/2022', '11/01/2022', '12/01/2022'],
//       axisBorder: {
//         color: obj.gridBorder,
//       },
//       axisTicks: {
//         color: obj.gridBorder,
//       },
//     },
//     yaxis: {
//       title: {
//         text: 'Dollars',
//         style:{
//           size: 9,
//           color: obj.muted
//         }
//       },
//       labels: {
//         offsetX: 0,
//       },
//     },
//     legend: {
//       show: true,
//       position: "top",
//       horizontalAlign: 'center',
//       fontFamily: obj.fontFamily,
//       itemMargin: {
//         horizontal: 8,
//         vertical: 0
//       },
//     },
//     stroke: {
//       width: 0
//     },
//     dataLabels: {
//       enabled: true,
//       style: {
//         fontSize: '10px',
//         fontFamily: obj.fontFamily,
//       },
//       offsetY: -27
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: "50%",
//         borderRadius: 4,
//         dataLabels: {
//           position: 'top',
//           orientation: 'vertical',
//         }
//       },
//     }
//   }
// }



// /**
//  * Cloud storage chart options
//  */
//  function getCloudStorageChartOptions(obj: any) {
//   return {
//     series: [63],
//     chart: {
//       height: 260,
//       type: "radialBar"
//     },
//     colors: [obj.primary],
//     plotOptions: {
//       radialBar: {
//         hollow: {
//           margin: 15,
//           size: "70%"
//         },
//         track: {
//           show: true,
//           background: obj.dark,
//           strokeWidth: '100%',
//           opacity: 1,
//           margin: 5, 
//         },
//         dataLabels: {
//           showOn: "always",
//           name: {
//             offsetY: -11,
//             show: true,
//             color: obj.muted,
//             fontSize: "13px"
//           },
//           value: {
//             color: obj.bodyColor,
//             fontSize: "30px",
//             show: true
//           }
//         }
//       }
//     },
//     fill: {
//       opacity: 1
//     },
//     stroke: {
//       lineCap: "round",
//     },
//     labels: ["Storage Used"]
//   }
// };


/**
 * Line chart options
 */
 function getReservesChartOptions(obj: any, yArr: Array<any>, y1Arr: Array<any>, y2Arr: Array<any>, y3Arr: Array<any>, y4Arr: Array<any>, xArr: Array<any>) {
  return {
    series: [
      {
        name: "United States",
        data: yArr, // [45, 52, 38, 45]
      },
      {
        name: "Turkey",
        data: y1Arr,// [12, 42, 68, 33]
      },
      {
        name: "Germany",
        data: y2Arr, // [8, 32, 48, 53]
      },
      {
        name: "United Kingdom",
        data: y3Arr, // [8, 32, 48, 53]
      },
      {
        name: "India",
        data: y4Arr, // [8, 32, 48, 53]
      }
    ],
    chart: {
      type: "line",
      height: '320',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.primary, obj.danger, obj.warning, obj.info, '#ffffff'],
    grid: {
      padding: {
        bottom: -4
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "datetime",
      categories: xArr, // ["2015", "2016", "2017", "2018"],
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
    },
    yaxis: {
      labels: {
        offsetX: 0
      }
    },
    markers: {
      size: 0,
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: 'center',
      fontFamily: obj.fontFamily,
      itemMargin: {
        horizontal: 8,
        vertical: 0
      },
    },
    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round"
    },
  }
};

/**
 * Line chart options
 */
 function getVixChartOptions(obj: any, yArr: Array<any>, y1Arr: Array<any>, xArr: Array<any>) {
  return {
    series: [
      {
        name: "SP 500 Volatility Index",
        data: yArr, // [45, 52, 38, 45]
      },
      {
        name: "Russell 2000 Volatility Index",
        data: y1Arr,// [12, 42, 68, 33]
      },
    ],
    chart: {
      type: "line",
      height: '320',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.primary, obj.danger],
    grid: {
      padding: {
        bottom: -4
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "datetime",
      categories: xArr, // ["2015", "2016", "2017", "2018"],
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
    },
    yaxis: {
      labels: {
        offsetX: 0
      }
    },
    markers: {
      size: 0,
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: 'center',
      fontFamily: obj.fontFamily,
      itemMargin: {
        horizontal: 8,
        vertical: 0
      },
    },
    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round"
    },
  }
};

/**
 * Pie chart options
 */
 function getPieChartOptions(obj: any, data: Array<any>) {
  return {
    series: data,
    chart: {
      height: 300,
      type: "pie",
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    labels: ["Australia","United States","Korea"],
    colors: [obj.primary,obj.warning,obj.danger],
    stroke: {
      colors: ['rgba(0,0,0,0)']
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: 'center',
      fontFamily: obj.fontFamily,
      itemMargin: {
        horizontal: 8,
        vertical: 0
      },
    },
    dataLabels: {
      enabled: true
    }
  }
};


/**
 * Radar chart options
 */
function getRadarChartOptions(obj: any) {
  return {
    series: [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      }
    ],
    chart: {
      height: 300,
      type: 'radar',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.primary, obj.warning, obj.danger],
    grid: {
      padding: {
        bottom: -6
      }
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: 'center',
      fontFamily: obj.fontFamily,
      itemMargin: {
        horizontal: 8,
        vertical: 0
      },
    },
    labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
    stroke: {
      width: 0,
    },
    fill: {
      opacity: 0.75
    },
    xaxis: {
      categories: ['April', 'May', 'June', 'July', 'August', 'September'],
      labels: {
        show: true,
        style: {
          colors: [obj.secondary, obj.secondary, obj.secondary, obj.secondary, obj.secondary, obj.secondary],
          fontSize: "14px",
          fontFamily: obj.fontFamily
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: obj.bodyColor,
          fontSize: "11px",
          fontFamily: obj.fontFamily
        }
      }
    },
    markers: {
      size: 0
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: obj.gridBorder,
          strokeWidth: 1,
          connectorColors: obj.gridBorder,
          fill: {
              colors: ['transparent']
          }
        }
      }
    }
  }
};
