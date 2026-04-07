import { logoutAccount } from "@/lib/actions/user.actions"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await logoutAccount();

    if(loggedOut) router.push("/sign-in");
  }

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile w-10" : "footer_name w-10"}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>
      <div className={type === "mobile" ? "footer_email-mobile min-w-0" : "footer_email min-w-0"}>
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.firstName} {user?.lastName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image !w-5" onClick={handleLogout}>
        <Image src="icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  )
}

export default Footer