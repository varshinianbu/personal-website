document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        const loading = document.getElementById("asleep");
        const main = document.getElementById("awake");

        loading.classList.add("slide-up");


        setTimeout(() => {
            main.classList.remove("hidden");
            main.classList.add("fade-in");
            loading.style.display = "none";
        }, 1000);
    }
});

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();

function gettDate() {
    const now = new Date();

    const months = ["January", "Febuary", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const suffix = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
        }
    };

    return `${month} ${day}${suffix(day)} ${year}`;
}

document.getElementById('date').textContent = gettDate();

function updateNavbarClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 

    const timeStr = `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
    document.getElementById('time').textContent = timeStr;
}

setInterval(updateNavbarClock, 60000);
updateNavbarClock();