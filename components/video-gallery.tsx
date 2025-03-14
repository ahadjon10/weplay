"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function VideoGallery() {
  // The channel doesn't have videos yet, so we'll use the main promo video
  // and add placeholders for future content categories
  const videos = [
    {
      id: "i7ZUkZ9FooY",
      title: "Main Promo",
      description: "Our official promotional video",
    },
    {
      id: "i7ZUkZ9FooY", // Using the same video as placeholder
      title: "Match Highlights",
      description: "Coming soon - Best moments from our matches",
    },
    {
      id: "i7ZUkZ9FooY", // Using the same video as placeholder
      title: "Training Sessions",
      description: "Coming soon - Behind the scenes of our training",
    },
  ]

  return (
    <div className="space-y-8">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All Videos</TabsTrigger>
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} isPlaceholder={index > 0} />
          ))}
        </TabsContent>

        <TabsContent value="matches" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoCard video={videos[1]} isPlaceholder={true} />
        </TabsContent>

        <TabsContent value="training" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoCard video={videos[2]} isPlaceholder={true} />
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <a
          href="https://youtube.com/@weplayuz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors"
        >
          <Button variant="outline" className="border-green-500 text-green-300 hover:bg-green-900">
            Subscribe to our YouTube Channel <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  )
}

function VideoCard({
  video,
  isPlaceholder = false,
}: {
  video: { id: string; title: string; description: string }
  isPlaceholder?: boolean
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Card className="overflow-hidden bg-[#0a2e0a] border-green-900">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          ></iframe>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          {isPlaceholder && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
              <div className="text-center px-4">
                <p className="text-white font-bold mb-2">Coming Soon</p>
                <p className="text-gray-300 text-sm">New videos will be added here</p>
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{video.title}</h3>
          <p className="text-gray-400 text-sm">{video.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

