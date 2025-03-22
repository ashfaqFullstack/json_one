import Alldone from "@/components/home/Alldone"
import Card from "@/components/home/Card"
import Herosection from "@/components/home/Herosection"
import LastSection from "@/components/home/LastSection"
import Navbar from "@/components/home/Navbar"
import NewPasswored from "@/components/home/NewPasswored"
import OTPnumber from "@/components/home/OTPNumber"
import PasswordResetSet from "@/components/home/PasswordResetSet"
import PasswordUpdate from "@/components/home/PasswordUpdate"
import ResetPassword from "@/components/home/ResetPassword"
import ResetPhoneNumber from "@/components/home/ResetPhoneNumber"
import SignIn from "@/components/home/SignIn"
import SiginUp from "@/components/home/SignUp"
import Verifyemail from "@/components/home/Verifyemail"
import WelcomeSign from "@/components/home/WelcomeSign"
import { V } from "@liveblocks/react/dist/room-CqmA66N2.cjs"

const page = () => {
  return (
    <>
      <div className="">
        {/* Header */}
        <div className="max-w-[90%] mx-auto lg:max-w-[80%] bg-[white] text-[black]" >
          <Herosection />
          <Card />
          <LastSection />
        </div>

      </div>
      {/* <SiginUp /> */}
      {/* <Verifyemail /> */}
      {/* <OTPnumber /> */}
      {/* <Alldone /> */}
      {/* <SignIn /> */}
      {/* <ResetPassword /> */}
      {/* <PasswordResetSet /> */}
      {/* <ResetPhoneNumber /> */}
      {/* <NewPasswored /> */}
      {/* <PasswordUpdate /> */}
    </>
  )
}

export default page