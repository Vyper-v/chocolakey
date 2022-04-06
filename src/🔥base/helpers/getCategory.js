import { collection, getDocs, limit, query, where } from "firebase/firestore";

export async function getCategory(db, categoryId) {
  const previewsRef = collection(db, "previews");
  const q = query(previewsRef, where("strCategory", "==", categoryId),limit(20));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ idMeal: doc.id, ...doc.data() }));
}
