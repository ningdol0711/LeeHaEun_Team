const axios = require("axios");

const serviceKey = "4hdneWq5j%2FQEjYNAv2z8rBurIZ3YPX4W6TnVD8t3piIuVoDq4Fdfs7cLHHUfn7isR7npTOSuk4TDjAi7YW4Vtw%3D%3D";

async function getData() {
  return axios
    .get(`http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire?serviceKey=${serviceKey}&STAGE1=서울특별시&STAGE2=강동구&pageNo=1&numOfRows=50`)
    .then((response) => {
      return response.data.response;
    })
    .catch((error) => {
      console.error(error);
    });
}

getData().then((Datas) => {
  console.log(Datas.body.items);
});
