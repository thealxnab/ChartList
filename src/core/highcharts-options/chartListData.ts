import Highcharts, {XrangePointOptionsObject} from "highcharts/highstock";
import {SeriesOptionsType} from "highcharts";

export const getHighchartsOptions = (series: SeriesOptionsType[], isRangeSelectorHide: boolean) => {
  const options: Highcharts.Options = {
    chart: {},
    title: {
      text: 'Random data'
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {}
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function (this: any) {
          return Highcharts.dateFormat('%d %b %Y', this.value)
        }
      }
    },
    rangeSelector: {
      enabled: isRangeSelectorHide,
      allButtonsEnabled: true,
      buttons: [{
        type: 'month',
        count: 1,
        text: '1m',
      }, {
        type: 'month',
        count: 3,
        text: '3m',
      }, {
        type: 'month',
        count: 6,
        text: '6m'
      }, {
        type: 'all',
        text: 'All'
      }]
    },
    series: series,
  };

  return options;
}

export const defaultSeriesRandomData = () => {
  const data: XrangePointOptionsObject[] = [];
  const currentTime = (new Date()).getTime();

  for (let i = -182; i <= 0; i++) {
    const time = currentTime + (i * 86400000);
    const randomNum = Math.round(Math.random() * 30);
    const dataItem:  XrangePointOptionsObject = {x: time, y: randomNum}
    data.push(dataItem);
  }
  return data;
}
