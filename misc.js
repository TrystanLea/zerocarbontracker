// https://github.com/plotly/plotly.js/issues/4921
function linearRegression(x, y, x_min, x_max) {
    var n = 0;
    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_xx = 0;
    var sum_yy = 0;

    for (var i = 0; i < x.length; i++) {
        if (x[i]>=x_min && x[i]<=x_max) {
            x[i] *= 1;
            y[i] *= 1;
            sum_x += x[i];
            sum_y += y[i];
            sum_xy += (x[i] * y[i]);
            sum_xx += (x[i] * x[i]);
            sum_yy += (y[i] * y[i]);
            n++;
        }
    }

    var lr = {};
    lr.slope = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
    lr.offset = (sum_y - lr.slope * sum_x) / n;
    lr.r2 = Math.pow((n * sum_xy - sum_x * sum_y) / Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)), 2);

    return lr;
}