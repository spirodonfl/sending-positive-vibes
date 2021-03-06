/** ANIMATION FUNCTIONS **/
// Taken from here: https://easings.net/#easeInCirc
class Animate {
    easeInCirc(x) {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
    }
    easeInSine(x) {
        return 1 - Math.cos(x * Math.PI / 2);
    }
    easeOutElastic(x) {
        const c4 = (2 * Math.PI) / 3;
        return x === 0
            ? 0
            : x === 1
                ? 1
                : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    }
    animate(duration = 1000, timing, draw) {
        const start = performance.now();
        window.requestAnimationFrame(function animate(time) {
            var timeFraction = (time - start) / duration;
            if (timeFraction > 1) {
                timeFraction = 1;
            }
            // var progress = timing(timeFraction);
            // var progress = easeOutElastic(timing(timeFraction));
            var progress = _ANIMATE.easeInSine(timing(timeFraction));
            draw(progress);
            if (timeFraction < 1) {
                window.requestAnimationFrame(animate);
            }
        });
    }
}

class AnimateUI extends Animate {
    splitCssRgbVariable(name) {
        var split = getComputedStyle(document.documentElement).getPropertyValue(name);
        split = split.replace(/[^\d,]/g, '').split(',');
        split[0] = parseInt(split[0]);
        split[1] = parseInt(split[1]);
        split[2] = parseInt(split[2]);
        return split;
    }

    diffRgbAnimation(pct, from, to) {
        var diff = [(to[0] - from[0]), (to[1] - from[1]), (to[2] - from[2])];
        var current = [diff[0] * pct, diff[1] * pct, diff[2] * pct];
        if (current[0] < 0) {
            current[0] = 0;
        }
        if (current[1] < 0) {
            current[1] = 0;
        }
        if (current[2] < 0) {
            current[2] = 0;
        }
        var applied = [(from[0] + current[0]), (from[1] + current[1]), (from[2] + current[2])];
        return applied;
    }

    // TODO: Is inverse really necessary? Maybe we just need to detect when from is greater than to and the other way around?
    diffRgbAnimationInverse(pct, from, to) {
        var diff = [(from[0] - to[0]), (from[1] - to[1]), (from[2] - to[2])];
        var current = [diff[0] * pct, diff[1] * pct, diff[2] * pct];
        if (current[0] < 0) {
            current[0] = 0;
        }
        if (current[1] < 0) {
            current[1] = 0;
        }
        if (current[2] < 0) {
            current[2] = 0;
        }
        var applied = [(from[0] - current[0]), (from[1] - current[1]), (from[2] - current[2])];
        return applied;
    }

    diffPosition(pct, from, to) {
        var diff = to - from;
        var current = diff * pct;
        var applied = from + current;
        return applied;
    }

    diffPositionInverse(pct, from, to) {
        var diff = to - from;
        var current = diff * pct;
        var applied = from - current;
        return applied;
    }
}
var _ANIMATE = new AnimateUI();