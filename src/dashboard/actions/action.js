const updatedData = {
    chart: [
      {
       "label": "One",
       "value" : 10
      } ,
     {
       "label": "Two",
       "value" : 20
     } ,
     {
       "label": "Three",
       "value" : 32
     } ,
     {
       "label": "Four",
       "value" : 200
     } ,
     {
       "label": "Five",
       "value" : 100
     } ,
     {
       "label": "Six",
       "value" : 98.079782601442
     } ,
     {
       "label": "Seven",
       "value" : 13.925743130903
     } ,
     {
       "label": "Eight",
       "value" : 15.1387322875705
     }
    ]
};

const update = () => {
  return({
    type:'UPDATE',
    payload:updatedData.chart
  })
}

export {update};
