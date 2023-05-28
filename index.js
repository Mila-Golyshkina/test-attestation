import _ from "lodash";

export default function solution(content) {
  // // BEGIN
  // //ШАГ1
  // const data = content.split("\n").slice(1);
  // data.length = data.length - 1;
  // console.log(`Count: ${data.length}`);
  // //ШАГ2
  // const result = [];
  // for (const item of data) {
  //   const array = item.split(",");
  //   result.push(array[array.length - 3]);
  // }
  // const uniqResult = _.uniq(result);
  // const sortResult = uniqResult.sort();
  // console.log(`Cities: ${sortResult.join(", ")}`);
  // //ШАГ3
  // const hum = [];
  // for (const item of data) {
  //   const arrayHum = item.split(",");
  //   hum.push(arrayHum[3]);
  // }
  // let max = hum[0];
  // for (let i = 1; i < hum.length; i += 1) {
  //   if (hum[i] > max) {
  //     max = hum[i];
  //   }
  // }
  // let min = hum[0];
  // for (let i = 1; i < hum.length; i += 1) {
  //   if (hum[i] < min) {
  //     min = hum[i];
  //   }
  // }
  // console.log(`Humidity: Min: ${min}, Max: ${max}`);
  // //ШАГ4
  // const temperatures = [];
  // for (const item of data) {
  //   const arrayTemp = item.split(",");
  //   temperatures.push(arrayTemp[1]);
  // }
  // let maxTemp = temperatures[0];
  // for (let i = 1; i < temperatures.length; i += 1) {
  //   if (temperatures[i] > maxTemp) {
  //     maxTemp = temperatures[i];
  //   }
  // }
  
  const data = content.split("\n").slice(1);
  data.length = data.length - 1;
  console.log(`Count: ${data.length}`);

  let cities = data.map((row) => row.split(",").at(-3));
  cities = _.uniq(cities).sort().join(", ");
  console.log(`Cities: ${cities}`);

  const humidities = data.map((row) => row.split(",")[3]);
  const minHumidity = Math.min(...humidities);
  const maxHumidity = Math.max(...humidities);
  console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`);
  // END
}
