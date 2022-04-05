import { collection, getDocs, query, where } from "firebase/firestore";

export async function getCategory(db, categoryId) {
  const previewsRef = collection(db, "previews");
  const q = query(previewsRef, where("strCategory", "==", categoryId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ idMeal: doc.id, ...doc.data() }));
}
