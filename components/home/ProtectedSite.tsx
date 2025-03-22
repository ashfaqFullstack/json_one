"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const ProtectedSite = ({ children }: { children: React.ReactNode }) => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isAuth, setIsAuth] = useState(true)
    const router = useRouter()

    const correctPassword = "nmad#@!"

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (password === correctPassword) {
            setIsAuth(false)

            // If password is correct, navigate to home page
        } else {
            // If password is incorrect, show error
            setError('Password is incorrect')
            setPassword('')
        }
    }

    useEffect(() => {
        if (!isAuth) {
            setIsAuth(false)
            router.push('/home')
        }
    }, [isAuth])

    if (isAuth) {
        return (
            <div className={`${isAuth ? "block" : 'hidden'} w-full h-[100vh] flex flex-col items-center justify-center`}>
                <div className="text-[50px] text-[#2F2B3DC7] mb-4">Welcome! To JSONONE</div>
                <div >Enter Password To Continue</div>

                {error && (
                    <div className=" text-red-500">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className={`border ${error ? 'border-red-500' : 'border-[#666666]'} rounded-[4px] py-[12px] px-[16px] my-[10px]`}>
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="!bg-[black] !text-[white] !px-8 !py-2 !rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
    return <>{children}</>

}

export default ProtectedSite
