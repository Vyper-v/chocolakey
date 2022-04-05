import { collection, getDocs } from "firebase/firestore";

export async function getCategories(db) {
  const categoriesRef = await getDocs(collection(db, "categories"));
  return categoriesRef.docs;
}
