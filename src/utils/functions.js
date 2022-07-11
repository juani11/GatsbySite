const currencyFormat = num => num ? '$' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : '$0';

const isBrowser = () => typeof window !== "undefined"

function chunkArray(arr, chunkSize) {
    if (chunkSize <= 0) throw "Invalid chunk size";
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
}

export { currencyFormat, isBrowser, chunkArray }