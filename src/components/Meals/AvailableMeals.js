import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';

import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://foodshop-b2e5b-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const loadedMeals = [];

            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };


        fetchMeals().catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });

    }, []);

    //console.log(error);
    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        )
    }

    if (error) {
        return (
            <section className={classes.MealsError}>
                <p>{error}</p>
            </section>
        )
    }

    const meallist = meals.map(meal => <MealItem name={meal.name} description={meal.description} price={meal.price} id={meal.id} />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {meallist}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;