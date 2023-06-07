import { useState, useEffect, useRef } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    console.log(inputValue);

    const count = useRef(0);
    console.log(count);

    useEffect(() => {
        count.current = count.current + 1;
    }, [inputValue]);

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Render Count: {count.current}</h1>
        </>
    );
};
export default App;
