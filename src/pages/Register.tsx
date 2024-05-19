import { ChangeEvent, FormEvent, useState } from "react"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useMutation, useQuery } from "react-query"
import { ProductType, saveProduct } from "../services/saveProduct"
import { getAllProducts } from "../services/getAllProducts"
import { Loading } from "../components/Loading"

export const Register = () => {
  const [selectedRadio, setSelectedRadio] = useState("Indoor")
  
  const [formData, setFormData] = useState({
    name: "",
    subtitle: "",
    type: "",
    price: "",
    discountPercentage: "",
    features: "",
    description: "",
  });

  const { mutate, isLoading } = useMutation(saveProduct)
  const { data } = useQuery<ProductType[]>(['register'], getAllProducts)
  const dataLength = data ? data.length + 1 : 0;

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value)
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { name, subtitle, label, type, price, discountPercentage, features, description } = ({ ...formData, label: selectedRadio });
    const parsedPrice = parseFloat(price)
    const parsedDiscountPercentage = parseFloat(discountPercentage)
    const isInSale = (parsedDiscountPercentage === 0 || Number.isNaN(parsedDiscountPercentage) ? false : true)
    const imgUrl = "../../src/assets/adams-rib.svg"
    const id = dataLength.toString()

    mutate({ 
      id,
      name, 
      subtitle, 
      label: [label, type],
      price: parsedPrice, 
      isInSale,
      discountPercentage: parsedDiscountPercentage, 
      features, 
      description,
      imgUrl
    })
  }

  return (
    <>
      <Navbar />
      <section className="h-full bg-mainBackground pt-[5.5rem] overflow-hidden">
        <div className="lg:flex lg:pl-12">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col p-6 font-inter lg:pr-0 lg:p-12 lg:w-1/2"
          >
            <p className="font-inter font-semibold text-2xl border-b border-inputBorders pb-4 mb-9">
              Plant registration
            </p>
            <label htmlFor="name" className="font-medium text-lg pb-4">
              Plant name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Echinocereus Cactus"
              className="py-3 px-4 rounded border-[1.5px] border-inputBorders mb-6 bg-transparent"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="subtitle" className="font-medium text-lg pb-4">
              Plant subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              placeholder="A majestic addition to your plant collection"
              className="py-3 px-4 rounded border-[1.5px] border-inputBorders overflow-ellipsis mb-9 bg-transparent"
              value={formData.subtitle}
              onChange={handleInputChange}
            />
            <label htmlFor="type" className="font-medium text-lg pb-4">
              Plant type
            </label>
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Cactus"
              className="py-3 px-4 rounded border-[1.5px] border-inputBorders overflow-ellipsis mb-9 bg-transparent"
              value={formData.type}
              onChange={handleInputChange}
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
                  value={formData.price}
                  onChange={handleInputChange}
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
                  value={formData.discountPercentage}
                  onChange={handleInputChange}
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
              value={formData.features}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="description" className="font-medium text-lg pb-4">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Ladyfinger cactus..."
              className="py-3 px-4 h-32 rounded border-[1.5px] border-inputBorders overflow-ellipsis resize-none mb-16 bg-transparent"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <button
              type="submit"
              className={`w-full py-3.5 bg-moss rounded text-white font-bold transition-all hover:opacity-75 flex items-center justify-center ${
                isLoading ? 'cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? <span className="flex gap-x-2">Loading... <Loading size={24} /></span> : "Register"}
            </button>
          </form>
          <img
            src="src/assets/rightPlant.png"
            alt="right plant"
            className="hidden lg:block grayscale"
          />
        </div>
      </section>
      <Footer />
    </>
  )
}
