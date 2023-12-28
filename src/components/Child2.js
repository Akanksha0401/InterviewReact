import React, { useState } from 'react';

export default function Child2(props) {
    const [Number1, setNumber1] = useState('');
    const [Number2, setNumber2] = useState('');
    const [Number3, setNumber3] = useState('');
    const [result1, setResult1] = useState(null);
    const [result2, setResult2] = useState(null);
    const [result3, setResult3] = useState(null);

    const addition = (value1, value2) => {
        if (value1 !== '' && value2 !== '') {
            const sum = parseInt(value1 || 0) + parseInt(value2 || 0);
            return (isNaN(sum) ? 0 : sum);
        } else {
            return (null);
        }
    };

    return (
        <>
            <div>
                {props.input1} +{' '}
                <input type="text" value={Number1} onChange={(e) => { const value = e.target.value; setNumber1(value); setResult1(addition(value, props.input1)); }} /> = {result1}
            </div>
            <div>
                {props.input2} +{' '}
                <input type="text" value={Number2} onChange={(e) => { const value = e.target.value; setNumber2(value); setResult2(addition(value, props.input2)); }} />  = {result2}
            </div>
            <div>
                {props.input3} +{' '}
                <input type="text" value={Number3} onChange={(e) => { const value = e.target.value; setNumber3(value); setResult3(addition(value, props.input3)); }} />
                = {result3}
            </div>
        </>
    );
}
