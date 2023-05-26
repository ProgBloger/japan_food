import styles from './MealList.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: '"Naomi" rolls',
        description: 'Philadelphia cheese, chicken, masago, tomato, cucumber',
        price: 11.99,
    },
    {
        id: 'm2',
        name: 'Spice in salmon',
        description: 'Rice, hire this developer, salmon, sause spice',
        price: 3.99,
    },
    {
        id: 'm3',
        name: 'Sushi with cod',
        description: 'Cod, unagi sause',
        price: 4.99,
    },
    {
        id: 'm4',
        name: '"Poke with salmon" salad',
        description: 'Rice, this is a good developer, salmon, nori, tuna, ginger sause',
        price: 7.99,
    },
]

const MealList = () => {

    const mealList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)

    return <section className={styles.meals}>
        <ul>
            {mealList}
        </ul>
    </section>
}

export default MealList;