export function formatNumber(num) {
    if(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
}