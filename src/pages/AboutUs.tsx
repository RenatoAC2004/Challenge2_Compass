import '../index.css'

const AboutUs = () => {
  return (
    <div className="select-none bg-BackgroundAboutUs">
      <h1 className="text-7xl flex justify-center font-garamond font-bold text-moss mt-5">About Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center mt-20 mb-20 font-bold font-inter m-10">
        {[
          { name: 'Samuel Monsalves', imgSrc: '../../img/samuel.jpeg', github: 'https://github.com/SamuelMonsalvesMoreira' },
          { name: 'Clara Ricioni', imgSrc: '../../img/clara.jpeg', github: 'https://github.com/clararicioni' },
          { name: 'Ana Beatriz Ramos', imgSrc: '../../img/anab.jpeg', github: 'https://github.com/AnaBeatriz-R' },
          { name: 'Renato Alexandre', imgSrc: '../../img/renato.jpeg', github: 'https://github.com/RenatoAC2004' },
          { name: 'Frederick Santos', imgSrc: '../../img/renato.jpeg', github: 'https://github.com/rostfred' },
        ].map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={person.imgSrc} width="210" height="10" className="transition-transform hover:scale-125 rounded-lg shadow-xl mx-4 mb-3"/>
            <section className="text-center">{person.name}</section>
            <a href={person.github} target="_blank" className="hover:grayscale transition-transform hover:scale-125">
              <img src="../../img/github.png" className="w-8 h-8 mt-2"/>
            </a>
          </div>
        ))}
      </div>

      <h1 className="flex justify-center text-center font-bold font-inter text-2xl mb-16">
        Project carried out to fulfill Challenge 2 proposed by Compass UOL, where we developed an interactive page for displaying and registering plants.
      </h1>
    </div>
  )
}

export default AboutUs;
