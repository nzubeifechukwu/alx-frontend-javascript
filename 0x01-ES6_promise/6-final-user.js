/**
 * Promise.allSettled()
 */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const promise = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return promise.then((result) => result.map((r) => ({
    status: r.status,
    value: r.status === 'fulfilled' ? r.value : String(r.reason),
  })));
}
