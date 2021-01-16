// TODO: Are some locations/tiles rendering incorrectly in comparison to where you hit?

function drawFontAwesomeEnvelope() {
	return '<svg class="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>';
}
function drawFontAwesomeHeart() {
	return '<svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>';
}
function drawFontAwesomeQuestionMark() {
	return '<svg class="svg-inline--fa fa-question fa-w-12" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path></svg>';
}
function drawFontAwesomeSun() {
	return '<svg class="svg-inline--fa fa-sun fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>';
}
function drawFontAwesomeLocation() {
	return '<svg class="svg-inline--fa fa-location fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="location" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M496 224h-50.88C431.61 143.66 368.34 80.39 288 66.88V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v50.88C143.66 80.39 80.39 143.66 66.88 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h50.88C80.39 368.34 143.66 431.61 224 445.12V496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-50.88c80.34-13.51 143.61-76.78 157.12-157.12H496c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM256 384c-70.7 0-128-57.31-128-128s57.3-128 128-128 128 57.31 128 128-57.3 128-128 128zm0-216c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88z"></path></svg>';
}
function drawFontAwesomeDownload() {
	return '<svg class="svg-inline--fa fa-download fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>';
}
function drawFontAwesomeThumbsUp() {
	return '<svg class="svg-inline--fa fa-thumbs-up fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="thumbs-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path></svg>';
}
function drawFontAwesomeHandSpock() {
	return '<svg class="svg-inline--fa fa-hand-spock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="hand-spock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M510.9005,145.27027,442.604,432.09391A103.99507,103.99507,0,0,1,341.43745,512H214.074a135.96968,135.96968,0,0,1-93.18489-36.95291L12.59072,373.12723a39.992,39.992,0,0,1,54.8122-58.24988l60.59342,57.02528v0a283.24849,283.24849,0,0,0-11.6703-80.46734L73.63726,147.36011a40.00575,40.00575,0,1,1,76.71833-22.7187l37.15458,125.39477a8.33113,8.33113,0,0,0,16.05656-4.4414L153.26183,49.95406A39.99638,39.99638,0,1,1,230.73015,30.0166l56.09491,218.15825a10.42047,10.42047,0,0,0,20.30018-.501L344.80766,63.96966a40.052,40.052,0,0,1,51.30245-30.0893c19.86073,6.2998,30.86262,27.67378,26.67564,48.08487l-33.83869,164.966a7.55172,7.55172,0,0,0,14.74406,3.2666l29.3973-123.45874a39.99414,39.99414,0,1,1,77.81208,18.53121Z"></path></svg>';
}
function drawFontAwesomeSmile() {
	return '<svg class="svg-inline--fa fa-smile-beam fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="smile-beam" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM112 223.4c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.3 7.4-15.8 4-15.1-4.5zm250.8 122.8C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.3 24.6 20.5zm6.2-118.3l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5 3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.6 8.6-11 11.9-15.1 4.5z"></path></svg>';
}
function drawFontAwesomeAlien() {
	return '<svg class="svg-inline--fa fa-alien fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="alien" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224,0C100.28125,0,0,88.0293,0,232.45117,0,344.22852,134.21484,457.04883,194.86328,502.32422a48.70766,48.70766,0,0,0,58.27344,0C313.78516,457.04883,448,344.22852,448,232.45117,448,88.0293,347.71875,0,224,0ZM176,320H144a80.00021,80.00021,0,0,1-80-80,15.99954,15.99954,0,0,1,16-16h32a79.999,79.999,0,0,1,80,80A16.00079,16.00079,0,0,1,176,320Zm128,0H272a16.00079,16.00079,0,0,1-16-16,79.999,79.999,0,0,1,80-80h32a15.99954,15.99954,0,0,1,16,16A80.00021,80.00021,0,0,1,304,320Z"></path></svg>';
}

function setActiveStylesheet(title) {
    var css = `link[rel="alternate stylesheet"]`;
    var stylesheets = document.querySelectorAll(css);
    stylesheets.forEach(sheet => sheet.disabled = true);
    var selector = `link[title="${title}"]`;
    var stylesheet = document.querySelector(selector);
    if (stylesheet) {
        stylesheet.disabled = false;
    }
    localStorage.setItem("theme", title);
    if (title === 'dark') {
        lightLayer.removeFrom(map);
        darkLayer.addTo(map);
    } else {
        darkLayer.removeFrom(map);
        lightLayer.addTo(map);
    }
}

// TODO: Add keyboard commands!
function sendQueue() {
	for (var i = 0; i < queue.length; ++i) {
		var record = queue[i];
		fetch('/api/v1/records', {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'same-origin', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				// 'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Type': 'application/vnd.api+json'
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify({
				data: {
					type: 'records',
					attributes: {
						geohash: record.hash,
						hits: record.hits,
						reaction: record.type
					}
				}
			}) // body data type must match "Content-Type" header
		}).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
		});
	}
}

function drawHash(hash, level, reaction) {
    var geohashBBox = geohash.decode_bbox(hash);
    var mapBounds = map.getBounds().pad(0.5);
    if (mapBounds.contains(L.latLngBounds(L.latLng(geohashBBox[0], geohashBBox[1]), L.latLng(geohashBBox[2], geohashBBox[3])))) {
        if (!hashesDrawn[hash]) {
            var bounds = L.latLngBounds(L.latLng(geohashBBox[0], geohashBBox[1]), L.latLng(geohashBBox[2], geohashBBox[3]));
            var center = bounds.getCenter();
            var containerPointer = map.latLngToContainerPoint(center);

            var pulsar = document.createElement('div');
            pulsar.style.pointerEvents = 'none';
            pulsar.style.position = 'absolute';
            pulsar.style.top = (containerPointer.y) + 'px';
            pulsar.style.left = (containerPointer.x) + 'px';
            pulsar.style.zIndex = '400';
            pulsar.style.width = (level * 23) + 'px';
            pulsar.style.height = (level * 23) + 'px';
            pulsar.classList.add('pulsating-circle');
            pulsar.classList.add('geohash-circle-' + hash);
            document.body.appendChild(pulsar);

            var type = document.createElement('div');
            type.style.pointerEvents = 'none';
            type.style.position = 'absolute';
            type.style.top = (containerPointer.y - 20) + 'px';
            type.style.left = (containerPointer.x - 20) + 'px';
            type.style.zIndex = '400';
            type.style.width = '40px';
            type.style.height = '40px';
            type.style.fontSize = '40px';
            type.style.transform = 'scale(0.5)';
            type.classList.add('geohash-type-showing');
            type.classList.add('geohash-type-' + hash);
			if (reaction === 0) {
				type.innerHTML = drawFontAwesomeHeart();
			} else if (reaction === 1) {
				type.innerHTML = drawFontAwesomeThumbsUp();
			} else if (reaction === 2) {
				type.innerHTML = drawFontAwesomeHandSpock();
			} else if (reaction === 3) {
				type.innerHTML = drawFontAwesomeSmile();
			} else if (reaction === 4) {
				type.innerHTML = drawFontAwesomeAlien();
			}
            document.body.appendChild(type);
            _ANIMATE.animate(400, (t) => {
                if (t == 1) {
                    _ANIMATE.animate(400, (t) => {
                        if (t == 1) {
                            // ...
                        }
                        return t;
                    }, (pct) => {
                        let applied = _ANIMATE.diffPosition(pct, 1.5, 0.5);
                        type.style.transform = 'scale(' + applied + ')';
                    });
                }
                return t;
            }, (pct) => {
                let applied = _ANIMATE.diffPosition(pct, 0.5, 1.5);
                type.style.transform = 'scale(' + applied + ')';
            });

            hashesDrawn[hash] = true;
        }
    }
}

var neighborsList = [];
function neighborInList(hash) {
    var inList = false;
    for (var i = 0; i < neighborsList.length; ++i) {
        if (neighborsList[i] === hash) {
            inList = true;
            break;
        }
    }
    if (!inList) {
        return false;
    }
    return true;
}
function getNeighborsInMapBounds(hash) {
    var neighbors = [];
    if (!neighborInList(hash)) {
        neighborsList.push(hash);
        neighbors.push(hash);
    }
    var directions = ['north', 'northeast', 'northwest', 'east', 'south', 'west', 'southeast', 'southwest'];
    for (var d in directions) {
        var neighbor = geohash.neighbor(hash, directions[d]);
        if (!neighborInList(neighbor)) {
            neighborsList.push(neighbor);
            var geohashBBox = geohash.decode_bbox(neighbor);
            var mapBounds = map.getBounds().pad(0.5);
            if (mapBounds.contains(L.latLngBounds(L.latLng(geohashBBox[0], geohashBBox[1]), L.latLng(geohashBBox[2], geohashBBox[3])))) {
                var subNeighbors = getNeighborsInMapBounds(neighbor);
                for (var i = 0; i < subNeighbors.length; ++i) {
                    neighbors.push(subNeighbors[i]);
                }
                neighbors.push(neighbor);
            }
        }
    }
    return neighbors;
}

function pulseHashClick(hash) {
    var geohashBBox = geohash.decode_bbox(hash);
    var mapBounds = map.getBounds().pad(0.5);
    if (mapBounds.contains(L.latLngBounds(L.latLng(geohashBBox[0], geohashBBox[1]), L.latLng(geohashBBox[2], geohashBBox[3])))) {
        var bounds = L.latLngBounds(L.latLng(geohashBBox[0], geohashBBox[1]), L.latLng(geohashBBox[2], geohashBBox[3]));
        var center = bounds.getCenter();
        var containerPointer = map.latLngToContainerPoint(center);

        var hashBox = L.rectangle([[geohashBBox[0], geohashBBox[1]], [geohashBBox[2], geohashBBox[3]]], {
            color: "rgb(0, 0, 0)",
            weight: 1,
            interactive: true,
            className: 'geohash-box-' + hash
        }).addTo(map);
        hashBox.options.geohashBBox = geohashBBox;
        hashBox.options.geohash = hash;
        // TODO: [Low Priority] Can we make the animation a bit smoother somehow?
        // _ANIMATE.animate(800, (t) => {
        //     if (t == 1) {
        //         hashBox.remove();
        //     }
        //     return t;
        // }, (pct) => {
        //     let applied = _ANIMATE.diffRgbAnimationInverse(pct, [0, 0, 0], [100, 100, 100]);
        //     hashBox.setStyle({color: 'rgb(' + applied[0] + ',' + applied[1] + ',' + applied[2]});
        // });
        _ANIMATE.animate(800, (t) => {
            if (t == 1) {
                hashBox.remove();
            }
            return t;
        }, (pct) => {
            let applied = _ANIMATE.diffRgbAnimationInverse(pct, [100, 100, 100], [50, 50, 50]);
            hashBox.setStyle({color: 'rgb(' + applied[0] + ',' + applied[1] + ',' + applied[2]});
        });
        // hashBox.on('click', function (e) {
        //     console.log('hit', e);
        //     e.sourceTarget.setStyle({color: 'pink'});
        // });
        // hashesDrawn[hash] = hashBox;
        // hashBox.remove();

        var type = document.createElement('div');
        type.style.pointerEvents = 'none';
        type.style.position = 'absolute';
        type.style.top = (containerPointer.y - 20) + 'px';
        type.style.left = (containerPointer.x - 20) + 'px';
        type.style.zIndex = '400';
        type.style.width = '40px';
        type.style.height = '40px';
        type.style.fontSize = '40px';
        type.style.transform = 'scale(0.5)';
        type.classList.add('geohash-type-added');
        type.classList.add('geohash-type-' + hash);
		if (selectedHitType === 0) {
			type.innerHTML = drawFontAwesomeHeart();
		} else if (selectedHitType === 1) {
			type.innerHTML = drawFontAwesomeThumbsUp();
		} else if (selectedHitType === 2) {
			type.innerHTML = drawFontAwesomeHandSpock();
		} else if (selectedHitType === 3) {
			type.innerHTML = drawFontAwesomeSmile();
		} else if (selectedHitType === 4) {
			type.innerHTML = drawFontAwesomeAlien();
		}
        document.body.appendChild(type);
        _ANIMATE.animate(400, (t) => {
            if (t == 1) {
                _ANIMATE.animate(400, (t) => {
                    if (t == 1) {
                        type.remove();
                    }
                    return t;
                }, (pct) => {
                    let applied = _ANIMATE.diffPosition(pct, 1.5, 0.5);
                    type.style.transform = 'scale(' + applied + ')';
                });
            }
            return t;
        }, (pct) => {
            let applied = _ANIMATE.diffPosition(pct, 0.5, 1.5);
            type.style.transform = 'scale(' + applied + ')';
        });
    }
}

function determineMapZoomLevel() {
    var level = 1;
    var mapZoom = map.getZoom();
    var mapZoomLevels = {
        18: 7,
        17: 7,
        16: 6,
        15: 6,
        14: 6,
        13: 5,
        12: 5,
        11: 4,
        10: 4,
        9: 4,
        8: 3,
        7: 3,
        6: 2,
        5: 2,
        4: 2,
        3: 1,
        2: 1,
        1: 1
    };
    var level = mapZoomLevels[mapZoom];
    if (mapZoom < 1 || mapZoom > 18) {
        level = 1;
    }
    return level;
}

function closePopup(e) {
    var popup = document.getElementById(e.currentTarget.dataset.parent);
    popup.style.display = 'none';
    e.currentTarget.removeEventListener('click', closePopup);
}

function showPopup(name) {
    var popupElmt = document.getElementById(name);
    popupElmt.style.display = 'grid';
    var closeElmt = popupElmt.getElementsByClassName('close')[0];
    closeElmt.dataset.parent = name;
    closeElmt.addEventListener('click', closePopup);
}

var drawHashesInterval = false;
function drawHashes() {
    drawHashesInterval = setInterval(function () {
        if (hits) {
            var level = determineMapZoomLevel();
			for (var i in hits) {
                var hit = hits[i];
                if (hit.geohash.length === level) {
                    drawHash(hit.geohash, hit.level, hit.reaction);
                }
            }
        }
        drawHashesInterval = false;
    }, 500);
}
function clearDrawnMapHashes() {
    for (var h in hashesDrawn) {
        //hashesDrawn[h].removeFrom(map);
        var elements = document.getElementsByClassName('geohash-' + h);
        for (var geo = 0; geo < elements.length; ++geo) {
            var elmt = elements[geo];
            if (elmt instanceof HTMLElement) {
                elmt.remove();
            }
        }
        elements = document.getElementsByClassName('geohash-circle-' + h);
        for (var geo = 0; geo < elements.length; ++geo) {
            var elmt = elements[geo];
            if (elmt instanceof HTMLElement) {
                elmt.remove();
            }
        }
        elements = document.getElementsByClassName('geohash-type-' + h);
        for (var geo = 0; geo < elements.length; ++geo) {
            var elmt = elements[geo];
            if (elmt instanceof HTMLElement) {
                elmt.remove();
            }
        }
    }
    hashesDrawn = {};
}
function drawMapHashes() {
    neighborsList = [];
	hits = {};
    var center = map.getCenter();
    var level = determineMapZoomLevel();
    var hash = geohash.encode(center.lat, center.lng, level);
    var neighbors = getNeighborsInMapBounds(hash);
    var query = '';
    for (var i = 0; i < neighbors.length; ++i) {
		if (query === '') {
			query += 'filter[hashes][]=' + neighbors[i];
		} else {
			query += '&filter[hashes][]=' + neighbors[i];
		}
		if (i % 15 === 0) {
			fetch('/api/v1/hits/?' + query).then((response) => {
				return response.json();
			}).then((data) => {
				for (var i = 0; i < data.data.length; ++i) {
					var d = data.data[i];
					if (d.attributes.hits > 0 && d.attributes.level > 0 && (!hits[d.attributes.geohash] || hits[d.attributes.geohash].hits < d.attributes.hits)) {
						hits[d.attributes.geohash] = {
							hits: d.attributes.hits,
							geohash: d.attributes.geohash,
							level: d.attributes.level,
							child_hits: d.attributes.child_hits,
							reaction: d.attributes.reaction,
							// TODO: child_level
							// TODO: total_level
							// TODO: Add option to view different levels (as layers?)
						};
					}
				}
				drawHashes();
			});
			query = '';
		}
		if (i === (neighbors.length - 1) && query !== '') {
			fetch('/api/v1/hits/?' + query).then((response) => {
				return response.json();
			}).then((data) => {
				for (var i = 0; i < data.data.length; ++i) {
					var d = data.data[i];
					if (d.attributes.hits > 0 && d.attributes.level > 0 && (!hits[d.attributes.geohash] || hits[d.attributes.geohash].hits < d.attributes.hits)) {
						hits[d.attributes.geohash] = {
							hits: d.attributes.hits,
							geohash: d.attributes.geohash,
							level: d.attributes.level,
							child_hits: d.attributes.child_hits,
							reaction: d.attributes.reaction,
							// TODO: child_level
							// TODO: total_level
							// TODO: Add option to view different levels (as layers?)
						};
					}
				}
				drawHashes();
			});
			query = '';
		}
    }
}

var intervalQueue = false;
var map = false;
var queue = [];
var selectedHitType = 0;
var hits = {};
var darkLayer = false;
var lightLayer = false;
var hashesDrawn = {};

function isIos() {
	const userAgent = window.navigator.userAgent.toLowerCase();
	return /iphone|ipad|ipod/.test( userAgent );
}
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

var deferredPrompt = false;
window.addEventListener('beforeinstallprompt', function (e) {
	e.preventDefault();
	//console.log(e);
	deferredPrompt = e;
});
function promptPWAInstall() {
	if (isIos() && !isInStandaloneMode()) {
		this.setState({ showInstallMessage: true });
	} else if (!window.matchMedia('(display-mode: standalone)').matches) {
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then(function (choice) {
			if (choice.outcome === 'accepted') {
				// YEP
			} else {
				// NOPE
			}
			deferredPrompt = null;
		});
	}
}
window.addEventListener('DOMContentLoaded', (event) => {
    var title = localStorage.getItem("theme");

    map = L.map('map').fitWorld();
	lightLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 18,
		tileSize: 256,
		detectRetina: true
	});
	darkLayer = lightLayer;

    if (title) {
        setActiveStylesheet(title);
    } else {
        setActiveStylesheet('dark');
    }

    map.on('locationfound', function(e) {
        var radius = e.accuracy;
        L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
        L.circle(e.latlng, radius).addTo(map);
    });
    map.on('locationerror', function (e) {
        showPopup('popup_locate_error');
    });

    var vibeControl =  L.Control.extend({
        options: {
            position: 'topleft'
        },
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
            if (this.options.which === 0) {
				container.innerHTML = drawFontAwesomeHeart();
                container.dataset.likeId = "0";
                container.classList.add('selected');
            } if (this.options.which === 1) {
				container.innerHTML = drawFontAwesomeThumbsUp();
                container.dataset.likeId = "1";
            } if (this.options.which === 2) {
				container.innerHTML = drawFontAwesomeHandSpock();
                container.dataset.likeId = "2";
            } if (this.options.which === 3) {
				container.innerHTML = drawFontAwesomeSmile();
                container.dataset.likeId = "3";
            } else if (this.options.which === 4) {
				container.innerHTML = drawFontAwesomeAlien();
                container.dataset.likeId = "4";
            }
            container.classList.add('like-button');
            container.addEventListener('click', function (e) {
                e.preventDefault();
                var selectedLikeButtons = document.getElementsByClassName('like-button');
                for (var i = 0; i < selectedLikeButtons.length; ++i) {
                    var btn = selectedLikeButtons[i];
                    if (btn instanceof HTMLElement) {
                         btn.classList.remove('selected');
                    }
                }
                e.currentTarget.classList.add('selected');
                selectedHitType = parseInt(e.currentTarget.dataset.likeId);
                e.stopPropagation();
            });
            return container;
        }
    });
    var menuControl =  L.Control.extend({
        options: {
            position: 'topright'
        },
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
            if (this.options.which === 'contact') {
				container.innerHTML = drawFontAwesomeEnvelope();
            } else if (this.options.which === 'help_about') {
				container.innerHTML = drawFontAwesomeQuestionMark();
            } else if (this.options.which === 'share_donate') {
				container.innerHTML = drawFontAwesomeHeart();
            } else if (this.options.which === 'light_dark') {
				container.innerHTML = drawFontAwesomeSun();
            } else if (this.options.which === 'locate') {
				container.innerHTML = drawFontAwesomeLocation();
            } else if (this.options.which === 'install') {
				container.innerHTML = drawFontAwesomeDownload();
			}
            container.dataset.action = this.options.which;
            container.classList.add('menu-button');
            container.addEventListener('click', function (e) {
                e.preventDefault();
                var action = e.currentTarget.dataset.action;
                if (action === 'locate') {
                    map.locate({setView: true});
                } else if (action === 'light_dark') {
                    if (localStorage.getItem("theme") === 'light') {
                        setActiveStylesheet('dark');
                    } else {
                        setActiveStylesheet('light');
                    }
                } else if (action === 'contact') {
                    showPopup('popup_contact');
                } else if (action === 'share_donate') {
                    showPopup('popup_share_donate');
                } else if (action === 'help_about') {
                    showPopup('popup_help_about');
                } else if (action === 'install') {
					promptPWAInstall();
				}
                e.stopPropagation();
            });

            return container;
        }
    });
    map.addControl(new vibeControl({which: 0}));
    map.addControl(new vibeControl({which: 1}));
    map.addControl(new vibeControl({which: 2}));
    map.addControl(new vibeControl({which: 3}));
    map.addControl(new vibeControl({which: 4}));
    map.addControl(new menuControl({which: 'contact'}));
    map.addControl(new menuControl({which: 'help_about'}));
    map.addControl(new menuControl({which: 'share_donate'}));
    map.addControl(new menuControl({which: 'light_dark'}));
    map.addControl(new menuControl({which: 'locate'}));
    map.addControl(new menuControl({which: 'install'}));

    map.whenReady(function () {
        drawMapHashes();
    });

    map.on('click', function (e) {
        var level = determineMapZoomLevel();
        var hash = geohash.encode(e.latlng.lat, e.latlng.lng, level);

		var alreadyInQueue = false;
		for (var i = 0; i < queue.length; ++i) {
			if (queue[i].hash === hash && queue[i].type === selectedHitType) {
				queue[i].hits += 1;
				alreadyInQueue = true;
				break;
			}
		}
		if (!alreadyInQueue) {
	        queue.push({hash: hash, hits: 1, type: selectedHitType});
		}

        if (intervalQueue) {
            clearInterval(intervalQueue);
        }
        intervalQueue = setInterval(function () {
            sendQueue();
            clearInterval(intervalQueue);
        }, 1500);

        pulseHashClick(hash);
    });
    map.on('zoom viewreset move', function (e) {
        clearDrawnMapHashes();
    });
    map.on('zoomend viewreset moveend', function (e) {
		setTimeout(function () {
	        drawMapHashes();
		}, 1500);
    });
});
