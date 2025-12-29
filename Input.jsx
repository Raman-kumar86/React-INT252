import { useState } from 'react';

const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedText, setSubmittedText] = useState('');
    
    const handleSubmit = () => {
        setSubmittedText(inputValue);
    };
    
    return (
        <div className="p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
                <div className="flex gap-3">
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type something here..."
                        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <button 
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Submit
                    </button>
                </div>
                
                {submittedText && (
                    <div className="mt-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                        <p className="text-gray-700">
                            <span className="font-semibold">You submitted:</span> {submittedText}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;