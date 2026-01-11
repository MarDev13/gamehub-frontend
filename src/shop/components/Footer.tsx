export default function ShopFooter() {
  return (
    <footer
      className="
        border-t-[4px] border-black
        bg-[#f1ecd9]
        py-6
        text-center
        shadow-[0_-4px_0_#000]
      "
    >
      <p
        className="
          text-sm
          font-bold
          text-[#3f351a]
          tracking-wide
        "
      >
        © {new Date().getFullYear()} GameHub · Proyecto académico
      </p>
    </footer>
  )
}

