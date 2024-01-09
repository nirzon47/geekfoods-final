import Links from './Links'
import Button from './Button'
import { FaBars } from 'react-icons/fa6'

const Header = ({ activeTab }) => {
	return (
		<header className='sticky top-0 z-40 flex items-center justify-between px-3 py-4 text-white lg:px-16 bg-zinc-900 h-[10vh]'>
			<div className='flex items-center gap-4'>
				<img src='https://flowbite.com/docs/images/logo.svg' alt='icon' />
				<h2 className='text-lg font-bold md:text-2xl'>Geekfoods</h2>
			</div>
			<Links activeTab={activeTab} />
			<Button />
			<FaBars className='text-2xl cursor-pointer md:hidden' />
		</header>
	)
}

export default Header
