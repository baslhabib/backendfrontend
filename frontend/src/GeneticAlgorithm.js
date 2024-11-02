import React, { useState } from 'react';
import axios from 'axios';

const GeneticAlgorithm = () => {
    const [populationSize, setPopulationSize] = useState(10);
    const [generations, setGenerations] = useState(5);
    const [result, setResult] = useState(null);

    const runAlgorithm = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/my_app/run/`, {
                params: {
                    population_size: populationSize,
                    generations: generations,
                }
            });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error running algorithm:', error);
        }
    };

    return (
        <div>
            <h1>Genetic Algorithm</h1>
            <div>
                <label>
                    Population Size:
                    <input
                        type="number"
                        value={populationSize}
                        onChange={(e) => setPopulationSize(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Generations:
                    <input
                        type="number"
                        value={generations}
                        onChange={(e) => setGenerations(e.target.value)}
                    />
                </label>
                <br />
                <button onClick={runAlgorithm}>Run Algorithm</button>
            </div>
            {result && (
                <div>
                    <h2>Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default GeneticAlgorithm;
