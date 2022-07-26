const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
// console.log("hi");
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityname.value;
  if (cityVal === "") {
    city_name.innerText = "please enter the city name ";
  } else {
    try {
      console.log(cityVal);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=845e1b050425de7d7c1de2714a3e56ca`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      console.log(arrData);
      city_name.innerHTML = `${cityVal}`;
      temp.innerText = arrData[0].main.temp;
      const tempMood = arrData[0].weather.main;
      //conditiion to check weather sunny or cloudy
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'><>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      }
    } catch {
      city_name.innerText = "please enter  valid city name ";
    }
  }
};
submitBtn.addEventListener("click", getInfo);
