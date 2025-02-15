import { Button } from '@/components/ui/button/button'
import styles from './hero-section.module.styl'

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Create High-Converting Forms with AI
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Transform your lead generation with AI-powered form design, personalization, and analytics.
          </p>
          <div className="space-x-4">
            <Button size="lg">Get Started Free</Button>
            <Button variant="outline" size="lg">Watch Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
} 