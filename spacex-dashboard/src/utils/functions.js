import axios from "axios";

// getData handler for fetching data from API and accepts data setters to update the data and loading states
const getData = async (url, tableDataSetter, loadingSetter) => {
  try {
    const data = await axios.get(url);
    tableDataSetter(data.data);
    loadingSetter(false);
  } catch (e) {
    alert(e.message);
  }
};

export default getData;
