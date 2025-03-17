import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">About Tessellation Origami</h1>

        <div className="mb-8 rounded-lg bg-muted p-6">
          <p className="text-lg">
            Tessellation origami is a fascinating intersection of art, mathematics, and paper folding that creates
            repeating geometric patterns that can theoretically extend infinitely.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">The Mathematics Behind Tessellations</h2>
            <p className="mb-4">
              A tessellation is a pattern of shapes that fit together perfectly without gaps or overlaps. In
              mathematics, tessellations have been studied extensively for their geometric properties and symmetry.
            </p>
            <p className="mb-4">
              When applied to origami, tessellations create fascinating patterns through a series of mountain and valley
              folds. These patterns often exhibit mathematical properties such as:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>Translational symmetry (patterns that repeat when shifted)</li>
              <li>Rotational symmetry (patterns that repeat when rotated)</li>
              <li>Reflective symmetry (patterns that repeat when mirrored)</li>
              <li>Fractal-like properties (self-similarity at different scales)</li>
            </ul>
            <p>
              The study of origami tessellations has applications in various fields, including mathematics, engineering,
              architecture, and even space technology.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">History of Tessellation Origami</h2>
            <p className="mb-4">
              While traditional origami has ancient roots, tessellation origami as we know it today is relatively
              modern. It began to develop significantly in the late 20th century.
            </p>
            <p className="mb-4">Key figures in the development of tessellation origami include:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                <strong>Shuzo Fujimoto</strong> - Often credited as the pioneer of origami tessellations in the 1960s
              </li>
              <li>
                <strong>Koryo Miura</strong> - Developed the famous Miura-ori fold used in solar panels for space
                satellites
              </li>
              <li>
                <strong>Ron Resch</strong> - Created numerous tessellation patterns with applications in architecture
              </li>
              <li>
                <strong>Eric Gjerde</strong> - Author of "Origami Tessellations" who helped popularize the art form
              </li>
              <li>
                <strong>Robert Lang</strong> - Developed computational algorithms for complex origami designs
              </li>
            </ul>
            <p>
              Today, tessellation origami continues to evolve with artists and mathematicians exploring new patterns and
              applications.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Applications Beyond Art</h2>
            <p className="mb-4">Tessellation origami has found applications in various fields beyond art:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                <strong>Space Technology</strong> - Folding solar arrays and deployable structures
              </li>
              <li>
                <strong>Architecture</strong> - Designing foldable structures and kinetic facades
              </li>
              <li>
                <strong>Engineering</strong> - Creating energy-absorbing materials and metamaterials
              </li>
              <li>
                <strong>Medicine</strong> - Developing stents and other deployable medical devices
              </li>
              <li>
                <strong>Fashion</strong> - Designing innovative textiles and garments
              </li>
            </ul>
            <p>
              The principles of tessellation origami continue to inspire innovations across disciplines, demonstrating
              the powerful connection between art, mathematics, and practical applications.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Ready to Start Folding?</h2>
          <p className="mb-6 text-muted-foreground">
            Explore our collection of tessellation patterns and start creating your own mathematical art.
          </p>
          <Link href="/">
            <Button size="lg">Browse Tessellation Patterns</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

