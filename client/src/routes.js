import { Auth } from "./pages/Auth"
import { PhoneBook } from "./pages/PhoneBook"
import { LOGIN_ROUTE, PHONE_BOOK_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
  {
    path: PHONE_BOOK_ROUTE,
    Component: PhoneBook
  }
]

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  }
]