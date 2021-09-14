import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let atIndex = email.indexOf('@');
  let answer = email.substr(atIndex + 1);
  if(answer.substring(1).indexOf('@') !== -1){
    atIndex = answer.substring(1).indexOf('@');
    answer = answer.substring(1).substr(atIndex + 1);
  }
  return answer;
}
