import { doc, getDoc } from "firebase/firestore";

export async function getItemPreview(db, idMeal) {
  const previewsRef = doc(db, "previews", idMeal);
  const ItemDoc = await getDoc(previewsRef);
  return ItemDoc.data();
}
