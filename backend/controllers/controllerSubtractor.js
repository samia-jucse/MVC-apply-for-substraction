import { subtract, getResults } from '../models/modelSubtractor.js'; 

export const handleSubtraction = (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: "Invalid input. Both inputs must be numbers." });
    }

    const result = subtract(num1, num2);
    return res.json({ result });
};

export const fetchResults = (req, res) => {
    const results = getResults();
    res.json(results);
};
