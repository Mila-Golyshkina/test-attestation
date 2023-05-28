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
  // BEGIN
  const rows = content.split("\n");
  const data = rows.slice(1, rows.length - 1).map((row) => row.split(","));
  console.log(`Count: ${data.length}`);

  //step2
  const cities = data.map((row) => row[7]);
  const uniqAndSortCities = _.uniq(cities);
  console.log(`Cities: ${uniqAndSortCities.sort().join(", ")}`);

  //step3
  const humidites = data.map((row) => row[3]);

  const humiditesMin = humidites.reduce((acc, curr) =>
    acc > curr ? curr : acc
  );
  const humiditesMax = humidites.reduce((acc, curr) =>
    acc < curr ? curr : acc
  );
  console.log(`Humidity: Min: ${humiditesMin}, Max: ${humiditesMax}`);

  //step4
  const maxTemp = data.map((row) => row[1]);
  const indexMaxTemp = maxTemp.indexOf(String(Math.max(...maxTemp)));
  const hotestCityTemp = cities[indexMaxTemp];
  const days = data.map((row) => row[0]);
  const hotestDay = days[indexMaxTemp];
  console.log(`HottestDay: ${hotestDay} ${hotestCityTemp}`);

  //step5
  const maxtemper = uniqAndSortCities.map((city) => []);

  for (let i = 0; i < uniqAndSortCities.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].includes(uniqAndSortCities[i])) {
        maxtemper[i].push(data[j][1]);
      }
    }
  }
  const average = maxtemper.map((arr) =>
    arr.map((el) => Number(el)).reduce((acc, el) => acc + el)
  );
  const hottestCity = uniqAndSortCities[average.indexOf(Math.max(...average))];
  console.log(`HottestCity: ${hottestCity}`);
  // END
}
