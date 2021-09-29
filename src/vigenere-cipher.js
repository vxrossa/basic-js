import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type){
    type === false ? this.type = 'reverse' : this.type = 'direct';
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  encrypt(phrase,key) {
    if(!phrase || !key || typeof(phrase) == undefined){
      throw new Error('Incorrect arguments!');
    }

    let alSpl = this.alphabet.split('');
    let phraseSplit = phrase.toUpperCase().split('');
    let keyExtended = key.repeat(Math.ceil(phrase.length / key.length)).substr(0,phrase.length).toUpperCase().split('');
    let phraseEncrypt = [];

    for(let i = 0; i < phraseSplit.length; i++){
      if(phraseSplit[i] == ' '){
        keyExtended.splice(i,0,' ')
      }
    }

    for(let i = 0; i < phraseSplit.length; i++){
      if(alSpl.indexOf(phraseSplit[i]) == -1){
        phraseEncrypt.push(phraseSplit[i]);
      } else {
        if(alSpl.indexOf(phraseSplit[i]) + alSpl.indexOf(keyExtended[i]) < 26){
          phraseEncrypt.push(alSpl[alSpl.indexOf(phraseSplit[i]) + alSpl.indexOf(keyExtended[i])]);
        } else if (alSpl.indexOf(phraseSplit[i]) + alSpl.indexOf(keyExtended[i]) >= 26) {
          phraseEncrypt.push(alSpl[alSpl.indexOf(phraseSplit[i]) + alSpl.indexOf(keyExtended[i]) - 26]);
        }
      }
      
    }
    if(this.type == 'direct'){
      return phraseEncrypt.join('');
    } else {
      return phraseEncrypt.reverse().join('');
    }
  }
  decrypt(phrase,key) {
    if(!phrase || !key || typeof(phrase) == undefined){
      throw new Error('Incorrect arguments!');
    }

    let alSpl = this.alphabet.split('');
    let phraseSplit = phrase.toUpperCase().split('');
    let keyExtended = key.repeat(Math.ceil(phrase.length / key.length)).substr(0,phrase.length).toUpperCase().split('');
    let phraseDecrypt = [];

    for(let i = 0; i < phraseSplit.length; i ++){
      if(phraseSplit[i] == ' '){
        keyExtended.splice(i,0,' ');
      }
    }
  
    for(let i = 0; i < phraseSplit.length; i++){
      if(alSpl.indexOf(phraseSplit[i]) == -1){
        phraseDecrypt.push(phraseSplit[i]);
      } else {
        if(alSpl.indexOf(phraseSplit[i]) - alSpl.indexOf(keyExtended[i]) >= 0){
          phraseDecrypt.push(alSpl[alSpl.indexOf(phraseSplit[i]) - alSpl.indexOf(keyExtended[i])]);
        } else if (alSpl.indexOf(phraseSplit[i]) - alSpl.indexOf(keyExtended[i]) < 0){
          phraseDecrypt.push(alSpl[26 + (alSpl.indexOf(phraseSplit[i]) - alSpl.indexOf(keyExtended[i]))]);
        }
      }
    }
    if(this.type == 'direct'){
      return phraseDecrypt.join('');
    } else {
      return phraseDecrypt.reverse().join('');
    }
  }
}
