import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"

async function page() {
    const user = await currentUser()
    const userInfo = {}

    const userData = {
        id: user?.id,
        objectId: userInfo?._id || "",
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo.image || user?.imageUrl || "",
    }

    return (
        <section className="w-full max-w-3xl mx-auto flex flex-col justify-start px-10 py-20">
            <h1 className="head-text">Onboarding</h1>
            <p className="text-base-regular text-light-2 mt-3">
                Complete your profile now to use GatotKaca
            </p>

            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile user={userData} btnTitle="continue"/>
            </section>
        </section>
    )
}

export default page