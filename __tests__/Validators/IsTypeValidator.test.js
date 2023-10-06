import { IsTypeValidator } from '../../src/Validators/IsTypeValidator'
import { ValidatorError } from '../../src/Validators/Error'
import { faker } from '../helpers'

const filePath = 'src/Validators/IsTypeValidator.js'

describe(`class IsTypeValidator (${filePath})`, () => {
  describe('(method) validate', () => {
    it('Should throw a ValidatorError when the data is not the required type', () => {
      // Arrange
      const data = faker.number.bigInt()
      const validator = new IsTypeValidator('string')
      const expected = ValidatorError

      // Act
      const result = () => validator.validate(data)

      // Assert
      expect(result).toThrow(expected)
    })
    it('Should not throw a ValidatorError when the data is of the required type', () => {
      // Arrange
      const data = faker.airline.airline()
      const validator = new IsTypeValidator('object')

      // Act
      const result = () => validator.validate(data)

      // Assert
      expect(result).not.toThrow()
    })
  })
})
