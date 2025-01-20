'use client';

import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function Home() {
  const [recipe, setRecipe] = useState([{}]);
  const recipeCollection = collection(
    db,
    'EASY',
    '30 minutes or less',
    'recipes'
  );

  useEffect(() => {
    const getRecipesList = async () => {
      const data = await getDocs(recipeCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRecipe(filteredData);
    };
    getRecipesList();
  }, []);
  console.log(recipe);

  return (
    <div>
      <main>Happy new year!</main>
    </div>
  );
}
