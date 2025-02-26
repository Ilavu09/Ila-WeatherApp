
function App() {
  

  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">MyApp</h1>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
        <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
      </ul>
    </div>
  </nav>
   
  );
}

export default App
