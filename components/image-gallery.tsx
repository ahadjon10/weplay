"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Replace these with your actual images
  // The recommended path is "/images/gallery/filename.jpg"
  const images = [
    {
      src: "/images/gallery/match1.jpg", // Replace with your actual image path
      alt: "Football match",
      caption: "Recent match highlights",
    },
    {
      src: "/images/gallery/team.jpg", // Replace with your actual image path
      alt: "Team photo",
      caption: "Our team",
    },
    {
      src: "/images/gallery/training.jpg", // Replace with your actual image path
      alt: "Training session",
      caption: "Training session",
    },
    {
      src: "/images/gallery/stadium.jpg", // Replace with your actual image path
      alt: "Stadium view",
      caption: "Our home ground",
    },
    {
      src: "/images/gallery/fans.jpg", // Replace with your actual image path
      alt: "Fans celebrating",
      caption: "Our amazing fans",
    },
    {
      src: "/images/gallery/trophy.jpg", // Replace with your actual image path
      alt: "Trophy ceremony",
      caption: "Championship celebration",
    },
  ]

  return (
    <div className="relative space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Link */}
      <div className="text-center">
        <a
          href="http://instagram.com/weplayuz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Button variant="outline" className="border-green-500 text-green-300 hover:bg-green-900">
            <Instagram className="mr-2 h-4 w-4" />
            Follow us on Instagram for more photos
          </Button>
        </a>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <Image
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
              <p className="text-white text-center">{images[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

