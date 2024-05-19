
export const Error = () => {
    return (
      <div className="flex justify-between items-center p-10 bg-errorBackground shadow-md rounded-md">
            <div className="flex flex-col start-0">
                <img className="object-cover rounded-md grayscale"  src="/src/assets/image_flower_1.webp" alt="img error" />
            </div>
            <div className="text-center ">
                <h1 className="font-garamond font-bold text-[54px] text-black" >We are imPlantating new features</h1>
                <p className="font-raleway  text-[24px] text-xl leading-relaxed  text-black py-4">404 Page Not Found!"</p>
                <a className="font-bold font-garamond inline-flex px-4 py-2 bg-black text-white rounded-md hover:bg-green-400"  href="">Return to Home Page
                
                </a>
                
            </div>








      </div>
    )
  }
  