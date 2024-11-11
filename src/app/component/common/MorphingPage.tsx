import MorphingGradient from './MorphingGradients'

interface MorphingPageProps {
  children: React.ReactNode
}

export default function MorphingPage({ children }: MorphingPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MorphingGradient />
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  )
}