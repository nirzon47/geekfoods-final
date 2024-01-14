import axios from 'axios'
import { useState, useEffect } from 'react'

const Food = () => {
	const [search, setSearch] = useState('Chicken')
	const [recipes, setRecipes] = useState([])
	const handleSearchClick = (e) => {
		e.preventDefault()

		fetchRecipes()
	}

	const handleInputChange = (e) => {
		setSearch(e.target.value)
	}

	const fetchRecipes = async () => {
		try {
			const response = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
			)
			const data = response.data.meals

			setRecipes(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchRecipes()
	}, [])

	return (
		<div className='flex flex-col items-center p-6'>
			<form className='flex items-center gap-4'>
				<input
					type='text'
					placeholder='Search your recipe..'
					className='w-64 px-4 py-2 text-sm border rounded-lg'
					onChange={handleInputChange}
				/>
				<button
					className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg'
					type='submit'
					onClick={handleSearchClick}
				>
					Search
				</button>
			</form>
			<div></div>
		</div>
	)
}

export default Food
