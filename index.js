let num_point_circle = 0;
let num_point_total = 0;
function estimate_pi(n) {
    for (i = 0; i < n; i++) {
        let x = Math.random();
        let y = Math.random();
        let distance = x ** 2 + y ** 2;
        if (distance <= 1) {
            num_point_circle += 1;
        }
        num_point_total += 1;
    }
    return 4 * num_point_circle/num_point_total;

}



