export default function TestPage() {
  return (
    <div className="p-8">
      {/* Test basic Tailwind */}
      <div className="bg-red-500 text-white p-4 mb-4">
        Basic Tailwind Test (should be red)
      </div>
      
      {/* Test your custom colors */}
      <div className="bg-primary text-white p-4 mb-4">
        Custom Primary Color Test
      </div>
      
      <div className="bg-green-500 text-white p-4 mb-4">
        Custom Green Test
      </div>
      
      {/* Test custom fonts */}
      <div className="font-bebas-neue text-2xl mb-4">
        Bebas Neue Font Test
      </div>
      
      <div className="font-ibm-plex-sans">
        IBM Plex Sans Font Test
      </div>
    </div>
  )
}