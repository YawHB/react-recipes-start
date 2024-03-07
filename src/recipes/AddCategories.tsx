import { useState, useEffect, useRef } from 'react';
import { getCategories } from '../services/apiFacade';
import { Link, useNavigate } from 'react-router-dom';

export const Categories = () => {
    const [categories, setCategories] = useState<Array<string>>();
    useEffect(() => {
        getCategories().then((res) => setCategories(res));
    }, []);

    export default function AddCategory() {
        const category = useRef('');
        const navigate = useNavigate();

        try {
            await AddCategory(name);
            alert('Category added');
            navigate('/categories');
            category.current.value = '';
        } catch (error) {
            console.log('Present the error for the user');
        }

        return (
            <>
                <h2>Categories</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={category} />
                <button onClick={submitNewCategory}> Add</button>
            </>
        );
    }
};

export const Desktops = () => <h3>Desktop PC Page</h3>;
export const Laptops = () => <h3>Laptops Page</h3>;
