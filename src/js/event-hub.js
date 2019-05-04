window.eventHub = {
    events: {
      
    }, 
    emit(eventName, data){ //发布
    //     this.events[eventName][0].call(undefined, data)
    //     fn(data)
    //     if(this.events[eventName] !== undefined) {
            
    //     }
      for(let key in this.events){
        if(key === eventName){
          let fnList = this.events[key]
          fnList.map((fn)=>{
            fn.call(undefined, data)
          })
        }
      }
    },
    on(eventName, fn){ //订阅
      if(this.events[eventName] === undefined){
        this.events[eventName] = []
      }
      this.events[eventName].push(fn)
    },
  }