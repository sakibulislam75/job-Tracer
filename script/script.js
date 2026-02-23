let interviewList = [];
let rejectList = [];
let total = document.getElementById('total');
let total1 = document.getElementById('total1');
let interviewCount = document.getElementById('interview-1');
let rejectCount = document.getElementById('reject-1');

let all = document.getElementById('all');
let interviewBtn = document.getElementById('interview-2');
let rejectBtn = document.getElementById('reject-2');

let interview1 = document.getElementById('interview-1');
let reject1 = document.getElementById('reject-1');

let allCard = document.getElementById('all-card');

function allCount() {
    total.innerText = allCard.children.length;
    total1.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;


}
allCount();

// toggle
function toggleStyle(id) {

    all.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    all.classList.add('bg-base-200', 'text-[#323B49]');
    interviewBtn.classList.add('bg-base-200', 'text-[#323B49]');
    rejectBtn.classList.add('bg-base-200', 'text-[#323B49]');

    let selected = document.getElementById(id);

    selected.classList.remove('bg-base-200', 'text-[#323B49]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
}