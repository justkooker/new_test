export function prepareChartData(csvRows, selectedExperiments) {
  const grouped = {};

  for (const row of csvRows) {
    const { experiment_id, metric_name, step, value } = row;

    if (!selectedExperiments.includes(experiment_id)) continue;

    const stepNum = Number(step);
    const valueNum = Number(value);
    const key = `${experiment_id}:${metric_name}`;

    if (!grouped[stepNum]) {
      grouped[stepNum] = { step: stepNum };
    }

    grouped[stepNum][key] = valueNum;
  }

  const chartData = Object.values(grouped).sort((a, b) => a.step - b.step);

  const metricKeysSet = new Set();
  for (const obj of chartData) {
    Object.keys(obj).forEach((key) => {
      if (key !== "step") metricKeysSet.add(key);
    });
  }

  return {
    chartData,
    metricKeys: Array.from(metricKeysSet),
  };
}
