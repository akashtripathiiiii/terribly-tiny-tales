import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { CSVLink } from 'react-csv';
import './SubmitButton'

const HEADERS = [
  { label: 'Word', key: 'word' },
  { label: 'Frequency', key: 'frequency' },
];

const Histogram = ({ data, onBack }) => {
  const downloadCSV = () => {
    if (data.length > 0) {
      const csvData = data.map(({ word, frequency }) => ({ word, frequency }));
      return { data: csvData, headers: HEADERS, filename: 'histogram_data.csv' };
    }
    return null;
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <h2>Histogram</h2>
      <BarChart width={900} height={500} data={data}>
        <XAxis dataKey="word" label={{ value: 'Words with Highest Occurrence', position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: 'Occurrences', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey="frequency" fill="#19A7CE" />
      </BarChart>
      <div>
        <button onClick={handleBack}>Back</button>
        {downloadCSV() && (
          <CSVLink {...downloadCSV()}>
            <button>Export</button>
          </CSVLink>
        )}
      </div>
    </div>
  );
};

export default Histogram;
