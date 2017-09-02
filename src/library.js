export let number = 42;
export function incr() {
    number++;
}
export let vivian = {
    first_name: 'Vivian',
    last_name: 'Yip',
    full_name: function() {
        return this.first_name + ' ' + this.last_name;
    }
};