import axios from "@/axios";

const baseUrl = process.env.VUE_APP_BASE_URL;
const apisealocBaseUrl = `${baseUrl}/backend/closest-sealoc`;

export async function fetchSeaPostidByCoordinates(lat, lon) {
  try {
    const response = await axios.post(
      apisealocBaseUrl,
      new URLSearchParams({ lat: lat, lon: lon }).toString()
      , {
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        }
      }
    );
    return response.data;
  } catch (error) {
      console.error("Error fetching weather data:", error);
    return { error: error.message };
  }
}

export function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("현재 브라우저에서 위치정보를 받아올 수 없어요.");
      }
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
          console.log("locationservice : GetLocation")
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject("권한을 받아오지 못했어요.");
              break;
            case error.POSITION_UNAVAILABLE:
              reject("위치 정보를 받아오지 못했어요.");
              break;
            case error.TIMEOUT:
              reject("위치 정보 요청 시간이 초과되었어요.");
              break;
            default:
              reject("위치 정보를 받아오던 중 오류가 발생했어요.");
          }
        }
      );
    });
  }