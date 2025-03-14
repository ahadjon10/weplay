import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import VideoGallery from "@/components/video-gallery"
import ImageGallery from "@/components/image-gallery"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a2e0a] text-white">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-heKeVdpk63ixTTUtylCOMivV4rviAR.png"
            alt="WE PLAY Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="font-bold text-xl">WE PLAY</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:text-green-300 transition-colors">
            Home
          </Link>
          <Link href="#gallery" className="hover:text-green-300 transition-colors">
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-green-300 transition-colors">
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="border-green-500 text-green-300 hover:bg-green-900">
          Join Us
        </Button>
      </header>

      {/* Hero with Video */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-full w-full">
          <iframe
            className="absolute w-full h-full object-cover"
            src="https://www.youtube.com/embed/i7ZUkZ9FooY?autoplay=1&mute=1&loop=1&playlist=i7ZUkZ9FooY&controls=0&showinfo=0&rel=0"
            title="WE PLAY Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a2e0a] to-transparent z-20"></div>
      </section>

      {/* Main content */}
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold italic mb-6">FUTBOL BIZNI BIRLASHTIRADI</h1>
          <p className="text-lg text-gray-300">
            Join us for an unforgettable football experience. We bring people together through the beautiful game.
          </p>
        </div>

        {/* Logo showcase */}
        <div className="flex justify-center mb-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-heKeVdpk63ixTTUtylCOMivV4rviAR.png"
            alt="WE PLAY Logo"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </section>

      {/* Video Gallery */}
      <section id="gallery" className="py-16 bg-[#0d3b0d]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Video Gallery</h2>
          <VideoGallery />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Image Gallery</h2>
          <ImageGallery />
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="bg-[#0d3b0d] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions or want to join our football community? Fill out the form and our team will get back to
                you as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-800 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-300">+998505005695</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-800 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">jasurbekboss26@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-800 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Instagram</h4>
                    <a
                      href="http://instagram.com/weplayuz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-300 transition-colors"
                    >
                      @weplayuz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-800 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-send"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Telegram</h4>
                    <a
                      href="https://t.me/WePlayuz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-300 transition-colors"
                    >
                      @WePlayuz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071e07] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-heKeVdpk63ixTTUtylCOMivV4rviAR.png"
                alt="WE PLAY Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold">WE PLAY</span>
            </div>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} WE PLAY. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}

