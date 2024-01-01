'use client'

import Link from 'next/link'
import { DashboardIcon, LogoIcon, ProfileIcon, SavingsIcon, SettingsIcon, LogoutIcon } from '@/components/Icons'
import { usePathname } from 'next/navigation'

const MENU_ITEMS = {
  DASHBOARD: '/dashboard',
  SAVINGS: '/savings',
  PROFILE: '/profile',
  SETTINGS: '/settings'
}

export default function Sidebar () {
  const pathname = usePathname()

  return (
    <aside className='sidebar w-64 min-w-[16rem] md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-savings-blue1'>
      <div className='sidebar-header flex items-center justify-start py-4'>
        <div className='inline-flex'>
          <Link href='/' className='inline-flex flex-row items-center'>
            <LogoIcon />
            <span className='leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase'>Savings</span>
          </Link>
        </div>
      </div>
      <div className='sidebar-content px-4 py-6'>
        <ul className='flex flex-col w-full'>
          <li className='my-px'>
            <Link href={MENU_ITEMS.DASHBOARD} className={`flex flex-row items-center h-10 px-3 rounded-lg ${pathname === MENU_ITEMS.DASHBOARD ? 'text-gray-700 bg-gray-100' : 'text-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}>
              <span className='flex items-center justify-center text-lg text-gray-400'><DashboardIcon /></span>
              <span className='ml-3'>Dashboard</span>
            </Link>
          </li>
          <li className='my-px'>
            <Link href={MENU_ITEMS.SAVINGS} className={`flex flex-row items-center h-10 px-3 rounded-lg ${pathname.includes(MENU_ITEMS.SAVINGS) ? 'text-gray-700 bg-gray-100' : 'text-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}>
              <span className='flex items-center justify-center text-lg text-gray-400'>
                <SavingsIcon />
              </span>
              <span className='ml-3'>Savings</span>
            </Link>
          </li>
          <li className='my-px'>
            <span className='flex font-medium text-sm text-gray-300 px-4 my-4 uppercase'>Account</span>
          </li>
          <li className='my-px'>
            <Link href={MENU_ITEMS.PROFILE} className={`flex flex-row items-center h-10 px-3 rounded-lg ${pathname.includes(MENU_ITEMS.PROFILE) ? 'text-gray-700 bg-gray-100' : 'text-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}>
              <span className='flex items-center justify-center text-lg text-gray-400'>
                <ProfileIcon />
              </span>
              <span className='ml-3'>Profile</span>
            </Link>
          </li>
          <li className='my-px'>
            <a href={MENU_ITEMS.SETTINGS} className='flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700'>
              <span className='flex items-center justify-center text-lg text-gray-400'>
                <SettingsIcon />
              </span>
              <span className='ml-3'>Settings</span>
            </a>
          </li>
          <li className='my-px'>
            <a href='#' className='flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700'>
              <span className='flex items-center justify-center text-lg text-red-400'>
                <LogoutIcon />
              </span>
              <span className='ml-3'>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
