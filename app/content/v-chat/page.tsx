// "use client";
// import { useChat } from "ai/react";
// import AppbarLogin from "@/components/Appbar/AppbarLogin";
// import Sidebar from "@/components/Sidebar/Sidebar";

// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="mt-16">
//         <Sidebar />
//       </div>

//       <div className="flex flex-col flex-grow">
//         {/* Header */}
//         <AppbarLogin />
//         <div className="flex flex-col sm:ml-12 ml-3">
//           <h1 className="flex items-center justify-between text-primary text-4xl font-medium m-4">
//             V-Chat
//           </h1>
//         </div>
//         {/* Chat messages */}
//         <div className="flex-grow overflow-y-auto p-6">
//           <div className="flex flex-col space-y-4 ml-10">
//             {messages.map((m) => (
//               <div
//                 key={m.id}
//                 className={`flex ${
//                   m.role === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`${
//                     m.role === "user" ? "bg-primary" : "bg-primary"
//                   } rounded-lg p-4 text-white max-w-3xl`}
//                 >
//                   {m.role === "user" ? "User: " : "AI: "}
//                   {m.content}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Input */}
//         <form
//           onSubmit={handleSubmit}
//           className="container mx-auto max-w-[700px] p-6"
//         >
//           <div className="flex rounded-lg border border-primary  overflow-hidden">
//             <input
//               value={input}
//               placeholder="Say something..."
//               onChange={handleInputChange}
//               className="flex-grow px-4 py-2 bg-transparent text-black focus-outline:none"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
 "use client"
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useChat } from "ai/react";
import Markdown from "markdown-to-jsx";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="mt-16">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Header */}
        <AppbarLogin />
        <div className="flex flex-col sm:ml-12 ml-3">
          <h1 className="flex items-center justify-between text-primary text-4xl font-medium m-4">
            V-Chat
          </h1>
        </div>
        {/* Chat messages */}
        <div className="flex-grow overflow-y-auto p-6">
          <div className="flex flex-col space-y-4 ml-10">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    m.role === "user" ? "bg-primary" : "bg-primary"
                  } rounded-lg p-4 text-white max-w-3xl`}
                >
                  {m.role === "user" ? "User: " : "AI: "}
                  <Markdown>{m.content}</Markdown>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="container mx-auto max-w-[700px] p-6"
        >
          <div className="flex rounded-lg border border-primary  overflow-hidden">
            <input
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
              className="flex-grow px-4 py-2 bg-transparent text-black focus-outline:none"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
