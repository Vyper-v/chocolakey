import { addDoc, collection } from "firebase/firestore";

export async function setPurchase(db, user, items) {
  const purchasesRef = collection(db, "purchases");
  await addDoc(purchasesRef, { user, items });
}
