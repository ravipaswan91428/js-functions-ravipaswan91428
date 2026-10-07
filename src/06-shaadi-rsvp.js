/**
 * 💒 Shaadi RSVP Manager - Callback Functions
 *
 * Big fat Indian wedding ki planning chal rahi hai! Guest list manage
 * karna hai using callback functions. Callback matlab ek function jo
 * doosre function ko argument ke roop mein diya jaata hai.
 *
 * Functions:
 *
 *   1. processGuests(guests, filterFn)
 *      - guests: array of guest objects
 *      - filterFn: callback function that takes a guest, returns true/false
 *      - Returns: array of guests for which filterFn returned true
 *      - Agar guests not array or filterFn not function, return []
 *
 *   2. notifyGuests(guests, notifyCallback)
 *      - Calls notifyCallback(guest) for EACH guest in array
 *      - Collects return values from each callback call
 *      - Returns: array of callback results
 *      - Agar guests not array or notifyCallback not function, return []
 *
 *   3. handleRSVP(guest, onAccept, onDecline)
 *      - If guest.rsvp === "yes", call onAccept(guest) and return its result
 *      - If guest.rsvp === "no", call onDecline(guest) and return its result
 *      - If guest.rsvp is anything else, return null
 *      - Agar guest null/undefined or callbacks not functions, return null
 *
 *   4. transformGuestList(guests, ...transformFns)
 *      - Takes guest array and any number of transform functions
 *      - Each transformFn takes an array and returns a new array
 *      - Apply transforms LEFT to RIGHT (first fn first)
 *      - Return the final transformed array
 *      - Agar guests not array, return []
 *
 * Hint: Callbacks are just functions passed as arguments to other functions.
 *   The receiving function decides WHEN to call them.
 *
 * @example
 *   processGuests(
 *     [{ name: "Rahul", side: "bride" }, { name: "Priya", side: "groom" }],
 *     guest => guest.side === "bride"
 *   )
 *   // => [{ name: "Rahul", side: "bride" }]
 *
 *   handleRSVP({ name: "Amit", rsvp: "yes" }, g => `${g.name} is coming!`, g => `${g.name} declined`)
 *   // => "Amit is coming!"
 */
export function processGuests(guests, filterFn) {
  // Your code here
  if(!Array.isArray(guests) || typeof filterFn !== 'function'){
    return [];
  }

  return guests.filter(filterFn);
}

// TEST CASES
const guests = [
  { name: 'Rahul', side: 'bride', rsvp: 'yes' },
  { name: 'Priya', side: 'groom', rsvp: 'no' },
  { name: 'Amit', side: 'bride', rsvp: 'yes' },
  { name: 'Neha', side: 'groom', rsvp: 'yes' },
  { name: 'Vikram', side: 'bride', rsvp: 'no' },
];

const brideGuests = processGuests(guests, (g) => g.side === 'bride');
// console.log(brideGuests);
// console.log(brideGuests.every((g)=>g.side === 'bride'));

const attendGuest = processGuests(guests,(g) => g.rsvp === 'yes');
// console.log(attendGuest);

const unknown = processGuests(guests, (g) => g.side === 'unknown');
// console.log(unknown);

// console.log(processGuests('not-array', () => true));
// console.log(processGuests(null, () => true));

// console.log(processGuests(guests, 'not-a-function'));
// console.log(processGuests(guests, null));

// let callCount = 0

// processGuests(guests, (g) => {
//   callCount++;
//   return g.rsvp === 'yes';
// });

// console.log(callCount);

export function notifyGuests(guests, notifyCallback) {
  // Your code here
  if(!Array.isArray(guests) || typeof notifyCallback !== 'function'){
    return [];
  }

  return guests.map(notifyCallback);

}

// TEST CASES

// const results = notifyGuests(guests, (g) => `Notified ${g.name}`);
// console.log(results);

// const results = notifyGuests(guests, (g) => g.name)
// console.log(results)
// console.log(notifyGuests(42, (g) => g.name))
// console.log(notifyGuests(guests, undefined))

// let callCount = 0;
// notifyGuests(guests, (g)=>{
//   callCount++;
//   return g.name;
// })

// console.log(callCount);

export function handleRSVP(guest, onAccept, onDecline) {
  // Your code here
  if(!guest || 
      typeof guest === "undefined" ||
      typeof onAccept !== 'function' || 
      typeof onDecline !== 'function'){
    return null;
  }

  if(guest.rsvp === 'yes'){
    return onAccept(guest);
  }

  if(guest.rsvp === 'no'){
    return onDecline(guest);
  }
  return null;
  
}

// const guest = {
//   name: "Amit",
//   rsvp: "yes"
// }

// const guest = {
//   name: "Priya",
//   rsvp: "no"
// }

// const guest = { 
//   name: 'Test', 
//   rsvp: 'maybe' 
// };

// (handleRSVP(null, () => {}, () => {}))

// handleRSVP((undefined, () => {}, () => {}));
// const guest = { name: 'Test', rsvp: 'yes' };
// console.log(handleRSVP(guest, 'not-fn', () => {}));
// console.log(handleRSVP(guest, () => {}, 'not-fn'));

// let acceptCalled = false;
// const guest = { name: 'Test', rsvp: 'yes' };
// handleRSVP(guest,
//   ()=> {acceptCalled = true;
//     return "OK";
//   },
//   () => "No"
// )
// console.log(acceptCalled);

// let declineCalled = false;
// const guest = { name: 'Test', rsvp: 'no' };
// handleRSVP(guest,
//   ()=> "Yes",
//   () => { declineCalled = true;
//     return "No";
//   }
// )
// console.log(declineCalled);

// const result = handleRSVP(guest,
//   (g) => `${g.name} is comming`,
//   (g) => `${g.name} declined`
// );

// console.log(result);

export function transformGuestList(guests, ...transformFns) {
  // Your code here
  
}
