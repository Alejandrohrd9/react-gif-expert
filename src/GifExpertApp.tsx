import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

type AddCategoryFunction  = (newString: string) => void;

export const GifExpertApp = () => {

    const  [categories, setCategories] = useState<string[]>(['One Punch', 'Dragon Ball']);
    const onAddCategory:AddCategoryFunction = (newCategory:string) => {
        if( categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(value: string) => onAddCategory(value)} />
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }

        </>
    );

}