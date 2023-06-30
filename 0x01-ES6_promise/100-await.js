/**
 * Async / Await
 */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userDetails = {};

  try {
    userDetails.photo = await uploadPhoto();
    userDetails.user = await createUser();
  } catch (e) {
    userDetails.photo = null;
    userDetails.user = null;
  }

  return userDetails;
}
