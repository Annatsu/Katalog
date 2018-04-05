// Kata link: https://www.codewars.com/kata/take-a-ten-minute-walk


function isValidWalk(walk) {
    return walk.length === 10 &&
        walk.reduce((route, v, i) => {
            if (v === 'n')
                ++route.y;
            else if (v === 's')
                --route.y;
            else if (v === 'e')
                ++route.x;
            else if (v === 'w')
                --route.x;

            return i === walk.length - 1
                ? (route.x === 0) && (route.y === 0)
                    ? true
                    : false
                : route;
        },
        {
            x: 0,
            y: 0
        });
}
