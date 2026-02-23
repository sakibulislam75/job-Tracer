let interviewList = [];
let rejectList = [];

let total = document.getElementById("total");
let total1 = document.getElementById("total1");
let interviewCount = document.getElementById("interview-1");
let rejectCount = document.getElementById("reject-1");

let all = document.getElementById("all");
let interviewBtn = document.getElementById("interview-2");
let rejectBtn = document.getElementById("reject-2");

let allCard = document.getElementById("all-card");
let mainContainer = document.querySelector("main");
let filterSection = document.getElementById("filter-section");
let currentSts = 'all';

function allCount() {
    let allTotal = allCard.children.length;

    total.innerText = allTotal;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;



}
allCount();


//toggle
function toggleStyle(id) {

    currentSts = id;
    all.classList.remove("bg-[#3B82F6]", "text-white");
    interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
    rejectBtn.classList.remove("bg-[#3B82F6]", "text-white");

    all.classList.add("bg-base-200", "text-[#323B49]");
    interviewBtn.classList.add("bg-base-200", "text-[#323B49]");
    rejectBtn.classList.add("bg-base-200", "text-[#323B49]");

    let selected = document.getElementById(id);

    selected.classList.remove("bg-base-200", "text-[#323B49]");
    selected.classList.add("bg-[#3B82F6]", "text-white");

    if (id == 'interview-2') {
        allCard.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterviewInfo();
    } else if (id == 'reject-2') {
        allCard.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejectInfo();
    } else {
        allCard.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }


}



mainContainer.addEventListener("click", function(event) {

    let btn = event.target;


    if (btn.classList.contains("btn-success")) {

        let parentNode = btn.parentNode.parentNode;

        let position = parentNode.querySelector(".position").innerText;
        let comPanyName = parentNode.querySelector(".company-name").innerText;
        let salary = parentNode.querySelector(".salary").innerText;
        let description = parentNode.querySelector(".description").innerText;

        let sts1 = parentNode.querySelector(".sts");

        sts1.innerText = "Interview";
        sts1.classList.remove("badge-gray", "badge-error");
        sts1.classList.add("badge-success");

        const cardInfo = {
            comPanyName,
            position,
            salary,
            sts: "Interview",
            description,
        };

        let nameExist = interviewList.find(
            (item) => item.comPanyName == cardInfo.comPanyName
        );

        if (!nameExist) {
            interviewList.push(cardInfo);
        }
        rejectList = rejectList.filter(
            item => item.comPanyName !== comPanyName
        );
        if (currentSts == 'reject-2') {
            renderRejectInfo();
        }
        allCount();
    } else if (btn.classList.contains("btn-error")) {

        let parentNode = event.target.parentNode.parentNode;

        let position = parentNode.querySelector(".position").innerText;
        let comPanyName = parentNode.querySelector(".company-name").innerText;
        let salary = parentNode.querySelector(".salary").innerText;
        let description = parentNode.querySelector(".description").innerText;

        let sts1 = parentNode.querySelector(".sts");

        sts1.innerText = "Reject";
        sts1.classList.remove("badge-gray", "badge-success");
        sts1.classList.add("badge-error");

        const cardInfo = {
            comPanyName,
            position,
            salary,
            sts: "Rejected",
            description,
        };

        let nameExist = rejectList.find(
            (item) => item.comPanyName == cardInfo.comPanyName
        );

        if (!nameExist) {
            rejectList.push(cardInfo);
        }
        interviewList = interviewList.filter(
            item => item.comPanyName !== comPanyName
        );

        if (currentSts == 'interview-2') {
            renderInterviewInfo();
        }
        allCount();
    } else if (btn.closest(".dlt-btn")) {

        let parentNode = btn.closest(".card");

        let comPanyName = parentNode.querySelector('.company-name').innerText;

        interviewList = interviewList.filter(item => item.comPanyName !== comPanyName);
        rejectList = rejectList.filter(item => item.comPanyName !== comPanyName);

        parentNode.remove();

        allCount();
    }

});



function renderInterviewInfo() {

    filterSection.innerHTML = "";
    if (interviewList.length === 0) {
        filterSection.innerHTML = `
            <div class="flex flex-col items-center justify-center mt-20 gap-4">
                <img src="jobs.png" alt="No Data" class="w-40 opacity-50">
                <p class="text-gray-400 text-xl font-medium">No Interview Data Found</p>
            </div>
        `;
        return;
    }
    if (interviewList.length === 0) {
        filterSection.innerHTML = `
            <div class="flex flex-col items-center justify-center mt-20 gap-4">
                <img src="no-data.png" alt="No Data" class="w-40 opacity-50">
                <p class="text-gray-400 text-xl font-medium">No Interview Data Found</p>
            </div>
        `;
        return;
    }

    for (let interview of interviewList) {

        let div = document.createElement("div");

        div.className =
            "card bg-white shadow-sm rounded-md pl-8 w-full my-5";

        div.innerHTML = `
        <div class="w-full p-5 flex justify-between items-start">

            <div class="p1 space-y-6">

                <div>
                    <h1 class="text-2xl font-medium company-name">
                        ${interview.comPanyName}
                    </h1>
                    <p class="text-gray-600 position">
                        ${interview.position}
                    </p>
                </div>

                <div class="flex gap-1">
                    <p class="text-gray-600 salary">
                        ${interview.salary}
                    </p>
                </div>

                <div class="space-y-1.5">
                    <p class="badge badge-outline badge-success px-5 py-2 sts">
                        ${interview.sts}
                    </p>
                    <p class="text-gray-600 note description">
                        ${interview.description}
                    </p>
                </div>

                <div class="space-x-2 mt-2 flex flex-col gap-2 md:flex-row">
                    <button class="btn btn-outline btn-success px-5 py-.5 font-semibold hover:text-white">
                        Interview
                    </button>
                    <button class="btn btn-outline btn-error px-5 py-.5 font-semibold hover:text-white">
                        Reject
                    </button>
                </div>

            </div>

            <div class="p2">
                <button class="bg-white rounded-full btn dlt-button">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>

        </div>
        `;

        filterSection.appendChild(div);
    }
}


// render-reject
function renderRejectInfo() {

    filterSection.innerHTML = "";
    if (rejectList.length === 0) {
        filterSection.innerHTML = `
            <div class="flex flex-col items-center justify-center mt-20 gap-4">
                <img src="jobs.png" alt="No Data" class="w-40 opacity-50">
                <p class="text-gray-400 text-xl font-medium">No Interview Data Found</p>
            </div>
        `;
        return;
    }

    for (let interview of rejectList) {

        let div = document.createElement("div");

        div.className =
            "card bg-white shadow-sm rounded-md pl-8 w-full my-5";

        div.innerHTML = `
        <div class="w-full p-5 flex justify-between items-start">

            <div class="p1 space-y-6">

                <div>
                    <h1 class="text-2xl font-medium company-name">
                        ${interview.comPanyName}
                    </h1>
                    <p class="text-gray-600 position">
                        ${interview.position}
                    </p>
                </div>

                <div class="flex gap-1">
                    <p class="text-gray-600 salary">
                        ${interview.salary}
                    </p>
                </div>

                <div class="space-y-1.5">
                    <p class="badge badge-outline badge-error px-5 py-2 sts">
                        ${interview.sts}
                    </p>
                    <p class="text-gray-600 note description">
                        ${interview.description}
                    </p>
                </div>

                <div class="space-x-2 mt-2 flex flex-col gap-2 md:flex-row">
                    <button class="btn btn-outline btn-success px-5 py-.5 font-semibold hover:text-white">
                        Interview
                    </button>
                    <button class="btn btn-outline btn-error px-5 py-.5 font-semibold hover:text-white">
                        Reject
                    </button>
                </div>

            </div>

            <div class="p2">
                <button class="bg-white rounded-full btn dlt-button">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>

        </div>
        `;

        filterSection.appendChild(div);
    }
}