import { ChangeEvent, FormEvent, useState } from "react"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import { FaRegCheckCircle } from "react-icons/fa"
import { useMutation, useQuery } from "react-query"
import { ProductType, saveProduct } from "../services/saveProduct"
import { getAllProducts } from "../services/getAllProducts"
import { Loading } from "../components/Loading"

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    subtitle: "",
    type: "",
    price: "",
    discountPercentage: "",
    features: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    subtitle: "",
    type: "",
    price: "",
    discountPercentage: "",
    features: "",
    description: "",
  })

  const [selectedRadio, setSelectedRadio] = useState("Indoor")
  const [showModal, setShowModal] = useState(false)

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { mutate, isLoading } = useMutation(saveProduct)
  const { data } = useQuery<ProductType[]>(['register'], getAllProducts)
  const dataLength = data ? data.length + 1 : 0;

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value)
  }

  const validate = () => {
    const newErrors: any = {}

    const validateText = (name: string, value: string) => {
      if (!value) return `${name} is required`
      if (!/^[a-zA-Z\s]*$/.test(value))
        return `${name} should contain only letters`
      if (value.length < 3)
        return `${name} should be at least 3 characters long`
      return ""
    }

    newErrors.name = validateText("Plant name", formData.name)
    newErrors.subtitle = validateText("Plant subtitle", formData.subtitle)
    newErrors.type = validateText("Plant type", formData.type)

    if (!formData.price) newErrors.price = "Price is required"
    if (!/^\d*\.?\d*$/.test(formData.price))
      newErrors.price = "Price should contain only numbers"
    if (parseFloat(formData.price) < 0)
      newErrors.price = "Price cannot be negative"

    if (!formData.discountPercentage)
      newErrors.discountPercentage = "Discount is required"
    if (!/^\d*\.?\d*$/.test(formData.discountPercentage))
      newErrors.discountPercentage =
        "Discount should contain only numbers"
    if (parseFloat(formData.discountPercentage) < 0)
      newErrors.discountPercentage = "Discount cannot be negative"

    if (!formData.features) newErrors.features = "Features are required"
    if (formData.features.length < 10)
      newErrors.features = "Features should be at least 10 characters long."

    if (!formData.description)
      newErrors.description = "Description is required"
    if (formData.description.length < 10)
      newErrors.description = "Description should be at least 10 characters long."

    setErrors(newErrors)
    return Object.keys(newErrors).every(key => !newErrors[key])
  }

  const closeModal = () => {
    setShowModal(false)
}

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validate()) {
      setShowModal(true)
    }
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
            onSubmit={handleSubmit}
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
              value={formData.name}
              onChange={handleInputChange}
              className={`py-3 px-4 rounded border-[1.5px] ${
                errors.name ? "border-red-500" : "border-inputBorders"
              } mb-1 bg-transparent`}
            />
            {errors.name && <p className="text-red-500 mb-6">{errors.name}</p>}

            <label htmlFor="subtitle" className="font-medium text-lg pb-4">
              Plant subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              placeholder="A majestic addition to your plant collection"
              value={formData.subtitle}
              onChange={handleInputChange}
              className={`py-3 px-4 rounded border-[1.5px] ${
                errors.subtitle ? "border-red-500" : "border-inputBorders"
              } mb-1 bg-transparent`}
            />
            {errors.subtitle && (
              <p className="text-red-500 mb-6">{errors.subtitle}</p>
            )}

            <label htmlFor="type" className="font-medium text-lg pb-4">
              Plant type
            </label>
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Cactus"
              value={formData.type}
              onChange={handleInputChange}
              className={`py-3 px-4 rounded border-[1.5px] ${
                errors.type ? "border-red-500" : "border-inputBorders"
              } mb-1 bg-transparent`}
            />
            {errors.type && <p className="text-red-500 mb-6">{errors.type}</p>}

            <div className="flex justify-center items-start gap-x-3 mb-9">
              <div className="flex flex-col w-1/2">
                <label htmlFor="price" className="font-medium text-lg pb-4 min-h-[4.5rem] sm:min-h-0">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="$139.99"
                  value={formData.price}
                  onChange={handleInputChange}
                  className={`py-3 px-4 rounded border-[1.5px] ${
                    errors.price ? "border-red-500" : "border-inputBorders"
                  } bg-transparent`}
                />
                {errors.price && <p className="text-red-500">{errors.price}</p>}
                {errors.discountPercentage && (
                  <p className="invisible">Discount is required</p>
                )}
              </div>

              <div className="flex flex-col w-1/2 overflow-auto">
                <label
                  htmlFor="discountPercentage"
                  className="whitespace font-medium text-lg pb-4 min-h-[4.5rem] sm:min-h-0"
                >
                  Discount percentage
                </label>
                <input
                  type="number"
                  name="discountPercentage"
                  id="discountPercentage"
                  placeholder="20%"
                  value={formData.discountPercentage}
                  onChange={handleInputChange}
                  className={`py-3 px-4 rounded border-[1.5px] ${
                    errors.discountPercentage
                      ? "border-red-500"
                      : "border-inputBorders"
                  } bg-transparent`}
                />
                {errors.discountPercentage && (
                  <p className="text-red-500">{errors.discountPercentage}</p>
                )}
                {errors.price && <p className="invisible">Price is required</p>}
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
              value={formData.features}
              onChange={handleInputChange}
              className={`py-3 px-4 h-32 rounded border-[1.5px] ${
                errors.features ? "border-red-500" : "border-inputBorders"
              } resize-none mb-1 bg-transparent`}
            ></textarea>
            {errors.features && (
              <p className="text-red-500 mb-4">{errors.features}</p>
            )}

            <label htmlFor="description" className="font-medium text-lg pb-4">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Ladyfinger cactus..."
              value={formData.description}
              onChange={handleInputChange}
              className={`py-3 px-4 h-32 rounded border-[1.5px] ${
                errors.description ? "border-red-500" : "border-inputBorders"
              } resize-none mb-1 bg-transparent`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}

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
            src="src\assets\rightPlant.png"
            alt="right plant"
            className="hidden lg:block grayscale"
          />

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-primaryAvacado bg-opacity-50 z-50">
              <div className="flex flex-col bg-white p-8 rounded-lg h-3/5">
                <p className="text-5xl font-pacifico font-bold text-center mb-4">
                  Success!
                </p>
                <p className="text-lg font-raleway">
                  Your plant has been registered successfully.
                </p>
                <div className="h-full flex items-center justify-center">
                  <FaRegCheckCircle className="w-full h-1/2 text-primaryAvacado" />
                </div>
                <button
                  onClick={closeModal}
                  className="mt-auto px-4 py-4 bg-moss text-white rounded-lg font-semibold hover:bg-opacity-80"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
