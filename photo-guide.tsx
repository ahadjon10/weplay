import { Folder, FileImage, Info } from "lucide-react"

export default function PhotoGuide() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">How to Add Your Photos to the Website</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Folder className="mr-2 text-blue-500" /> Step 1: Create the Image Folder Structure
          </h2>
          <div className="pl-6 border-l-2 border-blue-200">
            <p className="mb-3">
              Create the following folder structure in your project's <code>public</code> folder:
            </p>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
              public/ ├── images/ │ └── gallery/ │ ├── match1.jpg │ ├── team.jpg │ ├── training.jpg │ ├── stadium.jpg │
              ├── fans.jpg │ └── trophy.jpg
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <FileImage className="mr-2 text-green-500" /> Step 2: Prepare Your Images
          </h2>
          <div className="pl-6 border-l-2 border-green-200">
            <p className="mb-3">For best performance:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use JPG or WebP format for photos</li>
              <li>Optimize image sizes (recommended: 1200px width maximum)</li>
              <li>Keep file sizes under 300KB per image when possible</li>
              <li>Use descriptive filenames (e.g., "team-photo-2023.jpg")</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Info className="mr-2 text-purple-500" /> Step 3: Update the Image Gallery Component
          </h2>
          <div className="pl-6 border-l-2 border-purple-200">
            <p className="mb-3">
              Open the <code>components/image-gallery.tsx</code> file and update the <code>images</code> array with your
              image paths:
            </p>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
              {`const images = [
  {
    src: "/images/gallery/match1.jpg", // Your image path
    alt: "Football match",
    caption: "Recent match highlights"
  },
  // Add more images here
]`}
            </pre>
            <p className="mt-3">
              Make sure to update the <code>alt</code> text and <code>caption</code> for each image.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-semibold text-yellow-800">Important Tips:</h3>
        <ul className="mt-2 space-y-1 text-yellow-800">
          <li>• Always back up your original images</li>
          <li>• Test your website after adding new images</li>
          <li>• If an image doesn't appear, check the file path and make sure the file exists</li>
        </ul>
      </div>
    </div>
  )
}

