import { getAuth } from '@firebase/auth';
import { doc, getDoc } from '@firebase/firestore';

import { db } from '../firebase';

const getFriendData = async (users: any[]) => {
  const { currentUser } = getAuth();
  const friendId = users?.filter((user) => user !== currentUser?.uid);
  const docRef = doc(db, 'users', friendId[0]);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};

export default getFriendData;
