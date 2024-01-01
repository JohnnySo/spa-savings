import { SearchIcon, SearchIcon2, UserIcon } from '@/components/Icons'

export default function Header () {
  return (
    <header className='header bg-white shadow py-4 px-4'>
      <div className='header-content flex items-center flex-row'>
        <form action='#'>
          <div className='hidden md:flex relative'>
            <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
              <SearchIcon2 />
            </div>
            <input id='search' type='text' name='search' className='text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400' placeholder='Search...' />
          </div>
          <div className='flex md:hidden'>
            <a href='#' className='flex items-center justify-center h-10 w-10 border-transparent'>
              <SearchIcon />
            </a>
          </div>
        </form>
        <div className='flex ml-auto'>
          <a href='#' className='flex flex-row items-center'>
            <UserIcon />
            <span className='flex flex-col ml-2'>
              <span className='truncate w-20 font-semibold tracking-wide leading-none'>JohnnySo</span>
              <span className='truncate w-20 text-gray-500 text-xs leading-none mt-1'>Admin</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
