import { useState, useEffect } from "react";
import DataTable from "./components/DataTable";
import "./App.css";
import api from "./utils/api";

const App = () => {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState("us");
  const [seed, setSeed] = useState(Math.floor(Math.random() * 10000000));
  const [errors, setErrors] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [errorCount, setErrorCount] = useState(0);

  const fetchData = async (batchSize = 20, reset = false) => {
    setLoading(true);

    try {
      const response = await api.get(`/generateData`, {
        params: {
          region,
          seed,
          pageNumber,
          batchSize,
          errors,
        },
      });

      if (reset) {
        setData(response.data);
      } else {
        setData((prevData) => [...prevData, ...response.data]);
      }

      if (response.data.length < batchSize) {
        setHasMore(false);
      }

      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPageNumber(1);
    fetchData(20, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, seed, errors]);

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
    setPageNumber(1);
    setHasMore(true);
    setData([]);
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setErrorCount(value);
    setErrors(value);
  };

  const handleNumberChange = (e) => {
    const value = Math.min(e.target.value, 1000);
    setErrorCount(value);
    setErrors(value);
  };

  const generateRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 10000000);
    setSeed(randomSeed);
  };

  const handleCSVExport = async () => {
    try {
      const response = await api.get("/exportCSV", {
        params: {
          region,
          seed,
          pageNumber,
          batchSize: 20,
          errors,
        },
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error exporting CSV:", error);
    }
  };

  return (
    <div className="app">
      <h1 className="app__header">
        <img
          src="/user.png"
          width={30}
          alt="app-icon"
          style={{ marginRight: "10px" }}
        />
        User Gen Pro
      </h1>

      <div className="app__controls">
        <div className="app__control">
          <label htmlFor="region">Select Region:</label>
          <select id="region" value={region} onChange={handleRegionChange}>
            <option value="us">USA</option>
            <option value="uk">United Kingdom</option>
            <option value="pl">Poland</option>
            <option value="lt">Lithuania</option>
            <option value="ae">U.A.E.</option>
            <option value="mx">Mexico</option>
            <option value="pt">Portugal</option>
            <option value="ge">Georgia</option>
            <option value="uz">Uzbekistan</option>
            <option value="bd">Bangladesh</option>
          </select>
        </div>

        <div className="app__control">
          <label htmlFor="errorCount">Errors Per Record:</label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={errorCount}
            onChange={handleSliderChange}
          />
          <input
            type="number"
            min="0"
            max="1000"
            value={errorCount}
            onChange={handleNumberChange}
          />
        </div>

        <div className="app__control">
          <label htmlFor="seed">Seed:</label>
          <input
            type="number"
            id="seed"
            value={seed}
            onChange={(e) => setSeed(parseInt(e.target.value))}
          />
          <button className="app__control-button" onClick={generateRandomSeed}>
            Generate Random Seed
          </button>
        </div>

        <div className="app__control export">
          <button className="app__control-button" onClick={handleCSVExport}>
            Export CSV
          </button>
        </div>
      </div>

      <DataTable
        data={data}
        loading={loading}
        fetchData={() => fetchData(20)}
        hasMore={hasMore}
      />
    </div>
  );
};

export default App;
