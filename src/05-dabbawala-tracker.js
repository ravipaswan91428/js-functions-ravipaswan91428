/**
 * 🚂 Dabbawala Delivery Tracker - Closures
 *
 * Mumbai ke famous dabbawala system ka tracker bana! Yahan closure ka
 * use hoga — ek function ke andar private state rakhna hai jo bahar se
 * directly access nahi ho sakta. Sirf returned methods se access hoga.
 *
 * Function: createDabbawala(name, area)
 *
 * Returns an object with these methods (sab ek hi private state share karte hain):
 *
 *   - addDelivery(from, to)
 *     Adds a new delivery. Returns auto-incremented id (starting from 1).
 *     Each delivery: { id, from, to, status: "pending" }
 *     Agar from ya to empty/missing, return -1
 *
 *   - completeDelivery(id)
 *     Marks delivery as "completed". Returns true if found and was pending.
 *     Returns false if not found or already completed.
 *
 *   - getActiveDeliveries()
 *     Returns array of deliveries with status "pending" (copies, not references)
 *
 *   - getStats()
 *     Returns: { name, area, total, completed, pending, successRate }
 *     successRate = completed/total as percentage string "85.00%" (toFixed(2) + "%")
 *     Agar total is 0, successRate = "0.00%"
 *
 *   - reset()
 *     Clears all deliveries, resets id counter to 0. Returns true.
 *
 * IMPORTANT: Private state (deliveries array, nextId counter) should NOT
 *   be accessible as properties on the returned object.
 *   Two instances created with createDabbawala should be completely independent.
 *
 * Hint: Use closure to keep variables private. The returned object's methods
 *   form a closure over those variables.
 *
 * @param {string} name - Dabbawala's name
 * @param {string} area - Delivery area
 * @returns {object} Object with delivery management methods
 *
 * @example
 *   const ram = createDabbawala("Ram", "Dadar");
 *   ram.addDelivery("Andheri", "Churchgate"); // => 1
 *   ram.addDelivery("Bandra", "CST");         // => 2
 *   ram.completeDelivery(1);                   // => true
 *   ram.getStats();
 *   // => { name: "Ram", area: "Dadar", total: 2, completed: 1, pending: 1, successRate: "50.00%" }
 */
export function createDabbawala(name, area) {
  // Your code here
  let deliveries = [];
  let nextId = 0;

  return {
    addDelivery(from,to){
      if(!from || !to){
        return -1;
      }

      nextId++;

      const delivery = {
        id: nextId,
        from: from,
        to: to,
        status: "pending"
      };

      deliveries.push(delivery);

      return nextId;
    },

    completeDelivery(id){
      const delivery = deliveries.find(delivery => delivery.id === id );

      if(!delivery || delivery.status === 'completed'){
        return false;
      }

      delivery.status = 'completed';

      return true;
    },

    getActiveDeliveries(){
      const delivery = deliveries
      .filter(delivery => delivery.status === 'pending')
      .map(delivery => ({...delivery}));

      return delivery;
    },

    getStatus(){
      const total = deliveries.length;

      const completed = deliveries.filter(delivery => delivery.status === 'completed')
      .length;

      const pending = deliveries.filter(delivery => delivery.status === 'pending')
      .length;

      const successRate = total === 0 ? "0.00%" : ((completed/total * 100).toFixed(2)+ "%");

      return {
        name,
        area, 
        total, 
        completed, 
        pending, 
        successRate
      }
    },

    reset(){
      deliveries = [];
      nextId = 0;

      return true;
    }
  }
}

const ram = createDabbawala('Ram', 'Dadar');
// const active = ram.getActiveDeliveries();

// console.log(ram.addDelivery('Andheri', 'Churchgate'));
// console.log(ram.addDelivery('Bandra', 'CST'));
// console.log(ram.addDelivery('Dadar', 'Parel'));
// console.log(ram.addDelivery('', 'Churchgate'));
// console.log(ram.addDelivery('Andheri', ''));
// console.log(ram.addDelivery(undefined, 'Churchgate'));
// console.log(ram.addDelivery('Andheri'));
// console.log(ram.completeDelivery(1));
// console.log(ram.completeDelivery(999));
// console.log(ram.completeDelivery(1));

// console.log(ram.addDelivery('Andheri', 'Churchgate'));
// console.log(ram.addDelivery('Bandra', 'CST'));
// console.log(ram.completeDelivery(1));

// console.log(ram.addDelivery('Andheri', 'Churchgate'));
// console.log(ram.completeDelivery(1));
// console.log(ram.getActiveDeliveries());

// console.log(ram.getActiveDeliveries());

// console.log(ram.addDelivery('Andheri', 'Churchgate'));
// console.log(ram.addDelivery('Bandra', 'CST'));
// console.log(ram.completeDelivery(1));

const status = ram.getStatus();

// console.log(status.name);
// console.log(status.area);
// console.log(status.total);
// console.log(status.completed);
// console.log(status.pending);

// console.log(ram.addDelivery('Andheri', 'Churchgate'));
// console.log(ram.addDelivery('Bandra', 'CST'));
// console.log(ram.completeDelivery(1));
// console.log(ram.getStatus().successRate);

// console.log(ram.getStatus().successRate);

//SUCCESS RATE TEST CASE

// console.log(ram.addDelivery('Bandra', 'CST'));
// console.log(ram.completeDelivery(1));
// console.log(ram.getStatus().successRate);

//RESET TEST CASE

// console.log(ram.addDelivery('Andheri', 'Churchgate'));
// console.log(ram.addDelivery('Bandra', 'CST'));

// console.log(ram.reset());

// console.log(ram.getStatus().total);
// console.log(ram.getActiveDeliveries());

// console.log(ram.addDelivery('Andheri', 'Churchgate'));
// console.log(ram.addDelivery('Bandra', 'CST'));
// console.log(ram.reset());
// console.log(ram.addDelivery('Dadar', 'Parel'));

// console.log(ram.reset());

// console.log(ram.addDelivery('Andheri', 'Churchgate'));
// console.log(ram.deliveries);
// console.log((ram.nextId));

// const shyam = createDabbawala('Shyam', 'Andheri');
// console.log(ram.addDelivery('A', 'B'));
// console.log(ram.addDelivery('C', 'D'));
// console.log(shyam.addDelivery('X', 'Y'));
// console.log(ram.getStatus().total);
// console.log(shyam.getStatus().total);

// const shyam = createDabbawala('Shyam', 'Andheri');
// console.log(ram.addDelivery('C', 'D'));
// console.log(ram.addDelivery('A', 'B'));
// console.log(shyam.addDelivery('X', 'Y'));