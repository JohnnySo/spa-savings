export function PayrollIcon (props) {
  return (
    //       Tu nómina!!
    <svg viewBox='0 0 24 24' fill='currentColor' height='1em' width='1em' {...props}>
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1.95-9H15v2h-4.95a2.5 2.5 0 004.064 1.41l1.7 1.133A4.5 4.5 0 018.028 13H7v-2h1.027a4.5 4.5 0 017.788-2.543L14.114 9.59A2.5 2.5 0 0010.05 11z' />
    </svg>
  )
}

export function NotCountableMovementIcon (props) {
  return (
    //       Este movimiento no se cuenta
    <svg data-name='Layer 1' viewBox='0 0 24 24' fill='currentColor' height='1em' width='1em' {...props}>
      <path d='M6 11a1 1 0 101 1 1 1 0 00-1-1zm5.86-1.55L4.71 2.29a1 1 0 00-1.42 1.42L4.59 5H4a3 3 0 00-3 3v8a3 3 0 003 3h14.59l2.7 2.71a1 1 0 001.42 0 1 1 0 000-1.42zm-.74 2.09l1.34 1.34A1 1 0 0112 13a1 1 0 01-1-1 1 1 0 01.12-.46zM4 17a1 1 0 01-1-1V8a1 1 0 011-1h2.59l3.1 3.1A3 3 0 009 12a3 3 0 003 3 3 3 0 001.9-.69L16.59 17zM20 5h-7.34a1 1 0 000 2H20a1 1 0 011 1v7.34a1 1 0 102 0V8a3 3 0 00-3-3zm-1 7a1 1 0 10-1 1 1 1 0 001-1z' />
    </svg>
  )
}

export function LogoIcon (props) {
  return (
    <svg className='w-10 h-10 text-red-400' fill='currentColor' viewBox='0 0 20 20'>
      <path
        fillRule='evenodd'
        d='M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function DashboardIcon () {
  return (
    <svg fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6'>
      <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
    </svg>
  )
}

export function SavingsIcon (props) {
  return (
    <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} viewBox='0 0 24 24' className='h-6 w-6' {...props}>
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M15 11v.01M5.173 8.378a3 3 0 114.656-1.377' />
      <path d='M16 4v3.803A6.019 6.019 0 0118.658 11h1.341a1 1 0 011 1v2a1 1 0 01-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 01-3 0v-.583a6.04 6.04 0 01-1 .083h-4a6.04 6.04 0 01-1-.083v.583a1.5 1.5 0 01-3 0v-2L5 17.473A6 6 0 018.999 7h2.5l4.5-3H16z' />
    </svg>
  )
}

export function ProfileIcon () {
  return (
    <svg fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6'>
      <path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
    </svg>
  )
}

export function SettingsIcon () {
  return (
    <svg fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6'>
      <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
      <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
    </svg>
  )
}

export function LogoutIcon () {
  return (
    <svg fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6'>
      <path d='M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z' />
    </svg>
  )
}

export function UserIcon (props) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='h-10 w-10 bg-gray-200 border rounded-full' {...props}>
      <path d='M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z' />
    </svg>
  )
}

export function SearchIcon (props) {
  return (
    <svg className='h-6 w-6 text-gray-500' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor' {...props}>
      <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
    </svg>
  )
}

export function SearchIcon2 (props) {
  return (
    <svg className='h-6 w-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor' {...props}>
      <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
    </svg>
  )
}

export function ChevronLeftIcon (props) {
  return (
    <svg fill='none' stroke='currentColor' strokeWidth={1.5} className='w-6 h-6' viewBox='0 0 24 24' {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
    </svg>
  )
}

export function ChevronRightIcon (props) {
  return (
    <svg fill='none' stroke='currentColor' strokeWidth={1.5} className='w-6 h-6' viewBox='0 0 24 24' {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
    </svg>
  )
}

export function ChevronDoubleLeftIcon (props) {
  return (
    <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5' />
    </svg>
  )
}

export function ChevronDoubleRightIcon (props) {
  return (
    <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
    </svg>
  )
}

export function CloudUpIcon (props) {
  return (
    <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z' />
    </svg>

  )
}

export function LoadingIcon (props) {
  return (
    <div className='text-center'>
      <div role='status'>
        <svg aria-hidden='true' className='inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' viewBox='0 0 100 101' fill='none' {...props}>
          <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
          <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
        </svg>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export function LinkCalendar (props) {
  return (
    <svg fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z' />
    </svg>

  )
}


export function ArrowUpRightIcon (props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  )
}

export function EditIcon (props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height='1em' width='1em' {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
  )
}

export function TrashIcon (props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  )
}