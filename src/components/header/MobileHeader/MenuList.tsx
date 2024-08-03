import { MdProductionQuantityLimits, MdCategory, MdPostAdd ,MdContacts} from "react-icons/md";
import { GrServices, GrBlog, GrProductHunt } from "react-icons/gr";

const MenuItems = [
  {
    id: "1",
    name: "Product",
    href: "/product",
    icon: MdProductionQuantityLimits,
  },
  {
    id: "2",
    name: "Contact",
    href: "/contact",
    icon: MdContacts,
  },
  {
    id: "3",
    name: "Services",
    href: "/services",
    icon: GrServices,
  },
  {
    id: "4",
    name: "Blog",
    href: "/blogs",
    icon: GrBlog,
  },
  {
    id: "5",
    name: "Category",
    href: "/category",
    icon: MdCategory,
  },
  {
    id: "6",
    name: "Blog Post",
    href: "/blogpost",
    icon: MdPostAdd,
  },
  {
    id: "7",
    name: "Products List",
    href: "/productlist",
    icon: GrProductHunt,
  }
];

export default MenuItems;
