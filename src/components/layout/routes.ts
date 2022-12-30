type NavProps = {
  name: string
  path: string
}

export const nav_routes: NavProps[] = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Messages",
    path: "/messages"
  },
  {
    name: "Favorites",
    path: "/favorites"
  },
  {
    name: "Settings",
    path: "/settings"
  }
]
