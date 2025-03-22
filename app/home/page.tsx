import Card from "@/components/home/Card"
import Herosection from "@/components/home/Herosection"
import Navbar from "@/components/home/Navbar"
import Footer from "@/components/home/Footer"

const page = () => {
  return (
    <div className="">
      <Navbar />

      <div className="max-w-[90%] mx-auto lg:max-w-[80%]" >
        <Herosection />
        <Card />
        <Footer />
      </div>
    </div>
  )
}

export default page