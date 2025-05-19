
function f(day, last, points){
    if(day === 0){
        let maxi = 0
        for(let task = 0; task < 3; task++){
            if(task != last){
              maxi = Math.max(maxi, points[day][task])
            }
        }
        return maxi
    }

    let maxPoints = 0
    for(let task=0; task < 3; task++){
        if(task != last){
            let currPoints = points[day][task] + f(day - 1, task, points)
            maxPoints = Math.max(maxPoints, currPoints)
        }
    }
    return maxPoints
}

function ninjaTraining(n, points) {
    return f(n - 1, 3, points);
}

const n = 3;
const points = [
  [10, 70, 100],
  [20, 50, 1000],
  [30, 60, 100],
];

console.log(ninjaTraining(n, points)); // Output: 210
