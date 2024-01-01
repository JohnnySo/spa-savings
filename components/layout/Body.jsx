
export default function Body ({ children }) {
  return (
    <div className='main-content flex flex-col w-full h-full p-4'>
      <div className='flex flex-col flex-grow border border-gray-400 border-dashed bg-white rounded mt-4'>
        {children}
      </div>
    </div>
  )
}
