import React, { useState, useMemo } from "react";

import FileUploader from "../../components/FileUploader";
import ExperimentList from "../../components/ExperimentList";
import MetricsChart from "../../components/MetricsChart";

import { prepareChartData } from "../../utils/prepareChartData";
import s from "./MainPage.module.scss";

const MainPage = () => {
  const [rawData, setRawData] = useState([]);
  const [experimentIds, setExperimentIds] = useState([]);
  const [selectedExperiments, setSelectedExperiments] = useState([]);

  const handleParsedData = (rows) => {
    setRawData(rows);
    const uniqueIds = Array.from(
      new Set(rows.map((row) => row.experiment_id).filter(Boolean))
    );
    setExperimentIds(uniqueIds);
    setSelectedExperiments(uniqueIds);
  };

  const { chartData, metricKeys } = useMemo(() => {
    return prepareChartData(rawData, selectedExperiments);
  }, [rawData, selectedExperiments]);

  return (
    <div className={s.main}>
      <div className={s.uploader}>
        <FileUploader onDataParsed={handleParsedData} />
      </div>

      {experimentIds.length > 0 && (
        <div className={s.container}>
          <div className={s.experimentList}>
            <ExperimentList
              experimentIds={experimentIds}
              selectedExperiments={selectedExperiments}
              onChange={setSelectedExperiments}
            />
          </div>

          <div className={s.chart}>
            {selectedExperiments.length > 0 ? (
              <MetricsChart chartData={chartData} metricKeys={metricKeys} />
            ) : (
              <p>Select at least one experiment to display the graph.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
