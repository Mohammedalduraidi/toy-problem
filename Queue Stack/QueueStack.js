// Write a stack. Once you’re done, implement a queue 
// using two stacks to create FIFO behavior. The queue should not have any 
// storage separate from its stacks.
var Stack = function() {
    this.storage = [];
    this.counter = 0
    this.popcounter = 0
    this.sizeCounter =0
   
    
    this.push = function(value){
    this.storage.push(value)
    this.counter++
    this.sizeCounter++
    };
  
    this.pop = function(){
      this.popcounte ++
      this.counter--
      this.sizeCounter--
     return this.storage.pop(this.counter -1)
    };
  
    this.size = function(){
   return this.sizeCounter
    };
  };
  
  var Queue = function() {
  
    var inbox = new Stack();
    var outbox = new Stack();
     this.storage = [];
     this.enqueueCounter =0
    this.dequeueCounter =0
    this.queueSizeCounter =0
    this.enqueue = function(value){
     this.storage.push(value)
     this.enqueueCounter++
    this.queueSizeCounter++
    };
  
    this.dequeue = function(){
      this.queueSizeCounter--
      var dequeueItem;
      var check = false
       for(var i =0; i<this.storage.length; i++){
        dequeueItem = this.storage[0]
        this.storage.splice(i,1)
        check = true
        if(check === true){
          break;
        }
       }
       return dequeueItem
        };
  
    this.size = function(){
    return this.queueSizeCounter
     
    };
  };