import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddCategoryProps {
    onNewCategory: (newCategory: string) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length < 1) return;
        onNewCategory(value);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gif" 
                onChange={onInputChange} 
                value={inputValue} 
            />
        </form>
    );
}
