export default function EventInfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-lg 
        transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Alass Info</h2>
        {/* TODO: Add information here */}
        <p className="text-gray-700 dark:text-gray-300">Keine Informationen verfügbar</p>
        {/* <p className="text-gray-700 dark:text-gray-300">Samschtig, 15. Juni 2024</p>
        <p className="text-gray-700 dark:text-gray-300">Sportplatz Ütike</p>
        <p className="text-gray-700 dark:text-gray-300">Start: 09:00 Uhr</p> */}
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-lg 
        transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Kategorie</h2>
        {/* TODO: Add information here */}
        <p className="text-gray-700 dark:text-gray-300">Keine Informationen verfügbar</p>
        {/* <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Mädche & Buebe 2017-2018</li>
          <li>• Mädche & Buebe 2015-2016</li>
          <li>• Mädche & Buebe 2013-2014</li>
          <li>• Mädche & Buebe 2011-2012</li>
        </ul> */}
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-lg 
        transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Amäldig</h2>
        {/* TODO: Add information here */}
        <p className="text-gray-700 dark:text-gray-300">Keine Informationen verfügbar</p>
        {/* <p className="mb-4 text-gray-700 dark:text-gray-300">D'Amäldig isch ab sofort offe!</p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors">
          Jetzt amälde
        </button> */}
      </div>
    </div>
  )
}