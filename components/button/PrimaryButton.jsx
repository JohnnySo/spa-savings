export default function PrimaryButton ({ children, ...props }) {
  return (
    <button className='h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-800' {...props}>{children}</button>
  )
}
