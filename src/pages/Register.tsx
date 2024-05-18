import { ChangeEvent, useState } from "react"

export const Register = () => {
  const [selectedRadio, setSelectedRadio] = useState("Indoor")

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value)
  }
  return (
    <section className="h-full bg-mainBackground pt-[5.5rem] overflow-hidden">
      <div className="lg:flex lg:pl-12">
        <form action="" className="flex flex-col p-6 font-inter lg:pr-0 lg:p-12 lg:w-1/2">
          <p className="font-inter font-semibold text-2xl border-b border-inputBorders pb-4 mb-9">
            Plant registration
          </p>
          <label htmlFor="plantName" className="font-medium text-lg pb-4">
            Plant name
          </label>
          <input
            type="text"
            name="plantName"
            id="plantName"
            placeholder="Echinocereus Cactus"
            className="py-3 px-4 rounded border-[1.5px] border-inputBorders mb-6 bg-transparent"
          />

          <label htmlFor="plantSubtitle" className="font-medium text-lg pb-4">
            Plant subtitle
          </label>
          <input
            type="text"
            name="plantSubtitle"
            id="plantSubtitle"
            placeholder="A majestic addition to your plant collection"
            className="py-3 px-4 rounded border-[1.5px] border-inputBorders overflow-ellipsis mb-9 bg-transparent"
          />

          <label htmlFor="plantType" className="font-medium text-lg pb-4">
            Plant type
          </label>
          <input
            type="text"
            name="plantType"
            id="plantType"
            placeholder="Cactus"
            className="py-3 px-4 rounded border-[1.5px] border-inputBorders overflow-ellipsis mb-9 bg-transparent"
          />
          <div className="flex justify-center items-end gap-x-3 mb-9">
            <div className="flex flex-col w-1/2">
              <label htmlFor="price" className="font-medium text-lg pb-4">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="$139.99"
                className="py-3 px-4 rounded border-[1.5px] border-inputBorders overflow-ellipsis bg-transparent"
              />
            </div>

            <div className="flex flex-col w-1/2 overflow-auto">
              <label
                htmlFor="discountPercentage"
                className="whitespace font-medium text-lg pb-4"
              >
                Discount percentage
              </label>
              <input
                type="number"
                name="discountPercentage"
                id="discountPercentage"
                placeholder="20%"
                className="py-3 px-4 rounded border-[1.5px] border-inputBorders bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col mb-9">
            <p className="font-semibold text-lg pb-4">Label:</p>
            <div className="flex gap-x-5">
              <div className="flex items-center">
                <label htmlFor="radioLabels1" className="flex items-center">
                  <input
                    type="radio"
                    name="radioLabels"
                    id="radioLabels1"
                    value="Indoor"
                    checked={selectedRadio === "Indoor"}
                    onChange={handleRadioChange}
                    className="hidden peer"
                  />
                  <div className="w-4 h-4 rounded-full border-2 border-inputBorders transition-all peer-checked:border-moss flex items-center justify-center">
                    {selectedRadio === "Indoor" && (
                      <div className="w-2 h-2 rounded-full bg-moss"></div>
                    )}
                  </div>
                  <span
                    className={`ml-2 font-medium ${
                      selectedRadio !== "Indoor" ? "text-inputBorders" : ""
                    }`}
                  >
                    Indoor
                  </span>
                </label>
              </div>
              <div className="flex items-center">
                <label htmlFor="radioLabels2" className="flex items-center">
                  <input
                    type="radio"
                    name="radioLabels"
                    id="radioLabels2"
                    value="Outdoor"
                    checked={selectedRadio === "Outdoor"}
                    onChange={handleRadioChange}
                    className="hidden peer"
                  />
                  <div className="w-4 h-4 rounded-full border-2 border-inputBorders transition-all peer-checked:border-moss flex items-center justify-center">
                    {selectedRadio === "Outdoor" && (
                      <div className="w-2 h-2 rounded-full bg-moss"></div>
                    )}
                  </div>
                  <span
                    className={`ml-2 font-medium ${
                      selectedRadio !== "Outdoor" ? "text-inputBorders" : ""
                    }`}
                  >
                    Outdoor
                  </span>
                </label>
              </div>
            </div>
          </div>

          <label htmlFor="features" className="font-medium text-lg pb-4">
            Features
          </label>
          <textarea
            name="features"
            id="features"
            placeholder="Species: Echinocereus..."
            className="py-3 px-4 h-32 rounded border-[1.5px] border-inputBorders overflow-ellipsis resize-none mb-4 bg-transparent"
          ></textarea>

          <label htmlFor="description" className="font-medium text-lg pb-4">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Ladyfinger cactus..."
            className="py-3 px-4 h-32 rounded border-[1.5px] border-inputBorders overflow-ellipsis resize-none mb-16 bg-transparent"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3.5 bg-moss rounded text-white font-bold transition-all hover:opacity-75"
          >
            Register
          </button>
        </form>

        <img
          src="src\assets\rightPlant.png"
          alt="right plant"
          className="hidden lg:block grayscale"
        />
      </div>
    </section>
  )
}
