'use client'

export default function Toast({
  message,
  type = 'success',
  onClose,
}: {
  message: string
  type?: 'success' | 'error'
  onClose: () => void
}) {
  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        px-5 py-3 rounded-lg shadow-lg
        text-sm font-medium
        animate-slide-up
        ${type === 'success'
          ? 'bg-green-500 text-black'
          : 'bg-red-500 text-black'}
      `}
      onClick={onClose}
    >
      {message}
    </div>
  )
}
