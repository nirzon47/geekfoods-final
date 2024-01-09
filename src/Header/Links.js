const Links = ({ activeTab }) => {
	return (
		<>
			<ul className='hidden gap-8 font-medium md:flex'>
				{['Home', 'Quote', 'Restaurants', 'Food', 'Contact'].map((item) =>
					item === activeTab ? (
						<li
							key={item}
							className='text-blue-500 duration-200 cursor-pointer hover:text-blue-600'
						>
							{item}
						</li>
					) : (
						<li
							key={item}
							className='duration-200 cursor-pointer hover:text-blue-600'
						>
							{item}
						</li>
					)
				)}
			</ul>
		</>
	)
}
export default Links
