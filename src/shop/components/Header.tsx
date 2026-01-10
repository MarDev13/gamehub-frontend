import { Link } from "react-router-dom"
import { User } from "lucide-react"

export default function ShopHeader() {
  return (
    <header className="h-16 border-b border-[#d6b87a] bg-[#f1e5c4]">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2">
          <img src="/img/logo/cat-icon.png" className="h-8" />
          <span className="font-semibold tracking-wide">GameHub</span>
        </Link>

        <Link
          to="/login"
          className="rounded-full bg-[#e6d39c] p-2 hover:bg-[#d1b06a] transition"
        >
          <User size={18} />
        </Link>
      </div>
    </header>
  )
}
