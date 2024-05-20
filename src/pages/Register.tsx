import { ChangeEvent, FormEvent, useState } from "react"
import { FaRegCheckCircle } from "react-icons/fa"
import { useMutation, useQuery } from "react-query"
import { ProductType, saveProduct } from "../services/saveProduct"
import { getAllProducts } from "../services/getAllProducts"
import { Loading } from "../components/Loading"
import { ValidateForm } from "../utils/validateForm"
import { NumericFormat } from "react-number-format"

interface Input {
  name: string,
  subtitle: string,
  type: string,
  price: string,
  discountPercentage: string,
  features: string,
  description: string,
}

export const Register = () => {
  
  const [formData, setFormData] = useState<Input>({
    name: "",
    subtitle: "",
    type: "",
    price: "",
    discountPercentage: "",
    features: "",
    description: "",
  })

  const [errors, setErrors] = useState<Input>({
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
  const { mutate, isLoading } = useMutation(saveProduct, {
    onSuccess: () => {
      setShowModal(true)
      setFormData({
        name: "",
        subtitle: "",
        type: "",
        price: "",
        discountPercentage: "",
        features: "",
        description: "",
      })
    }
  })
  const { data } = useQuery<ProductType[]>(['register'], getAllProducts)
  const dataLength = data ? data.length + 1 : 0;

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value)
  }



  const validate = () => {
    const newErrors: Input = {
      name: ValidateForm.validateText("Plant name", formData.name),
      subtitle: ValidateForm.validateText("Plant subtitle", formData.subtitle),
      type: ValidateForm.validateText("Plant type", formData.type),
      price: ValidateForm.validatePrice(formData.price),
      discountPercentage: ValidateForm.validateDiscount(formData.discountPercentage),
      features: ValidateForm.validateFeatures(formData.features),
      description: ValidateForm.validateDescription(formData.description)
    }
    setErrors(newErrors)
    return Object.values(newErrors).every(value => !value.trim());
  }

  const handlePriceChange = (values: any) => {
    const { value } = values
    setFormData(prevData => ({
      ...prevData,
      price: value,
    }))
  }

  const handleDiscountChange = (values: any) => {
    const { value } = values
    setFormData(prevData => ({
      ...prevData,
      discountPercentage: value,
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()


    if (!isLoading && validate()) {
      
      const { name, subtitle, label, type, price, discountPercentage, features, description } = ({ ...formData, label: selectedRadio });
      const parsedDiscountPercentage = parseFloat(discountPercentage)
      const isInSale = !!parsedDiscountPercentage
      const id = dataLength.toString()

      mutate({ 
        id,
        name, 
        subtitle, 
        label: [label, type],
        price: parseFloat(price), 
        isInSale,
        discountPercentage: parsedDiscountPercentage, 
        features, 
        description,
        imgUrl: "../../src/assets/adams-rib.svg"
      })

    }
  }

  return (
      <section className="h-full bg-mainBackground pt-[5.5rem] overflow-hidden">
        <div className="lg:flex lg:pl-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-6 font-inter lg:pr-0 lg:p-12 lg:w-1/2"
          >
            <p className="font-inter font-semibold text-2xl border-b border-mainGray pb-4 mb-9">
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
                errors.name ? "border-red-500" : "border-mainGray"
              } mb-1 bg-transparent`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <label htmlFor="subtitle" className="font-medium text-lg pb-4 mt-6">
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
                errors.subtitle ? "border-red-500" : "border-mainGray"
              } mb-1 bg-transparent`}
            />
            {errors.subtitle && (
              <p className="text-red-500">{errors.subtitle}</p>
            )}

            <label htmlFor="type" className="font-medium text-lg pb-4 mt-6">
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
                errors.type ? "border-red-500" : "border-mainGray"
              } mb-1 bg-transparent`}
            />
            {errors.type && <p className="text-red-500">{errors.type}</p>}

            <div className="flex justify-center items-start gap-x-3 mt-6">
              <div className="flex flex-col w-1/2 overflow-auto">
                <label
                  htmlFor="price"
                  className="whitespace font-medium text-lg pb-4 min-h-[4.5rem] sm:min-h-0"
                >
                  Price
                </label>
                <NumericFormat
                  name="price"
                  id="price"
                  placeholder="$139.99"
                  value={formData.price}
                  onValueChange={handlePriceChange}
                  prefix="$"
                  className={`py-3 px-4 rounded border-[1.5px] ${
                    errors.price
                      ? "border-red-500"
                      : "border-mainGray"
                  } bg-transparent`}
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price}</p>
                )}
              </div>
              

              <div className="flex flex-col w-1/2 overflow-auto">
                <label
                  htmlFor="discountPercentage"
                  className="whitespace font-medium text-lg pb-4 min-h-[4.5rem] sm:min-h-0"
                >
                  Discount percentage
                </label>
                <NumericFormat
                  name="discountPercentage"
                  id="discountPercentage"
                  placeholder="20%"
                  value={formData.discountPercentage}
                  onValueChange={handleDiscountChange}
                  suffix="%"
                  className={`py-3 px-4 rounded border-[1.5px] ${
                    errors.discountPercentage
                      ? "border-red-500"
                      : "border-mainGray"
                  } bg-transparent`}
                />
                {errors.discountPercentage && (
                  <p className="text-red-500">{errors.discountPercentage}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col my-9">
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
                    <div className="w-4 h-4 rounded-full border-2 border-mainGray transition-all peer-checked:border-moss flex items-center justify-center">
                      {selectedRadio === "Indoor" && (
                        <div className="w-2 h-2 rounded-full bg-moss"></div>
                      )}
                    </div>
                    <span
                      className={`ml-2 font-medium ${
                        selectedRadio !== "Indoor" ? "text-mainGray" : ""
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
                    <div className="w-4 h-4 rounded-full border-2 border-mainGray transition-all peer-checked:border-moss flex items-center justify-center">
                      {selectedRadio === "Outdoor" && (
                        <div className="w-2 h-2 rounded-full bg-moss"></div>
                      )}
                    </div>
                    <span
                      className={`ml-2 font-medium ${
                        selectedRadio !== "Outdoor" ? "text-mainGray" : ""
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
                errors.features ? "border-red-500" : "border-mainGray"
              } resize-none mb-1 bg-transparent`}
            ></textarea>
            {errors.features && (
              <p className="text-red-500">{errors.features}</p>
            )}

            <label htmlFor="description" className="font-medium text-lg pb-4 mt-4">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Ladyfinger cactus..."
              value={formData.description}
              onChange={handleInputChange}
              className={`py-3 px-4 h-32 rounded border-[1.5px] ${
                errors.description ? "border-red-500" : "border-mainGray"
              } resize-none mb-1 bg-transparent`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}

            <button
              type="submit"
              className={`w-full py-3.5 bg-moss rounded text-white font-bold transition-all hover:opacity-75 flex items-center justify-center mt-16 ${
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
            <div className="fixed inset-0 flex items-center justify-center bg-primaryAvacado bg-opacity-50 z-50 p-4">
              <div className="flex flex-col bg-white p-8 rounded-lg h-fit">
                <p className="text-5xl font-pacifico font-bold text-center mb-4">
                  Success!
                </p>
                <p className="text-lg font-raleway">
                  Your plant has been registered successfully.
                </p>
                <div className="h-full flex items-center justify-center">
                  <FaRegCheckCircle className="w-1/2 h-fit py-12 text-primaryAvacado" />
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-4 bg-moss text-white rounded-lg font-semibold hover:bg-opacity-80"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
  )
}
