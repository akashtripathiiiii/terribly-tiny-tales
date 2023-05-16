import React, { useState, useEffect } from 'react';
import './App.css';
import WordFrequencyTable from './WordFrequencyTable';
import Histogram from './Histogram';
import SubmitButton from './SubmitButton';

const App = () => {
  const [wordFrequencyData, setWordFrequencyData] = useState([]);
  const [showHistogram, setShowHistogram] = useState(false);

  useEffect(() => {
    fetchWordFrequencyData();
  }, []);

  const fetchWordFrequencyData = async () => {
    try {
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const textData = await response.text();
      const wordFrequencyData = processWordFrequencyData(textData);
      setWordFrequencyData(wordFrequencyData);
    } catch (error) {
      console.error('Error fetching word frequency data:', error);
    }
  };

  const processWordFrequencyData = (textData) => {
    const words = textData.split(/\s+/);
    const wordFrequencyMap = {};

    for (let word of words) {
      word = word.toLowerCase();
      if (wordFrequencyMap[word]) {
        wordFrequencyMap[word]++;
      } else {
        wordFrequencyMap[word] = 1;
      }
    }

    const sortedData = Object.entries(wordFrequencyMap).sort((a, b) => b[1] - a[1]);
    const wordFrequencyData = sortedData.map(([word, frequency]) => ({
      word,
      frequency,
    }));

    return wordFrequencyData;
  };

  const handleBack = () => {
    setShowHistogram(false);
  };

  return (
    <div>
      {showHistogram ? (
        <div className="container">
          <h1 className="title">Assignment of Terribly Tiny Tales</h1>
          <div className="content">
            <div className="column">
            
              <Histogram data={wordFrequencyData.slice(0, 20)} onBack={handleBack} />
            </div>
            <div className="column">
              <WordFrequencyTable wordFrequencyData={wordFrequencyData} />
            </div>
          </div>
        </div>
      ) : (
          <SubmitButton onClick={() => setShowHistogram(true)} />
      )}
    </div>
  );
};

export default App;
