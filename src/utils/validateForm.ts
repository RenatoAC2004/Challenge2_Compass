
export class ValidateForm {

  static validateText(name: string, value: string): string {
    if (!value) return `${name} is required`
    if (!/^[a-zA-Z\s]*$/.test(value))
      return `${name} should contain only letters`
    if (value.trim().length < 3)
      return `${name} should be at least 3 characters long`
    return ""
  }

  static validatePrice(price: string): string {
    if (!price) return "Price is required"
    if (!/^\d*\.?\d*$/.test(price))
      return "Price should contain only numbers"
    if (parseFloat(price) < 0)
      return "Price cannot be negative"
    return ""
  }

  static validateDiscount(discount: string): string {
    if (!discount.length)
      return "Discount is required"
    if (!/^\d+$/.test(discount))
      return "Discount should contain only numbers"
    if (parseFloat(discount) < 0)
      return "Discount cannot be negative"
    return ""
  }

  static validateFeatures(features: string): string {
    if (!features)
      return "Features are required"
    if (features.trim().length < 10)
      return "Features should be at least 10 characters long."
    return ""
  }

  static validateDescription(description: string): string {
    if (!description)
      return "Description is required"
    if (description.trim().length < 10)
      return "Description should be at least 10 characters long."
    return ""
  }
}