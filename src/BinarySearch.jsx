import { useState } from 'react';

export default function BinarySearch() {
  const [result, setResult] = useState(null);

  const runSearch = () => {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
    const target = 27; 
    
    let left = 0;
    let right = arr.length - 1;
    let steps = 0;
    let foundIndex = -1;

    while (left <= right) {
      steps++;
      const mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        foundIndex = mid;
        break;
      }
      
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setResult({ target, index: foundIndex, steps });
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #007bff', borderRadius: '8px', margin: '20px 0' }}>
      <h2>Бинарный поиск (O(log n))</h2>
      <p>Ищем число 27 в отсортированном массиве.</p>
      
      <button 
        onClick={runSearch}
        style={{ padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Запустить поиск
      </button>

      {result && (
        <div style={{ marginTop: '20px', background: '#f0f8ff', padding: '15px', borderRadius: '5px' }}>
          <p><strong>Результат:</strong> Число {result.target} найдено на индексе <strong>{result.index}</strong>.</p>
          <p><strong>Количество шагов (операций):</strong> {result.steps}</p>
        </div>
      )}
    </div>
  );
}