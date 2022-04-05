import { collection, setDoc } from "firebase/firestore";

export async function setPurchase(db, user, items) {
  const purchasesRef = collection(db, "purchases");
  await setDoc(purchasesRef, {user, items});
}
