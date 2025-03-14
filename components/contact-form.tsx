"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <Card className="bg-[#0a2e0a] border-green-900">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription className="text-gray-400">
          Fill out the form below and we'll get back to you soon.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formState.name}
              onChange={handleChange}
              required
              className="bg-[#0d3b0d] border-green-900"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formState.email}
              onChange={handleChange}
              required
              className="bg-[#0d3b0d] border-green-900"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={formState.phone}
              onChange={handleChange}
              className="bg-[#0d3b0d] border-green-900"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={5}
              value={formState.message}
              onChange={handleChange}
              required
              className="bg-[#0d3b0d] border-green-900 min-h-[120px]"
            />
          </div>

          <Button type="submit" className="w-full bg-green-700 hover:bg-green-600" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {isSuccess && (
            <div className="p-3 bg-green-800/50 border border-green-700 rounded-md text-center">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

