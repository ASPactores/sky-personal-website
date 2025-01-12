export default function BackgroundGradient({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center w-[30vw] aspect-square ${className}`}>
      <div className="w-full h-full rounded-full bg-gradient-to-r from-accent-700 to-secondary-800 opacity-25 blur-[150px]"></div>
    </div>
  )
}
