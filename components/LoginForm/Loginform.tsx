// "use client";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Link from "next/link";
// import Image from "next/image";

// export default function Login() {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
//       <div className="w-full p-6 bg-white rounded-md shadow-lg lg:max-w-xl mb-40">
//         <div className="w-full h-1 bg-primary mb-10"></div>
//         <h1 className="font-bold text-center text-black text-3xl">
//           VHTOP Login
//         </h1>

//         <div className="mt-2">
//           <div className="flex items-center justify-center dark:bg-gray-800">
//             <SignedOut>
//               <SignInButton mode="redirect">
//                 <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
//                   <Image
//                     src="https://www.svgrepo.com/show/475656/google-color.svg"
//                     loading="lazy"
//                     alt="google logo"
//                     width={24}
//                     height={24}
//                   />
//                   <span>Login with Google</span>
//                 </button>
//               </SignInButton>
//             </SignedOut>

//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </div>
//         </div>

//         <p className="mt-2 text-sm text-right text-white">
//           <Link href="/" className="text-xs text-green-600 hover:underline">
//             Return to Home Page
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";
import { SignInButton, SignedIn, SignedOut, UserButton, useAuth, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  // Redirect to /content if the user is already signed in
  useEffect(() => {
    if (isSignedIn && user) {
      router.push("/content");
    }
  }, [isSignedIn, user, router]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-lg lg:max-w-xl mb-40">
        <div className="w-full h-1 bg-primary mb-10"></div>
        <h1 className="font-bold text-center text-black text-3xl">
          VHTOP Login
        </h1>

        <div className="mt-2">
          <div className="flex items-center justify-center dark:bg-gray-800">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                  <Image
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                    width={24}
                    height={24}
                  />
                  <span>Login with Google</span>
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <p className="mt-2 text-sm text-right text-white">
          <Link href="/" className="text-xs text-green-600 hover:underline">
            Return to Home Page
          </Link>
        </p>
      </div>
    </div>
  );
}

