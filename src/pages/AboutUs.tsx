import { FaLinkedin } from "react-icons/fa"

const AboutUs = () => {
  return (
    <>
      <div className="bg-mainBackground select-none min-h-screen w-full pt-16 flex flex-col">
        <h1 className="text-7xl flex justify-center font-garamond font-bold text-moss mt-5">
          About Us
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-20 mb-20 font-bold font-inter mx-14">
          {[
            {
              name: "Samuel Monsalves",
              imgSrc: "/src/assets/samuel.jpeg",
              github: "https://github.com/SamuelMonsalvesMoreira",
              linkedin: "https://www.linkedin.com/in/samuel-monsalves-moreira/",
            },
            {
              name: "Clara Ricioni",
              imgSrc: "/src/assets/clara.jpeg",
              github: "https://github.com/clararicioni",
              linkedin: "https://www.linkedin.com/in/clararicioni/",
            },
            {
              name: "Ana Beatriz Ramos",
              imgSrc: "/src/assets/anab.jpeg",
              github: "https://github.com/AnaBeatriz-R",
              linkedin: "https://www.linkedin.com/in/ana-beatriz-r-91443222a/",
            },
            {
              name: "Renato Alexandre",
              imgSrc: "/src/assets/renato.jpeg",
              github: "https://github.com/RenatoAC2004",
              linkedin: "https://www.linkedin.com/in/renato-c-b0798a205/",
            },
            {
              name: "Frederick Rost",
              imgSrc: "/src/assets/Fred.png",
              github: "https://github.com/rostfred",
            },
          ].map((person, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center bg-white border-2 rounded-xl p-6 shadow-lg w-80">
                <img
                  src={person.imgSrc}
                  alt={person.name}
                  className="w-32 h-32 object-cover transition-transform hover:scale-125 rounded-full shadow-xl mb-3 border-2 border-moss"
                />
                <p className="text-center text-xl">{person.name}</p>
                <div className="flex gap-x-4">
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:grayscale transition-transform hover:scale-150 mt-2"
                  >
                    <img
                      src="/src/assets/icon/github.svg"
                      alt="GitHub"
                      className="w-8 h-8"
                    />
                  </a>
                  {person.linkedin ? (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:grayscale transition-transform hover:scale-150 mt-2"
                    >
                      <FaLinkedin className="w-8 h-8"/>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="flex justify-center text-center  font-inter text-2xl mx-10 mb-20">
          Project carried out to fulfill Challenge 2 proposed by Compass UOL,
          where we developed an interactive page for displaying and registering
          plants.
        </h1>
      </div>
    </>
  )
}

export default AboutUs
