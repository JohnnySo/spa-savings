import Link from 'next/link'

const BUTTON_STYLE = 'relative inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'
'relative inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'
export default function PaginationBoundaryButton ({ show, navigateWithUrl, onClick, children, otherStyles, ...props }) {
  return (
    navigateWithUrl ?
      show && <Link className={`${BUTTON_STYLE} ${otherStyles}`} {...props}> {children}</Link >
      :
      show && <a onClick={onClick} className={`${BUTTON_STYLE} ${otherStyles}`}  {...props}>{children}</a>
  )
}
