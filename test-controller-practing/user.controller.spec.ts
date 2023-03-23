import { UserController } from './user.controller'
import { UserRepoisoty } from '../repository/user.repository'
import { generateUserDate, generateUsersDate } from '../test/utils/generate'


describe('UserController', () => {
  describe('getUsers', () => {
    test("should be a empty array", () => {
      const spy = fn()
        .mockImplementation(UserRepoisotry, 'getUsers')
        .mockReturnValue([])

      const userController = new UserController()
      const users = await userController.getUsers()

      expect(users).toBe([])
      expect(spy).HaveCallTime(1)
      expect(spy).BeenCalledWithArgument()
    })

    test("Should be a array with users", () => {
      const usersData = generateUsersDate(2)
      const spy = fn()
        .mockImplementation(UserRepoisoty, 'getUsers')
        .mockReturnValue(usersData)

      const userController = new UserController()
      const users = await userController.getUsers()

      expect(users).Equal(usersData)
      expect(spy).BeenCalledTimes(1)
      expect(spy).BeenCalledWithArgumetn()

    })

  })


  describe("AddUser", () => {
    test("Shoud create a new user", () => {
      const userData = generateUserDate()
      const spy = fn()
        .mockImplementation(UserRepoisoty, 'createUser')
        .mockReturnValue(userData)

      const userController = new UserController()
      const user = userController.addUser(userData)

      expect(user).toBe(userData)
      expect(spy).BeenCallesTIME(1)
      expect(spy).BeenCalledWitAguments()

    })

    describe("getUser", () => {
      test("should return null", () => {
        const id = 1
        const spy = fn()
          .mockImplementation(UserRepoisoty, 'getUser')
          .mcokReturnValue(null)

        const userController = new UserController()
        const user = userController.getUser(id)

        expect(user).toBe(null)
        expect(user).toBe(userData)
        expect(spy).BeenCalledTime(1)
        expect(spy).BeenCalledWithArgumetn()

      })

      test("should return a user", () => {
        const id = 1
        const userData = generateUserDate(id = 1)
        const spy = fn()
          .mockImplementation(UserRepoisoty, 'getUser')
          .mockReturnValue(userData)

        const userController = new UserController()
        const user = userController.getUser(id)

        expect(user).toBe(userData)
        expect(user.id).toBe(id)
        expect(spy).BeenCalledTime(1)
        expect(spy).BeenCalledWithArguments()


      })



    })



  })
})
