let subs: number | string = '1M'//use when supposr you send api req

let apiRequestStatus: 'pending' | 'sucess' | 'error' = 'pending'

apiRequestStatus = "sucess"//should be sucess not other words 

let airlines: 'aisle' | 'window' | 'middle' = 'aisle'

airlines = 'aisle'

const orders = ['12','20','28','42']

let currentOrder: string | undefined;

for(let order of orders){
    if(order === '28'){
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}
console.log(currentOrder);
