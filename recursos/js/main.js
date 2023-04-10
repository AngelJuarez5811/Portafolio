let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let p = document.getElementById('p');

function imgInformationp1 () {
    p1.style.display = 'inline';
};
function imgInformationp2 () {
    p2.style.display = 'inline';
};
function imgInformationp3 () {
    p3.style.display = 'inline';
};
function imgInformationNone1 () {
    p1.style.display = 'none';
};
function imgInformationNone2 () {
    p2.style.display = 'none';
};
function imgInformationNone3 () {
    p3.style.display = 'none';
};


img1.addEventListener('mouseover', imgInformationp1);
img2.addEventListener('mouseover', imgInformationp2);
img3.addEventListener('mouseover', imgInformationp3);
img1.addEventListener('mouseout', imgInformationNone1);
img2.addEventListener('mouseout', imgInformationNone2);
img3.addEventListener('mouseout', imgInformationNone3);