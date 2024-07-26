import BreadCrumb from "@/common/BreadCrumb/BreadCrumb";
import CategoryCard from "@/common/CategoryCard";
import { ICategoryProps } from "@/common/interface";
import { Category } from "@/lib/http";

// Fetch categories from the API
const getCategories = async () => {
  const res = await Category.next({
    postfix: "?CategoryTypeID=1",
    next: {
      cache: "no-store",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

const CategoryPage = async () => {
  const categories: ICategoryProps[] = await getCategories();

  return (
    <>
      <BreadCrumb
        pageTitle="Category"
        links={[
          {
            url: "/",
            title: "Home",
          },
          {
            url: "/category",
            title: "Category",
          },
        ]}
      />
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-5">Category Page</h1>
        <div className="grid gap-5">
          {categories?.map((category, index) => (
            <CategoryCard key={category.ParentID} {...category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
