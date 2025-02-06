import { useUser } from "@clerk/nextjs"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import CartPage from "../Cart/page"

const AuthGuard = ({children} : {children : React.ReactNode}) =>{
 const [isLoading, setisLoading] = useState(true)

 const {isSignedIn} = useUser()
 const router =useRouter()
 const pathname = usePathname();

 useEffect(() =>{
    if(isSignedIn === false){
        sessionStorage.setItem("redirectAfterLogin", pathname);
        router.replace("LoginPage")
    }else{
        setisLoading(false)
    }
 },[isSignedIn, router])

 if(isLoading) return <p>...Loading</p>

 return <>{children}</>
}

export default AuthGuard