import { doc, getDoc } from "firebase/firestore";

export async function getItemDetails(db, idMeal) {
  const detailsRef = doc(db, "details", idMeal);
  const ItemDoc = await getDoc(detailsRef);
  return ItemDoc.data();
}
