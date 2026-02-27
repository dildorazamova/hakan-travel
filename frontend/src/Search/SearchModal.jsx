function SearchModal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      {/* Modal Box */}
      <div className="relative bg-white w-[600px] rounded-2xl p-6 shadow-2xl">
        {children}
      </div>
    </div>
  )
}

export default SearchModal