const FoodCard = ({ item }) => {
	return (
		<div className='flex flex-col duration-300 scale-95 hover:scale-100'>
			<div className='h-48'>
				<img
					src={item.strMealThumb}
					alt={item.strMeal}
					className='object-cover h-48 rounded-lg w-96'
				/>
			</div>
			<a
				href={item.strYoutube}
				className='pl-2 mt-2 font-semibold text-blue-900 duration-200 hover:text-blue-500'
			>
				{item.strMeal}
			</a>
			<p className='pl-2 text-sm text-gray-600'>{item.strCategory}</p>
		</div>
	)
}
export default FoodCard
