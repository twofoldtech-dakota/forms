import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-10 px-4 py-24 text-center lg:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Welcome to <span className="text-primary">Our Platform</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Transform your workflow with our powerful tools. Start building something amazing today.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            Key Features
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <feature.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built on Next.js 14 for optimal performance and SEO.',
    icon: ArrowRight,
  },
  {
    title: 'Type Safe',
    description: 'Fully typed with TypeScript for better development experience.',
    icon: ArrowRight,
  },
  {
    title: 'Modern Stack',
    description: 'Using the latest technologies and best practices.',
    icon: ArrowRight,
  },
]
