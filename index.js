

const superbowlWin = (records) => {
    let result = records.find(record => record.result === "W")
    
   return result === undefined ? undefined : result.year
  
}


