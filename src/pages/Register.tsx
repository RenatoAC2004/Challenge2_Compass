import { ChangeEvent, useState } from "react"

export const Register = () => {
  const [selectedRadio, setSelectedRadio] = useState("Indoor")

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value)
  }
  return (
    <section className="h-screen bg-BackgroundAboutUs pt-[5.5rem]">
      <div className="">
        <form action="" className="flex flex-col p-6 font-inter">
          <p className="font-inter font-semibold text-2xl border-b border-inputBorders pb-4">
            Plant registration
          </p>
          <label htmlFor="plantName" className="font-medium text-lg">
            Plant name
          </label>
          <input
            type="text"
            name="plantName"
            id="plantName"
            placeholder="Echinocereus Cactus"
            className="py-3 px-4 rounded-md border-[1.5px] border-inputBorders"
          />

          <label htmlFor="plantSubtitle" className="font-medium text-lg">
            Plant subtitle
          </label>
          <input
            type="text"
            name="plantSubtitle"
            id="plantSubtitle"
            placeholder="A majestic addition to your plant collection"
            className="py-3 px-4 rounded-md border-[1.5px] border-inputBorders overflow-ellipsis"
          />

          <label htmlFor="plantType" className="font-medium text-lg">
            Plant type
          </label>
          <input
            type="text"
            name="plantType"
            id="plantType"
            placeholder="Cactus"
            className="py-3 px-4 rounded-md border-[1.5px] border-inputBorders overflow-ellipsis"
          />
          <div className="flex gap-x-3">
            <div className="flex flex-col w-1/2">
              <label htmlFor="price" className="font-medium text-lg">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="$139.99"
                className="py-3 px-4 rounded-md border-[1.5px] border-inputBorders overflow-ellipsis"
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label
                htmlFor="discountPercentage"
                className="whitespace-nowrap font-medium text-lg "
              >
                Discount percentage
              </label>
              <input
                type="number"
                name="discountPercentage"
                id="discountPercentage"
                placeholder="20%"
                className="py-3 px-4 rounded-md border-[1.5px] border-inputBorders overflow-ellipsis"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <p className="font-semibold text-lg">Label:</p>
            <div className="flex gap-x-5 mt-2">
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
                  <div className="w-4 h-4 rounded-full border-2 border-inputBorders peer-checked:border-moss flex items-center justify-center">
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
                  <div className="w-4 h-4 rounded-full border-2 border-inputBorders peer-checked:border-moss flex items-center justify-center">
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
        </form>
      </div>
    </section>
  )
}
