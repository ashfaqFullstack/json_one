import Card from "@/components/home/Card"
import Herosection from "@/components/home/Herosection"
import LastSection from "@/components/home/LastSection"
import Navbar from "@/components/home/Navbar"
import WelcomeSign from "@/components/home/WelcomeSign"

const page = () => {
  return (
    <div className="bg-[white]">
      {/* <Navbar />
      <Herosection />
      <Card />
      <LastSection /> */}
      <WelcomeSign />
    </div>
  )
}

export default page