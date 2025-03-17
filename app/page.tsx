import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  const patterns = [
    {
      id: "triangle-grid",
      name: "Triangle Grid",
      description: "A classic tessellation pattern based on triangular folds",
      difficulty: "Beginner",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "waterbomb",
      name: "Waterbomb Base",
      description: "A versatile base pattern that creates a beautiful geometric tessellation",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "bird-base",
      name: "Bird Base Tessellation",
      description: "An advanced pattern that creates an elegant repeating structure",
      difficulty: "Advanced",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "miura-ori",
      name: "Miura-ori",
      description: "A rigidly foldable pattern used in solar arrays for spacecraft",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "hexagonal",
      name: "Hexagonal Tessellation",
      description: "A beautiful pattern based on hexagonal geometry",
      difficulty: "Advanced",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "twist",
      name: "Twist Fold",
      description: "A dynamic pattern with rotating elements",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Tessellation Origami</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Learn the art and mathematics of tessellation origami with interactive 3D folding animations
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <Card key={pattern.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <Image
                src={pattern.image || "/placeholder.svg"}
                alt={pattern.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{pattern.name}</CardTitle>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {pattern.difficulty}
                </span>
              </div>
              <CardDescription>{pattern.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={`/pattern/${pattern.id}`} className="w-full">
                <Button className="w-full">
                  Learn Pattern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mx-auto max-w-3xl rounded-lg bg-muted p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">What is Tessellation Origami?</h2>
        <p className="mb-6 text-muted-foreground">
          Tessellation origami is a technique where folded paper creates repeating geometric patterns. Unlike
          traditional origami that often represents objects, tessellations focus on mathematical patterns that can
          theoretically extend infinitely.
        </p>
        <Link href="/about">
          <Button variant="outline">Learn More About Tessellations</Button>
        </Link>
      </div>
    </div>
  )
}