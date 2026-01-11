type Props = {
  activePlatform: string | null
  onChange: (platform: string | null) => void
}

const PLATFORMS = [
  "Neo Geo",
  "Game Boy Advance",
  "Genesis",
  "Nintendo 64",
  "Playstation",
  "PC",
  "macOS",
  "Linux",
  "Game Boy",
  "iOS",
]

export default function PlatformFilter({
  activePlatform,
  onChange,
}: Props) {
  return (
    <section className="space-y-4">
      <div className="flex justify-center">
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">

         
          <button
            onClick={() => onChange(null)}
            className={`
              whitespace-nowrap text-sm transition-colors
              ${
                !activePlatform
                  ? "font-medium text-[#3f351a] border-b-2 border-[#3f351a]"
                  : "text-[#7a6a44] hover:text-[#3f351a]"
              }
            `}
          >
            Todas
          </button>

         
          {PLATFORMS.map(platform => {
            const isActive = activePlatform === platform

            return (
              <button
                key={platform}
                onClick={() => onChange(platform)}
                className={`
                  whitespace-nowrap text-sm transition-colors
                  ${
                    isActive
                      ? "font-medium text-[#3f351a] border-b-2 border-[#3f351a]"
                      : "text-[#7a6a44] hover:text-[#3f351a]"
                  }
                `}
              >
                {platform}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}



