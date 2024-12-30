import axios from "@/axios"; // Axios 인스턴스 임포트

const baseUrl = process.env.VUE_APP_BASE_URL;
const apimulddaeBaseUrl = `${baseUrl}/backend/mulddae`;

export async function fetchMulddae(date) {
  console.log(`Call_fetchMulddae : ${date}`);
  try {
    const response = await axios.post(
      apimulddaeBaseUrl,
      new URLSearchParams({ nowdate: date }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching mulddae data:", error);
    return { error: error.message };
  }
}

// Example: If making API calls that include identifiers, ensure 'id' is used

// export async function getMulddaeData() {
//     const response = await axios.get('/backend/mulddae');
//     // Ensure response data uses 'id' if applicable
//     return response.data;
// }