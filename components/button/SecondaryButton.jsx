
export default function SecondaryButton ({ children, onClick, ...props }) {
  return (
    <button {...props}
      className="h-10 px-5 text-gray-100 transition-colors duration-150 bg-savings-gray1 rounded-lg focus:shadow-outline hover:bg-savings-blue2">
      {children}
    </button>
  )
}
