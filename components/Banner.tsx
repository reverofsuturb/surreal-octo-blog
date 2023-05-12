function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
    <div>
<h1 className="text-7xl">deep sea dreams</h1>
<h2 className="mt-5 md:mt:0">welcome to {" "}<span className="underline decoration-4 decoration-[#F7AB0A]">an octopus</span>{" "}collection of night visions</h2>
    </div>
    <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
run away from cthulhu | share your underwater journey | become one with the tide | stretch your tentacles
    </p>
    </div>
  )
}

export default Banner