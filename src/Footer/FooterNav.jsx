const FooterNav = () => {
	return (
		<ul className='flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:gap-12'>
			{['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map(
				(item) => (
					<li
						className='text-gray-700 duration-150 cursor-pointer hover:text-gray-700/75'
						key={item}
					>
						{item}
					</li>
				)
			)}
		</ul>
	)
}

export default FooterNav
