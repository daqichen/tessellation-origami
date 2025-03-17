"use client"

import { useEffect, useState, use } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OrigamiViewer } from "@/components/origami-viewer"

type Pattern = {
  name: string
  description: string
  difficulty: string
  steps: string[]
  materials: string
  tips: string[]
}
// This would come from a database in a real app
const getPatternData = (id: string) => {
  const patterns: { [key: string]: Pattern } = {
    "triangle-grid": {
      name: "Triangle Grid",
      description:
        "The triangle grid is one of the fundamental tessellation patterns in origami. It creates a repeating pattern of triangular folds that can be expanded infinitely.",
      difficulty: "Beginner",
      steps: [
        "Start with a square sheet of paper, white side up.",
        "Fold the paper in half diagonally, then unfold.",
        "Fold the paper in half diagonally in the other direction, then unfold.",
        "Fold the paper in half horizontally, then unfold.",
        "Fold the paper in half vertically, then unfold.",
        "Using the creases as guides, begin folding the triangular grid pattern.",
        "Continue the pattern across the entire sheet.",
        "Collapse the model along the grid lines to create the tessellation.",
      ],
      materials: "Square paper (preferably thin and crisp)",
      tips: [
        "Make precise folds for the best results",
        "Start with larger paper for your first attempt",
        "Use a bone folder to create sharp creases",
      ],
    },
    waterbomb: {
      name: "Waterbomb Base",
      description:
        "The waterbomb base tessellation creates a beautiful pattern of repeating squares and triangles. It's named after the traditional waterbomb base used in many origami models.",
      difficulty: "Intermediate",
      steps: [
        "Start with a square sheet of paper.",
        "Create a grid of creases by folding the paper into eighths in both directions.",
        "Fold diagonals in each small square.",
        "Begin collapsing the pattern by pushing in at the center of each square.",
        "Continue working outward until the entire pattern is collapsed.",
        "Adjust and flatten the model to complete the tessellation.",
      ],
      materials: "Square paper (thin and crisp)",
      tips: [
        "Pre-crease all lines firmly before collapsing",
        "Work from the center outward",
        "Be patient with the collapse phase - it can be tricky",
      ],
    },
    "miura-ori": {
      name: "Miura-ori",
      description:
        "The Miura-ori is a rigidly foldable tessellation pattern developed by Japanese astrophysicist Koryo Miura. It's famous for its use in solar array deployment for space satellites.",
      difficulty: "Intermediate",
      steps: [
        "Start with a rectangular sheet of paper.",
        "Create a grid of parallelograms by making zigzag folds.",
        "Pre-crease all mountain and valley folds carefully.",
        "Begin collapsing the pattern from one edge.",
        "Work methodically across the paper, maintaining the zigzag pattern.",
        "Fully collapse the pattern to complete the Miura-ori fold.",
      ],
      materials: "Rectangular paper (thin and crisp)",
      tips: [
        "Pay close attention to mountain vs. valley folds",
        "Use different colored paper sides to help track fold directions",
        "The pattern should fold and unfold with a single motion when complete",
      ],
    },
    // Add other patterns as needed
  }

  return patterns[id as keyof typeof patterns] || patterns["triangle-grid"]
}

export default function PatternPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [currentStep, setCurrentStep] = useState(0)
  const [pattern, setPattern] = useState<Pattern | null>(null)

  useEffect(() => {
    setPattern(getPatternData(id))
  }, [id])

  if (!pattern) {
    return <div className="container mx-auto p-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Patterns
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">{pattern.name}</h1>
        <div className="mt-2 flex items-center">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {pattern.difficulty}
          </span>
        </div>
        <p className="mt-4 text-muted-foreground">{pattern.description}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardContent className="p-0">
            <div className="aspect-square w-full">
              <OrigamiViewer patternId={id} step={currentStep} />
            </div>
            <div className="flex items-center justify-between border-t p-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-sm">
                Step {currentStep + 1} of {pattern.steps.length}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentStep(Math.min(pattern.steps.length - 1, currentStep + 1))}
                disabled={currentStep === pattern.steps.length - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => setCurrentStep(0)}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div>
          <Tabs defaultValue="instructions">
            <TabsList className="w-full">
              <TabsTrigger value="instructions" className="flex-1">
                Instructions
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex-1">
                Tips & Materials
              </TabsTrigger>
            </TabsList>
            <TabsContent value="instructions" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Step {currentStep + 1}</h3>
                  <p>{pattern.steps[currentStep]}</p>
                  <ol className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {pattern.steps.map((step: string, index: number) => (
                      <li
                        key={index}
                        className={`cursor-pointer rounded-md p-2 ${
                          index === currentStep ? "bg-primary/10 font-medium text-primary" : ""
                        }`}
                        onClick={() => setCurrentStep(index)}
                      >
                        {index + 1}. {step}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tips" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="mb-2 text-lg font-medium">Materials Needed</h3>
                    <p className="text-muted-foreground">{pattern.materials}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Helpful Tips</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {pattern.tips.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-primary" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

