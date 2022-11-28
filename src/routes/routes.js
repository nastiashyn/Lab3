import HomePage from '../pages/home-page'
import PalletePage from '../pages/palette-page'

export const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
    private: false,
  },
  {
    path: "palette/:id",
    element: <PalletePage />,
    private: false,
  }
]
