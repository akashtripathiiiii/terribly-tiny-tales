import React, { useState, useEffect } from 'react';
import './WordFrequencyTable.css';

const WordFrequencyTable = () => {
  const [sortOrder, setSortOrder] = useState('ascending');
  const [wordFrequencyData, setWordFrequencyData] = useState([]);

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

    const wordFrequencyData = Object.entries(wordFrequencyMap).map(([word, frequency]) => ({
      word,
      frequency,
    }));

    return wordFrequencyData;
  };

  const sortedData = [...wordFrequencyData].sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.frequency - b.frequency;
    } else {
      return b.frequency - a.frequency;
    }
  });

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="table-container">
      <div className="header">
        <h2>Word Frequency Table</h2>
        <div className="sort-order">
          <label htmlFor="sortOrder">Sort Order:</label>
          <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      <table className="word-frequency-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.word}</td>
              <td>{item.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordFrequencyTable;
