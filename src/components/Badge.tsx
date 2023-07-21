const Badge = () => {
  return (
    <span className="relative inline-block w-fit mx-auto overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#71717a_0%,#27272a_50%,#71717a_100%)]" />
      <div className="flex gap-1 h-full w-full items-center justify-center rounded-full bg-zinc-950 px-3 py-1 text-sm text-zinc-200 backdrop-blur-3xl">
        <p className="font-bold">Launching <a href="https://kmark.boo" className="underline">kmark.boo</a>! &#127881;</p>
      </div>
    </span>
  )
}

export default Badge