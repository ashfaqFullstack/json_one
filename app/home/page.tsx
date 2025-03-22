import Card from "@/components/home/Card"
import Herosection from "@/components/home/Herosection"
import LastSection from "@/components/home/LastSection"
import Navbar from "@/components/home/Navbar"
import WelcomeSign from "@/components/home/WelcomeSign"

const page = () => {
  return (
    <div className="">
      {/* Header */}
      {/* <Navbar /> */}

      {/* Herosection  */}
      <div className="max-w-[90%] mx-auto lg:max-w-[80%]" >
        <Herosection />
        <Card />
        <LastSection />
      </div>
      {/* <WelcomeSign /> */}
    </div>
  )
}

export default page