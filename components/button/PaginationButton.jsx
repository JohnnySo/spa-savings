import Link from 'next/link'

const BUTTON_STYLES = {
  CURRENT_PAGE: 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  OTHER_PAGES: 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
}


export default function PaginationButton ({ current, onClick, pageNumber, children, navigateWithUrl, ...props }) {
  return (
    navigateWithUrl ?
      <Link className={current ? BUTTON_STYLES.CURRENT_PAGE : BUTTON_STYLES.OTHER_PAGES} {...props}>
        {children}
      </Link>
      :
      <a onClick={current ? () => { } : onClick} className={current ? BUTTON_STYLES.CURRENT_PAGE : BUTTON_STYLES.OTHER_PAGES} data-page={pageNumber}  {...props}>
        {children}
      </a>
  )
}
