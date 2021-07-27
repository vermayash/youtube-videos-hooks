import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // TODO: Callback from the parent component
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        placeholder="Search for video here" 
                        value = {term}
                        onChange = {onInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;